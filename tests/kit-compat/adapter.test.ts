import BN from "bn.js";
import {
  createAssociatedTokenAccountInstruction,
  createInitializeMint2Instruction,
  createMintToInstruction,
  getAssociatedTokenAddressSync,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { fromLegacyTransactionInstruction } from "@solana/compat";
import {
  address,
  appendTransactionMessageInstructions,
  compileTransaction,
  createKeyPairSignerFromBytes,
  createSolanaRpc,
  createTransactionMessage,
  getBase64EncodedWireTransaction,
  pipe,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  signTransactionWithSigners,
  type Address,
  type TransactionSigner,
} from "@solana/kit";
import { getSetComputeUnitLimitInstruction } from "@solana-program/compute-budget";
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
  TransactionInstruction,
} from "@solana/web3.js";
import { afterAll, beforeAll, describe, expect, it } from "vitest";

import {
  ActivationType,
  BaseFeeMode,
  CollectFeeMode,
  CpAmm,
  derivePositionAddress,
  derivePositionNftAccount,
  getBaseFeeParams,
  getTokenProgram,
  type InitializeCustomizeablePoolParams,
  MAX_SQRT_PRICE,
  MIN_SQRT_PRICE,
  SwapMode,
} from "../../src";
import {
  CpAmmKitClient,
  type CreateCustomPoolParams as KitCreateCustomPoolParams,
  type KitTransactionPlan,
} from "../../src/kit";
import { DECIMALS, U64_MAX } from "../bankrun-utils/constants";
import { startLocalValidator } from "./validator";

const AIRDROP_AMOUNT = 10 * LAMPORTS_PER_SOL;
const CONFIRMATION_TIMEOUT_MS = 20_000;

type ValidatorContext = Awaited<ReturnType<typeof startLocalValidator>>;

type TestActors = {
  payer: Keypair;
  user: Keypair;
  payerSigner: TransactionSigner;
  userSigner: TransactionSigner;
};

type TokenSetup = {
  tokenAMint: PublicKey;
  tokenBMint: PublicKey;
};

type KitRpcBundle = {
  connection: Connection;
  rpc: ReturnType<typeof createSolanaRpc>;
};

async function createKitSigner(keypair: Keypair): Promise<TransactionSigner> {
  return await createKeyPairSignerFromBytes(keypair.secretKey);
}

function addressFromPublicKey(publicKey: PublicKey): Address {
  return address(publicKey.toBase58());
}

async function airdrop(connection: Connection, recipient: PublicKey) {
  const signature = await connection.requestAirdrop(recipient, AIRDROP_AMOUNT);
  await waitForSignature(connection, signature);
}

async function waitForSignature(connection: Connection, signature: string) {
  const startedAt = Date.now();

  while (Date.now() - startedAt < CONFIRMATION_TIMEOUT_MS) {
    const response = await connection.getSignatureStatus(signature);
    const status = response.value;
    if (status?.err) {
      throw new Error(`Transaction ${signature} failed: ${JSON.stringify(status.err)}`);
    }

    if (
      status?.confirmationStatus === "confirmed" ||
      status?.confirmationStatus === "finalized"
    ) {
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(`Timed out waiting for transaction ${signature} to confirm`);
}

async function sendLegacyTransaction(
  connection: Connection,
  instructions: readonly TransactionInstruction[],
  signers: readonly Keypair[],
  feePayer: Keypair,
) {
  const transaction = new Transaction();
  const { blockhash } = await connection.getLatestBlockhash("confirmed");
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = feePayer.publicKey;
  transaction.add(...instructions);
  transaction.sign(...signers);

  const signature = await connection.sendRawTransaction(transaction.serialize());
  await waitForSignature(connection, signature);
}

async function createActors(connection: Connection): Promise<TestActors> {
  const payer = Keypair.generate();
  const user = Keypair.generate();

  await airdrop(connection, payer.publicKey);
  await airdrop(connection, user.publicKey);

  return {
    payer,
    user,
    payerSigner: await createKitSigner(payer),
    userSigner: await createKitSigner(user),
  };
}

async function createTokens(
  connection: Connection,
  payer: Keypair,
  holders: readonly PublicKey[],
): Promise<TokenSetup> {
  const tokenAMintKeypair = Keypair.generate();
  const tokenBMintKeypair = Keypair.generate();
  const rent = await connection.getMinimumBalanceForRentExemption(MINT_SIZE);
  const tokenAMint = tokenAMintKeypair.publicKey;
  const tokenBMint = tokenBMintKeypair.publicKey;

  await sendLegacyTransaction(
    connection,
    [
      SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: tokenAMint,
        lamports: rent,
        space: MINT_SIZE,
        programId: TOKEN_PROGRAM_ID,
      }),
      createInitializeMint2Instruction(tokenAMint, DECIMALS, payer.publicKey, null),
    ],
    [payer, tokenAMintKeypair],
    payer,
  );
  await sendLegacyTransaction(
    connection,
    [
      SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: tokenBMint,
        lamports: rent,
        space: MINT_SIZE,
        programId: TOKEN_PROGRAM_ID,
      }),
      createInitializeMint2Instruction(tokenBMint, DECIMALS, payer.publicKey, null),
    ],
    [payer, tokenBMintKeypair],
    payer,
  );

  const mintAmount = BigInt(1_000_000 * 10 ** DECIMALS);

  for (const holder of holders) {
    const tokenAAccount = getAssociatedTokenAddressSync(tokenAMint, holder);
    const tokenBAccount = getAssociatedTokenAddressSync(tokenBMint, holder);

    await sendLegacyTransaction(
      connection,
      [
        createAssociatedTokenAccountInstruction(
          payer.publicKey,
          tokenAAccount,
          holder,
          tokenAMint,
        ),
      ],
      [payer],
      payer,
    );
    await sendLegacyTransaction(
      connection,
      [
        createAssociatedTokenAccountInstruction(
          payer.publicKey,
          tokenBAccount,
          holder,
          tokenBMint,
        ),
      ],
      [payer],
      payer,
    );
    await sendLegacyTransaction(
      connection,
      [
        createMintToInstruction(
          tokenAMint,
          tokenAAccount,
          payer.publicKey,
          mintAmount,
        ),
      ],
      [payer],
      payer,
    );
    await sendLegacyTransaction(
      connection,
      [
        createMintToInstruction(
          tokenBMint,
          tokenBAccount,
          payer.publicKey,
          mintAmount,
        ),
      ],
      [payer],
      payer,
    );
  }

  return { tokenAMint, tokenBMint };
}

async function executeKitPlan(
  plan: KitTransactionPlan,
  feePayer: TransactionSigner,
  rpcBundle: KitRpcBundle,
) {
  const { value: latestBlockhash } = await rpcBundle.rpc
    .getLatestBlockhash()
    .send();

  const message = pipe(
    createTransactionMessage({ version: 0 }),
    (transaction) => setTransactionMessageFeePayerSigner(feePayer, transaction),
    (transaction) =>
      setTransactionMessageLifetimeUsingBlockhash(
        latestBlockhash,
        transaction,
      ),
    (transaction) =>
      appendTransactionMessageInstructions(
        [
          getSetComputeUnitLimitInstruction({
            units: 400_000,
          }),
          ...plan.instructions,
        ],
        transaction,
      ),
  );

  const signedTransaction = await signTransactionWithSigners(
    plan.signers as Parameters<typeof signTransactionWithSigners>[0],
    compileTransaction(message),
  );

  const signature = await rpcBundle.rpc
    .sendTransaction(getBase64EncodedWireTransaction(signedTransaction), {
      encoding: "base64",
      preflightCommitment: "confirmed",
    })
    .send();

  await waitForSignature(rpcBundle.connection, signature);
}

function expectPlanParity(
  legacyTransaction: Transaction,
  plan: KitTransactionPlan,
  expectedSignerAddresses: readonly string[],
) {
  expect(plan.instructions).toEqual(
    legacyTransaction.instructions.map(fromLegacyTransactionInstruction),
  );
  expect(plan.signers.map((signer) => signer.address)).toEqual(
    expectedSignerAddresses,
  );
}

describe("CpAmmKitClient legacy adapter compatibility", () => {
  let validator: ValidatorContext;
  let rpcBundle: KitRpcBundle;

  beforeAll(async () => {
    validator = await startLocalValidator();
    rpcBundle = {
      connection: validator.connection,
      rpc: createSolanaRpc(validator.rpcUrl),
    };
  });

  afterAll(async () => {
    await validator.stop();
  });

  it("builds parity plans and executes the pilot methods on a local validator", async () => {
    const actors = await createActors(validator.connection);
    const { tokenAMint, tokenBMint } = await createTokens(
      validator.connection,
      actors.payer,
      [actors.payer.publicKey, actors.user.publicKey],
    );
    const legacyClient = new CpAmm(validator.connection);
    const kitClient = CpAmmKitClient.fromRpc(rpcBundle.rpc, {
      legacyRpcUrl: validator.rpcUrl,
    });
    const initialPositionNft = Keypair.generate();
    const initialPositionNftSigner = await createKitSigner(initialPositionNft);

    const baseFee = getBaseFeeParams(
      {
        baseFeeMode: BaseFeeMode.FeeTimeSchedulerExponential,
        feeTimeSchedulerParam: {
          startingFeeBps: 5_000,
          endingFeeBps: 100,
          numberOfPeriod: 180,
          totalDuration: 180,
        },
      },
      DECIMALS,
      ActivationType.Timestamp,
    );

    const tokenAAmount = new BN(1_000 * 10 ** DECIMALS);
    const tokenBAmount = new BN(1_000 * 10 ** DECIMALS);
    const { liquidityDelta, initSqrtPrice } =
      legacyClient.preparePoolCreationParams({
        tokenAAmount,
        tokenBAmount,
        minSqrtPrice: MIN_SQRT_PRICE,
        maxSqrtPrice: MAX_SQRT_PRICE,
        collectFeeMode: CollectFeeMode.BothToken,
      });

    const createCustomPoolParams: InitializeCustomizeablePoolParams = {
      payer: actors.payer.publicKey,
      creator: actors.payer.publicKey,
      positionNft: initialPositionNft.publicKey,
      tokenAMint,
      tokenBMint,
      tokenAAmount,
      tokenBAmount,
      sqrtMinPrice: MIN_SQRT_PRICE,
      sqrtMaxPrice: MAX_SQRT_PRICE,
      liquidityDelta,
      initSqrtPrice,
      poolFees: {
        baseFee,
        compoundingFeeBps: 0,
        padding: 0,
        dynamicFee: null,
      },
      hasAlphaVault: false,
      activationType: ActivationType.Timestamp,
      collectFeeMode: CollectFeeMode.BothToken,
      activationPoint: null,
      tokenAProgram: TOKEN_PROGRAM_ID,
      tokenBProgram: TOKEN_PROGRAM_ID,
    };

    const legacyCustomPoolResult =
      await legacyClient.createCustomPool(createCustomPoolParams);
    const kitCreateCustomPoolParams: KitCreateCustomPoolParams = {
      payer: actors.payerSigner,
      creator: actors.payerSigner.address,
      positionNft: initialPositionNftSigner,
      tokenAMint: addressFromPublicKey(tokenAMint),
      tokenBMint: addressFromPublicKey(tokenBMint),
      tokenAAmount,
      tokenBAmount,
      sqrtMinPrice: MIN_SQRT_PRICE,
      sqrtMaxPrice: MAX_SQRT_PRICE,
      liquidityDelta,
      initSqrtPrice,
      poolFees: {
        baseFee: {
          data: Array.from(baseFee.data),
        },
        compoundingFeeBps: 0,
        padding: 0,
        dynamicFee: null,
      },
      hasAlphaVault: false,
      activationType: ActivationType.Timestamp,
      collectFeeMode: CollectFeeMode.BothToken,
      activationPoint: null,
      tokenAProgram: addressFromPublicKey(TOKEN_PROGRAM_ID),
      tokenBProgram: addressFromPublicKey(TOKEN_PROGRAM_ID),
    };
    const kitCustomPoolResult = await kitClient.createCustomPool(
      kitCreateCustomPoolParams,
    );

    expectPlanParity(legacyCustomPoolResult.tx, kitCustomPoolResult.plan, [
      actors.payerSigner.address,
      initialPositionNftSigner.address,
    ]);

    await executeKitPlan(kitCustomPoolResult.plan, actors.payerSigner, rpcBundle);

    const poolAddress = new PublicKey(kitCustomPoolResult.pool);
    const initialPositionAddress = new PublicKey(kitCustomPoolResult.position);
    expect(await validator.connection.getAccountInfo(poolAddress)).not.toBeNull();
    expect(
      await validator.connection.getAccountInfo(initialPositionAddress),
    ).not.toBeNull();

    const userPositionNft = Keypair.generate();
    const userPositionNftSigner = await createKitSigner(userPositionNft);
    const legacyCreatePositionTx = await legacyClient.createPosition({
      owner: actors.user.publicKey,
      payer: actors.user.publicKey,
      pool: poolAddress,
      positionNft: userPositionNft.publicKey,
    });
    const kitCreatePositionPlan = await kitClient.createPosition({
      owner: actors.userSigner.address,
      payer: actors.userSigner,
      pool: address(poolAddress.toBase58()),
      positionNft: userPositionNftSigner,
    });

    expectPlanParity(legacyCreatePositionTx, kitCreatePositionPlan, [
      actors.userSigner.address,
      userPositionNftSigner.address,
    ]);

    await executeKitPlan(kitCreatePositionPlan, actors.userSigner, rpcBundle);

    const userPositionAddress = derivePositionAddress(userPositionNft.publicKey);
    expect(
      await validator.connection.getAccountInfo(userPositionAddress),
    ).not.toBeNull();

    const poolState = await legacyClient.fetchPoolState(poolAddress);
    const depositQuote = legacyClient.getDepositQuote({
      inAmount: new BN(500 * 10 ** DECIMALS),
      isTokenA: true,
      sqrtPrice: poolState.sqrtPrice,
      minSqrtPrice: poolState.sqrtMinPrice,
      maxSqrtPrice: poolState.sqrtMaxPrice,
      collectFeeMode: poolState.collectFeeMode,
      tokenAAmount: poolState.tokenAAmount,
      tokenBAmount: poolState.tokenBAmount,
      liquidity: poolState.liquidity,
    });

    const initialPositionNftAccount = derivePositionNftAccount(
      initialPositionNft.publicKey,
    );
    const legacyAddLiquidityTx = await legacyClient.addLiquidity({
      owner: actors.payer.publicKey,
      position: initialPositionAddress,
      pool: poolAddress,
      positionNftAccount: initialPositionNftAccount,
      liquidityDelta: depositQuote.liquidityDelta,
      maxAmountTokenA: new BN(500 * 10 ** DECIMALS),
      maxAmountTokenB: new BN(500 * 10 ** DECIMALS),
      tokenAAmountThreshold: new BN(U64_MAX.toString()),
      tokenBAmountThreshold: new BN(U64_MAX.toString()),
      tokenAMint: poolState.tokenAMint,
      tokenBMint: poolState.tokenBMint,
      tokenAVault: poolState.tokenAVault,
      tokenBVault: poolState.tokenBVault,
      tokenAProgram: getTokenProgram(poolState.tokenAFlag),
      tokenBProgram: getTokenProgram(poolState.tokenBFlag),
    });
    const kitAddLiquidityPlan = await kitClient.addLiquidity({
      owner: actors.payerSigner,
      position: address(initialPositionAddress.toBase58()),
      pool: address(poolAddress.toBase58()),
      positionNftAccount: address(initialPositionNftAccount.toBase58()),
      liquidityDelta: depositQuote.liquidityDelta,
      maxAmountTokenA: new BN(500 * 10 ** DECIMALS),
      maxAmountTokenB: new BN(500 * 10 ** DECIMALS),
      tokenAAmountThreshold: new BN(U64_MAX.toString()),
      tokenBAmountThreshold: new BN(U64_MAX.toString()),
      tokenAMint: addressFromPublicKey(poolState.tokenAMint),
      tokenBMint: addressFromPublicKey(poolState.tokenBMint),
      tokenAVault: addressFromPublicKey(poolState.tokenAVault),
      tokenBVault: addressFromPublicKey(poolState.tokenBVault),
      tokenAProgram: addressFromPublicKey(getTokenProgram(poolState.tokenAFlag)),
      tokenBProgram: addressFromPublicKey(getTokenProgram(poolState.tokenBFlag)),
    });

    expectPlanParity(legacyAddLiquidityTx, kitAddLiquidityPlan, [
      actors.payerSigner.address,
    ]);

    await executeKitPlan(kitAddLiquidityPlan, actors.payerSigner, rpcBundle);

    const refreshedPoolState = await legacyClient.fetchPoolState(poolAddress);
    const legacySwap2Tx = await legacyClient.swap2({
      payer: actors.user.publicKey,
      pool: poolAddress,
      inputTokenMint: refreshedPoolState.tokenAMint,
      outputTokenMint: refreshedPoolState.tokenBMint,
      tokenAMint: refreshedPoolState.tokenAMint,
      tokenBMint: refreshedPoolState.tokenBMint,
      tokenAVault: refreshedPoolState.tokenAVault,
      tokenBVault: refreshedPoolState.tokenBVault,
      tokenAProgram: getTokenProgram(refreshedPoolState.tokenAFlag),
      tokenBProgram: getTokenProgram(refreshedPoolState.tokenBFlag),
      referralTokenAccount: null,
      poolState: refreshedPoolState,
      swapMode: SwapMode.ExactIn,
      amountIn: new BN(100 * 10 ** DECIMALS),
      minimumAmountOut: new BN(0),
    });
    const kitSwap2Plan = await kitClient.swap2({
      payer: actors.userSigner,
      pool: address(poolAddress.toBase58()),
      inputTokenMint: addressFromPublicKey(refreshedPoolState.tokenAMint),
      outputTokenMint: addressFromPublicKey(refreshedPoolState.tokenBMint),
      tokenAMint: addressFromPublicKey(refreshedPoolState.tokenAMint),
      tokenBMint: addressFromPublicKey(refreshedPoolState.tokenBMint),
      tokenAVault: addressFromPublicKey(refreshedPoolState.tokenAVault),
      tokenBVault: addressFromPublicKey(refreshedPoolState.tokenBVault),
      tokenAProgram: addressFromPublicKey(
        getTokenProgram(refreshedPoolState.tokenAFlag),
      ),
      tokenBProgram: addressFromPublicKey(
        getTokenProgram(refreshedPoolState.tokenBFlag),
      ),
      referralTokenAccount: null,
      poolState: refreshedPoolState,
      swapMode: SwapMode.ExactIn,
      amountIn: new BN(100 * 10 ** DECIMALS),
      minimumAmountOut: new BN(0),
    });

    expectPlanParity(legacySwap2Tx, kitSwap2Plan, [actors.userSigner.address]);

    await executeKitPlan(kitSwap2Plan, actors.userSigner, rpcBundle);

    const userTokenBAccount = getAssociatedTokenAddressSync(
      tokenBMint,
      actors.user.publicKey,
    );
    expect(await validator.connection.getAccountInfo(userTokenBAccount)).not.toBeNull();
  });

  it("requires an explicit legacy RPC URL when reusing an existing Kit RPC client", async () => {
    const rpc = createSolanaRpc("http://127.0.0.1:1");
    const client = CpAmmKitClient.fromRpc(rpc);
    const payer = await createKitSigner(Keypair.generate());
    const positionNft = await createKitSigner(Keypair.generate());

    await expect(
      client.createPosition({
        owner: payer.address,
        payer,
        pool: address("11111111111111111111111111111111"),
        positionNft,
      }),
    ).rejects.toThrow("createPosition requires a legacy bridge");
  });
});
