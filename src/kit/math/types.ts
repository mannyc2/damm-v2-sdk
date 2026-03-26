import BN from "bn.js";

import type {
  KitPoolState,
  KitPositionState,
  KitQuote2Result,
  KitTransferFeeMintInfo,
  KitVestingState,
} from "../types";
export {
  ActivationType,
  BaseFeeMode,
  CollectFeeMode,
  SwapMode,
} from "../types";

export enum Rounding {
  Up,
  Down,
}

export enum TradeDirection {
  AtoB,
  BtoA,
}

export enum PoolStatus {
  Enable,
  Disable,
}

export type PoolState = KitPoolState;
export type PositionState = KitPositionState;
export type VestingState = KitVestingState;
export type PoolFeesStruct = KitPoolState["poolFees"];
export type DynamicFeeStruct = PoolFeesStruct["dynamicFee"];
export type RewardInfo = KitPoolState["rewardInfos"][number];
export type Quote2Result = KitQuote2Result;
export type TransferFeeMintInfo = KitTransferFeeMintInfo;

export type FeeMode = {
  feesOnInput: boolean;
  feesOnTokenA: boolean;
  hasReferral: boolean;
};

export interface BaseFeeHandler {
  getBaseFeeNumeratorFromIncludedFeeAmount(
    currentPoint: BN,
    activationPoint: BN,
    tradeDirection: TradeDirection,
    includedFeeAmount: BN,
    initSqrtPrice: BN,
    currentSqrtPrice: BN,
  ): BN;
  getBaseFeeNumeratorFromExcludedFeeAmount(
    currentPoint: BN,
    activationPoint: BN,
    tradeDirection: TradeDirection,
    excludedFeeAmount: BN,
    initSqrtPrice: BN,
    currentSqrtPrice: BN,
  ): BN;
}

export interface FeeOnAmountResult {
  amount: BN;
  claimingFee: BN;
  compoundingFee: BN;
  protocolFee: BN;
  referralFee: BN;
}

export interface SplitFees {
  claimingFee: BN;
  compoundingFee: BN;
  protocolFee: BN;
  referralFee: BN;
}

export type InitialPoolInformation = {
  tokenAAmount: BN;
  tokenBAmount: BN;
  sqrtPrice: BN;
  initialLiquidity: BN;
  sqrtMinPrice: BN;
  sqrtMaxPrice: BN;
};

export interface SwapAmountFromInput {
  outputAmount: BN;
  nextSqrtPrice: BN;
  amountLeft: BN;
}

export interface SwapAmountFromOutput {
  inputAmount: BN;
  nextSqrtPrice: BN;
}

export interface SwapResult2 {
  amountLeft: BN;
  includedFeeInputAmount: BN;
  excludedFeeInputAmount: BN;
  outputAmount: BN;
  nextSqrtPrice: BN;
  claimingFee: BN;
  compoundingFee: BN;
  protocolFee: BN;
  referralFee: BN;
}

export interface LiquidityHandler {
  getAmountsForModifyLiquidity(liquidityDelta: BN, round: Rounding): [BN, BN];
  calculateAtoBFromAmountIn(amountIn: BN): SwapAmountFromInput;
  calculateBtoAFromAmountIn(amountIn: BN): SwapAmountFromInput;
  calculateAtoBFromPartialAmountIn(amountIn: BN): SwapAmountFromInput;
  calculateBtoAFromPartialAmountIn(amountIn: BN): SwapAmountFromInput;
  calculateAtoBFromAmountOut(amountOut: BN): SwapAmountFromOutput;
  calculateBtoAFromAmountOut(amountOut: BN): SwapAmountFromOutput;
  getReservesAmount(): [BN, BN];
  getNextSqrtPrice(nextSqrtPrice: BN): BN;
  getMaxAmountIn(tradeDirection: TradeDirection): BN;
}
