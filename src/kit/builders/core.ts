import {
  AccountRole,
  type AccountMeta,
  type Address,
  type Instruction,
  type Rpc,
  type TransactionSigner,
} from "@solana/kit";
import BN from "bn.js";

import { AmountIsZeroError } from "../../errors";
import {
  ActivationType,
  BaseFeeMode,
  SwapMode,
  type CreateCustomPoolParams,
  type CreateCustomPoolResult,
  type CreateCustomPoolWithDynamicConfigParams,
  type CreatePoolParams,
  type CreatePoolResult,
  type CreatePositionParams,
  type KitPoolFeesParams,
  type KitPoolState,
  type KitTransactionPlan,
  type SwapParams,
  type Swap2Params,
} from "../types";
import {
  CP_AMM_PROGRAM_ADDRESS,
  findPositionNftAccountPda,
  findPositionPda,
  findTokenAVaultPda,
  findTokenBVaultPda,
  getCreatePositionInstructionAsync,
  getInitializeCustomizablePoolInstructionAsync,
  getInitializePoolInstructionAsync,
  getInitializePoolWithDynamicConfigInstructionAsync,
  getPermanentLockPositionInstructionAsync,
  getSwapInstructionAsync,
  getSwap2InstructionAsync,
} from "../generated";
import { decodePodAlignedFeeRateLimiter } from "../helpers/feeCodec";
import * as readServices from "../services";
import {
  POOL_AUTHORITY_ADDRESS,
  SYSVAR_INSTRUCTIONS_ADDRESS,
  appendRemainingAccounts,
  bnToBigInt,
  buildTransactionPlan,
  optionalBnToBigInt,
  readonlyAccountMeta,
  replaceInstructionAccount,
} from "./common";
import {
  deriveCustomizablePoolAddress,
  derivePoolAddress,
  deriveTokenBadgeAddress,
} from "./pda";
import {
  isNativeMint,
  prepareTokenAccounts,
  wrapSolInstructions,
  unwrapSolInstruction,
} from "./token";
import { validateCreatePoolParams, validateTokenMints } from "./validation";

function normalizePoolFees(poolFees: KitPoolFeesParams) {
  return {
    baseFee: {
      data: new Uint8Array(poolFees.baseFee.data),
    },
    compoundingFeeBps: poolFees.compoundingFeeBps,
    padding: poolFees.padding,
    dynamicFee: normalizeInstructionValue(poolFees.dynamicFee),
  };
}

function normalizeInstructionValue(value: unknown): any {
  if (value === null || value === undefined) {
    return value;
  }

  if (BN.isBN(value)) {
    return bnToBigInt(value);
  }

  if (value instanceof Uint8Array) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((entry) => normalizeInstructionValue(entry));
  }

  if (typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entryValue]) => [
        key,
        normalizeInstructionValue(entryValue),
      ]),
    );
  }

  return value;
}

function unwrapRpcValue<T>(response: any): T {
  return response && typeof response === "object" && "value" in response
    ? (response.value as T)
    : (response as T);
}

async function getCurrentPoint(
  rpc: Rpc<any>,
  activationType: ActivationType,
): Promise<BN> {
  const currentSlot = unwrapRpcValue<number | bigint>(
    await (rpc as any).getSlot().send(),
  );

  if (activationType === ActivationType.Slot) {
    return new BN(currentSlot.toString());
  }

  const currentBlockTime = unwrapRpcValue<number | bigint | null>(
    await (rpc as any).getBlockTime(currentSlot).send(),
  );

  return new BN((currentBlockTime ?? 0).toString());
}

function isRateLimiterApplied(params: {
  referenceAmount: BN;
  maxLimiterDuration: number;
  maxFeeBps: number;
  feeIncrementBps: number;
  currentPoint: BN;
  activationPoint: BN;
  isAtoB: boolean;
}): boolean {
  const {
    referenceAmount,
    maxLimiterDuration,
    maxFeeBps,
    feeIncrementBps,
    currentPoint,
    activationPoint,
    isAtoB,
  } = params;

  if (
    referenceAmount.isZero() &&
    maxLimiterDuration === 0 &&
    maxFeeBps === 0 &&
    feeIncrementBps === 0
  ) {
    return false;
  }

  if (isAtoB || currentPoint.lt(activationPoint)) {
    return false;
  }

  return currentPoint.lte(activationPoint.add(new BN(maxLimiterDuration)));
}

async function buildPoolCreationContext(params: {
  pool: Address;
  payer: TransactionSigner;
  positionNft: TransactionSigner;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAAmount: BN;
  tokenBAmount: BN;
  tokenAProgram: Address;
  tokenBProgram: Address;
  minimumNativeTokenBAmount?: boolean;
}): Promise<{
  position: Address;
  positionNftAccount: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  payerTokenA: Address;
  payerTokenB: Address;
  preInstructions: Instruction[];
  tokenBadgeAccounts: readonly AccountMeta<Address>[];
}> {
  const {
    pool,
    payer,
    positionNft,
    tokenAMint,
    tokenBMint,
    tokenAAmount,
    tokenBAmount,
    tokenAProgram,
    tokenBProgram,
    minimumNativeTokenBAmount = false,
  } = params;

  const [position] = await findPositionPda({
    positionNftMint: positionNft.address,
  });
  const [positionNftAccount] = await findPositionNftAccountPda({
    positionNftMint: positionNft.address,
  });
  const [tokenAVault] = await findTokenAVaultPda({ tokenAMint, pool });
  const [tokenBVault] = await findTokenBVaultPda({ tokenBMint, pool });

  const {
    tokenAAta: payerTokenA,
    tokenBAta: payerTokenB,
    instructions: preInstructions,
  } = await prepareTokenAccounts({
    payer,
    tokenAOwner: payer.address,
    tokenBOwner: payer.address,
    tokenAMint,
    tokenBMint,
    tokenAProgram,
    tokenBProgram,
  });

  if (isNativeMint(tokenAMint)) {
    preInstructions.push(
      ...wrapSolInstructions(payer.address, payer, payerTokenA, bnToBigInt(tokenAAmount)),
    );
  }

  if (isNativeMint(tokenBMint)) {
    const nativeTokenBAmount =
      minimumNativeTokenBAmount && tokenBAmount.lt(new BN(1))
        ? new BN(1)
        : tokenBAmount;

    preInstructions.push(
      ...wrapSolInstructions(
        payer.address,
        payer,
        payerTokenB,
        bnToBigInt(nativeTokenBAmount),
      ),
    );
  }

  const [tokenABadge, tokenBBadge] = await Promise.all([
    deriveTokenBadgeAddress(tokenAMint),
    deriveTokenBadgeAddress(tokenBMint),
  ]);

  return {
    position,
    positionNftAccount,
    tokenAVault,
    tokenBVault,
    payerTokenA,
    payerTokenB,
    preInstructions,
    tokenBadgeAccounts: [
      readonlyAccountMeta(tokenABadge),
      readonlyAccountMeta(tokenBBadge),
    ],
  };
}

async function buildPoolPermanentLockInstruction(params: {
  creator: Address;
  creatorSigner?: TransactionSigner;
  payer: TransactionSigner;
  pool: Address;
  position: Address;
  positionNftAccount: Address;
  liquidityDelta: BN;
}): Promise<Instruction> {
  const ownerSigner = params.creatorSigner ?? params.payer;
  let instruction = await getPermanentLockPositionInstructionAsync({
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    owner: ownerSigner,
    permanentLockLiquidity: bnToBigInt(params.liquidityDelta),
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  if (params.creator !== ownerSigner.address) {
    instruction = replaceInstructionAccount(instruction, 3, {
      address: params.creator,
      role: AccountRole.READONLY_SIGNER,
    });
  }

  return instruction;
}

export async function createPoolPlan(
  params: CreatePoolParams,
): Promise<CreatePoolResult> {
  validateCreatePoolParams({
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    liquidityDelta: params.liquidityDelta,
    tokenAAmount: params.tokenAAmount,
    tokenBAmount: params.tokenBAmount,
  });

  const pool = await derivePoolAddress(
    params.config,
    params.tokenAMint,
    params.tokenBMint,
  );
  const context = await buildPoolCreationContext({
    pool,
    payer: params.payer,
    positionNft: params.positionNft,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAAmount: params.tokenAAmount,
    tokenBAmount: params.tokenBAmount,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
  });

  const initializePoolInstruction = appendRemainingAccounts(
    await getInitializePoolInstructionAsync({
      creator: params.creator,
      positionNftMint: params.positionNft,
      positionNftAccount: context.positionNftAccount,
      payer: params.payer,
      config: params.config,
      poolAuthority: POOL_AUTHORITY_ADDRESS,
      pool,
      position: context.position,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAVault: context.tokenAVault,
      tokenBVault: context.tokenBVault,
      payerTokenA: context.payerTokenA,
      payerTokenB: context.payerTokenB,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram,
      program: CP_AMM_PROGRAM_ADDRESS,
      liquidity: bnToBigInt(params.liquidityDelta),
      sqrtPrice: bnToBigInt(params.initSqrtPrice),
      activationPoint: optionalBnToBigInt(params.activationPoint),
    }),
    context.tokenBadgeAccounts,
  );

  const instructions: Instruction[] = [
    ...context.preInstructions,
    initializePoolInstruction,
  ];

  if (params.isLockLiquidity) {
    instructions.push(
      await buildPoolPermanentLockInstruction({
        creator: params.creator,
        payer: params.payer,
        pool,
        position: context.position,
        positionNftAccount: context.positionNftAccount,
        liquidityDelta: params.liquidityDelta,
      }),
    );
  }

  return {
    plan: buildTransactionPlan(instructions, [params.payer, params.positionNft]),
    pool,
    position: context.position,
  };
}

export async function createCustomPoolPlan(
  params: CreateCustomPoolParams,
): Promise<CreateCustomPoolResult> {
  validateTokenMints(params.tokenAMint, params.tokenBMint);
  const pool = await deriveCustomizablePoolAddress(
    params.tokenAMint,
    params.tokenBMint,
  );
  const context = await buildPoolCreationContext({
    pool,
    payer: params.payer,
    positionNft: params.positionNft,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAAmount: params.tokenAAmount,
    tokenBAmount: params.tokenBAmount,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    minimumNativeTokenBAmount: true,
  });

  const initializePoolInstruction = appendRemainingAccounts(
    await getInitializeCustomizablePoolInstructionAsync({
      creator: params.creator,
      positionNftMint: params.positionNft,
      positionNftAccount: context.positionNftAccount,
      payer: params.payer,
      poolAuthority: POOL_AUTHORITY_ADDRESS,
      pool,
      position: context.position,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAVault: context.tokenAVault,
      tokenBVault: context.tokenBVault,
      payerTokenA: context.payerTokenA,
      payerTokenB: context.payerTokenB,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram,
      program: CP_AMM_PROGRAM_ADDRESS,
      params: {
        poolFees: normalizePoolFees(params.poolFees),
        sqrtMinPrice: bnToBigInt(params.sqrtMinPrice),
        sqrtMaxPrice: bnToBigInt(params.sqrtMaxPrice),
        hasAlphaVault: params.hasAlphaVault,
        liquidity: bnToBigInt(params.liquidityDelta),
        sqrtPrice: bnToBigInt(params.initSqrtPrice),
        activationType: params.activationType,
        collectFeeMode: params.collectFeeMode,
        activationPoint: optionalBnToBigInt(params.activationPoint),
      },
    }),
    context.tokenBadgeAccounts,
  );

  const instructions: Instruction[] = [
    ...context.preInstructions,
    initializePoolInstruction,
  ];

  if (params.isLockLiquidity) {
    instructions.push(
      await buildPoolPermanentLockInstruction({
        creator: params.creator,
        payer: params.payer,
        pool,
        position: context.position,
        positionNftAccount: context.positionNftAccount,
        liquidityDelta: params.liquidityDelta,
      }),
    );
  }

  return {
    plan: buildTransactionPlan(instructions, [params.payer, params.positionNft]),
    pool,
    position: context.position,
  };
}

export async function createCustomPoolWithDynamicConfigPlan(
  params: CreateCustomPoolWithDynamicConfigParams,
): Promise<CreateCustomPoolResult> {
  validateTokenMints(params.tokenAMint, params.tokenBMint);
  const pool = await derivePoolAddress(
    params.config,
    params.tokenAMint,
    params.tokenBMint,
  );
  const context = await buildPoolCreationContext({
    pool,
    payer: params.payer,
    positionNft: params.positionNft,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAAmount: params.tokenAAmount,
    tokenBAmount: params.tokenBAmount,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
  });

  const initializePoolInstruction = appendRemainingAccounts(
    await getInitializePoolWithDynamicConfigInstructionAsync({
      creator: params.creator.address,
      positionNftMint: params.positionNft,
      positionNftAccount: context.positionNftAccount,
      payer: params.payer,
      poolAuthority: POOL_AUTHORITY_ADDRESS,
      pool,
      position: context.position,
      poolCreatorAuthority: params.payer,
      config: params.config,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAVault: context.tokenAVault,
      tokenBVault: context.tokenBVault,
      payerTokenA: context.payerTokenA,
      payerTokenB: context.payerTokenB,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram,
      program: CP_AMM_PROGRAM_ADDRESS,
      params: {
        poolFees: normalizePoolFees(params.poolFees),
        sqrtMinPrice: bnToBigInt(params.sqrtMinPrice),
        sqrtMaxPrice: bnToBigInt(params.sqrtMaxPrice),
        hasAlphaVault: params.hasAlphaVault,
        liquidity: bnToBigInt(params.liquidityDelta),
        sqrtPrice: bnToBigInt(params.initSqrtPrice),
        activationType: params.activationType,
        collectFeeMode: params.collectFeeMode,
        activationPoint: optionalBnToBigInt(params.activationPoint),
      },
    }).then((instruction) =>
      params.poolCreatorAuthority === params.payer.address
        ? instruction
        : replaceInstructionAccount(instruction, 4, {
            address: params.poolCreatorAuthority,
            role: AccountRole.READONLY_SIGNER,
          }),
    ),
    context.tokenBadgeAccounts,
  );

  const instructions: Instruction[] = [
    ...context.preInstructions,
    initializePoolInstruction,
  ];
  const signers: Array<TransactionSigner | undefined> = [
    params.payer,
    params.positionNft,
  ];

  if (params.isLockLiquidity) {
    instructions.push(
      await buildPoolPermanentLockInstruction({
        creator: params.creator.address,
        creatorSigner: params.creator,
        payer: params.payer,
        pool,
        position: context.position,
        positionNftAccount: context.positionNftAccount,
        liquidityDelta: params.liquidityDelta,
      }),
    );
    signers.push(params.creator);
  }

  return {
    plan: buildTransactionPlan(instructions, signers),
    pool,
    position: context.position,
  };
}

export async function createPositionPlan(
  params: CreatePositionParams,
): Promise<KitTransactionPlan> {
  const instruction = await getCreatePositionInstructionAsync({
    owner: params.owner,
    positionNftMint: params.positionNft,
    payer: params.payer,
    pool: params.pool,
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan([instruction], [params.payer, params.positionNft]);
}

export async function swap2Plan(
  rpc: Rpc<any>,
  params: Swap2Params,
): Promise<KitTransactionPlan> {
  const amount = "amountIn" in params ? params.amountIn : params.amountOut;
  if (amount.isZero()) {
    throw new AmountIsZeroError("swap amount must be greater than 0");
  }

  const isInputTokenA = params.inputTokenMint === params.tokenAMint;
  const inputTokenProgram = isInputTokenA
    ? params.tokenAProgram
    : params.tokenBProgram;
  const outputTokenProgram = isInputTokenA
    ? params.tokenBProgram
    : params.tokenAProgram;
  const tokenOwner = params.receiver ?? params.payer.address;

  const {
    tokenAAta: inputTokenAccount,
    tokenBAta: outputTokenAccount,
    instructions: preInstructions,
  } = await prepareTokenAccounts({
    payer: params.payer,
    tokenAOwner: tokenOwner,
    tokenBOwner: tokenOwner,
    tokenAMint: params.inputTokenMint,
    tokenBMint: params.outputTokenMint,
    tokenAProgram: inputTokenProgram,
    tokenBProgram: outputTokenProgram,
  });

  let amount0: BN;
  let amount1: BN;

  if (params.swapMode === SwapMode.ExactOut) {
    amount0 = params.amountOut;
    amount1 = params.maximumAmountIn;
  } else {
    amount0 = params.amountIn;
    amount1 = params.minimumAmountOut;
  }

  if (isNativeMint(params.inputTokenMint)) {
    const wrapSource = params.receiver ?? params.payer.address;
    const wrapAmount =
      params.swapMode === SwapMode.ExactOut ? amount1 : amount0;

    preInstructions.push(
      ...wrapSolInstructions(
        wrapSource,
        params.payer,
        inputTokenAccount,
        bnToBigInt(wrapAmount),
      ),
    );
  }

  const postInstructions: Instruction[] = [];
  if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
    postInstructions.push(
      await unwrapSolInstruction(
        params.receiver ?? params.payer.address,
        params.payer,
        params.receiver ?? params.payer.address,
      ),
    );
  }

  const poolState =
    params.poolState ?? (await readServices.fetchPoolState(rpc, params.pool));
  const baseFeeData = Buffer.from(poolState.poolFees.baseFee.baseFeeInfo.data);
  const baseFeeMode = baseFeeData.readUInt8(8) as BaseFeeMode;

  let remainingAccounts: readonly AccountMeta<Address>[] = [];
  if (baseFeeMode === BaseFeeMode.RateLimiter) {
    const currentPoint = await getCurrentPoint(
      rpc,
      poolState.activationType as ActivationType,
    );
    const rateLimiter = decodePodAlignedFeeRateLimiter(baseFeeData) as {
      referenceAmount: BN;
      maxLimiterDuration: number;
      maxFeeBps: number;
      feeIncrementBps: number;
    };
    const rateLimiterApplied = isRateLimiterApplied({
      referenceAmount: rateLimiter.referenceAmount,
      maxLimiterDuration: rateLimiter.maxLimiterDuration,
      maxFeeBps: rateLimiter.maxFeeBps,
      feeIncrementBps: rateLimiter.feeIncrementBps,
      currentPoint,
      activationPoint: poolState.activationPoint,
      isAtoB: isInputTokenA,
    });

    if (rateLimiterApplied) {
      remainingAccounts = [readonlyAccountMeta(SYSVAR_INSTRUCTIONS_ADDRESS)];
    }
  }

  const swapInstruction = appendRemainingAccounts(
    await getSwap2InstructionAsync({
      poolAuthority: POOL_AUTHORITY_ADDRESS,
      pool: params.pool,
      inputTokenAccount,
      outputTokenAccount,
      tokenAVault: params.tokenAVault,
      tokenBVault: params.tokenBVault,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      payer: params.payer,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram,
      referralTokenAccount: params.referralTokenAccount ?? undefined,
      program: CP_AMM_PROGRAM_ADDRESS,
      params: {
        amount0: bnToBigInt(amount0),
        amount1: bnToBigInt(amount1),
        swapMode: params.swapMode,
      },
    }),
    remainingAccounts,
  );

  return buildTransactionPlan(
    [...preInstructions, swapInstruction, ...postInstructions],
    [params.payer],
  );
}

export async function swapPlan(
  rpc: Rpc<any>,
  params: SwapParams,
): Promise<KitTransactionPlan> {
  if (params.amountIn.isZero()) {
    throw new AmountIsZeroError("amountIn must be greater than 0");
  }

  const isInputTokenA = params.inputTokenMint === params.tokenAMint;
  const inputTokenProgram = isInputTokenA
    ? params.tokenAProgram
    : params.tokenBProgram;
  const outputTokenProgram = isInputTokenA
    ? params.tokenBProgram
    : params.tokenAProgram;
  const tokenOwner = params.receiver ?? params.payer.address;

  const {
    tokenAAta: inputTokenAccount,
    tokenBAta: outputTokenAccount,
    instructions: preInstructions,
  } = await prepareTokenAccounts({
    payer: params.payer,
    tokenAOwner: tokenOwner,
    tokenBOwner: tokenOwner,
    tokenAMint: params.inputTokenMint,
    tokenBMint: params.outputTokenMint,
    tokenAProgram: inputTokenProgram,
    tokenBProgram: outputTokenProgram,
  });

  if (isNativeMint(params.inputTokenMint)) {
    const wrapSource = params.receiver ?? params.payer.address;
    preInstructions.push(
      ...wrapSolInstructions(
        wrapSource,
        params.payer,
        inputTokenAccount,
        bnToBigInt(params.amountIn),
      ),
    );
  }

  const postInstructions: Instruction[] = [];
  if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
    postInstructions.push(
      await unwrapSolInstruction(
        params.receiver ?? params.payer.address,
        params.payer,
        params.receiver ?? params.payer.address,
      ),
    );
  }

  const poolState =
    params.poolState ?? (await readServices.fetchPoolState(rpc, params.pool));
  const baseFeeData = Buffer.from(poolState.poolFees.baseFee.baseFeeInfo.data);
  const baseFeeMode = baseFeeData.readUInt8(8) as BaseFeeMode;

  let remainingAccounts: readonly AccountMeta<Address>[] = [];
  if (baseFeeMode === BaseFeeMode.RateLimiter) {
    const currentPoint = await getCurrentPoint(
      rpc,
      poolState.activationType as ActivationType,
    );
    const rateLimiter = decodePodAlignedFeeRateLimiter(baseFeeData) as {
      referenceAmount: BN;
      maxLimiterDuration: number;
      maxFeeBps: number;
      feeIncrementBps: number;
    };
    const rateLimiterApplied = isRateLimiterApplied({
      referenceAmount: rateLimiter.referenceAmount,
      maxLimiterDuration: rateLimiter.maxLimiterDuration,
      maxFeeBps: rateLimiter.maxFeeBps,
      feeIncrementBps: rateLimiter.feeIncrementBps,
      currentPoint,
      activationPoint: poolState.activationPoint,
      isAtoB: isInputTokenA,
    });

    if (rateLimiterApplied) {
      remainingAccounts = [readonlyAccountMeta(SYSVAR_INSTRUCTIONS_ADDRESS)];
    }
  }

  const swapInstruction = appendRemainingAccounts(
    await getSwapInstructionAsync({
      poolAuthority: POOL_AUTHORITY_ADDRESS,
      pool: params.pool,
      inputTokenAccount,
      outputTokenAccount,
      tokenAVault: params.tokenAVault,
      tokenBVault: params.tokenBVault,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      payer: params.payer,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram,
      referralTokenAccount: params.referralTokenAccount ?? undefined,
      program: CP_AMM_PROGRAM_ADDRESS,
      amountIn: bnToBigInt(params.amountIn),
      minimumAmountOut: bnToBigInt(params.minimumAmountOut),
    }),
    remainingAccounts,
  );

  return buildTransactionPlan(
    [...preInstructions, swapInstruction, ...postInstructions],
    [params.payer],
  );
}
