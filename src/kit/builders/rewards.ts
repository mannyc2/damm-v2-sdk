import { type Address, type Instruction, type Rpc } from "@solana/kit";
import BN from "bn.js";

import { AmountIsZeroError } from "../../errors";
import * as readServices from "../services";
import type {
  ClaimPositionFee2Params,
  ClaimPositionFeeParams,
  ClaimRewardParams,
  FundRewardParams,
  InitializeAndFundRewardParams,
  InitializeRewardParams,
  KitTransactionPlan,
  UpdateRewardDurationParams,
  UpdateRewardFunderParams,
  WithdrawIneligibleRewardParams,
} from "../types";
import {
  CP_AMM_PROGRAM_ADDRESS,
  findRewardVaultPda,
  getClaimPositionFeeInstructionAsync,
  getClaimRewardInstructionAsync,
  getFundRewardInstructionAsync,
  getInitializeRewardInstructionAsync,
  getUpdateRewardDurationInstructionAsync,
  getUpdateRewardFunderInstructionAsync,
  getWithdrawIneligibleRewardInstructionAsync,
} from "../generated";
import {
  appendRemainingAccounts,
  bnToBigInt,
  buildTransactionPlan,
  readonlyAccountMeta,
} from "./common";
import { deriveOperatorAddress, deriveTokenBadgeAddress } from "./pda";
import {
  NATIVE_MINT_ADDRESS,
  getOrCreateAssociatedTokenInstruction,
  getTokenProgramAddress,
  isNativeMint,
  prepareTokenAccounts,
  unwrapSolInstruction,
  wrapSolInstructions,
} from "./token";
import { validateRewardDuration, validateRewardIndex } from "./validation";

function coerceAddress(value: unknown): Address {
  return value as Address;
}

function unwrapRpcValue<T>(response: unknown): T {
  return response && typeof response === "object" && "value" in response
    ? ((response as { value: T }).value as T)
    : (response as T);
}

async function accountExists(rpc: Rpc<any>, account: Address): Promise<boolean> {
  const accountInfo = unwrapRpcValue<unknown>(
    await (rpc as any).getAccountInfo(account, { encoding: "base64" }).send(),
  );

  return accountInfo !== null;
}

async function buildClaimPositionFeeInstruction(params: {
  owner: ClaimPositionFeeParams["owner"];
  position: Address;
  pool: Address;
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
    owner: params.owner,
    pool: params.pool,
    position: params.position,
    positionNftAccount: params.positionNftAccount,
    tokenAAccount: params.tokenAAccount,
    tokenBAccount: params.tokenBAccount,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAVault: params.tokenAVault,
    tokenBVault: params.tokenBVault,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
    program: CP_AMM_PROGRAM_ADDRESS,
  });
}

async function setupFeeClaimAccounts(params: {
  payer: ClaimPositionFeeParams["owner"];
  owner: ClaimPositionFeeParams["owner"];
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
  receiver?: Address;
  tempWSolAccount?: ClaimPositionFeeParams["tempWSolAccount"];
}): Promise<{
  tokenAAccount: Address;
  tokenBAccount: Address;
  preInstructions: Instruction[];
  postInstructions: Instruction[];
}> {
  const tokenAIsSol = isNativeMint(params.tokenAMint);
  const tokenBIsSol = isNativeMint(params.tokenBMint);
  const hasSolToken = tokenAIsSol || tokenBIsSol;

  let tokenAOwner = params.owner.address;
  let tokenBOwner = params.owner.address;
  if (params.receiver) {
    tokenAOwner = tokenAIsSol
      ? params.tempWSolAccount?.address ?? params.owner.address
      : params.receiver;
    tokenBOwner = tokenBIsSol
      ? params.tempWSolAccount?.address ?? params.owner.address
      : params.receiver;
  }

  const {
    tokenAAta: tokenAAccount,
    tokenBAta: tokenBAccount,
    instructions,
  } = await prepareTokenAccounts({
    payer: params.payer,
    tokenAOwner,
    tokenBOwner,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
  });

  const postInstructions: Instruction[] = [];
  if (hasSolToken) {
    postInstructions.push(
      await unwrapSolInstruction(
        params.tempWSolAccount?.address ?? params.owner.address,
        params.tempWSolAccount ?? params.owner,
        params.receiver ?? params.owner.address,
      ),
    );
  }

  return {
    tokenAAccount,
    tokenBAccount,
    preInstructions: instructions,
    postInstructions,
  };
}

export async function claimPositionFeePlan(
  params: ClaimPositionFeeParams,
): Promise<KitTransactionPlan> {
  const payer = params.feePayer ?? params.owner;
  const { tokenAAccount, tokenBAccount, preInstructions, postInstructions } =
    await setupFeeClaimAccounts({
      payer,
      owner: params.owner,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram,
      receiver: params.receiver,
      tempWSolAccount: params.tempWSolAccount,
    });

  const claimPositionFeeInstruction = await buildClaimPositionFeeInstruction({
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
  });

  return buildTransactionPlan(
    [...preInstructions, claimPositionFeeInstruction, ...postInstructions],
    [params.owner, params.feePayer, params.tempWSolAccount],
  );
}

export async function claimPositionFee2Plan(
  params: ClaimPositionFee2Params,
): Promise<KitTransactionPlan> {
  const payer = params.feePayer ?? params.owner;

  let tokenAOwner = params.receiver;
  let tokenBOwner = params.receiver;
  if (isNativeMint(params.tokenAMint)) {
    tokenAOwner = params.owner.address;
  }

  if (isNativeMint(params.tokenBMint)) {
    tokenBOwner = params.owner.address;
  }

  const {
    tokenAAta: tokenAAccount,
    tokenBAta: tokenBAccount,
    instructions,
  } = await prepareTokenAccounts({
    payer,
    tokenAOwner,
    tokenBOwner,
    tokenAMint: params.tokenAMint,
    tokenBMint: params.tokenBMint,
    tokenAProgram: params.tokenAProgram,
    tokenBProgram: params.tokenBProgram,
  });

  const postInstructions: Instruction[] = [];
  if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
    postInstructions.push(
      await unwrapSolInstruction(
        params.owner.address,
        params.owner,
        params.receiver,
      ),
    );
  }

  const claimPositionFeeInstruction = await buildClaimPositionFeeInstruction({
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
  });

  return buildTransactionPlan(
    [...instructions, claimPositionFeeInstruction, ...postInstructions],
    [params.owner, params.feePayer],
  );
}

export async function initializeRewardPlan(
  rpc: Rpc<any>,
  params: InitializeRewardParams,
): Promise<KitTransactionPlan> {
  validateRewardIndex(params.rewardIndex);
  validateRewardDuration(params.rewardDuration);

  const [rewardVault] = await findRewardVaultPda({
    pool: params.pool,
    rewardIndex: params.rewardIndex,
  });
  const [tokenBadge, operator] = await Promise.all([
    deriveTokenBadgeAddress(params.rewardMint),
    deriveOperatorAddress(params.creator.address),
  ]);
  const [tokenBadgeExists, operatorExists] = await Promise.all([
    accountExists(rpc, tokenBadge),
    accountExists(rpc, operator),
  ]);

  const remainingAccounts = [
    readonlyAccountMeta(
      tokenBadgeExists ? tokenBadge : CP_AMM_PROGRAM_ADDRESS,
    ),
    ...(operatorExists ? [readonlyAccountMeta(operator)] : []),
  ];

  const instruction = appendRemainingAccounts(
    await getInitializeRewardInstructionAsync({
      pool: params.pool,
      rewardVault,
      rewardMint: params.rewardMint,
      signer: params.creator,
      payer: params.payer,
      tokenProgram: params.rewardMintProgram,
      rewardIndex: params.rewardIndex,
      rewardDuration: bnToBigInt(params.rewardDuration),
      funder: params.funder,
      program: CP_AMM_PROGRAM_ADDRESS,
    }),
    remainingAccounts,
  );

  return buildTransactionPlan([instruction], [params.creator, params.payer]);
}

export async function fundRewardPlan(
  params: FundRewardParams,
): Promise<KitTransactionPlan> {
  validateRewardIndex(params.rewardIndex);
  if (params.amount.isZero()) {
    throw new AmountIsZeroError("fund reward amount must be greater than 0");
  }

  const {
    ata: funderTokenAccount,
    instruction: createFunderTokenAccountInstruction,
  } = await getOrCreateAssociatedTokenInstruction(
    params.rewardMint,
    params.funder.address,
    params.funder,
    params.rewardMintProgram,
  );

  const preInstructions = [createFunderTokenAccountInstruction];
  if (params.rewardMint === NATIVE_MINT_ADDRESS) {
    preInstructions.push(
      ...wrapSolInstructions(
        params.funder.address,
        params.funder,
        funderTokenAccount,
        bnToBigInt(params.amount),
      ),
    );
  }

  const instruction = await getFundRewardInstructionAsync({
    pool: params.pool,
    rewardVault: params.rewardVault,
    rewardMint: params.rewardMint,
    funderTokenAccount,
    funder: params.funder,
    tokenProgram: params.rewardMintProgram,
    rewardIndex: params.rewardIndex,
    amount: bnToBigInt(params.amount),
    carryForward: params.carryForward,
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan(
    [...preInstructions, instruction],
    [params.funder],
  );
}

export async function initializeAndFundRewardPlan(
  rpc: Rpc<any>,
  params: InitializeAndFundRewardParams,
): Promise<KitTransactionPlan> {
  const [rewardVault] = await findRewardVaultPda({
    pool: params.pool,
    rewardIndex: params.rewardIndex,
  });
  const initializeReward = await initializeRewardPlan(rpc, {
    rewardIndex: params.rewardIndex,
    rewardDuration: params.rewardDuration,
    pool: params.pool,
    rewardMint: params.rewardMint,
    funder: params.payer.address,
    payer: params.payer,
    creator: params.creator,
    rewardMintProgram: params.rewardMintProgram,
  });
  const fundReward = await fundRewardPlan({
    rewardIndex: params.rewardIndex,
    pool: params.pool,
    carryForward: params.carryForward,
    amount: params.amount,
    rewardMint: params.rewardMint,
    rewardVault,
    rewardMintProgram: params.rewardMintProgram,
    funder: params.payer,
  });

  return buildTransactionPlan(
    [...initializeReward.instructions, ...fundReward.instructions],
    [params.creator, params.payer],
  );
}

export async function updateRewardDurationPlan(
  params: UpdateRewardDurationParams,
): Promise<KitTransactionPlan> {
  validateRewardIndex(params.rewardIndex);
  validateRewardDuration(params.newDuration);

  const instruction = await getUpdateRewardDurationInstructionAsync({
    pool: params.pool,
    signer: params.signer,
    rewardIndex: params.rewardIndex,
    newDuration: bnToBigInt(params.newDuration),
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan([instruction], [params.signer]);
}

export async function updateRewardFunderPlan(
  params: UpdateRewardFunderParams,
): Promise<KitTransactionPlan> {
  validateRewardIndex(params.rewardIndex);

  const instruction = await getUpdateRewardFunderInstructionAsync({
    pool: params.pool,
    signer: params.signer,
    rewardIndex: params.rewardIndex,
    newFunder: params.newFunder,
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan([instruction], [params.signer]);
}

export async function withdrawIneligibleRewardPlan(
  rpc: Rpc<any>,
  params: WithdrawIneligibleRewardParams,
): Promise<KitTransactionPlan> {
  validateRewardIndex(params.rewardIndex);

  const poolState = await readServices.fetchPoolState(rpc, params.pool);
  const rewardInfo = poolState.rewardInfos[params.rewardIndex];
  const rewardMint = coerceAddress(rewardInfo.mint);
  const rewardVault = coerceAddress(rewardInfo.vault);
  const tokenProgram = getTokenProgramAddress(rewardInfo.rewardTokenFlag);

  const {
    ata: funderTokenAccount,
    instruction: createFunderTokenAccountInstruction,
  } = await getOrCreateAssociatedTokenInstruction(
    rewardMint,
    params.funder.address,
    params.funder,
    tokenProgram,
  );

  const preInstructions = [createFunderTokenAccountInstruction];
  const postInstructions: Instruction[] = [];
  if (rewardMint === NATIVE_MINT_ADDRESS) {
    postInstructions.push(
      await unwrapSolInstruction(params.funder.address, params.funder),
    );
  }

  const instruction = await getWithdrawIneligibleRewardInstructionAsync({
    pool: params.pool,
    rewardVault,
    rewardMint,
    funderTokenAccount,
    funder: params.funder,
    tokenProgram,
    rewardIndex: params.rewardIndex,
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan(
    [...preInstructions, instruction, ...postInstructions],
    [params.funder],
  );
}

export async function claimRewardPlan(
  params: ClaimRewardParams,
): Promise<KitTransactionPlan> {
  validateRewardIndex(params.rewardIndex);

  const rewardInfo = params.poolState.rewardInfos[params.rewardIndex];
  const rewardMint = coerceAddress(rewardInfo.mint);
  const rewardVault = coerceAddress(rewardInfo.vault);
  const tokenProgram = getTokenProgramAddress(rewardInfo.rewardTokenFlag);
  const payer = params.feePayer ?? params.user;

  const {
    ata: userTokenAccount,
    instruction: createUserTokenAccountInstruction,
  } = await getOrCreateAssociatedTokenInstruction(
    rewardMint,
    params.user.address,
    payer,
    tokenProgram,
  );

  const preInstructions = [createUserTokenAccountInstruction];
  const postInstructions: Instruction[] = [];
  if (rewardMint === NATIVE_MINT_ADDRESS) {
    postInstructions.push(
      await unwrapSolInstruction(params.user.address, params.user),
    );
  }

  const instruction = await getClaimRewardInstructionAsync({
    pool: coerceAddress(params.positionState.pool),
    position: params.position,
    rewardVault,
    rewardMint,
    userTokenAccount,
    positionNftAccount: params.positionNftAccount,
    owner: params.user,
    tokenProgram,
    rewardIndex: params.rewardIndex,
    skipReward: params.isSkipReward ? 1 : 0,
    program: CP_AMM_PROGRAM_ADDRESS,
  });

  return buildTransactionPlan(
    [...preInstructions, instruction, ...postInstructions],
    [params.user, params.feePayer],
  );
}
