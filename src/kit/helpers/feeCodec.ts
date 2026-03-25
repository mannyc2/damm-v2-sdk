import BN from "bn.js";
import {
  getStructDecoder,
  getU16Decoder,
  getU32Decoder,
  getU64Decoder,
  getU8Decoder,
  fixDecoderSize,
  getBytesDecoder,
  type FixedSizeDecoder,
  type ReadonlyUint8Array,
} from "@solana/kit";

import { BaseFeeMode, type KitDecodedPoolFees } from "../types";

type RawPodAlignedFeeTimeScheduler = {
  cliffFeeNumerator: bigint;
  baseFeeMode: number;
  padding: ReadonlyUint8Array;
  numberOfPeriod: number;
  periodFrequency: bigint;
  reductionFactor: bigint;
};

type RawPodAlignedFeeMarketCapScheduler = {
  cliffFeeNumerator: bigint;
  baseFeeMode: number;
  padding: ReadonlyUint8Array;
  numberOfPeriod: number;
  sqrtPriceStepBps: number;
  schedulerExpirationDuration: number;
  reductionFactor: bigint;
};

type RawPodAlignedFeeRateLimiter = {
  cliffFeeNumerator: bigint;
  baseFeeMode: number;
  padding: ReadonlyUint8Array;
  feeIncrementBps: number;
  maxLimiterDuration: number;
  maxFeeBps: number;
  referenceAmount: bigint;
};

const podAlignedFeeTimeSchedulerDecoder: FixedSizeDecoder<RawPodAlignedFeeTimeScheduler> =
  getStructDecoder([
    ["cliffFeeNumerator", getU64Decoder()],
    ["baseFeeMode", getU8Decoder()],
    ["padding", fixDecoderSize(getBytesDecoder(), 5)],
    ["numberOfPeriod", getU16Decoder()],
    ["periodFrequency", getU64Decoder()],
    ["reductionFactor", getU64Decoder()],
  ]);

const podAlignedFeeMarketCapSchedulerDecoder: FixedSizeDecoder<RawPodAlignedFeeMarketCapScheduler> =
  getStructDecoder([
    ["cliffFeeNumerator", getU64Decoder()],
    ["baseFeeMode", getU8Decoder()],
    ["padding", fixDecoderSize(getBytesDecoder(), 5)],
    ["numberOfPeriod", getU16Decoder()],
    ["sqrtPriceStepBps", getU32Decoder()],
    ["schedulerExpirationDuration", getU32Decoder()],
    ["reductionFactor", getU64Decoder()],
  ]);

const podAlignedFeeRateLimiterDecoder: FixedSizeDecoder<RawPodAlignedFeeRateLimiter> =
  getStructDecoder([
    ["cliffFeeNumerator", getU64Decoder()],
    ["baseFeeMode", getU8Decoder()],
    ["padding", fixDecoderSize(getBytesDecoder(), 5)],
    ["feeIncrementBps", getU16Decoder()],
    ["maxLimiterDuration", getU32Decoder()],
    ["maxFeeBps", getU32Decoder()],
    ["referenceAmount", getU64Decoder()],
  ]);

function toBn(value: bigint): BN {
  return new BN(value.toString());
}

export function decodePodAlignedFeeTimeScheduler(
  data: ReadonlyUint8Array,
): KitDecodedPoolFees {
  const decoded = podAlignedFeeTimeSchedulerDecoder.decode(data);

  return {
    cliffFeeNumerator: toBn(decoded.cliffFeeNumerator),
    baseFeeMode: decoded.baseFeeMode,
    padding: decoded.padding,
    numberOfPeriod: decoded.numberOfPeriod,
    periodFrequency: toBn(decoded.periodFrequency),
    reductionFactor: toBn(decoded.reductionFactor),
  };
}

export function decodePodAlignedFeeMarketCapScheduler(
  data: ReadonlyUint8Array,
): KitDecodedPoolFees {
  const decoded = podAlignedFeeMarketCapSchedulerDecoder.decode(data);

  return {
    cliffFeeNumerator: toBn(decoded.cliffFeeNumerator),
    baseFeeMode: decoded.baseFeeMode,
    padding: decoded.padding,
    numberOfPeriod: decoded.numberOfPeriod,
    sqrtPriceStepBps: decoded.sqrtPriceStepBps,
    schedulerExpirationDuration: decoded.schedulerExpirationDuration,
    reductionFactor: toBn(decoded.reductionFactor),
  };
}

export function decodePodAlignedFeeRateLimiter(
  data: ReadonlyUint8Array,
): KitDecodedPoolFees {
  const decoded = podAlignedFeeRateLimiterDecoder.decode(data);

  return {
    cliffFeeNumerator: toBn(decoded.cliffFeeNumerator),
    baseFeeMode: decoded.baseFeeMode,
    padding: decoded.padding,
    feeIncrementBps: decoded.feeIncrementBps,
    maxLimiterDuration: decoded.maxLimiterDuration,
    maxFeeBps: decoded.maxFeeBps,
    referenceAmount: toBn(decoded.referenceAmount),
  };
}

export function decodePoolFeeData(
  data: ReadonlyUint8Array,
): KitDecodedPoolFees {
  const baseFeeMode = data[8] as BaseFeeMode;

  switch (baseFeeMode) {
    case BaseFeeMode.FeeTimeSchedulerLinear:
    case BaseFeeMode.FeeTimeSchedulerExponential:
      return decodePodAlignedFeeTimeScheduler(data);
    case BaseFeeMode.RateLimiter:
      return decodePodAlignedFeeRateLimiter(data);
    case BaseFeeMode.FeeMarketCapSchedulerLinear:
    case BaseFeeMode.FeeMarketCapSchedulerExponential:
      return decodePodAlignedFeeMarketCapScheduler(data);
    default:
      throw new Error(`Invalid base fee mode: ${baseFeeMode}`);
  }
}
