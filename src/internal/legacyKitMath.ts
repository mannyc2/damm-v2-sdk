import { PublicKey } from "@solana/web3.js";
import type BN from "bn.js";

import { CpAmm } from "../CpAmm";
import type {
  KitDepositQuote,
  KitGetDepositQuoteParams,
  KitGetQuote2Params,
  KitGetQuoteParams,
  KitGetWithdrawQuoteParams,
  KitLiquidityDeltaParams,
  KitPoolState,
  KitPositionState,
  KitQuote,
  KitQuote2Result,
  KitVestingSnapshot,
  KitWithdrawQuote,
} from "../kit/types";
import { toLegacyState } from "./legacyKitState";

const legacyMathClient = Object.create(CpAmm.prototype) as CpAmm;

function toPublicKey(address: string): PublicKey {
  return new PublicKey(address);
}

function toLegacyVestings(vestings: readonly KitVestingSnapshot[]) {
  return vestings.map(({ account, vestingState }) => ({
    account: toPublicKey(account),
    vestingState: toLegacyState(vestingState),
  }));
}

export function getQuote(params: KitGetQuoteParams): KitQuote {
  return legacyMathClient.getQuote({
    ...params,
    inputTokenMint: toPublicKey(params.inputTokenMint),
    poolState: toLegacyState(params.poolState),
  });
}

export function getQuote2(params: KitGetQuote2Params): KitQuote2Result {
  return legacyMathClient.getQuote2({
    ...params,
    inputTokenMint: toPublicKey(params.inputTokenMint),
    poolState: toLegacyState(params.poolState),
  });
}

export function getDepositQuote(
  params: KitGetDepositQuoteParams,
): KitDepositQuote {
  return legacyMathClient.getDepositQuote(params);
}

export function getWithdrawQuote(
  params: KitGetWithdrawQuoteParams,
): KitWithdrawQuote {
  return legacyMathClient.getWithdrawQuote(params);
}

export function getLiquidityDelta(params: KitLiquidityDeltaParams) {
  return legacyMathClient.getLiquidityDelta(params);
}

export function isLockedPosition(position: KitPositionState): boolean {
  return legacyMathClient.isLockedPosition(toLegacyState(position));
}

export function isPermanentLockedPosition(position: KitPositionState): boolean {
  return legacyMathClient.isPermanentLockedPosition(toLegacyState(position));
}

export function canUnlockPosition(
  positionState: KitPositionState,
  vestings: readonly KitVestingSnapshot[],
  currentPoint: BN,
): { canUnlock: boolean; reason?: string } {
  return legacyMathClient.canUnlockPosition(
    toLegacyState(positionState),
    toLegacyVestings(vestings),
    currentPoint,
  );
}

export function toLegacyPoolState(poolState: KitPoolState) {
  return toLegacyState(poolState);
}

export function toLegacyPositionState(positionState: KitPositionState) {
  return toLegacyState(positionState);
}

export function toLegacyVestingSnapshots(vestings: readonly KitVestingSnapshot[]) {
  return toLegacyVestings(vestings);
}
