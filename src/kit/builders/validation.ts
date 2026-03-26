import type { Address } from "@solana/kit";
import BN from "bn.js";

import {
  AmountIsZeroError,
  InvalidMinimumLiquidityError,
  InvalidParametersError,
  InvalidRewardDurationError,
  InvalidRewardIndexError,
  InvalidSplitPositionParametersError,
  InvalidVestingInfoError,
  SameTokenMintsError,
} from "../../errors";

const SPLIT_POSITION_DENOMINATOR = 1_000_000_000;
const NUM_REWARDS = 2;
const MIN_REWARD_DURATION = 86_400;
const MAX_REWARD_DURATION = 31_536_000;

export function validateTokenMints(
  tokenAMint: Address,
  tokenBMint: Address,
): void {
  if (tokenAMint === tokenBMint) {
    throw new SameTokenMintsError();
  }
}

export function validateCreatePoolParams(params: {
  tokenAMint: Address;
  tokenBMint: Address;
  liquidityDelta: BN;
  tokenAAmount: BN;
  tokenBAmount: BN;
}): void {
  const { tokenAMint, tokenBMint, liquidityDelta, tokenAAmount, tokenBAmount } =
    params;

  validateTokenMints(tokenAMint, tokenBMint);

  if (liquidityDelta.lte(new BN(0))) {
    throw new InvalidMinimumLiquidityError();
  }

  if (tokenAAmount.lte(new BN(0)) && tokenBAmount.lte(new BN(0))) {
    throw new AmountIsZeroError();
  }
}

export function validateAddLiquidityParams(liquidityDelta: BN): void {
  if (liquidityDelta.lte(new BN(0))) {
    throw new InvalidParametersError("liquidityDelta must be greater than 0");
  }
}

export function validateRemoveLiquidityParams(liquidityDelta: BN): void {
  if (liquidityDelta.lte(new BN(0))) {
    throw new InvalidParametersError("liquidityDelta must be greater than 0");
  }
}

export function validateSplitPositionParams(params: {
  permanentLockedLiquidityPercentage: number;
  unlockedLiquidityPercentage: number;
  feeAPercentage: number;
  feeBPercentage: number;
  reward0Percentage: number;
  reward1Percentage: number;
  innerVestingLiquidityPercentage: number;
}): void {
  const percentages = [
    params.permanentLockedLiquidityPercentage,
    params.unlockedLiquidityPercentage,
    params.feeAPercentage,
    params.feeBPercentage,
    params.reward0Percentage,
    params.reward1Percentage,
    params.innerVestingLiquidityPercentage,
  ];

  for (const percentage of percentages) {
    if (percentage > 100 || percentage < 0) {
      throw new InvalidSplitPositionParametersError(
        "Each percentage must be <= 100",
      );
    }
  }

  if (percentages.every((percentage) => percentage === 0)) {
    throw new InvalidSplitPositionParametersError(
      "At least one percentage must be greater than 0",
    );
  }
}

export function validateSplitPosition2Params(numerator: number): void {
  if (numerator <= 0 || numerator > SPLIT_POSITION_DENOMINATOR) {
    throw new InvalidSplitPositionParametersError(
      `numerator must be in (0, ${SPLIT_POSITION_DENOMINATOR}]`,
    );
  }
}

export function validateLockPositionParams(params: {
  numberOfPeriod: number;
  periodFrequency: BN;
  cliffUnlockLiquidity: BN;
  liquidityPerPeriod: BN;
}): void {
  const {
    numberOfPeriod,
    periodFrequency,
    cliffUnlockLiquidity,
    liquidityPerPeriod,
  } = params;

  if (numberOfPeriod < 0) {
    throw new InvalidVestingInfoError("numberOfPeriod must be >= 0");
  }

  if (
    numberOfPeriod > 0 &&
    (periodFrequency.lte(new BN(0)) || liquidityPerPeriod.lte(new BN(0)))
  ) {
    throw new InvalidVestingInfoError(
      "periodFrequency and liquidityPerPeriod must be greater than 0 when numberOfPeriod > 0",
    );
  }

  const totalLockAmount = cliffUnlockLiquidity.add(
    liquidityPerPeriod.muln(numberOfPeriod),
  );
  if (totalLockAmount.lte(new BN(0))) {
    throw new InvalidVestingInfoError(
      "Total lock amount must be greater than 0",
    );
  }
}

export function validateRewardIndex(rewardIndex: number): void {
  if (rewardIndex < 0 || rewardIndex >= NUM_REWARDS) {
    throw new InvalidRewardIndexError(
      `rewardIndex must be in [0, ${NUM_REWARDS})`,
    );
  }
}

export function validateRewardDuration(rewardDuration: BN): void {
  if (
    rewardDuration.lt(new BN(MIN_REWARD_DURATION)) ||
    rewardDuration.gt(new BN(MAX_REWARD_DURATION))
  ) {
    throw new InvalidRewardDurationError(
      `rewardDuration must be between ${MIN_REWARD_DURATION} and ${MAX_REWARD_DURATION} seconds`,
    );
  }
}
