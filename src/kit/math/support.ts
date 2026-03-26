import BN from "bn.js";
import Decimal from "decimal.js";

import { BASIS_POINT_MAX } from "./constants";
import { PoolStatus, type PoolState, SwapMode } from "./types";

export function isSwapEnabled(
  pool: Pick<PoolState, "poolStatus" | "activationPoint">,
  currentPoint: BN,
): boolean {
  return (
    pool.poolStatus === PoolStatus.Enable &&
    currentPoint.gte(pool.activationPoint)
  );
}

export function getAmountWithSlippage(
  amount: BN,
  slippageBps: number,
  swapMode: SwapMode,
): BN {
  if (slippageBps <= 0) {
    return amount;
  }

  if (swapMode === SwapMode.ExactOut) {
    return amount
      .mul(new BN(BASIS_POINT_MAX + slippageBps))
      .div(new BN(BASIS_POINT_MAX));
  }

  return amount
    .mul(new BN(BASIS_POINT_MAX - slippageBps))
    .div(new BN(BASIS_POINT_MAX));
}

function getPriceFromSqrtPrice(
  sqrtPrice: BN,
  tokenADecimal: number,
  tokenBDecimal: number,
): Decimal {
  const decimalSqrtPrice = new Decimal(sqrtPrice.toString());
  return decimalSqrtPrice
    .mul(decimalSqrtPrice)
    .mul(new Decimal(10 ** (tokenADecimal - tokenBDecimal)))
    .div(Decimal.pow(2, 128));
}

export function getPriceImpact(
  amountIn: BN,
  amountOut: BN,
  currentSqrtPrice: BN,
  aToB: boolean,
  tokenADecimal: number,
  tokenBDecimal: number,
): Decimal {
  if (amountIn.eq(new BN(0))) {
    return new Decimal(0);
  }
  if (amountOut.eq(new BN(0))) {
    throw new Error("Amount out must be greater than 0");
  }

  const spotPrice = getPriceFromSqrtPrice(
    currentSqrtPrice,
    tokenADecimal,
    tokenBDecimal,
  );

  const executionPrice = new Decimal(amountIn.toString())
    .div(new Decimal(amountOut.toString()))
    .mul(
      Decimal.pow(
        10,
        aToB ? tokenBDecimal - tokenADecimal : tokenADecimal - tokenBDecimal,
      ),
    );

  const actualExecutionPrice = aToB
    ? new Decimal(1).div(executionPrice)
    : executionPrice;

  return actualExecutionPrice.sub(spotPrice).abs().div(spotPrice).mul(100);
}
