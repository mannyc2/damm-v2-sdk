import { existsSync, readFileSync } from "node:fs";

import BN from "bn.js";
import {
  createAssociatedTokenAccountInstruction,
  createInitializeMint2Instruction,
  createMintToInstruction,
  getAssociatedTokenAddressSync,
  MINT_SIZE,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { fromLegacyTransactionInstruction } from "@solana/compat";
import {
  address,
  appendTransactionMessageInstructions,
  compileTransaction,
  createKeyPairSignerFromBytes,
  createSolanaRpc,
  createSolanaRpcSubscriptions,
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
  deriveConfigAddress,
  deriveOperatorAddress,
  derivePositionAddress,
  derivePositionNftAccount,
  getBaseFeeParams,
  getTokenProgram,
  type InitializeCustomizeablePoolParams,
  MAX_SQRT_PRICE,
  MIN_SQRT_PRICE,
  SPLIT_POSITION_DENOMINATOR,
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

type PoolFixture = {
  actors: TestActors;
  legacyClient: CpAmm;
  kitClient: CpAmmKitClient;
  tokenAMint: PublicKey;
  tokenBMint: PublicKey;
  poolAddress: PublicKey;
  initialPositionAddress: PublicKey;
  initialPositionNft: Keypair;
};

async function createKitSigner(keypair: Keypair): Promise<TransactionSigner> {
  return await createKeyPairSignerFromBytes(keypair.secretKey);
}

function addressFromPublicKey(publicKey: PublicKey): Address {
  return address(publicKey.toBase58());
}

function rpcSubscriptionsUrl(rpcUrl: string) {
  const parsedUrl = new URL(rpcUrl);
  parsedUrl.protocol = parsedUrl.protocol === "https:" ? "wss:" : "ws:";
  return parsedUrl.toString();
}

async function fetchKitPoolState(
  client: CpAmmKitClient,
  pool: PublicKey,
) {
  return await client.fetchPoolState(addressFromPublicKey(pool));
}

async function fetchKitPositionState(
  client: CpAmmKitClient,
  position: PublicKey,
) {
  return await client.fetchPositionState(addressFromPublicKey(position));
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

  const executionSigners = new Map<string, TransactionSigner>();
  executionSigners.set(feePayer.address, feePayer);
  for (const signer of plan.signers) {
    if (!executionSigners.has(signer.address)) {
      executionSigners.set(signer.address, signer);
    }
  }

  const signedTransaction = await signTransactionWithSigners(
    Array.from(
      executionSigners.values(),
    ) as Parameters<typeof signTransactionWithSigners>[0],
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

function normalizeComparable(value: unknown): unknown {
  if (BN.isBN(value)) {
    return value.toString();
  }

  if (value instanceof PublicKey) {
    return value.toBase58();
  }

  if (value instanceof Uint8Array) {
    return Array.from(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => normalizeComparable(item));
  }

  if (
    typeof value === "object" &&
    value !== null &&
    value.constructor?.name === "Decimal"
  ) {
    return value.toString();
  }

  if (typeof value === "object" && value !== null) {
    return Object.fromEntries(
      Object.entries(value).map(([key, entryValue]) => [
        key,
        normalizeComparable(entryValue),
      ]),
    );
  }

  return value;
}

function createBaseFee() {
  return getBaseFeeParams(
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
}

async function createStaticConfig(
  connection: Connection,
  legacyClient: CpAmm,
  admin: Keypair,
) {
  const program = (legacyClient as any)._program;
  const operator = deriveOperatorAddress(admin.publicKey);
  const permission = new BN(1);
  const createOperatorTx = await program.methods
    .createOperatorAccount(permission)
    .accountsPartial({
      operator,
      whitelistedAddress: admin.publicKey,
      signer: admin.publicKey,
      payer: admin.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .transaction();

  await sendLegacyTransaction(
    connection,
    createOperatorTx.instructions,
    [admin],
    admin,
  );

  const configIndex = new BN(Date.now());
  const config = deriveConfigAddress(configIndex);
  const createConfigTx = await program.methods
    .createConfig(configIndex, {
      poolFees: {
        baseFee: createBaseFee(),
        compoundingFeeBps: 0,
        padding: 0,
        dynamicFee: null,
      },
      sqrtMinPrice: MIN_SQRT_PRICE,
      sqrtMaxPrice: MAX_SQRT_PRICE,
      vaultConfigKey: PublicKey.default,
      poolCreatorAuthority: PublicKey.default,
      activationType: ActivationType.Timestamp,
      collectFeeMode: CollectFeeMode.BothToken,
    })
    .accountsPartial({
      config,
      operator,
      signer: admin.publicKey,
      payer: admin.publicKey,
      systemProgram: SystemProgram.programId,
    })
    .transaction();

  await sendLegacyTransaction(
    connection,
    createConfigTx.instructions,
    [admin],
    admin,
  );

  return config;
}

async function createCustomPoolFixture(
  validator: ValidatorContext,
  rpcBundle: KitRpcBundle,
  options: {
    useNativeTokenA?: boolean;
  } = {},
): Promise<PoolFixture> {
  const actors = await createActors(validator.connection);
  const createdTokens = await createTokens(
    validator.connection,
    actors.payer,
    [actors.payer.publicKey, actors.user.publicKey],
  );
  const legacyClient = new CpAmm(validator.connection);
  const kitClient = CpAmmKitClient.fromRpc(rpcBundle.rpc, {
    legacyRpcUrl: validator.rpcUrl,
  });
  const initialPositionNft = Keypair.generate();
  const tokenAMint = options.useNativeTokenA
    ? NATIVE_MINT
    : createdTokens.tokenAMint;
  const tokenBMint = options.useNativeTokenA
    ? createdTokens.tokenAMint
    : createdTokens.tokenBMint;
  const tokenAAmount = options.useNativeTokenA
    ? new BN(LAMPORTS_PER_SOL)
    : new BN(1_000 * 10 ** DECIMALS);
  const tokenBAmount = new BN(1_000 * 10 ** DECIMALS);
  const { liquidityDelta, initSqrtPrice } =
    legacyClient.preparePoolCreationParams({
      tokenAAmount,
      tokenBAmount,
      minSqrtPrice: MIN_SQRT_PRICE,
      maxSqrtPrice: MAX_SQRT_PRICE,
      collectFeeMode: CollectFeeMode.BothToken,
    });

  const legacyCustomPoolResult = await legacyClient.createCustomPool({
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
      baseFee: createBaseFee(),
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
  });

  await sendLegacyTransaction(
    validator.connection,
    legacyCustomPoolResult.tx.instructions,
    [actors.payer, initialPositionNft],
    actors.payer,
  );

  return {
    actors,
    legacyClient,
    kitClient,
    tokenAMint,
    tokenBMint,
    poolAddress: legacyCustomPoolResult.pool,
    initialPositionAddress: legacyCustomPoolResult.position,
    initialPositionNft,
  };
}

async function executeLegacyBuilder(
  connection: Connection,
  transaction: Transaction,
  signers: readonly Keypair[],
  feePayer: Keypair,
) {
  await sendLegacyTransaction(connection, transaction.instructions, signers, feePayer);
}

async function createPositionWithLiquidity(
  validator: ValidatorContext,
  fixture: PoolFixture,
  owner: TestActors["user"] | TestActors["payer"],
  ownerSigner: TransactionSigner,
  amount: BN = new BN(250 * 10 ** DECIMALS),
) {
  const positionNft = Keypair.generate();
  const positionNftSigner = await createKitSigner(positionNft);
  const poolState = await fixture.legacyClient.fetchPoolState(fixture.poolAddress);
  const depositQuote = fixture.legacyClient.getDepositQuote({
    inAmount: amount,
    isTokenA: true,
    sqrtPrice: poolState.sqrtPrice,
    minSqrtPrice: poolState.sqrtMinPrice,
    maxSqrtPrice: poolState.sqrtMaxPrice,
    collectFeeMode: poolState.collectFeeMode,
    tokenAAmount: poolState.tokenAAmount,
    tokenBAmount: poolState.tokenBAmount,
    liquidity: poolState.liquidity,
  });

  const legacyTransaction =
    await fixture.legacyClient.createPositionAndAddLiquidity({
      owner: owner.publicKey,
      pool: fixture.poolAddress,
      positionNft: positionNft.publicKey,
      liquidityDelta: depositQuote.liquidityDelta,
      maxAmountTokenA: amount,
      maxAmountTokenB: amount,
      tokenAAmountThreshold: new BN(U64_MAX.toString()),
      tokenBAmountThreshold: new BN(U64_MAX.toString()),
      tokenAMint: poolState.tokenAMint,
      tokenBMint: poolState.tokenBMint,
      tokenAProgram: getTokenProgram(poolState.tokenAFlag),
      tokenBProgram: getTokenProgram(poolState.tokenBFlag),
    });

  await executeLegacyBuilder(
    validator.connection,
    legacyTransaction,
    [owner, positionNft],
    owner,
  );

  const position = derivePositionAddress(positionNft.publicKey);
  const positionNftAccount = derivePositionNftAccount(positionNft.publicKey);

  return {
    poolState,
    depositQuote,
    position,
    positionNft,
    positionNftSigner,
    positionNftAccount,
    ownerSigner,
  };
}

async function performSwap(
  connection: Connection,
  fixture: PoolFixture,
  payer: Keypair,
  params?: {
    inputTokenMint?: PublicKey;
    outputTokenMint?: PublicKey;
    amountIn?: BN;
  },
) {
  const poolState = await fixture.legacyClient.fetchPoolState(fixture.poolAddress);
  const legacySwap2Tx = await fixture.legacyClient.swap2({
    payer: payer.publicKey,
    pool: fixture.poolAddress,
    inputTokenMint: params?.inputTokenMint ?? poolState.tokenAMint,
    outputTokenMint: params?.outputTokenMint ?? poolState.tokenBMint,
    tokenAMint: poolState.tokenAMint,
    tokenBMint: poolState.tokenBMint,
    tokenAVault: poolState.tokenAVault,
    tokenBVault: poolState.tokenBVault,
    tokenAProgram: getTokenProgram(poolState.tokenAFlag),
    tokenBProgram: getTokenProgram(poolState.tokenBFlag),
    referralTokenAccount: null,
    poolState,
    swapMode: SwapMode.ExactIn,
    amountIn: params?.amountIn ?? new BN(100 * 10 ** DECIMALS),
    minimumAmountOut: new BN(0),
  });

  await executeLegacyBuilder(
    connection,
    legacySwap2Tx,
    [payer],
    payer,
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
    const refreshedKitPoolState = await fetchKitPoolState(kitClient, poolAddress);
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
      poolState: refreshedKitPoolState,
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

  it("builds parity plans and executes createPool with a static config", async () => {
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
    const config = await createStaticConfig(
      validator.connection,
      legacyClient,
      actors.payer,
    );
    const positionNft = Keypair.generate();
    const positionNftSigner = await createKitSigner(positionNft);
    const tokenAAmount = new BN(500 * 10 ** DECIMALS);
    const tokenBAmount = new BN(500 * 10 ** DECIMALS);
    const { liquidityDelta, initSqrtPrice } =
      legacyClient.preparePoolCreationParams({
        tokenAAmount,
        tokenBAmount,
        minSqrtPrice: MIN_SQRT_PRICE,
        maxSqrtPrice: MAX_SQRT_PRICE,
        collectFeeMode: CollectFeeMode.BothToken,
      });

    const legacyCreatePoolTx = await legacyClient.createPool({
      creator: actors.payer.publicKey,
      payer: actors.payer.publicKey,
      config,
      positionNft: positionNft.publicKey,
      tokenAMint,
      tokenBMint,
      initSqrtPrice,
      liquidityDelta,
      tokenAAmount,
      tokenBAmount,
      activationPoint: null,
      tokenAProgram: TOKEN_PROGRAM_ID,
      tokenBProgram: TOKEN_PROGRAM_ID,
    });
    const kitCreatePoolResult = await kitClient.createPool({
      creator: actors.payerSigner.address,
      payer: actors.payerSigner,
      config: addressFromPublicKey(config),
      positionNft: positionNftSigner,
      tokenAMint: addressFromPublicKey(tokenAMint),
      tokenBMint: addressFromPublicKey(tokenBMint),
      initSqrtPrice,
      liquidityDelta,
      tokenAAmount,
      tokenBAmount,
      activationPoint: null,
      tokenAProgram: addressFromPublicKey(TOKEN_PROGRAM_ID),
      tokenBProgram: addressFromPublicKey(TOKEN_PROGRAM_ID),
    });

    expectPlanParity(legacyCreatePoolTx, kitCreatePoolResult.plan, [
      actors.payerSigner.address,
      positionNftSigner.address,
    ]);

    await executeKitPlan(
      kitCreatePoolResult.plan,
      actors.payerSigner,
      rpcBundle,
    );

    expect(
      await validator.connection.getAccountInfo(new PublicKey(kitCreatePoolResult.pool)),
    ).not.toBeNull();
    expect(
      await validator.connection.getAccountInfo(
        new PublicKey(kitCreatePoolResult.position),
      ),
    ).not.toBeNull();
  });

  it("builds parity plans and executes the liquidity builders", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);
    const positionNft = Keypair.generate();
    const positionNftSigner = await createKitSigner(positionNft);
    const poolState = await fixture.legacyClient.fetchPoolState(fixture.poolAddress);
    const depositAmount = new BN(250 * 10 ** DECIMALS);
    const depositQuote = fixture.legacyClient.getDepositQuote({
      inAmount: depositAmount,
      isTokenA: true,
      sqrtPrice: poolState.sqrtPrice,
      minSqrtPrice: poolState.sqrtMinPrice,
      maxSqrtPrice: poolState.sqrtMaxPrice,
      collectFeeMode: poolState.collectFeeMode,
      tokenAAmount: poolState.tokenAAmount,
      tokenBAmount: poolState.tokenBAmount,
      liquidity: poolState.liquidity,
    });

    const legacyCreatePositionAndAddLiquidityTx =
      await fixture.legacyClient.createPositionAndAddLiquidity({
        owner: fixture.actors.user.publicKey,
        pool: fixture.poolAddress,
        positionNft: positionNft.publicKey,
        liquidityDelta: depositQuote.liquidityDelta,
        maxAmountTokenA: depositAmount,
        maxAmountTokenB: depositAmount,
        tokenAAmountThreshold: new BN(U64_MAX.toString()),
        tokenBAmountThreshold: new BN(U64_MAX.toString()),
        tokenAMint: poolState.tokenAMint,
        tokenBMint: poolState.tokenBMint,
        tokenAProgram: getTokenProgram(poolState.tokenAFlag),
        tokenBProgram: getTokenProgram(poolState.tokenBFlag),
      });
    const kitCreatePositionAndAddLiquidityPlan =
      await fixture.kitClient.createPositionAndAddLiquidity({
        owner: fixture.actors.userSigner,
        pool: addressFromPublicKey(fixture.poolAddress),
        positionNft: positionNftSigner,
        liquidityDelta: depositQuote.liquidityDelta,
        maxAmountTokenA: depositAmount,
        maxAmountTokenB: depositAmount,
        tokenAAmountThreshold: new BN(U64_MAX.toString()),
        tokenBAmountThreshold: new BN(U64_MAX.toString()),
        tokenAMint: addressFromPublicKey(poolState.tokenAMint),
        tokenBMint: addressFromPublicKey(poolState.tokenBMint),
        tokenAProgram: addressFromPublicKey(getTokenProgram(poolState.tokenAFlag)),
        tokenBProgram: addressFromPublicKey(getTokenProgram(poolState.tokenBFlag)),
      });

    expectPlanParity(
      legacyCreatePositionAndAddLiquidityTx,
      kitCreatePositionAndAddLiquidityPlan,
      [fixture.actors.userSigner.address, positionNftSigner.address],
    );

    await executeKitPlan(
      kitCreatePositionAndAddLiquidityPlan,
      fixture.actors.userSigner,
      rpcBundle,
    );

    const position = derivePositionAddress(positionNft.publicKey);
    const positionNftAccount = derivePositionNftAccount(positionNft.publicKey);
    const positionState = await fixture.legacyClient.fetchPositionState(position);
    const removeLiquidityDelta = positionState.unlockedLiquidity.div(new BN(2));

    const legacyRemoveLiquidityTx = await fixture.legacyClient.removeLiquidity({
      owner: fixture.actors.user.publicKey,
      position,
      pool: fixture.poolAddress,
      positionNftAccount,
      liquidityDelta: removeLiquidityDelta,
      tokenAAmountThreshold: new BN(0),
      tokenBAmountThreshold: new BN(0),
      tokenAMint: poolState.tokenAMint,
      tokenBMint: poolState.tokenBMint,
      tokenAVault: poolState.tokenAVault,
      tokenBVault: poolState.tokenBVault,
      tokenAProgram: getTokenProgram(poolState.tokenAFlag),
      tokenBProgram: getTokenProgram(poolState.tokenBFlag),
      vestings: [],
      currentPoint: new BN(Math.floor(Date.now() / 1000)),
    });
    const kitRemoveLiquidityPlan = await fixture.kitClient.removeLiquidity({
      owner: fixture.actors.userSigner,
      position: addressFromPublicKey(position),
      pool: addressFromPublicKey(fixture.poolAddress),
      positionNftAccount: addressFromPublicKey(positionNftAccount),
      liquidityDelta: removeLiquidityDelta,
      tokenAAmountThreshold: new BN(0),
      tokenBAmountThreshold: new BN(0),
      tokenAMint: addressFromPublicKey(poolState.tokenAMint),
      tokenBMint: addressFromPublicKey(poolState.tokenBMint),
      tokenAVault: addressFromPublicKey(poolState.tokenAVault),
      tokenBVault: addressFromPublicKey(poolState.tokenBVault),
      tokenAProgram: addressFromPublicKey(getTokenProgram(poolState.tokenAFlag)),
      tokenBProgram: addressFromPublicKey(getTokenProgram(poolState.tokenBFlag)),
      vestings: [],
      currentPoint: new BN(Math.floor(Date.now() / 1000)),
    });

    expectPlanParity(legacyRemoveLiquidityTx, kitRemoveLiquidityPlan, [
      fixture.actors.userSigner.address,
    ]);

    await executeKitPlan(kitRemoveLiquidityPlan, fixture.actors.userSigner, rpcBundle);

    const legacyRemoveAllLiquidityTx =
      await fixture.legacyClient.removeAllLiquidity({
        owner: fixture.actors.user.publicKey,
        position,
        pool: fixture.poolAddress,
        positionNftAccount,
        tokenAAmountThreshold: new BN(0),
        tokenBAmountThreshold: new BN(0),
        tokenAMint: poolState.tokenAMint,
        tokenBMint: poolState.tokenBMint,
        tokenAVault: poolState.tokenAVault,
        tokenBVault: poolState.tokenBVault,
        tokenAProgram: getTokenProgram(poolState.tokenAFlag),
        tokenBProgram: getTokenProgram(poolState.tokenBFlag),
        vestings: [],
        currentPoint: new BN(Math.floor(Date.now() / 1000)),
      });
    const kitRemoveAllLiquidityPlan = await fixture.kitClient.removeAllLiquidity({
      owner: fixture.actors.userSigner,
      position: addressFromPublicKey(position),
      pool: addressFromPublicKey(fixture.poolAddress),
      positionNftAccount: addressFromPublicKey(positionNftAccount),
      tokenAAmountThreshold: new BN(0),
      tokenBAmountThreshold: new BN(0),
      tokenAMint: addressFromPublicKey(poolState.tokenAMint),
      tokenBMint: addressFromPublicKey(poolState.tokenBMint),
      tokenAVault: addressFromPublicKey(poolState.tokenAVault),
      tokenBVault: addressFromPublicKey(poolState.tokenBVault),
      tokenAProgram: addressFromPublicKey(getTokenProgram(poolState.tokenAFlag)),
      tokenBProgram: addressFromPublicKey(getTokenProgram(poolState.tokenBFlag)),
      vestings: [],
      currentPoint: new BN(Math.floor(Date.now() / 1000)),
    });

    expectPlanParity(legacyRemoveAllLiquidityTx, kitRemoveAllLiquidityPlan, [
      fixture.actors.userSigner.address,
    ]);

    await executeKitPlan(
      kitRemoveAllLiquidityPlan,
      fixture.actors.userSigner,
      rpcBundle,
    );
  });

  it("builds parity plans and executes lock, refresh, and close position builders", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);
    const userPosition = await createPositionWithLiquidity(
      validator,
      fixture,
      fixture.actors.user,
      fixture.actors.userSigner,
    );
    const positionState = await fixture.legacyClient.fetchPositionState(
      userPosition.position,
    );
    const vestingAccount = Keypair.generate();
    const vestingSigner = await createKitSigner(vestingAccount);
    const cliffPoint = new BN(Math.floor(Date.now() / 1000) + 5);

    const legacyOuterLockTx = await fixture.legacyClient.lockPosition({
      owner: fixture.actors.user.publicKey,
      payer: fixture.actors.user.publicKey,
      position: userPosition.position,
      positionNftAccount: userPosition.positionNftAccount,
      pool: fixture.poolAddress,
      cliffPoint,
      periodFrequency: new BN(1),
      cliffUnlockLiquidity: new BN(0),
      liquidityPerPeriod: positionState.unlockedLiquidity,
      numberOfPeriod: 1,
      vestingAccount: vestingAccount.publicKey,
    });
    const kitOuterLockPlan = await fixture.kitClient.lockPosition({
      owner: fixture.actors.userSigner,
      payer: fixture.actors.userSigner,
      position: addressFromPublicKey(userPosition.position),
      positionNftAccount: addressFromPublicKey(userPosition.positionNftAccount),
      pool: addressFromPublicKey(fixture.poolAddress),
      cliffPoint,
      periodFrequency: new BN(1),
      cliffUnlockLiquidity: new BN(0),
      liquidityPerPeriod: positionState.unlockedLiquidity,
      numberOfPeriod: 1,
      vestingAccount: vestingSigner,
    });

    expectPlanParity(legacyOuterLockTx, kitOuterLockPlan, [
      fixture.actors.userSigner.address,
      vestingSigner.address,
    ]);

    await executeKitPlan(kitOuterLockPlan, fixture.actors.userSigner, rpcBundle);

    const legacyRefreshVestingTx = await fixture.legacyClient.refreshVesting({
      owner: fixture.actors.user.publicKey,
      position: userPosition.position,
      positionNftAccount: userPosition.positionNftAccount,
      pool: fixture.poolAddress,
      vestingAccounts: [vestingAccount.publicKey],
    });
    const kitRefreshVestingPlan = await fixture.kitClient.refreshVesting({
      owner: fixture.actors.userSigner.address,
      position: addressFromPublicKey(userPosition.position),
      positionNftAccount: addressFromPublicKey(userPosition.positionNftAccount),
      pool: addressFromPublicKey(fixture.poolAddress),
      vestingAccounts: [addressFromPublicKey(vestingAccount.publicKey)],
    });

    expectPlanParity(legacyRefreshVestingTx, kitRefreshVestingPlan, []);

    await executeKitPlan(
      kitRefreshVestingPlan,
      fixture.actors.userSigner,
      rpcBundle,
    );

    const emptyPositionNft = Keypair.generate();
    const emptyPositionTx = await fixture.legacyClient.createPosition({
      owner: fixture.actors.user.publicKey,
      payer: fixture.actors.user.publicKey,
      pool: fixture.poolAddress,
      positionNft: emptyPositionNft.publicKey,
    });
    await executeLegacyBuilder(
      validator.connection,
      emptyPositionTx,
      [fixture.actors.user, emptyPositionNft],
      fixture.actors.user,
    );
    const emptyPosition = derivePositionAddress(emptyPositionNft.publicKey);
    const emptyPositionNftAccount = derivePositionNftAccount(emptyPositionNft.publicKey);

    const legacyClosePositionTx = await fixture.legacyClient.closePosition({
      owner: fixture.actors.user.publicKey,
      pool: fixture.poolAddress,
      position: emptyPosition,
      positionNftMint: emptyPositionNft.publicKey,
      positionNftAccount: emptyPositionNftAccount,
    });
    const kitClosePositionPlan = await fixture.kitClient.closePosition({
      owner: fixture.actors.userSigner,
      pool: addressFromPublicKey(fixture.poolAddress),
      position: addressFromPublicKey(emptyPosition),
      positionNftMint: addressFromPublicKey(emptyPositionNft.publicKey),
      positionNftAccount: addressFromPublicKey(emptyPositionNftAccount),
    });

    expectPlanParity(legacyClosePositionTx, kitClosePositionPlan, [
      fixture.actors.userSigner.address,
    ]);

    await executeKitPlan(kitClosePositionPlan, fixture.actors.userSigner, rpcBundle);
  });

  it("builds parity plans and executes inner lock and removeAllLiquidityAndClosePosition", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);
    const innerLockPosition = await createPositionWithLiquidity(
      validator,
      fixture,
      fixture.actors.user,
      fixture.actors.userSigner,
    );
    const innerLockState = await fixture.legacyClient.fetchPositionState(
      innerLockPosition.position,
    );
    const innerLockTx = await fixture.legacyClient.lockPosition({
      owner: fixture.actors.user.publicKey,
      payer: fixture.actors.user.publicKey,
      position: innerLockPosition.position,
      positionNftAccount: innerLockPosition.positionNftAccount,
      pool: fixture.poolAddress,
      cliffPoint: new BN(Math.floor(Date.now() / 1000) + 5),
      periodFrequency: new BN(1),
      cliffUnlockLiquidity: new BN(0),
      liquidityPerPeriod: innerLockState.unlockedLiquidity,
      numberOfPeriod: 1,
      innerPosition: true,
    });
    const kitInnerLockPlan = await fixture.kitClient.lockPosition({
      owner: fixture.actors.userSigner,
      position: addressFromPublicKey(innerLockPosition.position),
      positionNftAccount: addressFromPublicKey(
        innerLockPosition.positionNftAccount,
      ),
      pool: addressFromPublicKey(fixture.poolAddress),
      cliffPoint: new BN(Math.floor(Date.now() / 1000) + 5),
      periodFrequency: new BN(1),
      cliffUnlockLiquidity: new BN(0),
      liquidityPerPeriod: innerLockState.unlockedLiquidity,
      numberOfPeriod: 1,
      innerPosition: true,
    });

    expectPlanParity(innerLockTx, kitInnerLockPlan, [
      fixture.actors.userSigner.address,
    ]);

    await executeKitPlan(kitInnerLockPlan, fixture.actors.userSigner, rpcBundle);

    const closePositionCandidate = await createPositionWithLiquidity(
      validator,
      fixture,
      fixture.actors.payer,
      fixture.actors.payerSigner,
    );
    const closePoolState = await fixture.legacyClient.fetchPoolState(
      fixture.poolAddress,
    );
    const closePositionState = await fixture.legacyClient.fetchPositionState(
      closePositionCandidate.position,
    );
    const closeKitPoolState = await fetchKitPoolState(
      fixture.kitClient,
      fixture.poolAddress,
    );
    const closeKitPositionState = await fetchKitPositionState(
      fixture.kitClient,
      closePositionCandidate.position,
    );
    const legacyRemoveAndCloseTx =
      await fixture.legacyClient.removeAllLiquidityAndClosePosition({
        owner: fixture.actors.payer.publicKey,
        position: closePositionCandidate.position,
        positionNftAccount: closePositionCandidate.positionNftAccount,
        poolState: closePoolState,
        positionState: closePositionState,
        tokenAAmountThreshold: new BN(0),
        tokenBAmountThreshold: new BN(0),
        vestings: [],
        currentPoint: new BN(Math.floor(Date.now() / 1000)),
      });
    const kitRemoveAndClosePlan =
      await fixture.kitClient.removeAllLiquidityAndClosePosition({
        owner: fixture.actors.payerSigner,
        position: addressFromPublicKey(closePositionCandidate.position),
        positionNftAccount: addressFromPublicKey(
          closePositionCandidate.positionNftAccount,
        ),
        poolState: closeKitPoolState,
        positionState: closeKitPositionState,
        tokenAAmountThreshold: new BN(0),
        tokenBAmountThreshold: new BN(0),
        vestings: [],
        currentPoint: new BN(Math.floor(Date.now() / 1000)),
      });

    expectPlanParity(legacyRemoveAndCloseTx, kitRemoveAndClosePlan, [
      fixture.actors.payerSigner.address,
    ]);

    await executeKitPlan(
      kitRemoveAndClosePlan,
      fixture.actors.payerSigner,
      rpcBundle,
    );

    expect(
      await validator.connection.getAccountInfo(closePositionCandidate.position),
    ).toBeNull();
  });

  it("builds parity plans and executes permanentLockPosition and splitPosition2", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);
    const initialPositionNftAccount = derivePositionNftAccount(
      fixture.initialPositionNft.publicKey,
    );
    const initialPositionState = await fixture.legacyClient.fetchPositionState(
      fixture.initialPositionAddress,
    );
    const legacyPermanentLockTx =
      await fixture.legacyClient.permanentLockPosition({
        owner: fixture.actors.payer.publicKey,
        position: fixture.initialPositionAddress,
        positionNftAccount: initialPositionNftAccount,
        pool: fixture.poolAddress,
        unlockedLiquidity: initialPositionState.unlockedLiquidity.div(new BN(4)),
      });
    const kitPermanentLockPlan =
      await fixture.kitClient.permanentLockPosition({
        owner: fixture.actors.payerSigner,
        position: addressFromPublicKey(fixture.initialPositionAddress),
        positionNftAccount: addressFromPublicKey(initialPositionNftAccount),
        pool: addressFromPublicKey(fixture.poolAddress),
        unlockedLiquidity: initialPositionState.unlockedLiquidity.div(new BN(4)),
      });

    expectPlanParity(legacyPermanentLockTx, kitPermanentLockPlan, [
      fixture.actors.payerSigner.address,
    ]);

    await executeKitPlan(
      kitPermanentLockPlan,
      fixture.actors.payerSigner,
      rpcBundle,
    );

    const splitSource = await createPositionWithLiquidity(
      validator,
      fixture,
      fixture.actors.user,
      fixture.actors.userSigner,
    );
    const secondPositionNft = Keypair.generate();
    const secondPositionTx = await fixture.legacyClient.createPosition({
      owner: fixture.actors.payer.publicKey,
      payer: fixture.actors.payer.publicKey,
      pool: fixture.poolAddress,
      positionNft: secondPositionNft.publicKey,
    });
    await executeLegacyBuilder(
      validator.connection,
      secondPositionTx,
      [fixture.actors.payer, secondPositionNft],
      fixture.actors.payer,
    );
    const secondPosition = derivePositionAddress(secondPositionNft.publicKey);
    const secondPositionNftAccount = derivePositionNftAccount(
      secondPositionNft.publicKey,
    );

    const legacySplitPosition2Tx = await fixture.legacyClient.splitPosition2({
      firstPositionOwner: fixture.actors.user.publicKey,
      secondPositionOwner: fixture.actors.payer.publicKey,
      pool: fixture.poolAddress,
      firstPosition: splitSource.position,
      firstPositionNftAccount: splitSource.positionNftAccount,
      secondPosition,
      secondPositionNftAccount,
      numerator: Math.floor(SPLIT_POSITION_DENOMINATOR / 2),
    });
    const kitSplitPosition2Plan = await fixture.kitClient.splitPosition2({
      firstPositionOwner: fixture.actors.userSigner,
      secondPositionOwner: fixture.actors.payerSigner,
      pool: addressFromPublicKey(fixture.poolAddress),
      firstPosition: addressFromPublicKey(splitSource.position),
      firstPositionNftAccount: addressFromPublicKey(
        splitSource.positionNftAccount,
      ),
      secondPosition: addressFromPublicKey(secondPosition),
      secondPositionNftAccount: addressFromPublicKey(secondPositionNftAccount),
      numerator: Math.floor(SPLIT_POSITION_DENOMINATOR / 2),
    });

    expectPlanParity(legacySplitPosition2Tx, kitSplitPosition2Plan, [
      fixture.actors.userSigner.address,
      fixture.actors.payerSigner.address,
    ]);

    await executeKitPlan(
      kitSplitPosition2Plan,
      fixture.actors.userSigner,
      rpcBundle,
    );
  });

  it("builds parity plans and executes fee claim builders", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);
    await performSwap(validator.connection, fixture, fixture.actors.user);

    const poolState = await fixture.legacyClient.fetchPoolState(fixture.poolAddress);
    const initialPositionNftAccount = derivePositionNftAccount(
      fixture.initialPositionNft.publicKey,
    );
    const legacyClaimPositionFee2Tx =
      await fixture.legacyClient.claimPositionFee2({
        owner: fixture.actors.payer.publicKey,
        position: fixture.initialPositionAddress,
        pool: fixture.poolAddress,
        positionNftAccount: initialPositionNftAccount,
        tokenAMint: poolState.tokenAMint,
        tokenBMint: poolState.tokenBMint,
        tokenAVault: poolState.tokenAVault,
        tokenBVault: poolState.tokenBVault,
        tokenAProgram: getTokenProgram(poolState.tokenAFlag),
        tokenBProgram: getTokenProgram(poolState.tokenBFlag),
        receiver: fixture.actors.user.publicKey,
        feePayer: fixture.actors.user.publicKey,
      });
    const kitClaimPositionFee2Plan = await fixture.kitClient.claimPositionFee2({
      owner: fixture.actors.payerSigner,
      position: addressFromPublicKey(fixture.initialPositionAddress),
      pool: addressFromPublicKey(fixture.poolAddress),
      positionNftAccount: addressFromPublicKey(initialPositionNftAccount),
      tokenAMint: addressFromPublicKey(poolState.tokenAMint),
      tokenBMint: addressFromPublicKey(poolState.tokenBMint),
      tokenAVault: addressFromPublicKey(poolState.tokenAVault),
      tokenBVault: addressFromPublicKey(poolState.tokenBVault),
      tokenAProgram: addressFromPublicKey(getTokenProgram(poolState.tokenAFlag)),
      tokenBProgram: addressFromPublicKey(getTokenProgram(poolState.tokenBFlag)),
      receiver: fixture.actors.userSigner.address,
      feePayer: fixture.actors.userSigner,
    });

    expectPlanParity(legacyClaimPositionFee2Tx, kitClaimPositionFee2Plan, [
      fixture.actors.payerSigner.address,
      fixture.actors.userSigner.address,
    ]);

    await executeKitPlan(
      kitClaimPositionFee2Plan,
      fixture.actors.userSigner,
      rpcBundle,
    );

    const nativeFixture = await createCustomPoolFixture(validator, rpcBundle, {
      useNativeTokenA: true,
    });
    await performSwap(
      validator.connection,
      nativeFixture,
      nativeFixture.actors.user,
      {
        inputTokenMint: nativeFixture.tokenAMint,
        outputTokenMint: nativeFixture.tokenBMint,
        amountIn: new BN(100_000_000),
      },
    );

    const nativePoolState = await nativeFixture.legacyClient.fetchPoolState(
      nativeFixture.poolAddress,
    );
    const nativePositionNftAccount = derivePositionNftAccount(
      nativeFixture.initialPositionNft.publicKey,
    );
    const tempWSolAccount = Keypair.generate();
    const tempWSolSigner = await createKitSigner(tempWSolAccount);
    const legacyClaimPositionFeeTx =
      await nativeFixture.legacyClient.claimPositionFee({
        owner: nativeFixture.actors.payer.publicKey,
        position: nativeFixture.initialPositionAddress,
        pool: nativeFixture.poolAddress,
        positionNftAccount: nativePositionNftAccount,
        tokenAMint: nativePoolState.tokenAMint,
        tokenBMint: nativePoolState.tokenBMint,
        tokenAVault: nativePoolState.tokenAVault,
        tokenBVault: nativePoolState.tokenBVault,
        tokenAProgram: getTokenProgram(nativePoolState.tokenAFlag),
        tokenBProgram: getTokenProgram(nativePoolState.tokenBFlag),
        receiver: nativeFixture.actors.user.publicKey,
        feePayer: nativeFixture.actors.user.publicKey,
        tempWSolAccount: tempWSolAccount.publicKey,
      });
    const kitClaimPositionFeePlan =
      await nativeFixture.kitClient.claimPositionFee({
        owner: nativeFixture.actors.payerSigner,
        position: addressFromPublicKey(nativeFixture.initialPositionAddress),
        pool: addressFromPublicKey(nativeFixture.poolAddress),
        positionNftAccount: addressFromPublicKey(nativePositionNftAccount),
        tokenAMint: addressFromPublicKey(nativePoolState.tokenAMint),
        tokenBMint: addressFromPublicKey(nativePoolState.tokenBMint),
        tokenAVault: addressFromPublicKey(nativePoolState.tokenAVault),
        tokenBVault: addressFromPublicKey(nativePoolState.tokenBVault),
        tokenAProgram: addressFromPublicKey(
          getTokenProgram(nativePoolState.tokenAFlag),
        ),
        tokenBProgram: addressFromPublicKey(
          getTokenProgram(nativePoolState.tokenBFlag),
        ),
        receiver: nativeFixture.actors.userSigner.address,
        feePayer: nativeFixture.actors.userSigner,
        tempWSolAccount: tempWSolSigner,
      });

    expectPlanParity(legacyClaimPositionFeeTx, kitClaimPositionFeePlan, [
      nativeFixture.actors.payerSigner.address,
      nativeFixture.actors.userSigner.address,
      tempWSolSigner.address,
    ]);

    await executeKitPlan(
      kitClaimPositionFeePlan,
      nativeFixture.actors.userSigner,
      rpcBundle,
    );
  });

  it("builds parity plans and executes reward initialization and claim builders", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);
    const rewardTokens = await createTokens(
      validator.connection,
      fixture.actors.payer,
      [fixture.actors.payer.publicKey, fixture.actors.user.publicKey],
    );
    const rewardMint = rewardTokens.tokenAMint;
    const rewardDuration = new BN(86_400);
    const rewardAmount = new BN(100 * 10 ** DECIMALS);

    const legacyInitializeAndFundRewardTx =
      await fixture.legacyClient.initializeAndFundReward({
        rewardIndex: 0,
        rewardDuration,
        pool: fixture.poolAddress,
        creator: fixture.actors.payer.publicKey,
        payer: fixture.actors.payer.publicKey,
        rewardMint,
        carryForward: false,
        amount: rewardAmount,
        rewardMintProgram: TOKEN_PROGRAM_ID,
      });
    const kitInitializeAndFundRewardPlan =
      await fixture.kitClient.initializeAndFundReward({
        rewardIndex: 0,
        rewardDuration,
        pool: addressFromPublicKey(fixture.poolAddress),
        creator: fixture.actors.payerSigner,
        payer: fixture.actors.payerSigner,
        rewardMint: addressFromPublicKey(rewardMint),
        carryForward: false,
        amount: rewardAmount,
        rewardMintProgram: addressFromPublicKey(TOKEN_PROGRAM_ID),
      });

    expectPlanParity(
      legacyInitializeAndFundRewardTx,
      kitInitializeAndFundRewardPlan,
      [fixture.actors.payerSigner.address],
    );

    await executeKitPlan(
      kitInitializeAndFundRewardPlan,
      fixture.actors.payerSigner,
      rpcBundle,
    );

    const initialPositionNftAccount = derivePositionNftAccount(
      fixture.initialPositionNft.publicKey,
    );
    const claimPoolState = await fixture.legacyClient.fetchPoolState(
      fixture.poolAddress,
    );
    const claimPositionState = await fixture.legacyClient.fetchPositionState(
      fixture.initialPositionAddress,
    );
    const claimKitPoolState = await fetchKitPoolState(
      fixture.kitClient,
      fixture.poolAddress,
    );
    const claimKitPositionState = await fetchKitPositionState(
      fixture.kitClient,
      fixture.initialPositionAddress,
    );

    const legacyClaimRewardTx = await fixture.legacyClient.claimReward({
      user: fixture.actors.payer.publicKey,
      position: fixture.initialPositionAddress,
      poolState: claimPoolState,
      positionState: claimPositionState,
      positionNftAccount: initialPositionNftAccount,
      rewardIndex: 0,
      isSkipReward: true,
    });
    const kitClaimRewardPlan = await fixture.kitClient.claimReward({
      user: fixture.actors.payerSigner,
      position: addressFromPublicKey(fixture.initialPositionAddress),
      poolState: claimKitPoolState,
      positionState: claimKitPositionState,
      positionNftAccount: addressFromPublicKey(initialPositionNftAccount),
      rewardIndex: 0,
      isSkipReward: true,
    });

    expectPlanParity(legacyClaimRewardTx, kitClaimRewardPlan, [
      fixture.actors.payerSigner.address,
    ]);

    await executeKitPlan(kitClaimRewardPlan, fixture.actors.payerSigner, rpcBundle);

    const refreshedPoolState = await fixture.legacyClient.fetchPoolState(
      fixture.poolAddress,
    );
    const refreshedPositionState = await fixture.legacyClient.fetchPositionState(
      fixture.initialPositionAddress,
    );
    const refreshedKitPoolState = await fetchKitPoolState(
      fixture.kitClient,
      fixture.poolAddress,
    );
    const refreshedKitPositionState = await fetchKitPositionState(
      fixture.kitClient,
      fixture.initialPositionAddress,
    );
    const legacyClaimRewardWithFeePayerTx =
      await fixture.legacyClient.claimReward({
        user: fixture.actors.payer.publicKey,
        position: fixture.initialPositionAddress,
        poolState: refreshedPoolState,
        positionState: refreshedPositionState,
        positionNftAccount: initialPositionNftAccount,
        rewardIndex: 0,
        isSkipReward: true,
        feePayer: fixture.actors.user.publicKey,
      });
    const kitClaimRewardWithFeePayerPlan =
      await fixture.kitClient.claimReward({
        user: fixture.actors.payerSigner,
        position: addressFromPublicKey(fixture.initialPositionAddress),
        poolState: refreshedKitPoolState,
        positionState: refreshedKitPositionState,
        positionNftAccount: addressFromPublicKey(initialPositionNftAccount),
        rewardIndex: 0,
        isSkipReward: true,
        feePayer: fixture.actors.userSigner,
      });

    expectPlanParity(
      legacyClaimRewardWithFeePayerTx,
      kitClaimRewardWithFeePayerPlan,
      [fixture.actors.payerSigner.address, fixture.actors.userSigner.address],
    );

    await executeKitPlan(
      kitClaimRewardWithFeePayerPlan,
      fixture.actors.userSigner,
      rpcBundle,
    );
  });

  it("builds native write plans without a legacy RPC URL when reusing existing Kit RPC clients", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);
    const rpcOnlyClient = CpAmmKitClient.fromRpc(rpcBundle.rpc);
    const rpcAndSubscriptionsClient = CpAmmKitClient.fromRpcAndSubscriptions(
      rpcBundle.rpc,
      createSolanaRpcSubscriptions(rpcSubscriptionsUrl(validator.rpcUrl)),
    );
    const firstPositionNft = Keypair.generate();
    const firstPositionNftSigner = await createKitSigner(firstPositionNft);
    const secondPositionNft = Keypair.generate();
    const secondPositionNftSigner = await createKitSigner(secondPositionNft);

    const rpcOnlyPlan = await rpcOnlyClient.createPosition({
      owner: fixture.actors.userSigner.address,
      payer: fixture.actors.userSigner,
      pool: addressFromPublicKey(fixture.poolAddress),
      positionNft: firstPositionNftSigner,
    });
    const rpcAndSubscriptionsPlan =
      await rpcAndSubscriptionsClient.createPosition({
        owner: fixture.actors.userSigner.address,
        payer: fixture.actors.userSigner,
        pool: addressFromPublicKey(fixture.poolAddress),
        positionNft: secondPositionNftSigner,
      });

    expect(rpcOnlyPlan.signers.map((signer) => signer.address)).toEqual([
      fixture.actors.userSigner.address,
      firstPositionNftSigner.address,
    ]);
    expect(
      rpcAndSubscriptionsPlan.signers.map((signer) => signer.address),
    ).toEqual([
      fixture.actors.userSigner.address,
      secondPositionNftSigner.address,
    ]);

    await executeKitPlan(rpcOnlyPlan, fixture.actors.userSigner, rpcBundle);
    await executeKitPlan(
      rpcAndSubscriptionsPlan,
      fixture.actors.userSigner,
      rpcBundle,
    );

    const [firstPositionState, secondPositionState] = await Promise.all([
      fixture.legacyClient.fetchPositionState(
        derivePositionAddress(firstPositionNft.publicKey),
      ),
      fixture.legacyClient.fetchPositionState(
        derivePositionAddress(secondPositionNft.publicKey),
      ),
    ]);

    expect(firstPositionState.nftMint.equals(firstPositionNft.publicKey)).toBe(
      true,
    );
    expect(secondPositionState.nftMint.equals(secondPositionNft.publicKey)).toBe(
      true,
    );
  });

  it("does not retain legacy bridge references in the kit client source or build output", () => {
    const clientSource = readFileSync("src/kit/client.ts", "utf8");

    expect(clientSource).not.toContain("LegacyKitBridge");
    expect(clientSource).not.toContain("assertLegacyBridge");

    for (const outputPath of ["dist/kit/index.js", "dist/kit/index.mjs"]) {
      if (!existsSync(outputPath)) {
        continue;
      }

      const output = readFileSync(outputPath, "utf8");
      expect(output).not.toContain("legacyKitBridge");
      expect(output).not.toContain("assertLegacyBridge");
    }
  });

  it("matches legacy read and discovery surfaces with native kit reads", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);

    await createStaticConfig(
      validator.connection,
      fixture.legacyClient,
      fixture.actors.payer,
    );

    const userPositionA = await createPositionWithLiquidity(
      validator,
      fixture,
      fixture.actors.user,
      fixture.actors.userSigner,
      new BN(250 * 10 ** DECIMALS),
    );
    const userPositionB = await createPositionWithLiquidity(
      validator,
      fixture,
      fixture.actors.user,
      fixture.actors.userSigner,
      new BN(125 * 10 ** DECIMALS),
    );

    const legacyPoolState = await fixture.legacyClient.fetchPoolState(
      fixture.poolAddress,
    );
    const kitPoolState = await fetchKitPoolState(
      fixture.kitClient,
      fixture.poolAddress,
    );
    expect(normalizeComparable(kitPoolState)).toEqual(
      normalizeComparable(legacyPoolState),
    );

    const legacyPoolFees = await fixture.legacyClient.fetchPoolFees(
      fixture.poolAddress,
    );
    const kitPoolFees = await fixture.kitClient.fetchPoolFees(
      addressFromPublicKey(fixture.poolAddress),
    );
    expect(normalizeComparable(kitPoolFees)).toEqual(
      normalizeComparable(legacyPoolFees),
    );

    const legacyPoolsByTokenA =
      await fixture.legacyClient.fetchPoolStatesByTokenAMint(fixture.tokenAMint);
    const kitPoolsByTokenA = await fixture.kitClient.fetchPoolStatesByTokenAMint(
      addressFromPublicKey(fixture.tokenAMint),
    );
    expect(normalizeComparable(kitPoolsByTokenA)).toEqual(
      normalizeComparable(legacyPoolsByTokenA),
    );

    const legacyConfigs = await fixture.legacyClient.getAllConfigs();
    const kitConfigs = await fixture.kitClient.getAllConfigs();
    expect(normalizeComparable(kitConfigs)).toEqual(
      normalizeComparable(legacyConfigs),
    );

    const legacyStaticConfigs = await fixture.legacyClient.getStaticConfigs();
    const kitStaticConfigs = await fixture.kitClient.getStaticConfigs();
    expect(normalizeComparable(kitStaticConfigs)).toEqual(
      normalizeComparable(legacyStaticConfigs),
    );

    const legacyPools = await fixture.legacyClient.getAllPools();
    const kitPools = await fixture.kitClient.getAllPools();
    expect(normalizeComparable(kitPools)).toEqual(
      normalizeComparable(legacyPools),
    );

    const legacyMultiplePools = await fixture.legacyClient.getMultiplePools([
      fixture.poolAddress,
    ]);
    const kitMultiplePools = await fixture.kitClient.getMultiplePools([
      addressFromPublicKey(fixture.poolAddress),
    ]);
    expect(normalizeComparable(kitMultiplePools)).toEqual(
      normalizeComparable(legacyMultiplePools),
    );

    const legacyPositionsByPool = await fixture.legacyClient.getAllPositionsByPool(
      fixture.poolAddress,
    );
    const kitPositionsByPool = await fixture.kitClient.getAllPositionsByPool(
      addressFromPublicKey(fixture.poolAddress),
    );
    expect(normalizeComparable(kitPositionsByPool)).toEqual(
      normalizeComparable(legacyPositionsByPool),
    );

    const legacyMultiplePositions = await fixture.legacyClient.getMultiplePositions([
      fixture.initialPositionAddress,
      userPositionA.position,
      userPositionB.position,
    ]);
    const kitMultiplePositions = await fixture.kitClient.getMultiplePositions([
      addressFromPublicKey(fixture.initialPositionAddress),
      addressFromPublicKey(userPositionA.position),
      addressFromPublicKey(userPositionB.position),
    ]);
    expect(normalizeComparable(kitMultiplePositions)).toEqual(
      normalizeComparable(legacyMultiplePositions),
    );

    const legacyUserPositions = await fixture.legacyClient.getPositionsByUser(
      fixture.actors.user.publicKey,
    );
    const kitUserPositions = await fixture.kitClient.getPositionsByUser(
      fixture.actors.userSigner.address,
    );
    expect(normalizeComparable(kitUserPositions)).toEqual(
      normalizeComparable(legacyUserPositions),
    );

    const legacyUserPositionsByPool =
      await fixture.legacyClient.getUserPositionByPool(
        fixture.poolAddress,
        fixture.actors.user.publicKey,
      );
    const kitUserPositionsByPool = await fixture.kitClient.getUserPositionByPool(
      addressFromPublicKey(fixture.poolAddress),
      fixture.actors.userSigner.address,
    );
    expect(normalizeComparable(kitUserPositionsByPool)).toEqual(
      normalizeComparable(legacyUserPositionsByPool),
    );

    const legacyVestings = await fixture.legacyClient.getAllVestingsByPosition(
      fixture.initialPositionAddress,
    );
    const kitVestings = await fixture.kitClient.getAllVestingsByPosition(
      addressFromPublicKey(fixture.initialPositionAddress),
    );
    expect(normalizeComparable(kitVestings)).toEqual(
      normalizeComparable(legacyVestings),
    );

    expect(
      await fixture.kitClient.isPoolExist(addressFromPublicKey(fixture.poolAddress)),
    ).toBe(true);
    expect(
      await fixture.kitClient.isPoolExist(
        address("11111111111111111111111111111111"),
      ),
    ).toBe(false);
  });

  it("matches legacy quote and state helper outputs", async () => {
    const fixture = await createCustomPoolFixture(validator, rpcBundle);
    const userPosition = await createPositionWithLiquidity(
      validator,
      fixture,
      fixture.actors.user,
      fixture.actors.userSigner,
      new BN(250 * 10 ** DECIMALS),
    );

    const legacyPoolState = await fixture.legacyClient.fetchPoolState(
      fixture.poolAddress,
    );
    const kitPoolState = await fetchKitPoolState(
      fixture.kitClient,
      fixture.poolAddress,
    );
    const currentTime = Math.floor(Date.now() / 1000);
    const currentSlot = await validator.connection.getSlot();
    const currentPoint = new BN(currentTime);
    const amountIn = new BN(100 * 10 ** DECIMALS);

    const legacyQuote = fixture.legacyClient.getQuote({
      inAmount: amountIn,
      inputTokenMint: legacyPoolState.tokenAMint,
      slippage: 100,
      poolState: legacyPoolState,
      currentTime,
      currentSlot,
      tokenADecimal: DECIMALS,
      tokenBDecimal: DECIMALS,
      hasReferral: false,
    });
    const kitQuote = fixture.kitClient.getQuote({
      inAmount: amountIn,
      inputTokenMint: addressFromPublicKey(legacyPoolState.tokenAMint),
      slippage: 100,
      poolState: kitPoolState,
      currentTime,
      currentSlot,
      tokenADecimal: DECIMALS,
      tokenBDecimal: DECIMALS,
      hasReferral: false,
    });
    expect(normalizeComparable(kitQuote)).toEqual(normalizeComparable(legacyQuote));

    const legacyQuote2 = fixture.legacyClient.getQuote2({
      inputTokenMint: legacyPoolState.tokenAMint,
      slippage: 100,
      currentPoint,
      poolState: legacyPoolState,
      tokenADecimal: DECIMALS,
      tokenBDecimal: DECIMALS,
      hasReferral: false,
      swapMode: SwapMode.ExactIn,
      amountIn,
    });
    const kitQuote2 = fixture.kitClient.getQuote2({
      inputTokenMint: addressFromPublicKey(legacyPoolState.tokenAMint),
      slippage: 100,
      currentPoint,
      poolState: kitPoolState,
      tokenADecimal: DECIMALS,
      tokenBDecimal: DECIMALS,
      hasReferral: false,
      swapMode: SwapMode.ExactIn,
      amountIn,
    });
    expect(normalizeComparable(kitQuote2)).toEqual(
      normalizeComparable(legacyQuote2),
    );

    const legacyLiquidityDelta = fixture.legacyClient.getLiquidityDelta({
      maxAmountTokenA: amountIn,
      maxAmountTokenB: amountIn,
      sqrtPrice: legacyPoolState.sqrtPrice,
      sqrtMinPrice: legacyPoolState.sqrtMinPrice,
      sqrtMaxPrice: legacyPoolState.sqrtMaxPrice,
      collectFeeMode: legacyPoolState.collectFeeMode,
      tokenAAmount: legacyPoolState.tokenAAmount,
      tokenBAmount: legacyPoolState.tokenBAmount,
      liquidity: legacyPoolState.liquidity,
    });
    const kitLiquidityDelta = fixture.kitClient.getLiquidityDelta({
      maxAmountTokenA: amountIn,
      maxAmountTokenB: amountIn,
      sqrtPrice: kitPoolState.sqrtPrice,
      sqrtMinPrice: kitPoolState.sqrtMinPrice,
      sqrtMaxPrice: kitPoolState.sqrtMaxPrice,
      collectFeeMode: kitPoolState.collectFeeMode,
      tokenAAmount: kitPoolState.tokenAAmount,
      tokenBAmount: kitPoolState.tokenBAmount,
      liquidity: kitPoolState.liquidity,
    });
    expect(kitLiquidityDelta.toString()).toBe(legacyLiquidityDelta.toString());

    const legacyDepositQuote = fixture.legacyClient.getDepositQuote({
      inAmount: amountIn,
      isTokenA: true,
      minSqrtPrice: legacyPoolState.sqrtMinPrice,
      maxSqrtPrice: legacyPoolState.sqrtMaxPrice,
      sqrtPrice: legacyPoolState.sqrtPrice,
      collectFeeMode: legacyPoolState.collectFeeMode,
      tokenAAmount: legacyPoolState.tokenAAmount,
      tokenBAmount: legacyPoolState.tokenBAmount,
      liquidity: legacyPoolState.liquidity,
    });
    const kitDepositQuote = fixture.kitClient.getDepositQuote({
      inAmount: amountIn,
      isTokenA: true,
      minSqrtPrice: kitPoolState.sqrtMinPrice,
      maxSqrtPrice: kitPoolState.sqrtMaxPrice,
      sqrtPrice: kitPoolState.sqrtPrice,
      collectFeeMode: kitPoolState.collectFeeMode,
      tokenAAmount: kitPoolState.tokenAAmount,
      tokenBAmount: kitPoolState.tokenBAmount,
      liquidity: kitPoolState.liquidity,
    });
    expect(normalizeComparable(kitDepositQuote)).toEqual(
      normalizeComparable(legacyDepositQuote),
    );

    const legacyWithdrawQuote = fixture.legacyClient.getWithdrawQuote({
      liquidityDelta: userPosition.depositQuote.liquidityDelta,
      minSqrtPrice: legacyPoolState.sqrtMinPrice,
      maxSqrtPrice: legacyPoolState.sqrtMaxPrice,
      sqrtPrice: legacyPoolState.sqrtPrice,
      collectFeeMode: legacyPoolState.collectFeeMode,
      tokenAAmount: legacyPoolState.tokenAAmount,
      tokenBAmount: legacyPoolState.tokenBAmount,
      liquidity: legacyPoolState.liquidity,
    });
    const kitWithdrawQuote = fixture.kitClient.getWithdrawQuote({
      liquidityDelta: userPosition.depositQuote.liquidityDelta,
      minSqrtPrice: kitPoolState.sqrtMinPrice,
      maxSqrtPrice: kitPoolState.sqrtMaxPrice,
      sqrtPrice: kitPoolState.sqrtPrice,
      collectFeeMode: kitPoolState.collectFeeMode,
      tokenAAmount: kitPoolState.tokenAAmount,
      tokenBAmount: kitPoolState.tokenBAmount,
      liquidity: kitPoolState.liquidity,
    });
    expect(normalizeComparable(kitWithdrawQuote)).toEqual(
      normalizeComparable(legacyWithdrawQuote),
    );

    const unlockedLegacyPositionState = await fixture.legacyClient.fetchPositionState(
      userPosition.position,
    );
    const unlockedKitPositionState = await fetchKitPositionState(
      fixture.kitClient,
      userPosition.position,
    );
    expect(fixture.kitClient.isLockedPosition(unlockedKitPositionState)).toBe(
      fixture.legacyClient.isLockedPosition(unlockedLegacyPositionState),
    );

    const vestingAccount = Keypair.generate();
    const legacyLockTx = await fixture.legacyClient.lockPosition({
      owner: fixture.actors.user.publicKey,
      payer: fixture.actors.user.publicKey,
      position: userPosition.position,
      positionNftAccount: userPosition.positionNftAccount,
      pool: fixture.poolAddress,
      cliffPoint: new BN(currentTime + 600),
      periodFrequency: new BN(60),
      cliffUnlockLiquidity: new BN(0),
      liquidityPerPeriod: new BN(1),
      numberOfPeriod: 10,
      innerPosition: false,
      vestingAccount: vestingAccount.publicKey,
    });
    await executeLegacyBuilder(
      validator.connection,
      legacyLockTx,
      [fixture.actors.user, vestingAccount],
      fixture.actors.user,
    );

    const lockedLegacyPositionState = await fixture.legacyClient.fetchPositionState(
      userPosition.position,
    );
    const lockedKitPositionState = await fetchKitPositionState(
      fixture.kitClient,
      userPosition.position,
    );
    const lockedLegacyVestings = await fixture.legacyClient.getAllVestingsByPosition(
      userPosition.position,
    );
    const lockedKitVestings = await fixture.kitClient.getAllVestingsByPosition(
      addressFromPublicKey(userPosition.position),
    );
    const lockCurrentPoint = new BN(currentTime + 60);

    expect(fixture.kitClient.isLockedPosition(lockedKitPositionState)).toBe(
      fixture.legacyClient.isLockedPosition(lockedLegacyPositionState),
    );
    expect(
      normalizeComparable(
        fixture.kitClient.canUnlockPosition(
          lockedKitPositionState,
          lockedKitVestings,
          lockCurrentPoint,
        ),
      ),
    ).toEqual(
      normalizeComparable(
        fixture.legacyClient.canUnlockPosition(
          lockedLegacyPositionState,
          lockedLegacyVestings.map(({ publicKey, account }) => ({
            account: publicKey,
            vestingState: account,
          })),
          lockCurrentPoint,
        ),
      ),
    );

    const initialPositionNftAccount = derivePositionNftAccount(
      fixture.initialPositionNft.publicKey,
    );
    const permanentLockTx = await fixture.legacyClient.permanentLockPosition({
      owner: fixture.actors.payer.publicKey,
      position: fixture.initialPositionAddress,
      positionNftAccount: initialPositionNftAccount,
      pool: fixture.poolAddress,
      unlockedLiquidity: new BN(1),
    });
    await executeLegacyBuilder(
      validator.connection,
      permanentLockTx,
      [fixture.actors.payer],
      fixture.actors.payer,
    );

    const permanentLegacyPositionState =
      await fixture.legacyClient.fetchPositionState(fixture.initialPositionAddress);
    const permanentKitPositionState = await fetchKitPositionState(
      fixture.kitClient,
      fixture.initialPositionAddress,
    );
    expect(
      fixture.kitClient.isPermanentLockedPosition(permanentKitPositionState),
    ).toBe(
      fixture.legacyClient.isPermanentLockedPosition(permanentLegacyPositionState),
    );
  });
});
