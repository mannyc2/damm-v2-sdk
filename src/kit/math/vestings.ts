import BN, { min } from "bn.js";

import type { VestingState } from "./types";

export function isVestingComplete(
  vestingData: VestingState,
  currentPoint: BN,
): boolean {
  const cliffPoint = vestingData.innerVesting.cliffPoint;
  const periodFrequency = vestingData.innerVesting.periodFrequency;
  const numberOfPeriods = vestingData.innerVesting.numberOfPeriod;
  const endPoint = cliffPoint.add(periodFrequency.muln(numberOfPeriods));

  return currentPoint.gte(endPoint);
}

export function getAvailableVestingLiquidity(
  vestingData: VestingState,
  currentPoint: BN,
): BN {
  const {
    cliffPoint,
    periodFrequency,
    cliffUnlockLiquidity,
    liquidityPerPeriod,
    numberOfPeriod,
    totalReleasedLiquidity,
  } = vestingData.innerVesting;

  if (currentPoint.lt(cliffPoint)) {
    return new BN(0);
  }

  if (periodFrequency.isZero()) {
    return cliffUnlockLiquidity;
  }

  let passedPeriod = new BN(currentPoint).sub(cliffPoint).div(periodFrequency);
  passedPeriod = min(passedPeriod, new BN(numberOfPeriod));

  const unlockedLiquidity = cliffUnlockLiquidity.add(
    passedPeriod.mul(liquidityPerPeriod),
  );

  return unlockedLiquidity.sub(totalReleasedLiquidity);
}
