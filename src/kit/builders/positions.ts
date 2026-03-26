import type { Address, Instruction } from "@solana/kit";
import BN from "bn.js";

import * as kitMath from "../math";
import type {
  AddLiquidityParams,
  ClosePositionParams,
  CreatePositionAndAddLiquidityParams,
  KitPoolState,
  KitTransactionPlan,
  LockPositionParams,
  MergePositionParams,
  PermanentLockPositionParams,
  RefreshVestingParams,
  RemoveAllLiquidityAndClosePositionParams,
  RemoveAllLiquidityParams,
  RemoveLiquidityParams,
  SplitPosition2Params,
  SplitPositionParams,
} from "../types";
import {
  CP_AMM_PROGRAM_ADDRESS,
  findPositionNftAccountPda,
  findPositionPda,
  findTokenAVaultPda,
  findTokenBVaultPda,
  getAddLiquidityInstructionAsync,
  getClaimPositionFeeInstructionAsync,
  getClosePositionInstructionAsync,
  getCreatePositionInstructionAsync,
  getLockInnerPositionInstructionAsync,
  getLockPositionInstructionAsync,
  getPermanentLockPositionInstructionAsync,
  getRefreshVestingInstruction,
  getRemoveAllLiquidityInstructionAsync,
  getRemoveLiquidityInstructionAsync,
  getSplitPosition2InstructionAsync,
  getSplitPositionInstructionAsync,
} from "../generated";
import {
  appendRemainingAccounts,
  bnToBigInt,
  buildTransactionPlan,
  writableAccountMeta,
} from "./common";
import {
  NATIVE_MINT_ADDRESS,
  TOKEN_2022_PROGRAM_ADDRESS,
  getTokenProgramAddress,
  isNativeMint,
  prepareTokenAccounts,
  unwrapSolInstruction,
  wrapSolInstructions,
} from "./token";
import {
  validateAddLiquidityParams,
  validateLockPositionParams,
  validateRemoveLiquidityParams,
  validateSplitPosition2Params,
  validateSplitPositionParams,
} from "./validation";

function coerceAddress(value: unknown): Address {
  return value as Address;
}

function hasNativeMint(poolState: Pick<KitPoolState, "tokenAMint" | "tokenBMint">) {
  return (
    coerceAddress(poolState.tokenAMint) === NATIVE_MINT_ADDRESS ||
    coerceAddress(poolState.tokenBMint) === NATIVE_MINT_ADDRESS
  );
}

async function buildRefreshVestingInstruction(
  params: RefreshVestingParams,
): Promise<Instruction> {
  const instruction = getRefreshVestingInstruction({
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    owner: params.owner,
  }, {
    programAddress: CP_AMM_PROGRAM_ADDRESS,
  });

  return appendRemainingAccounts(
    instruction,
    params.vestingAccounts.map((account) => writableAccountMeta(account)),
  );
}

async function buildAddLiquidityInstruction(params: {
  owner: AddLiquidityParams["owner"];
  pool: Address;
  position: Address;
  positionNftAccount: Address;
  tokenAAccount: Address;
  tokenBAccount: Address;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
  liquidityDelta: BN;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
}): Promise<Instruction> {
  return await getAddLiquidityInstructionAsync({
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    owner: params.owner,
    tokenAAccount: params.tokenAAccount,
    tokenBAccount: params.tokenBAccount,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAVault: params.tokenAVault,
    tokenBVault: params.tokenBVault,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    liquidityDelta: bnToBigInt(params.liquidityDelta),
    tokenAAmountThreshold: bnToBigInt(params.tokenAAmountThreshold),
    tokenBAmountThreshold: bnToBigInt(params.tokenBAmountThreshold),
    program: CP_AMM_PROGRAM_ADDRESS,
  });
}

async function buildRemoveLiquidityInstruction(params: {
  owner: RemoveLiquidityParams["owner"];
  pool: Address;
  position: Address;
  positionNftAccount: Address;
  tokenAAccount: Address;
  tokenBAccount: Address;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
  liquidityDelta: BN;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
}): Promise<Instruction> {
  return await getRemoveLiquidityInstructionAsync({
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    owner: params.owner,
    tokenAAccount: params.tokenAAccount,
    tokenBAccount: params.tokenBAccount,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAVault: params.tokenAVault,
    tokenBVault: params.tokenBVault,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    liquidityDelta: bnToBigInt(params.liquidityDelta),
    tokenAAmountThreshold: bnToBigInt(params.tokenAAmountThreshold),
    tokenBAmountThreshold: bnToBigInt(params.tokenBAmountThreshold),
    program: CP_AMM_PROGRAM_ADDRESS,
  });
}

async function buildRemoveAllLiquidityInstruction(params: {
  owner: RemoveLiquidityParams["owner"];
  pool: Address;
  position: Address;
  positionNftAccount: Address;
  tokenAAccount: Address;
  tokenBAccount: Address;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
}): Promise<Instruction> {
  return await getRemoveAllLiquidityInstructionAsync({
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    owner: params.owner,
    tokenAAccount: params.tokenAAccount,
    tokenBAccount: params.tokenBAccount,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAVault: params.tokenAVault,
    tokenBVault: params.tokenBVault,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    tokenAAmountThreshold: bnToBigInt(params.tokenAAmountThreshold),
    tokenBAmountThreshold: bnToBigInt(params.tokenBAmountThreshold),
    program: CP_AMM_PROGRAM_ADDRESS,
  });
}

async function buildClaimPositionFeeInstruction(params: {
  owner: RemoveLiquidityParams["owner"];
  pool: Address;
  position: Address;
  positionNftAccount: Address;
  tokenAAccount: Address;
  tokenBAccount: Address;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
}): Promise<Instruction> {
  return await getClaimPositionFeeInstructionAsync({
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    owner: params.owner,
    tokenAAccount: params.tokenAAccount,
    tokenBAccount: params.tokenBAccount,
    tokenAVault: params.tokenAVault,
    tokenBVault: params.tokenBVault,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    program: CP_AMM_PROGRAM_ADDRESS,
  });
}

async function buildClosePositionInstruction(
  params: ClosePositionParams,
): Promise<Instruction> {
  return await getClosePositionInstructionAsync({
    positionNftMint: params.positionNftMint,
    positionNftAccount: params.positionNftAccount,
    pool: params.pool,
    position: params.position,
    rentReceiver: params.owner.address,
    owner: params.owner,
    tokenProgram: TOKEN_2022_PROGRAM_ADDRESS,
    program: CP_AMM_PROGRAM_ADDRESS,
  });
}

async function buildLiquidatePositionInstructions(params: {
  owner: RemoveLiquidityParams["owner"];
  pool: Address;
  position: Address;
  positionNftAccount: Address;
  positionNftMint: Address;
  poolState: KitPoolState;
  tokenAAccount: Address;
  tokenBAccount: Address;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
}): Promise<readonly Instruction[]> {
  const tokenAProgram = getTokenProgramAddress(params.poolState.tokenAFlag);
  const tokenBProgram = getTokenProgramAddress(params.poolState.tokenBFlag);

  const claimPositionFeeInstruction = await buildClaimPositionFeeInstruction({
    owner: params.owner,
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    tokenAAccount: params.tokenAAccount,
    tokenBAccount: params.tokenBAccount,
    tokenAMint: coerceAddress(params.poolState.tokenAMint),
    tokenBMint: coerceAddress(params.poolState.tokenBMint),
    tokenAVault: coerceAddress(params.poolState.tokenAVault),
    tokenBVault: coerceAddress(params.poolState.tokenBVault),
    tokenAProgram,
    tokenBProgram,
  });

  const removeAllLiquidityInstruction = await buildRemoveAllLiquidityInstruction({
    owner: params.owner,
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    tokenAAccount: params.tokenAAccount,
    tokenBAccount: params.tokenBAccount,
    tokenAMint: coerceAddress(params.poolState.tokenAMint),
    tokenBMint: coerceAddress(params.poolState.tokenBMint),
    tokenAVault: coerceAddress(params.poolState.tokenAVault),
    tokenBVault: coerceAddress(params.poolState.tokenBVault),
    tokenAProgram,
    tokenBProgram,
    tokenAAmountThreshold: params.tokenAAmountThreshold,
    tokenBAmountThreshold: params.tokenBAmountThreshold,
  });

  const closePositionInstruction = await buildClosePositionInstruction({
    owner: params.owner,
    pool: params.pool,
    position: params.position,
    positionNftMint: params.positionNftMint,
    positionNftAccount: params.positionNftAccount,
  });

  return [
    claimPositionFeeInstruction,
    removeAllLiquidityInstruction,
    closePositionInstruction,
  ];
}

export async function addLiquidityPlan(
  params: AddLiquidityParams,
): Promise<KitTransactionPlan> {
  validateAddLiquidityParams(params.liquidityDelta);

  const {
    tokenAAta: tokenAAccount,
    tokenBAta: tokenBAccount,
    instructions,
  } = await prepareTokenAccounts({
    payer: params.owner,
    tokenAOwner: params.owner.address,
    tokenBOwner: params.owner.address,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
  });

  const preInstructions = [...instructions];
  if (isNativeMint(params.tokenAMint)) {
    preInstructions.push(
      ...wrapSolInstructions(
        params.owner.address,
        params.owner,
        tokenAAccount,
        bnToBigInt(params.maxAmountTokenA),
      ),
    );
  }

  if (isNativeMint(params.tokenBMint)) {
    preInstructions.push(
      ...wrapSolInstructions(
        params.owner.address,
        params.owner,
        tokenBAccount,
        bnToBigInt(params.maxAmountTokenB),
      ),
    );
  }

  const addLiquidityInstruction = await buildAddLiquidityInstruction({
    owner: params.owner,
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    tokenAAccount,
    tokenBAccount,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAVault: params.tokenAVault,
    tokenBVault: params.tokenBVault,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    liquidityDelta: params.liquidityDelta,
    tokenAAmountThreshold: params.tokenAAmountThreshold,
    tokenBAmountThreshold: params.tokenBAmountThreshold,
  });

  const postInstructions: Instruction[] = [];
  if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
    postInstructions.push(
      await unwrapSolInstruction(params.owner.address, params.owner),
    );
  }

  return buildTransactionPlan(
    [...preInstructions, addLiquidityInstruction, ...postInstructions],
    [params.owner],
  );
}

export async function createPositionAndAddLiquidityPlan(
  params: CreatePositionAndAddLiquidityParams,
): Promise<KitTransactionPlan> {
  const {
    tokenAAta: tokenAAccount,
    tokenBAta: tokenBAccount,
    instructions,
  } = await prepareTokenAccounts({
    payer: params.owner,
    tokenAOwner: params.owner.address,
    tokenBOwner: params.owner.address,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
  });

  const [position] = await findPositionPda({
    positionNftMint: params.positionNft.address,
  });
  const [positionNftAccount] = await findPositionNftAccountPda({
    positionNftMint: params.positionNft.address,
  });
  const [tokenAVault, tokenBVault] = await Promise.all([
    findTokenAVaultPda({
      tokenAMint: params.tokenAMint,
      pool: params.pool,
    }).then(([vault]) => vault),
    findTokenBVaultPda({
      tokenBMint: params.tokenBMint,
      pool: params.pool,
    }).then(([vault]) => vault),
  ]);

  const preInstructions = [...instructions];
  if (isNativeMint(params.tokenAMint)) {
    preInstructions.push(
      ...wrapSolInstructions(
        params.owner.address,
        params.owner,
        tokenAAccount,
        bnToBigInt(params.maxAmountTokenA),
      ),
    );
  }

  if (isNativeMint(params.tokenBMint)) {
    preInstructions.push(
      ...wrapSolInstructions(
        params.owner.address,
        params.owner,
        tokenBAccount,
        bnToBigInt(params.maxAmountTokenB),
      ),
    );
  }

  const createPositionInstruction = await getCreatePositionInstructionAsync({
    owner: params.owner.address,
    positionNftMint: params.positionNft,
    positionNftAccount,
    pool: params.pool,
    position,
    payer: params.owner,
    tokenProgram: TOKEN_2022_PROGRAM_ADDRESS,
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  const addLiquidityInstruction = await buildAddLiquidityInstruction({
    owner: params.owner,
    pool: params.pool,
    position,
    positionNftAccount,
    tokenAAccount,
    tokenBAccount,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAVault,
    tokenBVault,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    liquidityDelta: params.liquidityDelta,
    tokenAAmountThreshold: params.tokenAAmountThreshold,
    tokenBAmountThreshold: params.tokenBAmountThreshold,
  });

  const postInstructions: Instruction[] = [];
  if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
    postInstructions.push(
      await unwrapSolInstruction(params.owner.address, params.owner),
    );
  }

  return buildTransactionPlan(
    [
      createPositionInstruction,
      ...preInstructions,
      addLiquidityInstruction,
      ...postInstructions,
    ],
    [params.owner, params.positionNft],
  );
}

export async function removeLiquidityPlan(
  params: RemoveLiquidityParams,
): Promise<KitTransactionPlan> {
  validateRemoveLiquidityParams(params.liquidityDelta);

  const {
    tokenAAta: tokenAAccount,
    tokenBAta: tokenBAccount,
    instructions,
  } = await prepareTokenAccounts({
    payer: params.owner,
    tokenAOwner: params.owner.address,
    tokenBOwner: params.owner.address,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
  });

  const preInstructions = [...instructions];
  if (params.vestings.length > 0) {
    preInstructions.push(
      await buildRefreshVestingInstruction({
        owner: params.owner.address,
        position: params.position,
        positionNftAccount: params.positionNftAccount,
        pool: params.pool,
        vestingAccounts: params.vestings.map(({ account }) => account),
      }),
    );
  }

  const removeLiquidityInstruction = await buildRemoveLiquidityInstruction({
    owner: params.owner,
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    tokenAAccount,
    tokenBAccount,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAVault: params.tokenAVault,
    tokenBVault: params.tokenBVault,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    liquidityDelta: params.liquidityDelta,
    tokenAAmountThreshold: params.tokenAAmountThreshold,
    tokenBAmountThreshold: params.tokenBAmountThreshold,
  });

  const postInstructions: Instruction[] = [];
  if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
    postInstructions.push(
      await unwrapSolInstruction(params.owner.address, params.owner),
    );
  }

  return buildTransactionPlan(
    [...preInstructions, removeLiquidityInstruction, ...postInstructions],
    [params.owner],
  );
}

export async function removeAllLiquidityPlan(
  params: RemoveAllLiquidityParams,
): Promise<KitTransactionPlan> {
  const {
    tokenAAta: tokenAAccount,
    tokenBAta: tokenBAccount,
    instructions,
  } = await prepareTokenAccounts({
    payer: params.owner,
    tokenAOwner: params.owner.address,
    tokenBOwner: params.owner.address,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
  });

  const preInstructions = [...instructions];
  if (params.vestings.length > 0) {
    preInstructions.push(
      await buildRefreshVestingInstruction({
        owner: params.owner.address,
        position: params.position,
        positionNftAccount: params.positionNftAccount,
        pool: params.pool,
        vestingAccounts: params.vestings.map(({ account }) => account),
      }),
    );
  }

  const removeAllLiquidityInstruction = await buildRemoveAllLiquidityInstruction({
    owner: params.owner,
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    tokenAAccount,
    tokenBAccount,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAVault: params.tokenAVault,
    tokenBVault: params.tokenBVault,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    tokenAAmountThreshold: params.tokenAAmountThreshold,
    tokenBAmountThreshold: params.tokenBAmountThreshold,
  });

  const postInstructions: Instruction[] = [];
  if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
    postInstructions.push(
      await unwrapSolInstruction(params.owner.address, params.owner),
    );
  }

  return buildTransactionPlan(
    [...preInstructions, removeAllLiquidityInstruction, ...postInstructions],
    [params.owner],
  );
}

export async function lockPositionPlan(
  params: LockPositionParams,
): Promise<KitTransactionPlan> {
  validateLockPositionParams({
    numberOfPeriod: params.numberOfPeriod,
    periodFrequency: params.periodFrequency,
    cliffUnlockLiquidity: params.cliffUnlockLiquidity,
    liquidityPerPeriod: params.liquidityPerPeriod,
  });

  const vestingParams = {
    cliffPoint: params.cliffPoint,
    periodFrequency: bnToBigInt(params.periodFrequency),
    cliffUnlockLiquidity: bnToBigInt(params.cliffUnlockLiquidity),
    liquidityPerPeriod: bnToBigInt(params.liquidityPerPeriod),
    numberOfPeriod: params.numberOfPeriod,
  };

  if ("innerPosition" in params && params.innerPosition) {
    const instruction = await getLockInnerPositionInstructionAsync({
      pool: params.pool,
      position: params.position,
      positionNftAccount: params.positionNftAccount,
      owner: params.owner,
      params: {
        cliffPoint: params.cliffPoint ? bnToBigInt(params.cliffPoint) : null,
        periodFrequency: bnToBigInt(params.periodFrequency),
        cliffUnlockLiquidity: bnToBigInt(params.cliffUnlockLiquidity),
        liquidityPerPeriod: bnToBigInt(params.liquidityPerPeriod),
        numberOfPeriod: params.numberOfPeriod,
      },
      program: CP_AMM_PROGRAM_ADDRESS,
    });

    return buildTransactionPlan([instruction], [params.owner]);
  }

  const instruction = await getLockPositionInstructionAsync({
    pool: params.pool,
    position: params.position,
    vesting: params.vestingAccount,
    positionNftAccount: params.positionNftAccount,
    owner: params.owner,
    payer: params.payer,
    params: {
      cliffPoint: vestingParams.cliffPoint
        ? bnToBigInt(vestingParams.cliffPoint)
        : null,
      periodFrequency: vestingParams.periodFrequency,
      cliffUnlockLiquidity: vestingParams.cliffUnlockLiquidity,
      liquidityPerPeriod: vestingParams.liquidityPerPeriod,
      numberOfPeriod: vestingParams.numberOfPeriod,
    },
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan(
    [instruction],
    [params.owner, params.payer, params.vestingAccount],
  );
}

export async function permanentLockPositionPlan(
  params: PermanentLockPositionParams,
): Promise<KitTransactionPlan> {
  const instruction = await getPermanentLockPositionInstructionAsync({
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    owner: params.owner,
    permanentLockLiquidity: bnToBigInt(params.unlockedLiquidity),
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan([instruction], [params.owner]);
}

export async function refreshVestingPlan(
  params: RefreshVestingParams,
): Promise<KitTransactionPlan> {
  return buildTransactionPlan(
    [await buildRefreshVestingInstruction(params)],
    [],
  );
}

export async function closePositionPlan(
  params: ClosePositionParams,
): Promise<KitTransactionPlan> {
  return buildTransactionPlan(
    [await buildClosePositionInstruction(params)],
    [params.owner],
  );
}

export async function removeAllLiquidityAndClosePositionPlan(
  params: RemoveAllLiquidityAndClosePositionParams,
): Promise<KitTransactionPlan> {
  const { canUnlock, reason } = kitMath.canUnlockPosition(
    params.positionState,
    params.vestings,
    params.currentPoint,
  );

  if (!canUnlock) {
    throw new Error(`Cannot remove liquidity: ${reason}`);
  }

  const tokenAProgram = getTokenProgramAddress(params.poolState.tokenAFlag);
  const tokenBProgram = getTokenProgramAddress(params.poolState.tokenBFlag);

  const {
    tokenAAta: tokenAAccount,
    tokenBAta: tokenBAccount,
    instructions,
  } = await prepareTokenAccounts({
    payer: params.owner,
    tokenAOwner: params.owner.address,
    tokenBOwner: params.owner.address,
    tokenAMint: coerceAddress(params.poolState.tokenAMint),
    tokenBMint: coerceAddress(params.poolState.tokenBMint),
    tokenAProgram,
    tokenBProgram,
  });

  const preInstructions = [...instructions];
  if (params.vestings.length > 0) {
    preInstructions.push(
      await buildRefreshVestingInstruction({
        owner: params.owner.address,
        position: params.position,
        positionNftAccount: params.positionNftAccount,
        pool: coerceAddress(params.positionState.pool),
        vestingAccounts: params.vestings.map(({ account }) => account),
      }),
    );
  }

  const liquidatePositionInstructions = await buildLiquidatePositionInstructions({
    owner: params.owner,
    pool: coerceAddress(params.positionState.pool),
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    positionNftMint: coerceAddress(params.positionState.nftMint),
    poolState: params.poolState,
    tokenAAccount,
    tokenBAccount,
    tokenAAmountThreshold: params.tokenAAmountThreshold,
    tokenBAmountThreshold: params.tokenBAmountThreshold,
  });

  const postInstructions: Instruction[] = [];
  if (hasNativeMint(params.poolState)) {
    postInstructions.push(
      await unwrapSolInstruction(params.owner.address, params.owner),
    );
  }

  return buildTransactionPlan(
    [
      ...preInstructions,
      ...liquidatePositionInstructions,
      ...postInstructions,
    ],
    [params.owner],
  );
}

export async function mergePositionPlan(
  params: MergePositionParams,
): Promise<KitTransactionPlan> {
  const { canUnlock, reason } = kitMath.canUnlockPosition(
    params.positionBState,
    params.positionBVestings,
    params.currentPoint,
  );

  if (!canUnlock) {
    throw new Error(`Cannot remove liquidity: ${reason}`);
  }

  const tokenAProgram = getTokenProgramAddress(params.poolState.tokenAFlag);
  const tokenBProgram = getTokenProgramAddress(params.poolState.tokenBFlag);

  const {
    tokenAAta: tokenAAccount,
    tokenBAta: tokenBAccount,
    instructions,
  } = await prepareTokenAccounts({
    payer: params.owner,
    tokenAOwner: params.owner.address,
    tokenBOwner: params.owner.address,
    tokenAMint: coerceAddress(params.poolState.tokenAMint),
    tokenBMint: coerceAddress(params.poolState.tokenBMint),
    tokenAProgram,
    tokenBProgram,
  });

  const preInstructions = [...instructions];
  let positionBLiquidityDelta = params.positionBState.unlockedLiquidity;
  if (params.positionBVestings.length > 0) {
    const totalAvailableVestingLiquidity = params.positionBVestings.reduce(
      (total, vesting) =>
        total.add(
          kitMath.getAvailableVestingLiquidity(
            vesting.vestingState,
            params.currentPoint,
          ),
        ),
      new BN(0),
    );

    positionBLiquidityDelta = positionBLiquidityDelta.add(
      totalAvailableVestingLiquidity,
    );

    preInstructions.push(
      await buildRefreshVestingInstruction({
        owner: params.owner.address,
        position: params.positionB,
        positionNftAccount: params.positionBNftAccount,
        pool: coerceAddress(params.positionBState.pool),
        vestingAccounts: params.positionBVestings.map(({ account }) => account),
      }),
    );
  }

  const withdrawQuote = kitMath.getWithdrawQuote({
    liquidityDelta: positionBLiquidityDelta,
    minSqrtPrice: params.poolState.sqrtMinPrice,
    maxSqrtPrice: params.poolState.sqrtMaxPrice,
    sqrtPrice: params.poolState.sqrtPrice,
    collectFeeMode: params.poolState.collectFeeMode,
    tokenAAmount: params.poolState.tokenAAmount,
    tokenBAmount: params.poolState.tokenBAmount,
    liquidity: params.poolState.liquidity,
  });

  const newLiquidityDelta = kitMath.getLiquidityDelta({
    maxAmountTokenA: withdrawQuote.outAmountA,
    maxAmountTokenB: withdrawQuote.outAmountB,
    sqrtMaxPrice: params.poolState.sqrtMaxPrice,
    sqrtMinPrice: params.poolState.sqrtMinPrice,
    sqrtPrice: params.poolState.sqrtPrice,
    collectFeeMode: params.poolState.collectFeeMode,
    tokenAAmount: params.poolState.tokenAAmount,
    tokenBAmount: params.poolState.tokenBAmount,
    liquidity: params.poolState.liquidity,
  });

  const liquidatePositionInstructions = await buildLiquidatePositionInstructions({
    owner: params.owner,
    pool: coerceAddress(params.positionBState.pool),
    position: params.positionB,
    positionNftAccount: params.positionBNftAccount,
    positionNftMint: coerceAddress(params.positionBState.nftMint),
    poolState: params.poolState,
    tokenAAccount,
    tokenBAccount,
    tokenAAmountThreshold: params.tokenAAmountRemoveLiquidityThreshold,
    tokenBAmountThreshold: params.tokenBAmountRemoveLiquidityThreshold,
  });

  const addLiquidityInstruction = await buildAddLiquidityInstruction({
    owner: params.owner,
    pool: coerceAddress(params.positionBState.pool),
    position: params.positionA,
    positionNftAccount: params.positionANftAccount,
    tokenAAccount,
    tokenBAccount,
    tokenAMint: coerceAddress(params.poolState.tokenAMint),
    tokenBMint: coerceAddress(params.poolState.tokenBMint),
    tokenAVault: coerceAddress(params.poolState.tokenAVault),
    tokenBVault: coerceAddress(params.poolState.tokenBVault),
    tokenAProgram,
    tokenBProgram,
    liquidityDelta: newLiquidityDelta,
    tokenAAmountThreshold: params.tokenAAmountAddLiquidityThreshold,
    tokenBAmountThreshold: params.tokenBAmountAddLiquidityThreshold,
  });

  const postInstructions: Instruction[] = [];
  if (hasNativeMint(params.poolState)) {
    postInstructions.push(
      await unwrapSolInstruction(params.owner.address, params.owner),
    );
  }

  return buildTransactionPlan(
    [
      ...preInstructions,
      ...liquidatePositionInstructions,
      addLiquidityInstruction,
      ...postInstructions,
    ],
    [params.owner],
  );
}

export async function splitPositionPlan(
  params: SplitPositionParams,
): Promise<KitTransactionPlan> {
  validateSplitPositionParams({
    permanentLockedLiquidityPercentage:
      params.permanentLockedLiquidityPercentage,
    unlockedLiquidityPercentage: params.unlockedLiquidityPercentage,
    feeAPercentage: params.feeAPercentage,
    feeBPercentage: params.feeBPercentage,
    reward0Percentage: params.reward0Percentage,
    reward1Percentage: params.reward1Percentage,
    innerVestingLiquidityPercentage: params.innerVestingLiquidityPercentage,
  });

  const instruction = await getSplitPositionInstructionAsync({
    pool: params.pool,
    firstPosition: params.firstPosition,
    firstPositionNftAccount: params.firstPositionNftAccount,
    secondPosition: params.secondPosition,
    secondPositionNftAccount: params.secondPositionNftAccount,
    firstOwner: params.firstPositionOwner,
    secondOwner: params.secondPositionOwner,
    unlockedLiquidityPercentage: params.unlockedLiquidityPercentage,
    permanentLockedLiquidityPercentage:
      params.permanentLockedLiquidityPercentage,
    feeAPercentage: params.feeAPercentage,
    feeBPercentage: params.feeBPercentage,
    reward0Percentage: params.reward0Percentage,
    reward1Percentage: params.reward1Percentage,
    innerVestingLiquidityPercentage: params.innerVestingLiquidityPercentage,
    padding: new Uint8Array(15),
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan(
    [instruction],
    [params.firstPositionOwner, params.secondPositionOwner],
  );
}

export async function splitPosition2Plan(
  params: SplitPosition2Params,
): Promise<KitTransactionPlan> {
  validateSplitPosition2Params(params.numerator);

  const instruction = await getSplitPosition2InstructionAsync({
    pool: params.pool,
    firstPosition: params.firstPosition,
    firstPositionNftAccount: params.firstPositionNftAccount,
    secondPosition: params.secondPosition,
    secondPositionNftAccount: params.secondPositionNftAccount,
    firstOwner: params.firstPositionOwner,
    secondOwner: params.secondPositionOwner,
    numerator: params.numerator,
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan(
    [instruction],
    [params.firstPositionOwner, params.secondPositionOwner],
  );
}
