import BN from "bn.js";
import type { ReadonlyUint8Array } from "@solana/kit";
import {
  TradeDirection,
  BaseFeeMode,
  BaseFeeHandler,
} from "../../types";
import {
  getFeeNumeratorFromIncludedFeeAmount,
  getFeeNumeratorFromExcludedFeeAmount,
  isRateLimiterApplied,
} from "./rateLimiter";
import {
  getFeeTimeBaseFeeNumerator,
} from "./feeTimeScheduler";
import {
  getFeeMarketCapBaseFeeNumerator,
} from "./feeMarketCapScheduler";
import { decodePoolFeeData } from "../../../helpers/feeCodec";
import { InvalidBaseFeeModeError } from "../../errors";

/**
 * Fee Rate Limiter class
 */
export class FeeRateLimiter implements BaseFeeHandler {
  constructor(
    public cliffFeeNumerator: BN,
    public feeIncrementBps: number,
    public maxFeeBps: number,
    public maxLimiterDuration: number,
    public referenceAmount: BN,
  ) {}

  getBaseFeeNumeratorFromIncludedFeeAmount(
    currentPoint: BN,
    activationPoint: BN,
    tradeDirection: TradeDirection,
    includedFeeAmount: BN,
    _initSqrtPrice: BN,
    _currentSqrtPrice: BN,
  ): BN {
    if (
      isRateLimiterApplied(
        this.referenceAmount,
        this.maxLimiterDuration,
        this.maxFeeBps,
        this.feeIncrementBps,
        currentPoint,
        activationPoint,
        tradeDirection,
      )
    ) {
      return getFeeNumeratorFromIncludedFeeAmount(
        includedFeeAmount,
        this.referenceAmount,
        this.cliffFeeNumerator,
        this.maxFeeBps,
        this.feeIncrementBps,
      );
    } else {
      return this.cliffFeeNumerator;
    }
  }

  getBaseFeeNumeratorFromExcludedFeeAmount(
    currentPoint: BN,
    activationPoint: BN,
    tradeDirection: TradeDirection,
    excludedFeeAmount: BN,
    _initSqrtPrice: BN,
    _currentSqrtPrice: BN,
  ): BN {
    if (
      isRateLimiterApplied(
        this.referenceAmount,
        this.maxLimiterDuration,
        this.maxFeeBps,
        this.feeIncrementBps,
        currentPoint,
        activationPoint,
        tradeDirection,
      )
    ) {
      return getFeeNumeratorFromExcludedFeeAmount(
        excludedFeeAmount,
        this.referenceAmount,
        this.cliffFeeNumerator,
        this.maxFeeBps,
        this.feeIncrementBps,
      );
    } else {
      return this.cliffFeeNumerator;
    }
  }
}

/**
 * Fee Time Scheduler implementation
 */
export class FeeTimeScheduler implements BaseFeeHandler {
  constructor(
    public cliffFeeNumerator: BN,
    public numberOfPeriod: number,
    public periodFrequency: BN,
    public reductionFactor: BN,
    public feeTimeSchedulerMode: BaseFeeMode,
  ) {}

  getBaseFeeNumeratorFromIncludedFeeAmount(
    currentPoint: BN,
    activationPoint: BN,
    _tradeDirection: TradeDirection,
    _includedFeeAmount: BN,
    _initSqrtPrice: BN,
    _currentSqrtPrice: BN,
  ): BN {
    return getFeeTimeBaseFeeNumerator(
      this.cliffFeeNumerator,
      this.numberOfPeriod,
      this.periodFrequency,
      this.reductionFactor,
      this.feeTimeSchedulerMode,
      currentPoint,
      activationPoint,
    );
  }

  getBaseFeeNumeratorFromExcludedFeeAmount(
    currentPoint: BN,
    activationPoint: BN,
    _tradeDirection: TradeDirection,
    _excludedFeeAmount: BN,
    _initSqrtPrice: BN,
    _currentSqrtPrice: BN,
  ): BN {
    return getFeeTimeBaseFeeNumerator(
      this.cliffFeeNumerator,
      this.numberOfPeriod,
      this.periodFrequency,
      this.reductionFactor,
      this.feeTimeSchedulerMode,
      currentPoint,
      activationPoint,
    );
  }
}

/**
 * Fee Market Cap Scheduler implementation
 */
export class FeeMarketCapScheduler implements BaseFeeHandler {
  constructor(
    public cliffFeeNumerator: BN,
    public numberOfPeriod: number,
    public sqrtPriceStepBps: number,
    public schedulerExpirationDuration: number,
    public reductionFactor: BN,
    public feeMarketCapSchedulerMode: BaseFeeMode,
  ) {}

  getBaseFeeNumeratorFromIncludedFeeAmount(
    currentPoint: BN,
    activationPoint: BN,
    _tradeDirection: TradeDirection,
    _includedFeeAmount: BN,
    initSqrtPrice: BN,
    currentSqrtPrice: BN,
  ): BN {
    return getFeeMarketCapBaseFeeNumerator(
      this.cliffFeeNumerator,
      this.numberOfPeriod,
      this.sqrtPriceStepBps,
      this.schedulerExpirationDuration,
      this.reductionFactor,
      this.feeMarketCapSchedulerMode,
      currentPoint,
      activationPoint,
      initSqrtPrice,
      currentSqrtPrice,
    );
  }

  getBaseFeeNumeratorFromExcludedFeeAmount(
    currentPoint: BN,
    activationPoint: BN,
    _tradeDirection: TradeDirection,
    _excludedFeeAmount: BN,
    initSqrtPrice: BN,
    currentSqrtPrice: BN,
  ): BN {
    return getFeeMarketCapBaseFeeNumerator(
      this.cliffFeeNumerator,
      this.numberOfPeriod,
      this.sqrtPriceStepBps,
      this.schedulerExpirationDuration,
      this.reductionFactor,
      this.feeMarketCapSchedulerMode,
      currentPoint,
      activationPoint,
      initSqrtPrice,
      currentSqrtPrice,
    );
  }
}

/**
 * Get base fee handler from pod-aligned data.
 * @param rawData Raw data in pod-aligned format
 * @returns Base fee handler instance
 */
export function getBaseFeeHandlerFromPodAlignedData(
  rawData: ReadonlyUint8Array,
): BaseFeeHandler {
  const poolFees = decodePoolFeeData(rawData);
  const baseFeeMode = poolFees.baseFeeMode as BaseFeeMode;

  switch (baseFeeMode) {
    case BaseFeeMode.FeeTimeSchedulerLinear:
    case BaseFeeMode.FeeTimeSchedulerExponential: {
      const timeScheduler = poolFees as Extract<
        typeof poolFees,
        { numberOfPeriod: number; periodFrequency: BN; reductionFactor: BN }
      >;
      return new FeeTimeScheduler(
        timeScheduler.cliffFeeNumerator,
        timeScheduler.numberOfPeriod,
        timeScheduler.periodFrequency,
        timeScheduler.reductionFactor,
        timeScheduler.baseFeeMode,
      );
    }
    case BaseFeeMode.RateLimiter: {
      const rateLimiter = poolFees as Extract<
        typeof poolFees,
        {
          feeIncrementBps: number;
          maxFeeBps: number;
          maxLimiterDuration: number;
          referenceAmount: BN;
        }
      >;
      return new FeeRateLimiter(
        rateLimiter.cliffFeeNumerator,
        rateLimiter.feeIncrementBps,
        rateLimiter.maxFeeBps,
        rateLimiter.maxLimiterDuration,
        rateLimiter.referenceAmount,
      );
    }
    case BaseFeeMode.FeeMarketCapSchedulerLinear:
    case BaseFeeMode.FeeMarketCapSchedulerExponential: {
      const marketCapScheduler = poolFees as Extract<
        typeof poolFees,
        {
          numberOfPeriod: number;
          sqrtPriceStepBps: number;
          schedulerExpirationDuration: number;
          reductionFactor: BN;
        }
      >;
      return new FeeMarketCapScheduler(
        marketCapScheduler.cliffFeeNumerator,
        marketCapScheduler.numberOfPeriod,
        marketCapScheduler.sqrtPriceStepBps,
        marketCapScheduler.schedulerExpirationDuration,
        marketCapScheduler.reductionFactor,
        marketCapScheduler.baseFeeMode,
      );
    }
    default:
      throw new InvalidBaseFeeModeError();
  }
}
