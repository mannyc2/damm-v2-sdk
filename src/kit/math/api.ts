import BN, { min } from "bn.js";

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
} from "../types";
import { SwapMode } from "../types";
import { DepositTokenNotAcceptedError } from "./errors";
import {
  getAmountAFromLiquidityDelta,
  getAmountBFromLiquidityDelta,
  getLiquidityDeltaFromAmountA,
  getLiquidityDeltaFromAmountB,
} from "./liquidity";
import {
  swapQuoteExactInput,
  swapQuoteExactOutput,
  swapQuotePartialInput,
} from "./swapQuote";
import {
  calculateTransferFeeExcludedAmount,
  calculateTransferFeeIncludedAmount,
} from "./transferFees";
import { Rounding } from "./types";
import { isVestingComplete } from "./vestings";

export function isLockedPosition(position: KitPositionState): boolean {
  return position.vestedLiquidity.add(position.permanentLockedLiquidity).gtn(0);
}

export function isPermanentLockedPosition(position: KitPositionState): boolean {
  return position.permanentLockedLiquidity.gtn(0);
}

export function canUnlockPosition(
  positionState: KitPositionState,
  vestings: readonly KitVestingSnapshot[],
  currentPoint: BN,
): { canUnlock: boolean; reason?: string } {
  if (vestings.length > 0) {
    if (isPermanentLockedPosition(positionState)) {
      return {
        canUnlock: false,
        reason: "Position is permanently locked",
      };
    }

    for (const vesting of vestings) {
      if (!isVestingComplete(vesting.vestingState, currentPoint)) {
        return {
          canUnlock: false,
          reason: "Position has incomplete vesting schedule",
        };
      }
    }
  }

  return { canUnlock: true };
}

export function getLiquidityDelta(params: KitLiquidityDeltaParams): BN {
  const liquidityDeltaFromAmountA = getLiquidityDeltaFromAmountA(
    params.maxAmountTokenA,
    params.sqrtPrice,
    params.sqrtMaxPrice,
    params.collectFeeMode,
    params.tokenAAmount,
    params.liquidity,
  );
  const liquidityDeltaFromAmountB = getLiquidityDeltaFromAmountB(
    params.maxAmountTokenB,
    params.sqrtMinPrice,
    params.sqrtPrice,
    params.collectFeeMode,
    params.tokenBAmount,
    params.liquidity,
  );

  return min(liquidityDeltaFromAmountA, liquidityDeltaFromAmountB);
}

export function getQuote(params: KitGetQuoteParams): KitQuote {
  const currentPoint = params.poolState.activationType
    ? new BN(params.currentTime)
    : new BN(params.currentSlot);
  const swapResult = swapQuoteExactInput(
    params.poolState,
    currentPoint,
    params.inAmount,
    params.slippage,
    params.poolState.tokenAMint === params.inputTokenMint,
    params.hasReferral ?? false,
    params.tokenADecimal,
    params.tokenBDecimal,
    params.inputTokenInfo,
    params.outputTokenInfo,
  );

  return {
    swapInAmount: params.inAmount,
    consumedInAmount: swapResult.includedFeeInputAmount,
    swapOutAmount: swapResult.outputAmount,
    minSwapOutAmount: swapResult.minimumAmountOut!,
    totalFee: swapResult.claimingFee
      .add(swapResult.compoundingFee)
      .add(swapResult.protocolFee)
      .add(swapResult.referralFee),
    priceImpact: swapResult.priceImpact,
  };
}

export function getQuote2(params: KitGetQuote2Params): KitQuote2Result {
  const aToB = params.poolState.tokenAMint === params.inputTokenMint;

  switch (params.swapMode) {
    case SwapMode.ExactIn:
      return swapQuoteExactInput(
        params.poolState,
        params.currentPoint,
        params.amountIn,
        params.slippage,
        aToB,
        params.hasReferral,
        params.tokenADecimal,
        params.tokenBDecimal,
        params.inputTokenInfo,
        params.outputTokenInfo,
      );
    case SwapMode.ExactOut:
      return swapQuoteExactOutput(
        params.poolState,
        params.currentPoint,
        params.amountOut,
        params.slippage,
        aToB,
        params.hasReferral,
        params.tokenADecimal,
        params.tokenBDecimal,
        params.inputTokenInfo,
        params.outputTokenInfo,
      );
    case SwapMode.PartialFill:
      return swapQuotePartialInput(
        params.poolState,
        params.currentPoint,
        params.amountIn,
        params.slippage,
        aToB,
        params.hasReferral,
        params.tokenADecimal,
        params.tokenBDecimal,
        params.inputTokenInfo,
        params.outputTokenInfo,
      );
  }

  throw new Error("Unsupported swap mode");
}

export function getDepositQuote(
  params: KitGetDepositQuoteParams,
): KitDepositQuote {
  if (params.isTokenA && params.sqrtPrice.gte(params.maxSqrtPrice)) {
    throw new DepositTokenNotAcceptedError("B");
  }
  if (!params.isTokenA && params.sqrtPrice.lte(params.minSqrtPrice)) {
    throw new DepositTokenNotAcceptedError("A");
  }

  const actualAmountIn = params.inputTokenInfo
    ? calculateTransferFeeExcludedAmount(
        params.inAmount,
        params.inputTokenInfo.mint,
        params.inputTokenInfo.currentEpoch,
      ).amount
    : params.inAmount;

  const { liquidityDelta, rawAmount } = params.isTokenA
    ? {
        liquidityDelta: getLiquidityDeltaFromAmountA(
          actualAmountIn,
          params.sqrtPrice,
          params.maxSqrtPrice,
          params.collectFeeMode,
          params.tokenAAmount,
          params.liquidity,
        ),
        rawAmount: (delta: BN) =>
          getAmountBFromLiquidityDelta(
            params.minSqrtPrice,
            params.sqrtPrice,
            delta,
            Rounding.Up,
            params.collectFeeMode,
            params.tokenBAmount,
            params.liquidity,
          ),
      }
    : {
        liquidityDelta: getLiquidityDeltaFromAmountB(
          actualAmountIn,
          params.minSqrtPrice,
          params.sqrtPrice,
          params.collectFeeMode,
          params.tokenBAmount,
          params.liquidity,
        ),
        rawAmount: (delta: BN) =>
          getAmountAFromLiquidityDelta(
            params.sqrtPrice,
            params.maxSqrtPrice,
            delta,
            Rounding.Up,
            params.collectFeeMode,
            params.tokenAAmount,
            params.liquidity,
          ),
      };

  const rawOutputAmount = new BN(rawAmount(liquidityDelta));
  const outputAmount = params.outputTokenInfo
    ? calculateTransferFeeIncludedAmount(
        rawOutputAmount,
        params.outputTokenInfo.mint,
        params.outputTokenInfo.currentEpoch,
      ).amount
    : rawOutputAmount;

  return {
    actualInputAmount: actualAmountIn,
    consumedInputAmount: params.inAmount,
    liquidityDelta,
    outputAmount,
  };
}

export function getWithdrawQuote(
  params: KitGetWithdrawQuoteParams,
): KitWithdrawQuote {
  if (params.liquidityDelta.isZero()) {
    throw new Error("Cannot withdraw: liquidityDelta must be greater than zero.");
  }
  if (params.sqrtPrice.isZero()) {
    throw new Error("Cannot withdraw: sqrtPrice must be greater than zero.");
  }

  const amountA = getAmountAFromLiquidityDelta(
    params.sqrtPrice,
    params.maxSqrtPrice,
    params.liquidityDelta,
    Rounding.Down,
    params.collectFeeMode,
    params.tokenAAmount,
    params.liquidity,
  );
  const amountB = getAmountBFromLiquidityDelta(
    params.minSqrtPrice,
    params.sqrtPrice,
    params.liquidityDelta,
    Rounding.Down,
    params.collectFeeMode,
    params.tokenBAmount,
    params.liquidity,
  );

  return {
    liquidityDelta: params.liquidityDelta,
    outAmountA: params.tokenATokenInfo
      ? calculateTransferFeeExcludedAmount(
          amountA,
          params.tokenATokenInfo.mint,
          params.tokenATokenInfo.currentEpoch,
        ).amount
      : amountA,
    outAmountB: params.tokenBTokenInfo
      ? calculateTransferFeeExcludedAmount(
          amountB,
          params.tokenBTokenInfo.mint,
          params.tokenBTokenInfo.currentEpoch,
        ).amount
      : amountB,
  };
}

export function hasNativePriceRange(poolState: Pick<
  KitPoolState,
  "sqrtMinPrice" | "sqrtMaxPrice"
>): boolean {
  return poolState.sqrtMinPrice.gtn(0) || poolState.sqrtMaxPrice.gtn(0);
}
