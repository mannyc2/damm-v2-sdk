import {
  AmountIsZeroError,
  InvalidMinimumLiquidityError,
  InvalidParametersError,
  InvalidRewardDurationError,
  InvalidRewardIndexError,
  InvalidSplitPositionParametersError,
  InvalidVestingInfoError,
  SameTokenMintsError,
  __async,
  __pow,
  __spreadProps,
  __spreadValues
} from "../chunk-DOOZRVV4.mjs";

// src/kit/client.ts
import {
  createSolanaRpc,
  createSolanaRpcSubscriptions
} from "@solana/kit";

// src/kit/builders/common.ts
import {
  AccountRole,
  address
} from "@solana/kit";

// src/kit/generated/accounts/config.ts
import {
  assertAccountExists,
  assertAccountsExist,
  combineCodec as combineCodec52,
  decodeAccount,
  fetchEncodedAccount,
  fetchEncodedAccounts,
  fixDecoderSize as fixDecoderSize10,
  fixEncoderSize as fixEncoderSize10,
  getAddressDecoder as getAddressDecoder25,
  getAddressEncoder as getAddressEncoder25,
  getArrayDecoder as getArrayDecoder3,
  getArrayEncoder as getArrayEncoder3,
  getBytesDecoder as getBytesDecoder10,
  getBytesEncoder as getBytesEncoder10,
  getStructDecoder as getStructDecoder52,
  getStructEncoder as getStructEncoder52,
  getU128Decoder as getU128Decoder23,
  getU128Encoder as getU128Encoder23,
  getU64Decoder as getU64Decoder34,
  getU64Encoder as getU64Encoder34,
  getU8Decoder as getU8Decoder22,
  getU8Encoder as getU8Encoder22,
  transformEncoder
} from "@solana/kit";

// src/kit/generated/types/baseFeeInfo.ts
import {
  combineCodec,
  fixDecoderSize,
  fixEncoderSize,
  getBytesDecoder,
  getBytesEncoder,
  getStructDecoder,
  getStructEncoder
} from "@solana/kit";
function getBaseFeeInfoDecoder() {
  return getStructDecoder([["data", fixDecoderSize(getBytesDecoder(), 32)]]);
}

// src/kit/generated/types/baseFeeParameters.ts
import {
  combineCodec as combineCodec2,
  fixDecoderSize as fixDecoderSize2,
  fixEncoderSize as fixEncoderSize2,
  getBytesDecoder as getBytesDecoder2,
  getBytesEncoder as getBytesEncoder2,
  getStructDecoder as getStructDecoder2,
  getStructEncoder as getStructEncoder2
} from "@solana/kit";
function getBaseFeeParametersEncoder() {
  return getStructEncoder2([["data", fixEncoderSize2(getBytesEncoder2(), 27)]]);
}

// src/kit/generated/types/baseFeeStruct.ts
import {
  combineCodec as combineCodec3,
  getStructDecoder as getStructDecoder3,
  getStructEncoder as getStructEncoder3,
  getU64Decoder,
  getU64Encoder
} from "@solana/kit";
function getBaseFeeStructDecoder() {
  return getStructDecoder3([
    ["baseFeeInfo", getBaseFeeInfoDecoder()],
    ["padding1", getU64Decoder()]
  ]);
}

// src/kit/generated/types/borshFeeMarketCapScheduler.ts
import {
  combineCodec as combineCodec4,
  getStructDecoder as getStructDecoder4,
  getStructEncoder as getStructEncoder4,
  getU16Decoder,
  getU16Encoder,
  getU32Decoder,
  getU32Encoder,
  getU64Decoder as getU64Decoder2,
  getU64Encoder as getU64Encoder2,
  getU8Decoder,
  getU8Encoder
} from "@solana/kit";

// src/kit/generated/types/borshFeeRateLimiter.ts
import {
  combineCodec as combineCodec5,
  getStructDecoder as getStructDecoder5,
  getStructEncoder as getStructEncoder5,
  getU16Decoder as getU16Decoder2,
  getU16Encoder as getU16Encoder2,
  getU32Decoder as getU32Decoder2,
  getU32Encoder as getU32Encoder2,
  getU64Decoder as getU64Decoder3,
  getU64Encoder as getU64Encoder3,
  getU8Decoder as getU8Decoder2,
  getU8Encoder as getU8Encoder2
} from "@solana/kit";

// src/kit/generated/types/borshFeeTimeScheduler.ts
import {
  combineCodec as combineCodec6,
  getStructDecoder as getStructDecoder6,
  getStructEncoder as getStructEncoder6,
  getU16Decoder as getU16Decoder3,
  getU16Encoder as getU16Encoder3,
  getU64Decoder as getU64Decoder4,
  getU64Encoder as getU64Encoder4,
  getU8Decoder as getU8Decoder3,
  getU8Encoder as getU8Encoder3
} from "@solana/kit";

// src/kit/generated/types/dynamicFeeConfig.ts
import {
  combineCodec as combineCodec7,
  fixDecoderSize as fixDecoderSize3,
  fixEncoderSize as fixEncoderSize3,
  getBytesDecoder as getBytesDecoder3,
  getBytesEncoder as getBytesEncoder3,
  getStructDecoder as getStructDecoder7,
  getStructEncoder as getStructEncoder7,
  getU128Decoder,
  getU128Encoder,
  getU16Decoder as getU16Decoder4,
  getU16Encoder as getU16Encoder4,
  getU32Decoder as getU32Decoder3,
  getU32Encoder as getU32Encoder3,
  getU8Decoder as getU8Decoder4,
  getU8Encoder as getU8Encoder4
} from "@solana/kit";
function getDynamicFeeConfigDecoder() {
  return getStructDecoder7([
    ["initialized", getU8Decoder4()],
    ["padding", fixDecoderSize3(getBytesDecoder3(), 7)],
    ["maxVolatilityAccumulator", getU32Decoder3()],
    ["variableFeeControl", getU32Decoder3()],
    ["binStep", getU16Decoder4()],
    ["filterPeriod", getU16Decoder4()],
    ["decayPeriod", getU16Decoder4()],
    ["reductionFactor", getU16Decoder4()],
    ["padding1", fixDecoderSize3(getBytesDecoder3(), 8)],
    ["binStepU128", getU128Decoder()]
  ]);
}

// src/kit/generated/types/dynamicFeeParameters.ts
import {
  combineCodec as combineCodec8,
  getStructDecoder as getStructDecoder8,
  getStructEncoder as getStructEncoder8,
  getU128Decoder as getU128Decoder2,
  getU128Encoder as getU128Encoder2,
  getU16Decoder as getU16Decoder5,
  getU16Encoder as getU16Encoder5,
  getU32Decoder as getU32Decoder4,
  getU32Encoder as getU32Encoder4
} from "@solana/kit";
function getDynamicFeeParametersEncoder() {
  return getStructEncoder8([
    ["binStep", getU16Encoder5()],
    ["binStepU128", getU128Encoder2()],
    ["filterPeriod", getU16Encoder5()],
    ["decayPeriod", getU16Encoder5()],
    ["reductionFactor", getU16Encoder5()],
    ["maxVolatilityAccumulator", getU32Encoder4()],
    ["variableFeeControl", getU32Encoder4()]
  ]);
}

// src/kit/generated/types/dynamicFeeStruct.ts
import {
  combineCodec as combineCodec9,
  fixDecoderSize as fixDecoderSize4,
  fixEncoderSize as fixEncoderSize4,
  getBytesDecoder as getBytesDecoder4,
  getBytesEncoder as getBytesEncoder4,
  getStructDecoder as getStructDecoder9,
  getStructEncoder as getStructEncoder9,
  getU128Decoder as getU128Decoder3,
  getU128Encoder as getU128Encoder3,
  getU16Decoder as getU16Decoder6,
  getU16Encoder as getU16Encoder6,
  getU32Decoder as getU32Decoder5,
  getU32Encoder as getU32Encoder5,
  getU64Decoder as getU64Decoder5,
  getU64Encoder as getU64Encoder5,
  getU8Decoder as getU8Decoder5,
  getU8Encoder as getU8Encoder5
} from "@solana/kit";
function getDynamicFeeStructDecoder() {
  return getStructDecoder9([
    ["initialized", getU8Decoder5()],
    ["padding", fixDecoderSize4(getBytesDecoder4(), 7)],
    ["maxVolatilityAccumulator", getU32Decoder5()],
    ["variableFeeControl", getU32Decoder5()],
    ["binStep", getU16Decoder6()],
    ["filterPeriod", getU16Decoder6()],
    ["decayPeriod", getU16Decoder6()],
    ["reductionFactor", getU16Decoder6()],
    ["lastUpdateTimestamp", getU64Decoder5()],
    ["binStepU128", getU128Decoder3()],
    ["sqrtPriceReference", getU128Decoder3()],
    ["volatilityAccumulator", getU128Decoder3()],
    ["volatilityReference", getU128Decoder3()]
  ]);
}

// src/kit/generated/types/evtClaimPositionFee.ts
import {
  combineCodec as combineCodec10,
  getAddressDecoder,
  getAddressEncoder,
  getStructDecoder as getStructDecoder10,
  getStructEncoder as getStructEncoder10,
  getU64Decoder as getU64Decoder6,
  getU64Encoder as getU64Encoder6
} from "@solana/kit";

// src/kit/generated/types/evtClaimProtocolFee.ts
import {
  combineCodec as combineCodec11,
  getAddressDecoder as getAddressDecoder2,
  getAddressEncoder as getAddressEncoder2,
  getStructDecoder as getStructDecoder11,
  getStructEncoder as getStructEncoder11,
  getU64Decoder as getU64Decoder7,
  getU64Encoder as getU64Encoder7
} from "@solana/kit";

// src/kit/generated/types/evtClaimReward.ts
import {
  combineCodec as combineCodec12,
  getAddressDecoder as getAddressDecoder3,
  getAddressEncoder as getAddressEncoder3,
  getStructDecoder as getStructDecoder12,
  getStructEncoder as getStructEncoder12,
  getU64Decoder as getU64Decoder8,
  getU64Encoder as getU64Encoder8,
  getU8Decoder as getU8Decoder6,
  getU8Encoder as getU8Encoder6
} from "@solana/kit";

// src/kit/generated/types/evtCloseConfig.ts
import {
  combineCodec as combineCodec13,
  getAddressDecoder as getAddressDecoder4,
  getAddressEncoder as getAddressEncoder4,
  getStructDecoder as getStructDecoder13,
  getStructEncoder as getStructEncoder13
} from "@solana/kit";

// src/kit/generated/types/evtClosePosition.ts
import {
  combineCodec as combineCodec14,
  getAddressDecoder as getAddressDecoder5,
  getAddressEncoder as getAddressEncoder5,
  getStructDecoder as getStructDecoder14,
  getStructEncoder as getStructEncoder14
} from "@solana/kit";

// src/kit/generated/types/evtCreateConfig.ts
import {
  combineCodec as combineCodec15,
  getAddressDecoder as getAddressDecoder6,
  getAddressEncoder as getAddressEncoder6,
  getStructDecoder as getStructDecoder15,
  getStructEncoder as getStructEncoder15,
  getU128Decoder as getU128Decoder4,
  getU128Encoder as getU128Encoder4,
  getU64Decoder as getU64Decoder9,
  getU64Encoder as getU64Encoder9,
  getU8Decoder as getU8Decoder7,
  getU8Encoder as getU8Encoder7
} from "@solana/kit";

// src/kit/generated/types/evtCreateDynamicConfig.ts
import {
  combineCodec as combineCodec16,
  getAddressDecoder as getAddressDecoder7,
  getAddressEncoder as getAddressEncoder7,
  getStructDecoder as getStructDecoder16,
  getStructEncoder as getStructEncoder16,
  getU64Decoder as getU64Decoder10,
  getU64Encoder as getU64Encoder10
} from "@solana/kit";

// src/kit/generated/types/evtCreatePosition.ts
import {
  combineCodec as combineCodec17,
  getAddressDecoder as getAddressDecoder8,
  getAddressEncoder as getAddressEncoder8,
  getStructDecoder as getStructDecoder17,
  getStructEncoder as getStructEncoder17
} from "@solana/kit";

// src/kit/generated/types/evtCreateTokenBadge.ts
import {
  combineCodec as combineCodec18,
  getAddressDecoder as getAddressDecoder9,
  getAddressEncoder as getAddressEncoder9,
  getStructDecoder as getStructDecoder18,
  getStructEncoder as getStructEncoder18
} from "@solana/kit";

// src/kit/generated/types/evtFundReward.ts
import {
  combineCodec as combineCodec19,
  getAddressDecoder as getAddressDecoder10,
  getAddressEncoder as getAddressEncoder10,
  getStructDecoder as getStructDecoder19,
  getStructEncoder as getStructEncoder19,
  getU128Decoder as getU128Decoder5,
  getU128Encoder as getU128Encoder5,
  getU64Decoder as getU64Decoder11,
  getU64Encoder as getU64Encoder11,
  getU8Decoder as getU8Decoder8,
  getU8Encoder as getU8Encoder8
} from "@solana/kit";

// src/kit/generated/types/evtInitializePool.ts
import {
  combineCodec as combineCodec20,
  getAddressDecoder as getAddressDecoder11,
  getAddressEncoder as getAddressEncoder11,
  getStructDecoder as getStructDecoder20,
  getStructEncoder as getStructEncoder20,
  getU128Decoder as getU128Decoder6,
  getU128Encoder as getU128Encoder6,
  getU64Decoder as getU64Decoder12,
  getU64Encoder as getU64Encoder12,
  getU8Decoder as getU8Decoder9,
  getU8Encoder as getU8Encoder9
} from "@solana/kit";

// src/kit/generated/types/evtInitializeReward.ts
import {
  combineCodec as combineCodec21,
  getAddressDecoder as getAddressDecoder12,
  getAddressEncoder as getAddressEncoder12,
  getStructDecoder as getStructDecoder21,
  getStructEncoder as getStructEncoder21,
  getU64Decoder as getU64Decoder13,
  getU64Encoder as getU64Encoder13,
  getU8Decoder as getU8Decoder10,
  getU8Encoder as getU8Encoder10
} from "@solana/kit";

// src/kit/generated/types/evtLiquidityChange.ts
import {
  combineCodec as combineCodec22,
  getAddressDecoder as getAddressDecoder13,
  getAddressEncoder as getAddressEncoder13,
  getStructDecoder as getStructDecoder22,
  getStructEncoder as getStructEncoder22,
  getU128Decoder as getU128Decoder7,
  getU128Encoder as getU128Encoder7,
  getU64Decoder as getU64Decoder14,
  getU64Encoder as getU64Encoder14,
  getU8Decoder as getU8Decoder11,
  getU8Encoder as getU8Encoder11
} from "@solana/kit";

// src/kit/generated/types/evtLockPosition.ts
import {
  combineCodec as combineCodec23,
  getAddressDecoder as getAddressDecoder14,
  getAddressEncoder as getAddressEncoder14,
  getStructDecoder as getStructDecoder23,
  getStructEncoder as getStructEncoder23,
  getU128Decoder as getU128Decoder8,
  getU128Encoder as getU128Encoder8,
  getU16Decoder as getU16Decoder7,
  getU16Encoder as getU16Encoder7,
  getU64Decoder as getU64Decoder15,
  getU64Encoder as getU64Encoder15
} from "@solana/kit";

// src/kit/generated/types/evtPermanentLockPosition.ts
import {
  combineCodec as combineCodec24,
  getAddressDecoder as getAddressDecoder15,
  getAddressEncoder as getAddressEncoder15,
  getStructDecoder as getStructDecoder24,
  getStructEncoder as getStructEncoder24,
  getU128Decoder as getU128Decoder9,
  getU128Encoder as getU128Encoder9
} from "@solana/kit";

// src/kit/generated/types/evtSetPoolStatus.ts
import {
  combineCodec as combineCodec25,
  getAddressDecoder as getAddressDecoder16,
  getAddressEncoder as getAddressEncoder16,
  getStructDecoder as getStructDecoder25,
  getStructEncoder as getStructEncoder25,
  getU8Decoder as getU8Decoder12,
  getU8Encoder as getU8Encoder12
} from "@solana/kit";

// src/kit/generated/types/evtSplitPosition2.ts
import {
  combineCodec as combineCodec26,
  getAddressDecoder as getAddressDecoder17,
  getAddressEncoder as getAddressEncoder17,
  getStructDecoder as getStructDecoder26,
  getStructEncoder as getStructEncoder26,
  getU128Decoder as getU128Decoder10,
  getU128Encoder as getU128Encoder10
} from "@solana/kit";

// src/kit/generated/types/evtSplitPosition3.ts
import {
  combineCodec as combineCodec27,
  getAddressDecoder as getAddressDecoder18,
  getAddressEncoder as getAddressEncoder18,
  getStructDecoder as getStructDecoder27,
  getStructEncoder as getStructEncoder27,
  getU128Decoder as getU128Decoder11,
  getU128Encoder as getU128Encoder11
} from "@solana/kit";

// src/kit/generated/types/evtSwap2.ts
import {
  combineCodec as combineCodec28,
  getAddressDecoder as getAddressDecoder19,
  getAddressEncoder as getAddressEncoder19,
  getBooleanDecoder,
  getBooleanEncoder,
  getStructDecoder as getStructDecoder28,
  getStructEncoder as getStructEncoder28,
  getU64Decoder as getU64Decoder16,
  getU64Encoder as getU64Encoder16,
  getU8Decoder as getU8Decoder13,
  getU8Encoder as getU8Encoder13
} from "@solana/kit";

// src/kit/generated/types/evtUpdatePoolFees.ts
import {
  combineCodec as combineCodec29,
  getAddressDecoder as getAddressDecoder20,
  getAddressEncoder as getAddressEncoder20,
  getStructDecoder as getStructDecoder29,
  getStructEncoder as getStructEncoder29
} from "@solana/kit";

// src/kit/generated/types/evtUpdateRewardDuration.ts
import {
  combineCodec as combineCodec30,
  getAddressDecoder as getAddressDecoder21,
  getAddressEncoder as getAddressEncoder21,
  getStructDecoder as getStructDecoder30,
  getStructEncoder as getStructEncoder30,
  getU64Decoder as getU64Decoder17,
  getU64Encoder as getU64Encoder17,
  getU8Decoder as getU8Decoder14,
  getU8Encoder as getU8Encoder14
} from "@solana/kit";

// src/kit/generated/types/evtUpdateRewardFunder.ts
import {
  combineCodec as combineCodec31,
  getAddressDecoder as getAddressDecoder22,
  getAddressEncoder as getAddressEncoder22,
  getStructDecoder as getStructDecoder31,
  getStructEncoder as getStructEncoder31,
  getU8Decoder as getU8Decoder15,
  getU8Encoder as getU8Encoder15
} from "@solana/kit";

// src/kit/generated/types/evtWithdrawIneligibleReward.ts
import {
  combineCodec as combineCodec32,
  getAddressDecoder as getAddressDecoder23,
  getAddressEncoder as getAddressEncoder23,
  getStructDecoder as getStructDecoder32,
  getStructEncoder as getStructEncoder32,
  getU64Decoder as getU64Decoder18,
  getU64Encoder as getU64Encoder18
} from "@solana/kit";

// src/kit/generated/types/initializeCustomizablePoolParameters.ts
import {
  combineCodec as combineCodec33,
  getBooleanDecoder as getBooleanDecoder2,
  getBooleanEncoder as getBooleanEncoder2,
  getOptionDecoder,
  getOptionEncoder,
  getStructDecoder as getStructDecoder33,
  getStructEncoder as getStructEncoder33,
  getU128Decoder as getU128Decoder12,
  getU128Encoder as getU128Encoder12,
  getU64Decoder as getU64Decoder19,
  getU64Encoder as getU64Encoder19,
  getU8Decoder as getU8Decoder16,
  getU8Encoder as getU8Encoder16
} from "@solana/kit";
function getInitializeCustomizablePoolParametersEncoder() {
  return getStructEncoder33([
    ["poolFees", getPoolFeeParametersEncoder()],
    ["sqrtMinPrice", getU128Encoder12()],
    ["sqrtMaxPrice", getU128Encoder12()],
    ["hasAlphaVault", getBooleanEncoder2()],
    ["liquidity", getU128Encoder12()],
    ["sqrtPrice", getU128Encoder12()],
    ["activationType", getU8Encoder16()],
    ["collectFeeMode", getU8Encoder16()],
    ["activationPoint", getOptionEncoder(getU64Encoder19())]
  ]);
}

// src/kit/generated/types/innerVesting.ts
import {
  combineCodec as combineCodec34,
  fixDecoderSize as fixDecoderSize5,
  fixEncoderSize as fixEncoderSize5,
  getBytesDecoder as getBytesDecoder5,
  getBytesEncoder as getBytesEncoder5,
  getStructDecoder as getStructDecoder34,
  getStructEncoder as getStructEncoder34,
  getU128Decoder as getU128Decoder13,
  getU128Encoder as getU128Encoder13,
  getU16Decoder as getU16Decoder8,
  getU16Encoder as getU16Encoder8,
  getU64Decoder as getU64Decoder20,
  getU64Encoder as getU64Encoder20
} from "@solana/kit";
function getInnerVestingDecoder() {
  return getStructDecoder34([
    ["cliffPoint", getU64Decoder20()],
    ["periodFrequency", getU64Decoder20()],
    ["cliffUnlockLiquidity", getU128Decoder13()],
    ["liquidityPerPeriod", getU128Decoder13()],
    ["totalReleasedLiquidity", getU128Decoder13()],
    ["numberOfPeriod", getU16Decoder8()],
    ["padding", fixDecoderSize5(getBytesDecoder5(), 14)]
  ]);
}

// src/kit/generated/types/poolFeeParameters.ts
import {
  combineCodec as combineCodec35,
  getOptionDecoder as getOptionDecoder2,
  getOptionEncoder as getOptionEncoder2,
  getStructDecoder as getStructDecoder35,
  getStructEncoder as getStructEncoder35,
  getU16Decoder as getU16Decoder9,
  getU16Encoder as getU16Encoder9,
  getU8Decoder as getU8Decoder17,
  getU8Encoder as getU8Encoder17
} from "@solana/kit";
function getPoolFeeParametersEncoder() {
  return getStructEncoder35([
    ["baseFee", getBaseFeeParametersEncoder()],
    ["compoundingFeeBps", getU16Encoder9()],
    ["padding", getU8Encoder17()],
    ["dynamicFee", getOptionEncoder2(getDynamicFeeParametersEncoder())]
  ]);
}

// src/kit/generated/types/poolFeesConfig.ts
import {
  combineCodec as combineCodec36,
  fixDecoderSize as fixDecoderSize6,
  fixEncoderSize as fixEncoderSize6,
  getArrayDecoder,
  getArrayEncoder,
  getBytesDecoder as getBytesDecoder6,
  getBytesEncoder as getBytesEncoder6,
  getStructDecoder as getStructDecoder36,
  getStructEncoder as getStructEncoder36,
  getU16Decoder as getU16Decoder10,
  getU16Encoder as getU16Encoder10,
  getU64Decoder as getU64Decoder21,
  getU64Encoder as getU64Encoder21,
  getU8Decoder as getU8Decoder18,
  getU8Encoder as getU8Encoder18
} from "@solana/kit";
function getPoolFeesConfigDecoder() {
  return getStructDecoder36([
    ["baseFee", getBaseFeeInfoDecoder()],
    ["dynamicFee", getDynamicFeeConfigDecoder()],
    ["protocolFeePercent", getU8Decoder18()],
    ["padding0", getU8Decoder18()],
    ["referralFeePercent", getU8Decoder18()],
    ["padding1", fixDecoderSize6(getBytesDecoder6(), 3)],
    ["compoundingFeeBps", getU16Decoder10()],
    ["padding2", getArrayDecoder(getU64Decoder21(), { size: 5 })]
  ]);
}

// src/kit/generated/types/poolFeesStruct.ts
import {
  combineCodec as combineCodec37,
  fixDecoderSize as fixDecoderSize7,
  fixEncoderSize as fixEncoderSize7,
  getBytesDecoder as getBytesDecoder7,
  getBytesEncoder as getBytesEncoder7,
  getStructDecoder as getStructDecoder37,
  getStructEncoder as getStructEncoder37,
  getU128Decoder as getU128Decoder14,
  getU128Encoder as getU128Encoder14,
  getU16Decoder as getU16Decoder11,
  getU16Encoder as getU16Encoder11,
  getU8Decoder as getU8Decoder19,
  getU8Encoder as getU8Encoder19
} from "@solana/kit";
function getPoolFeesStructDecoder() {
  return getStructDecoder37([
    ["baseFee", getBaseFeeStructDecoder()],
    ["protocolFeePercent", getU8Decoder19()],
    ["padding0", getU8Decoder19()],
    ["referralFeePercent", getU8Decoder19()],
    ["padding1", fixDecoderSize7(getBytesDecoder7(), 3)],
    ["compoundingFeeBps", getU16Decoder11()],
    ["dynamicFee", getDynamicFeeStructDecoder()],
    ["initSqrtPrice", getU128Decoder14()]
  ]);
}

// src/kit/generated/types/poolMetrics.ts
import {
  combineCodec as combineCodec38,
  getArrayDecoder as getArrayDecoder2,
  getArrayEncoder as getArrayEncoder2,
  getStructDecoder as getStructDecoder38,
  getStructEncoder as getStructEncoder38,
  getU128Decoder as getU128Decoder15,
  getU128Encoder as getU128Encoder15,
  getU64Decoder as getU64Decoder22,
  getU64Encoder as getU64Encoder22
} from "@solana/kit";
function getPoolMetricsDecoder() {
  return getStructDecoder38([
    ["totalLpAFee", getU128Decoder15()],
    ["totalLpBFee", getU128Decoder15()],
    ["totalProtocolAFee", getU64Decoder22()],
    ["totalProtocolBFee", getU64Decoder22()],
    ["padding0", getArrayDecoder2(getU64Decoder22(), { size: 2 })],
    ["totalPosition", getU64Decoder22()],
    ["padding", getU64Decoder22()]
  ]);
}

// src/kit/generated/types/positionMetrics.ts
import {
  combineCodec as combineCodec39,
  getStructDecoder as getStructDecoder39,
  getStructEncoder as getStructEncoder39,
  getU64Decoder as getU64Decoder23,
  getU64Encoder as getU64Encoder23
} from "@solana/kit";
function getPositionMetricsDecoder() {
  return getStructDecoder39([
    ["totalClaimedAFee", getU64Decoder23()],
    ["totalClaimedBFee", getU64Decoder23()]
  ]);
}

// src/kit/generated/types/rewardInfo.ts
import {
  combineCodec as combineCodec40,
  fixDecoderSize as fixDecoderSize8,
  fixEncoderSize as fixEncoderSize8,
  getAddressDecoder as getAddressDecoder24,
  getAddressEncoder as getAddressEncoder24,
  getBytesDecoder as getBytesDecoder8,
  getBytesEncoder as getBytesEncoder8,
  getStructDecoder as getStructDecoder40,
  getStructEncoder as getStructEncoder40,
  getU128Decoder as getU128Decoder16,
  getU128Encoder as getU128Encoder16,
  getU64Decoder as getU64Decoder24,
  getU64Encoder as getU64Encoder24,
  getU8Decoder as getU8Decoder20,
  getU8Encoder as getU8Encoder20
} from "@solana/kit";
function getRewardInfoDecoder() {
  return getStructDecoder40([
    ["initialized", getU8Decoder20()],
    ["rewardTokenFlag", getU8Decoder20()],
    ["padding0", fixDecoderSize8(getBytesDecoder8(), 6)],
    ["padding1", fixDecoderSize8(getBytesDecoder8(), 8)],
    ["mint", getAddressDecoder24()],
    ["vault", getAddressDecoder24()],
    ["funder", getAddressDecoder24()],
    ["rewardDuration", getU64Decoder24()],
    ["rewardDurationEnd", getU64Decoder24()],
    ["rewardRate", getU128Decoder16()],
    ["rewardPerTokenStored", fixDecoderSize8(getBytesDecoder8(), 32)],
    ["lastUpdateTime", getU64Decoder24()],
    ["cumulativeSecondsWithEmptyLiquidityReward", getU64Decoder24()]
  ]);
}

// src/kit/generated/types/splitAmountInfo.ts
import {
  combineCodec as combineCodec41,
  getStructDecoder as getStructDecoder41,
  getStructEncoder as getStructEncoder41,
  getU128Decoder as getU128Decoder17,
  getU128Encoder as getU128Encoder17,
  getU64Decoder as getU64Decoder25,
  getU64Encoder as getU64Encoder25
} from "@solana/kit";

// src/kit/generated/types/splitAmountInfo2.ts
import {
  combineCodec as combineCodec42,
  getStructDecoder as getStructDecoder42,
  getStructEncoder as getStructEncoder42,
  getU128Decoder as getU128Decoder18,
  getU128Encoder as getU128Encoder18,
  getU64Decoder as getU64Decoder26,
  getU64Encoder as getU64Encoder26
} from "@solana/kit";

// src/kit/generated/types/splitPositionInfo.ts
import {
  combineCodec as combineCodec43,
  getStructDecoder as getStructDecoder43,
  getStructEncoder as getStructEncoder43,
  getU128Decoder as getU128Decoder19,
  getU128Encoder as getU128Encoder19,
  getU64Decoder as getU64Decoder27,
  getU64Encoder as getU64Encoder27
} from "@solana/kit";

// src/kit/generated/types/splitPositionInfo2.ts
import {
  combineCodec as combineCodec44,
  getStructDecoder as getStructDecoder44,
  getStructEncoder as getStructEncoder44,
  getU128Decoder as getU128Decoder20,
  getU128Encoder as getU128Encoder20,
  getU64Decoder as getU64Decoder28,
  getU64Encoder as getU64Encoder28
} from "@solana/kit";

// src/kit/generated/types/splitPositionParameters2.ts
import {
  combineCodec as combineCodec45,
  getStructDecoder as getStructDecoder45,
  getStructEncoder as getStructEncoder45,
  getU32Decoder as getU32Decoder6,
  getU32Encoder as getU32Encoder6
} from "@solana/kit";

// src/kit/generated/types/splitPositionParameters3.ts
import {
  combineCodec as combineCodec46,
  getStructDecoder as getStructDecoder46,
  getStructEncoder as getStructEncoder46,
  getU32Decoder as getU32Decoder7,
  getU32Encoder as getU32Encoder7
} from "@solana/kit";

// src/kit/generated/types/swapParameters2.ts
import {
  combineCodec as combineCodec47,
  getStructDecoder as getStructDecoder47,
  getStructEncoder as getStructEncoder47,
  getU64Decoder as getU64Decoder29,
  getU64Encoder as getU64Encoder29,
  getU8Decoder as getU8Decoder21,
  getU8Encoder as getU8Encoder21
} from "@solana/kit";
function getSwapParameters2Encoder() {
  return getStructEncoder47([
    ["amount0", getU64Encoder29()],
    ["amount1", getU64Encoder29()],
    ["swapMode", getU8Encoder21()]
  ]);
}

// src/kit/generated/types/swapResult2.ts
import {
  combineCodec as combineCodec48,
  getStructDecoder as getStructDecoder48,
  getStructEncoder as getStructEncoder48,
  getU128Decoder as getU128Decoder21,
  getU128Encoder as getU128Encoder21,
  getU64Decoder as getU64Decoder30,
  getU64Encoder as getU64Encoder30
} from "@solana/kit";

// src/kit/generated/types/updatePoolFeesParameters.ts
import {
  combineCodec as combineCodec49,
  getOptionDecoder as getOptionDecoder3,
  getOptionEncoder as getOptionEncoder3,
  getStructDecoder as getStructDecoder49,
  getStructEncoder as getStructEncoder49,
  getU64Decoder as getU64Decoder31,
  getU64Encoder as getU64Encoder31
} from "@solana/kit";

// src/kit/generated/types/userRewardInfo.ts
import {
  combineCodec as combineCodec50,
  fixDecoderSize as fixDecoderSize9,
  fixEncoderSize as fixEncoderSize9,
  getBytesDecoder as getBytesDecoder9,
  getBytesEncoder as getBytesEncoder9,
  getStructDecoder as getStructDecoder50,
  getStructEncoder as getStructEncoder50,
  getU64Decoder as getU64Decoder32,
  getU64Encoder as getU64Encoder32
} from "@solana/kit";
function getUserRewardInfoDecoder() {
  return getStructDecoder50([
    ["rewardPerTokenCheckpoint", fixDecoderSize9(getBytesDecoder9(), 32)],
    ["rewardPendings", getU64Decoder32()],
    ["totalClaimedRewards", getU64Decoder32()]
  ]);
}

// src/kit/generated/types/vestingParameters.ts
import {
  combineCodec as combineCodec51,
  getOptionDecoder as getOptionDecoder4,
  getOptionEncoder as getOptionEncoder4,
  getStructDecoder as getStructDecoder51,
  getStructEncoder as getStructEncoder51,
  getU128Decoder as getU128Decoder22,
  getU128Encoder as getU128Encoder22,
  getU16Decoder as getU16Decoder12,
  getU16Encoder as getU16Encoder12,
  getU64Decoder as getU64Decoder33,
  getU64Encoder as getU64Encoder33
} from "@solana/kit";
function getVestingParametersEncoder() {
  return getStructEncoder51([
    ["cliffPoint", getOptionEncoder4(getU64Encoder33())],
    ["periodFrequency", getU64Encoder33()],
    ["cliffUnlockLiquidity", getU128Encoder22()],
    ["liquidityPerPeriod", getU128Encoder22()],
    ["numberOfPeriod", getU16Encoder12()]
  ]);
}

// src/kit/generated/accounts/config.ts
var CONFIG_DISCRIMINATOR = new Uint8Array([
  155,
  12,
  170,
  224,
  30,
  250,
  204,
  130
]);
function getConfigDecoder() {
  return getStructDecoder52([
    ["discriminator", fixDecoderSize10(getBytesDecoder10(), 8)],
    ["vaultConfigKey", getAddressDecoder25()],
    ["poolCreatorAuthority", getAddressDecoder25()],
    ["poolFees", getPoolFeesConfigDecoder()],
    ["activationType", getU8Decoder22()],
    ["collectFeeMode", getU8Decoder22()],
    ["configType", getU8Decoder22()],
    ["padding0", fixDecoderSize10(getBytesDecoder10(), 5)],
    ["index", getU64Decoder34()],
    ["sqrtMinPrice", getU128Decoder23()],
    ["sqrtMaxPrice", getU128Decoder23()],
    ["padding1", getArrayDecoder3(getU64Decoder34(), { size: 10 })]
  ]);
}
function decodeConfig(encodedAccount) {
  return decodeAccount(
    encodedAccount,
    getConfigDecoder()
  );
}
function fetchConfig(rpc, address5, config) {
  return __async(this, null, function* () {
    const maybeAccount = yield fetchMaybeConfig(rpc, address5, config);
    assertAccountExists(maybeAccount);
    return maybeAccount;
  });
}
function fetchMaybeConfig(rpc, address5, config) {
  return __async(this, null, function* () {
    const maybeAccount = yield fetchEncodedAccount(rpc, address5, config);
    return decodeConfig(maybeAccount);
  });
}
function fetchAllConfig(rpc, addresses, config) {
  return __async(this, null, function* () {
    const maybeAccounts = yield fetchAllMaybeConfig(rpc, addresses, config);
    assertAccountsExist(maybeAccounts);
    return maybeAccounts;
  });
}
function fetchAllMaybeConfig(rpc, addresses, config) {
  return __async(this, null, function* () {
    const maybeAccounts = yield fetchEncodedAccounts(rpc, addresses, config);
    return maybeAccounts.map((maybeAccount) => decodeConfig(maybeAccount));
  });
}

// src/kit/generated/accounts/operator.ts
import {
  assertAccountExists as assertAccountExists2,
  assertAccountsExist as assertAccountsExist2,
  combineCodec as combineCodec53,
  decodeAccount as decodeAccount2,
  fetchEncodedAccount as fetchEncodedAccount2,
  fetchEncodedAccounts as fetchEncodedAccounts2,
  fixDecoderSize as fixDecoderSize11,
  fixEncoderSize as fixEncoderSize11,
  getAddressDecoder as getAddressDecoder26,
  getAddressEncoder as getAddressEncoder26,
  getArrayDecoder as getArrayDecoder4,
  getArrayEncoder as getArrayEncoder4,
  getBytesDecoder as getBytesDecoder11,
  getBytesEncoder as getBytesEncoder11,
  getStructDecoder as getStructDecoder53,
  getStructEncoder as getStructEncoder53,
  getU128Decoder as getU128Decoder24,
  getU128Encoder as getU128Encoder24,
  getU64Decoder as getU64Decoder35,
  getU64Encoder as getU64Encoder35,
  transformEncoder as transformEncoder2
} from "@solana/kit";
var OPERATOR_DISCRIMINATOR = new Uint8Array([
  219,
  31,
  188,
  145,
  69,
  139,
  204,
  117
]);

// src/kit/generated/accounts/podAlignedFeeMarketCapScheduler.ts
import {
  assertAccountExists as assertAccountExists3,
  assertAccountsExist as assertAccountsExist3,
  combineCodec as combineCodec54,
  decodeAccount as decodeAccount3,
  fetchEncodedAccount as fetchEncodedAccount3,
  fetchEncodedAccounts as fetchEncodedAccounts3,
  fixDecoderSize as fixDecoderSize12,
  fixEncoderSize as fixEncoderSize12,
  getBytesDecoder as getBytesDecoder12,
  getBytesEncoder as getBytesEncoder12,
  getStructDecoder as getStructDecoder54,
  getStructEncoder as getStructEncoder54,
  getU16Decoder as getU16Decoder13,
  getU16Encoder as getU16Encoder13,
  getU32Decoder as getU32Decoder8,
  getU32Encoder as getU32Encoder8,
  getU64Decoder as getU64Decoder36,
  getU64Encoder as getU64Encoder36,
  getU8Decoder as getU8Decoder23,
  getU8Encoder as getU8Encoder23,
  transformEncoder as transformEncoder3
} from "@solana/kit";
var POD_ALIGNED_FEE_MARKET_CAP_SCHEDULER_DISCRIMINATOR = new Uint8Array([251, 130, 208, 253, 245, 27, 145, 203]);

// src/kit/generated/accounts/podAlignedFeeRateLimiter.ts
import {
  assertAccountExists as assertAccountExists4,
  assertAccountsExist as assertAccountsExist4,
  combineCodec as combineCodec55,
  decodeAccount as decodeAccount4,
  fetchEncodedAccount as fetchEncodedAccount4,
  fetchEncodedAccounts as fetchEncodedAccounts4,
  fixDecoderSize as fixDecoderSize13,
  fixEncoderSize as fixEncoderSize13,
  getBytesDecoder as getBytesDecoder13,
  getBytesEncoder as getBytesEncoder13,
  getStructDecoder as getStructDecoder55,
  getStructEncoder as getStructEncoder55,
  getU16Decoder as getU16Decoder14,
  getU16Encoder as getU16Encoder14,
  getU32Decoder as getU32Decoder9,
  getU32Encoder as getU32Encoder9,
  getU64Decoder as getU64Decoder37,
  getU64Encoder as getU64Encoder37,
  getU8Decoder as getU8Decoder24,
  getU8Encoder as getU8Encoder24,
  transformEncoder as transformEncoder4
} from "@solana/kit";
var POD_ALIGNED_FEE_RATE_LIMITER_DISCRIMINATOR = new Uint8Array([
  160,
  219,
  8,
  251,
  179,
  7,
  16,
  117
]);

// src/kit/generated/accounts/podAlignedFeeTimeScheduler.ts
import {
  assertAccountExists as assertAccountExists5,
  assertAccountsExist as assertAccountsExist5,
  combineCodec as combineCodec56,
  decodeAccount as decodeAccount5,
  fetchEncodedAccount as fetchEncodedAccount5,
  fetchEncodedAccounts as fetchEncodedAccounts5,
  fixDecoderSize as fixDecoderSize14,
  fixEncoderSize as fixEncoderSize14,
  getBytesDecoder as getBytesDecoder14,
  getBytesEncoder as getBytesEncoder14,
  getStructDecoder as getStructDecoder56,
  getStructEncoder as getStructEncoder56,
  getU16Decoder as getU16Decoder15,
  getU16Encoder as getU16Encoder15,
  getU64Decoder as getU64Decoder38,
  getU64Encoder as getU64Encoder38,
  getU8Decoder as getU8Decoder25,
  getU8Encoder as getU8Encoder25,
  transformEncoder as transformEncoder5
} from "@solana/kit";
var POD_ALIGNED_FEE_TIME_SCHEDULER_DISCRIMINATOR = new Uint8Array([
  239,
  132,
  138,
  213,
  67,
  154,
  130,
  70
]);

// src/kit/generated/accounts/pool.ts
import {
  assertAccountExists as assertAccountExists6,
  assertAccountsExist as assertAccountsExist6,
  combineCodec as combineCodec57,
  decodeAccount as decodeAccount6,
  fetchEncodedAccount as fetchEncodedAccount6,
  fetchEncodedAccounts as fetchEncodedAccounts6,
  fixDecoderSize as fixDecoderSize15,
  fixEncoderSize as fixEncoderSize15,
  getAddressDecoder as getAddressDecoder27,
  getAddressEncoder as getAddressEncoder27,
  getArrayDecoder as getArrayDecoder5,
  getArrayEncoder as getArrayEncoder5,
  getBytesDecoder as getBytesDecoder15,
  getBytesEncoder as getBytesEncoder15,
  getStructDecoder as getStructDecoder57,
  getStructEncoder as getStructEncoder57,
  getU128Decoder as getU128Decoder25,
  getU128Encoder as getU128Encoder25,
  getU64Decoder as getU64Decoder39,
  getU64Encoder as getU64Encoder39,
  getU8Decoder as getU8Decoder26,
  getU8Encoder as getU8Encoder26,
  transformEncoder as transformEncoder6
} from "@solana/kit";
var POOL_DISCRIMINATOR = new Uint8Array([
  241,
  154,
  109,
  4,
  17,
  177,
  109,
  188
]);
function getPoolDecoder() {
  return getStructDecoder57([
    ["discriminator", fixDecoderSize15(getBytesDecoder15(), 8)],
    ["poolFees", getPoolFeesStructDecoder()],
    ["tokenAMint", getAddressDecoder27()],
    ["tokenBMint", getAddressDecoder27()],
    ["tokenAVault", getAddressDecoder27()],
    ["tokenBVault", getAddressDecoder27()],
    ["whitelistedVault", getAddressDecoder27()],
    ["padding0", fixDecoderSize15(getBytesDecoder15(), 32)],
    ["liquidity", getU128Decoder25()],
    ["padding1", getU128Decoder25()],
    ["protocolAFee", getU64Decoder39()],
    ["protocolBFee", getU64Decoder39()],
    ["padding2", getU128Decoder25()],
    ["sqrtMinPrice", getU128Decoder25()],
    ["sqrtMaxPrice", getU128Decoder25()],
    ["sqrtPrice", getU128Decoder25()],
    ["activationPoint", getU64Decoder39()],
    ["activationType", getU8Decoder26()],
    ["poolStatus", getU8Decoder26()],
    ["tokenAFlag", getU8Decoder26()],
    ["tokenBFlag", getU8Decoder26()],
    ["collectFeeMode", getU8Decoder26()],
    ["poolType", getU8Decoder26()],
    ["feeVersion", getU8Decoder26()],
    ["padding3", getU8Decoder26()],
    ["feeAPerLiquidity", fixDecoderSize15(getBytesDecoder15(), 32)],
    ["feeBPerLiquidity", fixDecoderSize15(getBytesDecoder15(), 32)],
    ["permanentLockLiquidity", getU128Decoder25()],
    ["metrics", getPoolMetricsDecoder()],
    ["creator", getAddressDecoder27()],
    ["tokenAAmount", getU64Decoder39()],
    ["tokenBAmount", getU64Decoder39()],
    ["layoutVersion", getU8Decoder26()],
    ["padding4", fixDecoderSize15(getBytesDecoder15(), 7)],
    ["padding5", getArrayDecoder5(getU64Decoder39(), { size: 3 })],
    ["rewardInfos", getArrayDecoder5(getRewardInfoDecoder(), { size: 2 })]
  ]);
}
function decodePool(encodedAccount) {
  return decodeAccount6(
    encodedAccount,
    getPoolDecoder()
  );
}
function fetchPool(rpc, address5, config) {
  return __async(this, null, function* () {
    const maybeAccount = yield fetchMaybePool(rpc, address5, config);
    assertAccountExists6(maybeAccount);
    return maybeAccount;
  });
}
function fetchMaybePool(rpc, address5, config) {
  return __async(this, null, function* () {
    const maybeAccount = yield fetchEncodedAccount6(rpc, address5, config);
    return decodePool(maybeAccount);
  });
}
function fetchAllPool(rpc, addresses, config) {
  return __async(this, null, function* () {
    const maybeAccounts = yield fetchAllMaybePool(rpc, addresses, config);
    assertAccountsExist6(maybeAccounts);
    return maybeAccounts;
  });
}
function fetchAllMaybePool(rpc, addresses, config) {
  return __async(this, null, function* () {
    const maybeAccounts = yield fetchEncodedAccounts6(rpc, addresses, config);
    return maybeAccounts.map((maybeAccount) => decodePool(maybeAccount));
  });
}

// src/kit/generated/accounts/position.ts
import {
  assertAccountExists as assertAccountExists7,
  assertAccountsExist as assertAccountsExist7,
  combineCodec as combineCodec58,
  decodeAccount as decodeAccount7,
  fetchEncodedAccount as fetchEncodedAccount7,
  fetchEncodedAccounts as fetchEncodedAccounts7,
  fixDecoderSize as fixDecoderSize16,
  fixEncoderSize as fixEncoderSize16,
  getAddressDecoder as getAddressDecoder28,
  getAddressEncoder as getAddressEncoder28,
  getArrayDecoder as getArrayDecoder6,
  getArrayEncoder as getArrayEncoder6,
  getBytesDecoder as getBytesDecoder16,
  getBytesEncoder as getBytesEncoder16,
  getStructDecoder as getStructDecoder58,
  getStructEncoder as getStructEncoder58,
  getU128Decoder as getU128Decoder26,
  getU128Encoder as getU128Encoder26,
  getU64Decoder as getU64Decoder40,
  getU64Encoder as getU64Encoder40,
  transformEncoder as transformEncoder7
} from "@solana/kit";
var POSITION_DISCRIMINATOR = new Uint8Array([
  170,
  188,
  143,
  228,
  122,
  64,
  247,
  208
]);
function getPositionDecoder() {
  return getStructDecoder58([
    ["discriminator", fixDecoderSize16(getBytesDecoder16(), 8)],
    ["pool", getAddressDecoder28()],
    ["nftMint", getAddressDecoder28()],
    ["feeAPerTokenCheckpoint", fixDecoderSize16(getBytesDecoder16(), 32)],
    ["feeBPerTokenCheckpoint", fixDecoderSize16(getBytesDecoder16(), 32)],
    ["feeAPending", getU64Decoder40()],
    ["feeBPending", getU64Decoder40()],
    ["unlockedLiquidity", getU128Decoder26()],
    ["vestedLiquidity", getU128Decoder26()],
    ["permanentLockedLiquidity", getU128Decoder26()],
    ["metrics", getPositionMetricsDecoder()],
    ["rewardInfos", getArrayDecoder6(getUserRewardInfoDecoder(), { size: 2 })],
    ["innerVesting", getInnerVestingDecoder()],
    ["padding", getU128Decoder26()]
  ]);
}
function decodePosition(encodedAccount) {
  return decodeAccount7(
    encodedAccount,
    getPositionDecoder()
  );
}
function fetchPosition(rpc, address5, config) {
  return __async(this, null, function* () {
    const maybeAccount = yield fetchMaybePosition(rpc, address5, config);
    assertAccountExists7(maybeAccount);
    return maybeAccount;
  });
}
function fetchMaybePosition(rpc, address5, config) {
  return __async(this, null, function* () {
    const maybeAccount = yield fetchEncodedAccount7(rpc, address5, config);
    return decodePosition(maybeAccount);
  });
}
function fetchAllPosition(rpc, addresses, config) {
  return __async(this, null, function* () {
    const maybeAccounts = yield fetchAllMaybePosition(rpc, addresses, config);
    assertAccountsExist7(maybeAccounts);
    return maybeAccounts;
  });
}
function fetchAllMaybePosition(rpc, addresses, config) {
  return __async(this, null, function* () {
    const maybeAccounts = yield fetchEncodedAccounts7(rpc, addresses, config);
    return maybeAccounts.map((maybeAccount) => decodePosition(maybeAccount));
  });
}

// src/kit/generated/accounts/tokenBadge.ts
import {
  assertAccountExists as assertAccountExists8,
  assertAccountsExist as assertAccountsExist8,
  combineCodec as combineCodec59,
  decodeAccount as decodeAccount8,
  fetchEncodedAccount as fetchEncodedAccount8,
  fetchEncodedAccounts as fetchEncodedAccounts8,
  fixDecoderSize as fixDecoderSize17,
  fixEncoderSize as fixEncoderSize17,
  getAddressDecoder as getAddressDecoder29,
  getAddressEncoder as getAddressEncoder29,
  getBytesDecoder as getBytesDecoder17,
  getBytesEncoder as getBytesEncoder17,
  getStructDecoder as getStructDecoder59,
  getStructEncoder as getStructEncoder59,
  transformEncoder as transformEncoder8
} from "@solana/kit";
var TOKEN_BADGE_DISCRIMINATOR = new Uint8Array([
  116,
  219,
  204,
  229,
  249,
  116,
  255,
  150
]);

// src/kit/generated/accounts/vesting.ts
import {
  assertAccountExists as assertAccountExists9,
  assertAccountsExist as assertAccountsExist9,
  combineCodec as combineCodec60,
  decodeAccount as decodeAccount9,
  fetchEncodedAccount as fetchEncodedAccount9,
  fetchEncodedAccounts as fetchEncodedAccounts9,
  fixDecoderSize as fixDecoderSize18,
  fixEncoderSize as fixEncoderSize18,
  getAddressDecoder as getAddressDecoder30,
  getAddressEncoder as getAddressEncoder30,
  getArrayDecoder as getArrayDecoder7,
  getArrayEncoder as getArrayEncoder7,
  getBytesDecoder as getBytesDecoder18,
  getBytesEncoder as getBytesEncoder18,
  getStructDecoder as getStructDecoder60,
  getStructEncoder as getStructEncoder60,
  getU128Decoder as getU128Decoder27,
  getU128Encoder as getU128Encoder27,
  transformEncoder as transformEncoder9
} from "@solana/kit";
var VESTING_DISCRIMINATOR = new Uint8Array([
  100,
  149,
  66,
  138,
  95,
  200,
  128,
  241
]);
function getVestingDecoder() {
  return getStructDecoder60([
    ["discriminator", fixDecoderSize18(getBytesDecoder18(), 8)],
    ["position", getAddressDecoder30()],
    ["innerVesting", getInnerVestingDecoder()],
    ["padding2", getArrayDecoder7(getU128Decoder27(), { size: 4 })]
  ]);
}
function decodeVesting(encodedAccount) {
  return decodeAccount9(
    encodedAccount,
    getVestingDecoder()
  );
}

// src/kit/generated/errors/cpAmm.ts
import {
  isProgramError
} from "@solana/kit";

// src/kit/generated/programs/cpAmm.ts
import {
  assertIsInstructionWithAccounts,
  containsBytes,
  fixEncoderSize as fixEncoderSize57,
  getBytesEncoder as getBytesEncoder66,
  SOLANA_ERROR__PROGRAM_CLIENTS__FAILED_TO_IDENTIFY_ACCOUNT,
  SOLANA_ERROR__PROGRAM_CLIENTS__FAILED_TO_IDENTIFY_INSTRUCTION,
  SOLANA_ERROR__PROGRAM_CLIENTS__UNRECOGNIZED_INSTRUCTION_TYPE,
  SolanaError as SolanaError39
} from "@solana/kit";
import {
  addSelfFetchFunctions,
  addSelfPlanAndSendFunctions
} from "@solana/kit/program-client-core";

// src/kit/generated/instructions/addLiquidity.ts
import {
  combineCodec as combineCodec61,
  fixDecoderSize as fixDecoderSize19,
  fixEncoderSize as fixEncoderSize19,
  getBytesDecoder as getBytesDecoder19,
  getBytesEncoder as getBytesEncoder28,
  getStructDecoder as getStructDecoder61,
  getStructEncoder as getStructEncoder61,
  getU128Decoder as getU128Decoder28,
  getU128Encoder as getU128Encoder28,
  getU64Decoder as getU64Decoder41,
  getU64Encoder as getU64Encoder42,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS,
  SolanaError,
  transformEncoder as transformEncoder10
} from "@solana/kit";
import {
  getAccountMetaFactory
} from "@solana/kit/program-client-core";

// src/kit/generated/pdas/config.ts
import {
  getBytesEncoder as getBytesEncoder19,
  getProgramDerivedAddress,
  getU64Encoder as getU64Encoder41
} from "@solana/kit";

// src/kit/generated/pdas/eventAuthority.ts
import {
  getBytesEncoder as getBytesEncoder20,
  getProgramDerivedAddress as getProgramDerivedAddress2
} from "@solana/kit";
function findEventAuthorityPda() {
  return __async(this, arguments, function* (config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield getProgramDerivedAddress2({
      programAddress,
      seeds: [
        getBytesEncoder20().encode(
          new Uint8Array([
            95,
            95,
            101,
            118,
            101,
            110,
            116,
            95,
            97,
            117,
            116,
            104,
            111,
            114,
            105,
            116,
            121
          ])
        )
      ]
    });
  });
}

// src/kit/generated/pdas/operator.ts
import {
  getAddressEncoder as getAddressEncoder31,
  getBytesEncoder as getBytesEncoder21,
  getProgramDerivedAddress as getProgramDerivedAddress3
} from "@solana/kit";
function findOperatorPda(_0) {
  return __async(this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield getProgramDerivedAddress3({
      programAddress,
      seeds: [
        getBytesEncoder21().encode(
          new Uint8Array([111, 112, 101, 114, 97, 116, 111, 114])
        ),
        getAddressEncoder31().encode(seeds.whitelistedAddress)
      ]
    });
  });
}

// src/kit/generated/pdas/position.ts
import {
  getAddressEncoder as getAddressEncoder32,
  getBytesEncoder as getBytesEncoder22,
  getProgramDerivedAddress as getProgramDerivedAddress4
} from "@solana/kit";
function findPositionPda(_0) {
  return __async(this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield getProgramDerivedAddress4({
      programAddress,
      seeds: [
        getBytesEncoder22().encode(
          new Uint8Array([112, 111, 115, 105, 116, 105, 111, 110])
        ),
        getAddressEncoder32().encode(seeds.positionNftMint)
      ]
    });
  });
}

// src/kit/generated/pdas/positionNftAccount.ts
import {
  getAddressEncoder as getAddressEncoder33,
  getBytesEncoder as getBytesEncoder23,
  getProgramDerivedAddress as getProgramDerivedAddress5
} from "@solana/kit";
function findPositionNftAccountPda(_0) {
  return __async(this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield getProgramDerivedAddress5({
      programAddress,
      seeds: [
        getBytesEncoder23().encode(
          new Uint8Array([
            112,
            111,
            115,
            105,
            116,
            105,
            111,
            110,
            95,
            110,
            102,
            116,
            95,
            97,
            99,
            99,
            111,
            117,
            110,
            116
          ])
        ),
        getAddressEncoder33().encode(seeds.positionNftMint)
      ]
    });
  });
}

// src/kit/generated/pdas/rewardVault.ts
import {
  getAddressEncoder as getAddressEncoder34,
  getBytesEncoder as getBytesEncoder24,
  getProgramDerivedAddress as getProgramDerivedAddress6,
  getU8Encoder as getU8Encoder27
} from "@solana/kit";
function findRewardVaultPda(_0) {
  return __async(this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield getProgramDerivedAddress6({
      programAddress,
      seeds: [
        getBytesEncoder24().encode(
          new Uint8Array([
            114,
            101,
            119,
            97,
            114,
            100,
            95,
            118,
            97,
            117,
            108,
            116
          ])
        ),
        getAddressEncoder34().encode(seeds.pool),
        getU8Encoder27().encode(seeds.rewardIndex)
      ]
    });
  });
}

// src/kit/generated/pdas/tokenAVault.ts
import {
  getAddressEncoder as getAddressEncoder35,
  getBytesEncoder as getBytesEncoder25,
  getProgramDerivedAddress as getProgramDerivedAddress7
} from "@solana/kit";
function findTokenAVaultPda(_0) {
  return __async(this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield getProgramDerivedAddress7({
      programAddress,
      seeds: [
        getBytesEncoder25().encode(
          new Uint8Array([116, 111, 107, 101, 110, 95, 118, 97, 117, 108, 116])
        ),
        getAddressEncoder35().encode(seeds.tokenAMint),
        getAddressEncoder35().encode(seeds.pool)
      ]
    });
  });
}

// src/kit/generated/pdas/tokenBadge.ts
import {
  getAddressEncoder as getAddressEncoder36,
  getBytesEncoder as getBytesEncoder26,
  getProgramDerivedAddress as getProgramDerivedAddress8
} from "@solana/kit";
function findTokenBadgePda(_0) {
  return __async(this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield getProgramDerivedAddress8({
      programAddress,
      seeds: [
        getBytesEncoder26().encode(
          new Uint8Array([116, 111, 107, 101, 110, 95, 98, 97, 100, 103, 101])
        ),
        getAddressEncoder36().encode(seeds.tokenMint)
      ]
    });
  });
}

// src/kit/generated/pdas/tokenBVault.ts
import {
  getAddressEncoder as getAddressEncoder37,
  getBytesEncoder as getBytesEncoder27,
  getProgramDerivedAddress as getProgramDerivedAddress9
} from "@solana/kit";
function findTokenBVaultPda(_0) {
  return __async(this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield getProgramDerivedAddress9({
      programAddress,
      seeds: [
        getBytesEncoder27().encode(
          new Uint8Array([116, 111, 107, 101, 110, 95, 118, 97, 117, 108, 116])
        ),
        getAddressEncoder37().encode(seeds.tokenBMint),
        getAddressEncoder37().encode(seeds.pool)
      ]
    });
  });
}

// src/kit/generated/instructions/addLiquidity.ts
var ADD_LIQUIDITY_DISCRIMINATOR = new Uint8Array([
  181,
  157,
  89,
  67,
  143,
  182,
  52,
  72
]);
function getAddLiquidityInstructionDataEncoder() {
  return transformEncoder10(
    getStructEncoder61([
      ["discriminator", fixEncoderSize19(getBytesEncoder28(), 8)],
      ["liquidityDelta", getU128Encoder28()],
      ["tokenAAmountThreshold", getU64Encoder42()],
      ["tokenBAmountThreshold", getU64Encoder42()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: ADD_LIQUIDITY_DISCRIMINATOR })
  );
}
function getAddLiquidityInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      position: { value: (_c = input.position) != null ? _c : null, isWritable: true },
      tokenAAccount: { value: (_d = input.tokenAAccount) != null ? _d : null, isWritable: true },
      tokenBAccount: { value: (_e = input.tokenBAccount) != null ? _e : null, isWritable: true },
      tokenAVault: { value: (_f = input.tokenAVault) != null ? _f : null, isWritable: true },
      tokenBVault: { value: (_g = input.tokenBVault) != null ? _g : null, isWritable: true },
      tokenAMint: { value: (_h = input.tokenAMint) != null ? _h : null, isWritable: false },
      tokenBMint: { value: (_i = input.tokenBMint) != null ? _i : null, isWritable: false },
      positionNftAccount: {
        value: (_j = input.positionNftAccount) != null ? _j : null,
        isWritable: false
      },
      owner: { value: (_k = input.owner) != null ? _k : null, isWritable: false },
      tokenAProgram: { value: (_l = input.tokenAProgram) != null ? _l : null, isWritable: false },
      tokenBProgram: { value: (_m = input.tokenBProgram) != null ? _m : null, isWritable: false },
      eventAuthority: { value: (_n = input.eventAuthority) != null ? _n : null, isWritable: false },
      program: { value: (_o = input.program) != null ? _o : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("tokenAAccount", accounts.tokenAAccount),
        getAccountMeta("tokenBAccount", accounts.tokenBAccount),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getAddLiquidityInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/claimPositionFee.ts
import {
  combineCodec as combineCodec62,
  fixDecoderSize as fixDecoderSize20,
  fixEncoderSize as fixEncoderSize20,
  getBytesDecoder as getBytesDecoder20,
  getBytesEncoder as getBytesEncoder29,
  getStructDecoder as getStructDecoder62,
  getStructEncoder as getStructEncoder62,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS2,
  SolanaError as SolanaError2,
  transformEncoder as transformEncoder11
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory2
} from "@solana/kit/program-client-core";
var CLAIM_POSITION_FEE_DISCRIMINATOR = new Uint8Array([
  180,
  38,
  154,
  17,
  133,
  33,
  162,
  211
]);
function getClaimPositionFeeInstructionDataEncoder() {
  return transformEncoder11(
    getStructEncoder62([["discriminator", fixEncoderSize20(getBytesEncoder29(), 8)]]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: CLAIM_POSITION_FEE_DISCRIMINATOR })
  );
}
function getClaimPositionFeeInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      poolAuthority: { value: (_b = input.poolAuthority) != null ? _b : null, isWritable: false },
      pool: { value: (_c = input.pool) != null ? _c : null, isWritable: false },
      position: { value: (_d = input.position) != null ? _d : null, isWritable: true },
      tokenAAccount: { value: (_e = input.tokenAAccount) != null ? _e : null, isWritable: true },
      tokenBAccount: { value: (_f = input.tokenBAccount) != null ? _f : null, isWritable: true },
      tokenAVault: { value: (_g = input.tokenAVault) != null ? _g : null, isWritable: true },
      tokenBVault: { value: (_h = input.tokenBVault) != null ? _h : null, isWritable: true },
      tokenAMint: { value: (_i = input.tokenAMint) != null ? _i : null, isWritable: false },
      tokenBMint: { value: (_j = input.tokenBMint) != null ? _j : null, isWritable: false },
      positionNftAccount: {
        value: (_k = input.positionNftAccount) != null ? _k : null,
        isWritable: false
      },
      owner: { value: (_l = input.owner) != null ? _l : null, isWritable: false },
      tokenAProgram: { value: (_m = input.tokenAProgram) != null ? _m : null, isWritable: false },
      tokenBProgram: { value: (_n = input.tokenBProgram) != null ? _n : null, isWritable: false },
      eventAuthority: { value: (_o = input.eventAuthority) != null ? _o : null, isWritable: false },
      program: { value: (_p = input.program) != null ? _p : null, isWritable: false }
    };
    const accounts = originalAccounts;
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory2(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("tokenAAccount", accounts.tokenAAccount),
        getAccountMeta("tokenBAccount", accounts.tokenBAccount),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getClaimPositionFeeInstructionDataEncoder().encode({}),
      programAddress
    });
  });
}

// src/kit/generated/instructions/claimProtocolFee.ts
import {
  combineCodec as combineCodec63,
  fixDecoderSize as fixDecoderSize21,
  fixEncoderSize as fixEncoderSize21,
  getBytesDecoder as getBytesDecoder21,
  getBytesEncoder as getBytesEncoder30,
  getStructDecoder as getStructDecoder63,
  getStructEncoder as getStructEncoder63,
  getU64Decoder as getU64Decoder42,
  getU64Encoder as getU64Encoder43,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS3,
  SolanaError as SolanaError3,
  transformEncoder as transformEncoder12
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory3
} from "@solana/kit/program-client-core";
var CLAIM_PROTOCOL_FEE_DISCRIMINATOR = new Uint8Array([
  165,
  228,
  133,
  48,
  99,
  249,
  255,
  33
]);

// src/kit/generated/instructions/claimReward.ts
import {
  combineCodec as combineCodec64,
  fixDecoderSize as fixDecoderSize22,
  fixEncoderSize as fixEncoderSize22,
  getBytesDecoder as getBytesDecoder22,
  getBytesEncoder as getBytesEncoder31,
  getStructDecoder as getStructDecoder64,
  getStructEncoder as getStructEncoder64,
  getU8Decoder as getU8Decoder27,
  getU8Encoder as getU8Encoder28,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS4,
  SolanaError as SolanaError4,
  transformEncoder as transformEncoder13
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory4
} from "@solana/kit/program-client-core";
var CLAIM_REWARD_DISCRIMINATOR = new Uint8Array([
  149,
  95,
  181,
  242,
  94,
  90,
  158,
  162
]);
function getClaimRewardInstructionDataEncoder() {
  return transformEncoder13(
    getStructEncoder64([
      ["discriminator", fixEncoderSize22(getBytesEncoder31(), 8)],
      ["rewardIndex", getU8Encoder28()],
      ["skipReward", getU8Encoder28()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: CLAIM_REWARD_DISCRIMINATOR })
  );
}
function getClaimRewardInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      poolAuthority: { value: (_b = input.poolAuthority) != null ? _b : null, isWritable: false },
      pool: { value: (_c = input.pool) != null ? _c : null, isWritable: true },
      position: { value: (_d = input.position) != null ? _d : null, isWritable: true },
      rewardVault: { value: (_e = input.rewardVault) != null ? _e : null, isWritable: true },
      rewardMint: { value: (_f = input.rewardMint) != null ? _f : null, isWritable: false },
      userTokenAccount: {
        value: (_g = input.userTokenAccount) != null ? _g : null,
        isWritable: true
      },
      positionNftAccount: {
        value: (_h = input.positionNftAccount) != null ? _h : null,
        isWritable: false
      },
      owner: { value: (_i = input.owner) != null ? _i : null, isWritable: false },
      tokenProgram: { value: (_j = input.tokenProgram) != null ? _j : null, isWritable: false },
      eventAuthority: { value: (_k = input.eventAuthority) != null ? _k : null, isWritable: false },
      program: { value: (_l = input.program) != null ? _l : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory4(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("rewardVault", accounts.rewardVault),
        getAccountMeta("rewardMint", accounts.rewardMint),
        getAccountMeta("userTokenAccount", accounts.userTokenAccount),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("tokenProgram", accounts.tokenProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getClaimRewardInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/closeConfig.ts
import {
  combineCodec as combineCodec65,
  fixDecoderSize as fixDecoderSize23,
  fixEncoderSize as fixEncoderSize23,
  getBytesDecoder as getBytesDecoder23,
  getBytesEncoder as getBytesEncoder32,
  getStructDecoder as getStructDecoder65,
  getStructEncoder as getStructEncoder65,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS5,
  SolanaError as SolanaError5,
  transformEncoder as transformEncoder14
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory5
} from "@solana/kit/program-client-core";
var CLOSE_CONFIG_DISCRIMINATOR = new Uint8Array([
  145,
  9,
  72,
  157,
  95,
  125,
  61,
  85
]);

// src/kit/generated/instructions/closeOperatorAccount.ts
import {
  combineCodec as combineCodec66,
  fixDecoderSize as fixDecoderSize24,
  fixEncoderSize as fixEncoderSize24,
  getBytesDecoder as getBytesDecoder24,
  getBytesEncoder as getBytesEncoder33,
  getStructDecoder as getStructDecoder66,
  getStructEncoder as getStructEncoder66,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS6,
  SolanaError as SolanaError6,
  transformEncoder as transformEncoder15
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory6
} from "@solana/kit/program-client-core";
var CLOSE_OPERATOR_ACCOUNT_DISCRIMINATOR = new Uint8Array([
  171,
  9,
  213,
  74,
  120,
  23,
  3,
  29
]);

// src/kit/generated/instructions/closePosition.ts
import {
  combineCodec as combineCodec67,
  fixDecoderSize as fixDecoderSize25,
  fixEncoderSize as fixEncoderSize25,
  getBytesDecoder as getBytesDecoder25,
  getBytesEncoder as getBytesEncoder34,
  getStructDecoder as getStructDecoder67,
  getStructEncoder as getStructEncoder67,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS7,
  SolanaError as SolanaError7,
  transformEncoder as transformEncoder16
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory7
} from "@solana/kit/program-client-core";
var CLOSE_POSITION_DISCRIMINATOR = new Uint8Array([
  123,
  134,
  81,
  0,
  49,
  68,
  98,
  98
]);
function getClosePositionInstructionDataEncoder() {
  return transformEncoder16(
    getStructEncoder67([["discriminator", fixEncoderSize25(getBytesEncoder34(), 8)]]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: CLOSE_POSITION_DISCRIMINATOR })
  );
}
function getClosePositionInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      positionNftMint: { value: (_b = input.positionNftMint) != null ? _b : null, isWritable: true },
      positionNftAccount: {
        value: (_c = input.positionNftAccount) != null ? _c : null,
        isWritable: true
      },
      pool: { value: (_d = input.pool) != null ? _d : null, isWritable: true },
      position: { value: (_e = input.position) != null ? _e : null, isWritable: true },
      poolAuthority: { value: (_f = input.poolAuthority) != null ? _f : null, isWritable: false },
      rentReceiver: { value: (_g = input.rentReceiver) != null ? _g : null, isWritable: true },
      owner: { value: (_h = input.owner) != null ? _h : null, isWritable: false },
      tokenProgram: { value: (_i = input.tokenProgram) != null ? _i : null, isWritable: false },
      eventAuthority: { value: (_j = input.eventAuthority) != null ? _j : null, isWritable: false },
      program: { value: (_k = input.program) != null ? _k : null, isWritable: false }
    };
    const accounts = originalAccounts;
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory7(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("positionNftMint", accounts.positionNftMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("rentReceiver", accounts.rentReceiver),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("tokenProgram", accounts.tokenProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getClosePositionInstructionDataEncoder().encode({}),
      programAddress
    });
  });
}

// src/kit/generated/instructions/closeTokenBadge.ts
import {
  combineCodec as combineCodec68,
  fixDecoderSize as fixDecoderSize26,
  fixEncoderSize as fixEncoderSize26,
  getBytesDecoder as getBytesDecoder26,
  getBytesEncoder as getBytesEncoder35,
  getStructDecoder as getStructDecoder68,
  getStructEncoder as getStructEncoder68,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS8,
  SolanaError as SolanaError8,
  transformEncoder as transformEncoder17
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory8
} from "@solana/kit/program-client-core";
var CLOSE_TOKEN_BADGE_DISCRIMINATOR = new Uint8Array([
  108,
  146,
  86,
  110,
  179,
  254,
  10,
  104
]);

// src/kit/generated/instructions/createConfig.ts
import {
  combineCodec as combineCodec69,
  fixDecoderSize as fixDecoderSize27,
  fixEncoderSize as fixEncoderSize27,
  getAddressDecoder as getAddressDecoder31,
  getAddressEncoder as getAddressEncoder38,
  getBytesDecoder as getBytesDecoder27,
  getBytesEncoder as getBytesEncoder36,
  getStructDecoder as getStructDecoder69,
  getStructEncoder as getStructEncoder69,
  getU128Decoder as getU128Decoder29,
  getU128Encoder as getU128Encoder29,
  getU64Decoder as getU64Decoder43,
  getU64Encoder as getU64Encoder44,
  getU8Decoder as getU8Decoder28,
  getU8Encoder as getU8Encoder29,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS9,
  SolanaError as SolanaError9,
  transformEncoder as transformEncoder18
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory9,
  getNonNullResolvedInstructionInput
} from "@solana/kit/program-client-core";
var CREATE_CONFIG_DISCRIMINATOR = new Uint8Array([
  201,
  207,
  243,
  114,
  75,
  111,
  47,
  189
]);

// src/kit/generated/instructions/createDynamicConfig.ts
import {
  combineCodec as combineCodec70,
  fixDecoderSize as fixDecoderSize28,
  fixEncoderSize as fixEncoderSize28,
  getAddressDecoder as getAddressDecoder32,
  getAddressEncoder as getAddressEncoder39,
  getBytesDecoder as getBytesDecoder28,
  getBytesEncoder as getBytesEncoder37,
  getStructDecoder as getStructDecoder70,
  getStructEncoder as getStructEncoder70,
  getU64Decoder as getU64Decoder44,
  getU64Encoder as getU64Encoder45,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS10,
  SolanaError as SolanaError10,
  transformEncoder as transformEncoder19
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory10,
  getNonNullResolvedInstructionInput as getNonNullResolvedInstructionInput2
} from "@solana/kit/program-client-core";
var CREATE_DYNAMIC_CONFIG_DISCRIMINATOR = new Uint8Array([
  81,
  251,
  122,
  78,
  66,
  57,
  208,
  82
]);

// src/kit/generated/instructions/createOperatorAccount.ts
import {
  combineCodec as combineCodec71,
  fixDecoderSize as fixDecoderSize29,
  fixEncoderSize as fixEncoderSize29,
  getBytesDecoder as getBytesDecoder29,
  getBytesEncoder as getBytesEncoder38,
  getStructDecoder as getStructDecoder71,
  getStructEncoder as getStructEncoder71,
  getU128Decoder as getU128Decoder30,
  getU128Encoder as getU128Encoder30,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS11,
  SolanaError as SolanaError11,
  transformEncoder as transformEncoder20
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory11,
  getAddressFromResolvedInstructionAccount
} from "@solana/kit/program-client-core";
var CREATE_OPERATOR_ACCOUNT_DISCRIMINATOR = new Uint8Array([
  221,
  64,
  246,
  149,
  240,
  153,
  229,
  163
]);

// src/kit/generated/instructions/createPosition.ts
import {
  combineCodec as combineCodec72,
  fixDecoderSize as fixDecoderSize30,
  fixEncoderSize as fixEncoderSize30,
  getBytesDecoder as getBytesDecoder30,
  getBytesEncoder as getBytesEncoder39,
  getStructDecoder as getStructDecoder72,
  getStructEncoder as getStructEncoder72,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS12,
  SolanaError as SolanaError12,
  transformEncoder as transformEncoder21
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory12,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount2
} from "@solana/kit/program-client-core";
var CREATE_POSITION_DISCRIMINATOR = new Uint8Array([
  48,
  215,
  197,
  153,
  96,
  203,
  180,
  133
]);
function getCreatePositionInstructionDataEncoder() {
  return transformEncoder21(
    getStructEncoder72([["discriminator", fixEncoderSize30(getBytesEncoder39(), 8)]]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: CREATE_POSITION_DISCRIMINATOR })
  );
}
function getCreatePositionInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      owner: { value: (_b = input.owner) != null ? _b : null, isWritable: false },
      positionNftMint: { value: (_c = input.positionNftMint) != null ? _c : null, isWritable: true },
      positionNftAccount: {
        value: (_d = input.positionNftAccount) != null ? _d : null,
        isWritable: true
      },
      pool: { value: (_e = input.pool) != null ? _e : null, isWritable: true },
      position: { value: (_f = input.position) != null ? _f : null, isWritable: true },
      poolAuthority: { value: (_g = input.poolAuthority) != null ? _g : null, isWritable: false },
      payer: { value: (_h = input.payer) != null ? _h : null, isWritable: true },
      tokenProgram: { value: (_i = input.tokenProgram) != null ? _i : null, isWritable: false },
      systemProgram: { value: (_j = input.systemProgram) != null ? _j : null, isWritable: false },
      eventAuthority: { value: (_k = input.eventAuthority) != null ? _k : null, isWritable: false },
      program: { value: (_l = input.program) != null ? _l : null, isWritable: false }
    };
    const accounts = originalAccounts;
    if (!accounts.positionNftAccount.value) {
      accounts.positionNftAccount.value = yield findPositionNftAccountPda({
        positionNftMint: getAddressFromResolvedInstructionAccount2(
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.position.value) {
      accounts.position.value = yield findPositionPda({
        positionNftMint: getAddressFromResolvedInstructionAccount2(
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
    }
    if (!accounts.systemProgram.value) {
      accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory12(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("positionNftMint", accounts.positionNftMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("payer", accounts.payer),
        getAccountMeta("tokenProgram", accounts.tokenProgram),
        getAccountMeta("systemProgram", accounts.systemProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getCreatePositionInstructionDataEncoder().encode({}),
      programAddress
    });
  });
}

// src/kit/generated/instructions/createTokenBadge.ts
import {
  combineCodec as combineCodec73,
  fixDecoderSize as fixDecoderSize31,
  fixEncoderSize as fixEncoderSize31,
  getBytesDecoder as getBytesDecoder31,
  getBytesEncoder as getBytesEncoder40,
  getStructDecoder as getStructDecoder73,
  getStructEncoder as getStructEncoder73,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS13,
  SolanaError as SolanaError13,
  transformEncoder as transformEncoder22
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory13,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount3
} from "@solana/kit/program-client-core";
var CREATE_TOKEN_BADGE_DISCRIMINATOR = new Uint8Array([
  88,
  206,
  0,
  91,
  60,
  175,
  151,
  118
]);

// src/kit/generated/instructions/dummyIx.ts
import {
  combineCodec as combineCodec74,
  fixDecoderSize as fixDecoderSize32,
  fixEncoderSize as fixEncoderSize32,
  getBytesDecoder as getBytesDecoder32,
  getBytesEncoder as getBytesEncoder41,
  getStructDecoder as getStructDecoder74,
  getStructEncoder as getStructEncoder74,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS14,
  SolanaError as SolanaError14,
  transformEncoder as transformEncoder23
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory14
} from "@solana/kit/program-client-core";
var DUMMY_IX_DISCRIMINATOR = new Uint8Array([
  234,
  95,
  176,
  185,
  7,
  42,
  35,
  159
]);

// src/kit/generated/instructions/fixConfigFeeParams.ts
import {
  combineCodec as combineCodec75,
  fixDecoderSize as fixDecoderSize33,
  fixEncoderSize as fixEncoderSize33,
  getBytesDecoder as getBytesDecoder33,
  getBytesEncoder as getBytesEncoder42,
  getStructDecoder as getStructDecoder75,
  getStructEncoder as getStructEncoder75,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS15,
  SolanaError as SolanaError15,
  transformEncoder as transformEncoder24
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory15
} from "@solana/kit/program-client-core";
var FIX_CONFIG_FEE_PARAMS_DISCRIMINATOR = new Uint8Array([
  38,
  30,
  216,
  81,
  250,
  177,
  243,
  254
]);

// src/kit/generated/instructions/fixPoolFeeParams.ts
import {
  combineCodec as combineCodec76,
  fixDecoderSize as fixDecoderSize34,
  fixEncoderSize as fixEncoderSize34,
  getBytesDecoder as getBytesDecoder34,
  getBytesEncoder as getBytesEncoder43,
  getStructDecoder as getStructDecoder76,
  getStructEncoder as getStructEncoder76,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS16,
  SolanaError as SolanaError16,
  transformEncoder as transformEncoder25
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory16
} from "@solana/kit/program-client-core";
var FIX_POOL_FEE_PARAMS_DISCRIMINATOR = new Uint8Array([
  132,
  98,
  81,
  196,
  44,
  58,
  120,
  193
]);

// src/kit/generated/instructions/fixPoolLayoutVersion.ts
import {
  combineCodec as combineCodec77,
  fixDecoderSize as fixDecoderSize35,
  fixEncoderSize as fixEncoderSize35,
  getBytesDecoder as getBytesDecoder35,
  getBytesEncoder as getBytesEncoder44,
  getStructDecoder as getStructDecoder77,
  getStructEncoder as getStructEncoder77,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS17,
  SolanaError as SolanaError17,
  transformEncoder as transformEncoder26
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory17
} from "@solana/kit/program-client-core";
var FIX_POOL_LAYOUT_VERSION_DISCRIMINATOR = new Uint8Array([
  166,
  158,
  69,
  35,
  81,
  167,
  200,
  215
]);

// src/kit/generated/instructions/fundReward.ts
import {
  combineCodec as combineCodec78,
  fixDecoderSize as fixDecoderSize36,
  fixEncoderSize as fixEncoderSize36,
  getBooleanDecoder as getBooleanDecoder3,
  getBooleanEncoder as getBooleanEncoder3,
  getBytesDecoder as getBytesDecoder36,
  getBytesEncoder as getBytesEncoder45,
  getStructDecoder as getStructDecoder78,
  getStructEncoder as getStructEncoder78,
  getU64Decoder as getU64Decoder45,
  getU64Encoder as getU64Encoder46,
  getU8Decoder as getU8Decoder29,
  getU8Encoder as getU8Encoder30,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS18,
  SolanaError as SolanaError18,
  transformEncoder as transformEncoder27
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory18
} from "@solana/kit/program-client-core";
var FUND_REWARD_DISCRIMINATOR = new Uint8Array([
  188,
  50,
  249,
  165,
  93,
  151,
  38,
  63
]);
function getFundRewardInstructionDataEncoder() {
  return transformEncoder27(
    getStructEncoder78([
      ["discriminator", fixEncoderSize36(getBytesEncoder45(), 8)],
      ["rewardIndex", getU8Encoder30()],
      ["amount", getU64Encoder46()],
      ["carryForward", getBooleanEncoder3()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: FUND_REWARD_DISCRIMINATOR })
  );
}
function getFundRewardInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      rewardVault: { value: (_c = input.rewardVault) != null ? _c : null, isWritable: true },
      rewardMint: { value: (_d = input.rewardMint) != null ? _d : null, isWritable: false },
      funderTokenAccount: {
        value: (_e = input.funderTokenAccount) != null ? _e : null,
        isWritable: true
      },
      funder: { value: (_f = input.funder) != null ? _f : null, isWritable: false },
      tokenProgram: { value: (_g = input.tokenProgram) != null ? _g : null, isWritable: false },
      eventAuthority: { value: (_h = input.eventAuthority) != null ? _h : null, isWritable: false },
      program: { value: (_i = input.program) != null ? _i : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory18(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("rewardVault", accounts.rewardVault),
        getAccountMeta("rewardMint", accounts.rewardMint),
        getAccountMeta("funderTokenAccount", accounts.funderTokenAccount),
        getAccountMeta("funder", accounts.funder),
        getAccountMeta("tokenProgram", accounts.tokenProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getFundRewardInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/initializeCustomizablePool.ts
import {
  combineCodec as combineCodec79,
  fixDecoderSize as fixDecoderSize37,
  fixEncoderSize as fixEncoderSize37,
  getBytesDecoder as getBytesDecoder37,
  getBytesEncoder as getBytesEncoder46,
  getStructDecoder as getStructDecoder79,
  getStructEncoder as getStructEncoder79,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS19,
  SolanaError as SolanaError19,
  transformEncoder as transformEncoder28
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory19,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount4
} from "@solana/kit/program-client-core";
var INITIALIZE_CUSTOMIZABLE_POOL_DISCRIMINATOR = new Uint8Array([
  20,
  161,
  241,
  24,
  189,
  221,
  180,
  2
]);
function getInitializeCustomizablePoolInstructionDataEncoder() {
  return transformEncoder28(
    getStructEncoder79([
      ["discriminator", fixEncoderSize37(getBytesEncoder46(), 8)],
      ["params", getInitializeCustomizablePoolParametersEncoder()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), {
      discriminator: INITIALIZE_CUSTOMIZABLE_POOL_DISCRIMINATOR
    })
  );
}
function getInitializeCustomizablePoolInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      creator: { value: (_b = input.creator) != null ? _b : null, isWritable: false },
      positionNftMint: { value: (_c = input.positionNftMint) != null ? _c : null, isWritable: true },
      positionNftAccount: {
        value: (_d = input.positionNftAccount) != null ? _d : null,
        isWritable: true
      },
      payer: { value: (_e = input.payer) != null ? _e : null, isWritable: true },
      poolAuthority: { value: (_f = input.poolAuthority) != null ? _f : null, isWritable: false },
      pool: { value: (_g = input.pool) != null ? _g : null, isWritable: true },
      position: { value: (_h = input.position) != null ? _h : null, isWritable: true },
      tokenAMint: { value: (_i = input.tokenAMint) != null ? _i : null, isWritable: false },
      tokenBMint: { value: (_j = input.tokenBMint) != null ? _j : null, isWritable: false },
      tokenAVault: { value: (_k = input.tokenAVault) != null ? _k : null, isWritable: true },
      tokenBVault: { value: (_l = input.tokenBVault) != null ? _l : null, isWritable: true },
      payerTokenA: { value: (_m = input.payerTokenA) != null ? _m : null, isWritable: true },
      payerTokenB: { value: (_n = input.payerTokenB) != null ? _n : null, isWritable: true },
      tokenAProgram: { value: (_o = input.tokenAProgram) != null ? _o : null, isWritable: false },
      tokenBProgram: { value: (_p = input.tokenBProgram) != null ? _p : null, isWritable: false },
      token2022Program: {
        value: (_q = input.token2022Program) != null ? _q : null,
        isWritable: false
      },
      systemProgram: { value: (_r = input.systemProgram) != null ? _r : null, isWritable: false },
      eventAuthority: { value: (_s = input.eventAuthority) != null ? _s : null, isWritable: false },
      program: { value: (_t = input.program) != null ? _t : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.positionNftAccount.value) {
      accounts.positionNftAccount.value = yield findPositionNftAccountPda({
        positionNftMint: getAddressFromResolvedInstructionAccount4(
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.position.value) {
      accounts.position.value = yield findPositionPda({
        positionNftMint: getAddressFromResolvedInstructionAccount4(
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.tokenAVault.value) {
      accounts.tokenAVault.value = yield findTokenAVaultPda({
        tokenAMint: getAddressFromResolvedInstructionAccount4(
          "tokenAMint",
          accounts.tokenAMint.value
        ),
        pool: getAddressFromResolvedInstructionAccount4(
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.tokenBVault.value) {
      accounts.tokenBVault.value = yield findTokenBVaultPda({
        tokenBMint: getAddressFromResolvedInstructionAccount4(
          "tokenBMint",
          accounts.tokenBMint.value
        ),
        pool: getAddressFromResolvedInstructionAccount4(
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.token2022Program.value) {
      accounts.token2022Program.value = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
    }
    if (!accounts.systemProgram.value) {
      accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory19(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("creator", accounts.creator),
        getAccountMeta("positionNftMint", accounts.positionNftMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("payer", accounts.payer),
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("payerTokenA", accounts.payerTokenA),
        getAccountMeta("payerTokenB", accounts.payerTokenB),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("token2022Program", accounts.token2022Program),
        getAccountMeta("systemProgram", accounts.systemProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getInitializeCustomizablePoolInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/initializePool.ts
import {
  combineCodec as combineCodec80,
  fixDecoderSize as fixDecoderSize38,
  fixEncoderSize as fixEncoderSize38,
  getBytesDecoder as getBytesDecoder38,
  getBytesEncoder as getBytesEncoder47,
  getOptionDecoder as getOptionDecoder5,
  getOptionEncoder as getOptionEncoder5,
  getStructDecoder as getStructDecoder80,
  getStructEncoder as getStructEncoder80,
  getU128Decoder as getU128Decoder31,
  getU128Encoder as getU128Encoder31,
  getU64Decoder as getU64Decoder46,
  getU64Encoder as getU64Encoder47,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS20,
  SolanaError as SolanaError20,
  transformEncoder as transformEncoder29
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory20,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount5
} from "@solana/kit/program-client-core";
var INITIALIZE_POOL_DISCRIMINATOR = new Uint8Array([
  95,
  180,
  10,
  172,
  84,
  174,
  232,
  40
]);
function getInitializePoolInstructionDataEncoder() {
  return transformEncoder29(
    getStructEncoder80([
      ["discriminator", fixEncoderSize38(getBytesEncoder47(), 8)],
      ["liquidity", getU128Encoder31()],
      ["sqrtPrice", getU128Encoder31()],
      ["activationPoint", getOptionEncoder5(getU64Encoder47())]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: INITIALIZE_POOL_DISCRIMINATOR })
  );
}
function getInitializePoolInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      creator: { value: (_b = input.creator) != null ? _b : null, isWritable: false },
      positionNftMint: { value: (_c = input.positionNftMint) != null ? _c : null, isWritable: true },
      positionNftAccount: {
        value: (_d = input.positionNftAccount) != null ? _d : null,
        isWritable: true
      },
      payer: { value: (_e = input.payer) != null ? _e : null, isWritable: true },
      config: { value: (_f = input.config) != null ? _f : null, isWritable: false },
      poolAuthority: { value: (_g = input.poolAuthority) != null ? _g : null, isWritable: false },
      pool: { value: (_h = input.pool) != null ? _h : null, isWritable: true },
      position: { value: (_i = input.position) != null ? _i : null, isWritable: true },
      tokenAMint: { value: (_j = input.tokenAMint) != null ? _j : null, isWritable: false },
      tokenBMint: { value: (_k = input.tokenBMint) != null ? _k : null, isWritable: false },
      tokenAVault: { value: (_l = input.tokenAVault) != null ? _l : null, isWritable: true },
      tokenBVault: { value: (_m = input.tokenBVault) != null ? _m : null, isWritable: true },
      payerTokenA: { value: (_n = input.payerTokenA) != null ? _n : null, isWritable: true },
      payerTokenB: { value: (_o = input.payerTokenB) != null ? _o : null, isWritable: true },
      tokenAProgram: { value: (_p = input.tokenAProgram) != null ? _p : null, isWritable: false },
      tokenBProgram: { value: (_q = input.tokenBProgram) != null ? _q : null, isWritable: false },
      token2022Program: {
        value: (_r = input.token2022Program) != null ? _r : null,
        isWritable: false
      },
      systemProgram: { value: (_s = input.systemProgram) != null ? _s : null, isWritable: false },
      eventAuthority: { value: (_t = input.eventAuthority) != null ? _t : null, isWritable: false },
      program: { value: (_u = input.program) != null ? _u : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.positionNftAccount.value) {
      accounts.positionNftAccount.value = yield findPositionNftAccountPda({
        positionNftMint: getAddressFromResolvedInstructionAccount5(
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.position.value) {
      accounts.position.value = yield findPositionPda({
        positionNftMint: getAddressFromResolvedInstructionAccount5(
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.tokenAVault.value) {
      accounts.tokenAVault.value = yield findTokenAVaultPda({
        tokenAMint: getAddressFromResolvedInstructionAccount5(
          "tokenAMint",
          accounts.tokenAMint.value
        ),
        pool: getAddressFromResolvedInstructionAccount5(
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.tokenBVault.value) {
      accounts.tokenBVault.value = yield findTokenBVaultPda({
        tokenBMint: getAddressFromResolvedInstructionAccount5(
          "tokenBMint",
          accounts.tokenBMint.value
        ),
        pool: getAddressFromResolvedInstructionAccount5(
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.token2022Program.value) {
      accounts.token2022Program.value = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
    }
    if (!accounts.systemProgram.value) {
      accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory20(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("creator", accounts.creator),
        getAccountMeta("positionNftMint", accounts.positionNftMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("payer", accounts.payer),
        getAccountMeta("config", accounts.config),
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("payerTokenA", accounts.payerTokenA),
        getAccountMeta("payerTokenB", accounts.payerTokenB),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("token2022Program", accounts.token2022Program),
        getAccountMeta("systemProgram", accounts.systemProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getInitializePoolInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/initializePoolWithDynamicConfig.ts
import {
  combineCodec as combineCodec81,
  fixDecoderSize as fixDecoderSize39,
  fixEncoderSize as fixEncoderSize39,
  getBytesDecoder as getBytesDecoder39,
  getBytesEncoder as getBytesEncoder48,
  getStructDecoder as getStructDecoder81,
  getStructEncoder as getStructEncoder81,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS21,
  SolanaError as SolanaError21,
  transformEncoder as transformEncoder30
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory21,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount6
} from "@solana/kit/program-client-core";
var INITIALIZE_POOL_WITH_DYNAMIC_CONFIG_DISCRIMINATOR = new Uint8Array(
  [149, 82, 72, 197, 253, 252, 68, 15]
);
function getInitializePoolWithDynamicConfigInstructionDataEncoder() {
  return transformEncoder30(
    getStructEncoder81([
      ["discriminator", fixEncoderSize39(getBytesEncoder48(), 8)],
      ["params", getInitializeCustomizablePoolParametersEncoder()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), {
      discriminator: INITIALIZE_POOL_WITH_DYNAMIC_CONFIG_DISCRIMINATOR
    })
  );
}
function getInitializePoolWithDynamicConfigInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      creator: { value: (_b = input.creator) != null ? _b : null, isWritable: false },
      positionNftMint: { value: (_c = input.positionNftMint) != null ? _c : null, isWritable: true },
      positionNftAccount: {
        value: (_d = input.positionNftAccount) != null ? _d : null,
        isWritable: true
      },
      payer: { value: (_e = input.payer) != null ? _e : null, isWritable: true },
      poolCreatorAuthority: {
        value: (_f = input.poolCreatorAuthority) != null ? _f : null,
        isWritable: false
      },
      config: { value: (_g = input.config) != null ? _g : null, isWritable: false },
      poolAuthority: { value: (_h = input.poolAuthority) != null ? _h : null, isWritable: false },
      pool: { value: (_i = input.pool) != null ? _i : null, isWritable: true },
      position: { value: (_j = input.position) != null ? _j : null, isWritable: true },
      tokenAMint: { value: (_k = input.tokenAMint) != null ? _k : null, isWritable: false },
      tokenBMint: { value: (_l = input.tokenBMint) != null ? _l : null, isWritable: false },
      tokenAVault: { value: (_m = input.tokenAVault) != null ? _m : null, isWritable: true },
      tokenBVault: { value: (_n = input.tokenBVault) != null ? _n : null, isWritable: true },
      payerTokenA: { value: (_o = input.payerTokenA) != null ? _o : null, isWritable: true },
      payerTokenB: { value: (_p = input.payerTokenB) != null ? _p : null, isWritable: true },
      tokenAProgram: { value: (_q = input.tokenAProgram) != null ? _q : null, isWritable: false },
      tokenBProgram: { value: (_r = input.tokenBProgram) != null ? _r : null, isWritable: false },
      token2022Program: {
        value: (_s = input.token2022Program) != null ? _s : null,
        isWritable: false
      },
      systemProgram: { value: (_t = input.systemProgram) != null ? _t : null, isWritable: false },
      eventAuthority: { value: (_u = input.eventAuthority) != null ? _u : null, isWritable: false },
      program: { value: (_v = input.program) != null ? _v : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.positionNftAccount.value) {
      accounts.positionNftAccount.value = yield findPositionNftAccountPda({
        positionNftMint: getAddressFromResolvedInstructionAccount6(
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.position.value) {
      accounts.position.value = yield findPositionPda({
        positionNftMint: getAddressFromResolvedInstructionAccount6(
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.tokenAVault.value) {
      accounts.tokenAVault.value = yield findTokenAVaultPda({
        tokenAMint: getAddressFromResolvedInstructionAccount6(
          "tokenAMint",
          accounts.tokenAMint.value
        ),
        pool: getAddressFromResolvedInstructionAccount6(
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.tokenBVault.value) {
      accounts.tokenBVault.value = yield findTokenBVaultPda({
        tokenBMint: getAddressFromResolvedInstructionAccount6(
          "tokenBMint",
          accounts.tokenBMint.value
        ),
        pool: getAddressFromResolvedInstructionAccount6(
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.token2022Program.value) {
      accounts.token2022Program.value = "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb";
    }
    if (!accounts.systemProgram.value) {
      accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory21(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("creator", accounts.creator),
        getAccountMeta("positionNftMint", accounts.positionNftMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("payer", accounts.payer),
        getAccountMeta("poolCreatorAuthority", accounts.poolCreatorAuthority),
        getAccountMeta("config", accounts.config),
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("payerTokenA", accounts.payerTokenA),
        getAccountMeta("payerTokenB", accounts.payerTokenB),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("token2022Program", accounts.token2022Program),
        getAccountMeta("systemProgram", accounts.systemProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getInitializePoolWithDynamicConfigInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/initializeReward.ts
import {
  combineCodec as combineCodec82,
  fixDecoderSize as fixDecoderSize40,
  fixEncoderSize as fixEncoderSize40,
  getAddressDecoder as getAddressDecoder33,
  getAddressEncoder as getAddressEncoder40,
  getBytesDecoder as getBytesDecoder40,
  getBytesEncoder as getBytesEncoder49,
  getStructDecoder as getStructDecoder82,
  getStructEncoder as getStructEncoder82,
  getU64Decoder as getU64Decoder47,
  getU64Encoder as getU64Encoder48,
  getU8Decoder as getU8Decoder30,
  getU8Encoder as getU8Encoder31,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS22,
  SolanaError as SolanaError22,
  transformEncoder as transformEncoder31
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory22,
  getAddressFromResolvedInstructionAccount as getAddressFromResolvedInstructionAccount7,
  getNonNullResolvedInstructionInput as getNonNullResolvedInstructionInput3
} from "@solana/kit/program-client-core";
var INITIALIZE_REWARD_DISCRIMINATOR = new Uint8Array([
  95,
  135,
  192,
  196,
  242,
  129,
  230,
  68
]);
function getInitializeRewardInstructionDataEncoder() {
  return transformEncoder31(
    getStructEncoder82([
      ["discriminator", fixEncoderSize40(getBytesEncoder49(), 8)],
      ["rewardIndex", getU8Encoder31()],
      ["rewardDuration", getU64Encoder48()],
      ["funder", getAddressEncoder40()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: INITIALIZE_REWARD_DISCRIMINATOR })
  );
}
function getInitializeRewardInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      poolAuthority: { value: (_b = input.poolAuthority) != null ? _b : null, isWritable: false },
      pool: { value: (_c = input.pool) != null ? _c : null, isWritable: true },
      rewardVault: { value: (_d = input.rewardVault) != null ? _d : null, isWritable: true },
      rewardMint: { value: (_e = input.rewardMint) != null ? _e : null, isWritable: false },
      signer: { value: (_f = input.signer) != null ? _f : null, isWritable: false },
      payer: { value: (_g = input.payer) != null ? _g : null, isWritable: true },
      tokenProgram: { value: (_h = input.tokenProgram) != null ? _h : null, isWritable: false },
      systemProgram: { value: (_i = input.systemProgram) != null ? _i : null, isWritable: false },
      eventAuthority: { value: (_j = input.eventAuthority) != null ? _j : null, isWritable: false },
      program: { value: (_k = input.program) != null ? _k : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.rewardVault.value) {
      accounts.rewardVault.value = yield findRewardVaultPda({
        pool: getAddressFromResolvedInstructionAccount7(
          "pool",
          accounts.pool.value
        ),
        rewardIndex: getNonNullResolvedInstructionInput3(
          "rewardIndex",
          args.rewardIndex
        )
      });
    }
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.systemProgram.value) {
      accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory22(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("rewardVault", accounts.rewardVault),
        getAccountMeta("rewardMint", accounts.rewardMint),
        getAccountMeta("signer", accounts.signer),
        getAccountMeta("payer", accounts.payer),
        getAccountMeta("tokenProgram", accounts.tokenProgram),
        getAccountMeta("systemProgram", accounts.systemProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getInitializeRewardInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/lockInnerPosition.ts
import {
  combineCodec as combineCodec83,
  fixDecoderSize as fixDecoderSize41,
  fixEncoderSize as fixEncoderSize41,
  getBytesDecoder as getBytesDecoder41,
  getBytesEncoder as getBytesEncoder50,
  getStructDecoder as getStructDecoder83,
  getStructEncoder as getStructEncoder83,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS23,
  SolanaError as SolanaError23,
  transformEncoder as transformEncoder32
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory23
} from "@solana/kit/program-client-core";
var LOCK_INNER_POSITION_DISCRIMINATOR = new Uint8Array([
  72,
  19,
  49,
  204,
  18,
  122,
  23,
  90
]);
function getLockInnerPositionInstructionDataEncoder() {
  return transformEncoder32(
    getStructEncoder83([
      ["discriminator", fixEncoderSize41(getBytesEncoder50(), 8)],
      ["params", getVestingParametersEncoder()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: LOCK_INNER_POSITION_DISCRIMINATOR })
  );
}
function getLockInnerPositionInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: false },
      position: { value: (_c = input.position) != null ? _c : null, isWritable: true },
      positionNftAccount: {
        value: (_d = input.positionNftAccount) != null ? _d : null,
        isWritable: false
      },
      owner: { value: (_e = input.owner) != null ? _e : null, isWritable: false },
      eventAuthority: { value: (_f = input.eventAuthority) != null ? _f : null, isWritable: false },
      program: { value: (_g = input.program) != null ? _g : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory23(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getLockInnerPositionInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/lockPosition.ts
import {
  combineCodec as combineCodec84,
  fixDecoderSize as fixDecoderSize42,
  fixEncoderSize as fixEncoderSize42,
  getBytesDecoder as getBytesDecoder42,
  getBytesEncoder as getBytesEncoder51,
  getStructDecoder as getStructDecoder84,
  getStructEncoder as getStructEncoder84,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS24,
  SolanaError as SolanaError24,
  transformEncoder as transformEncoder33
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory24
} from "@solana/kit/program-client-core";
var LOCK_POSITION_DISCRIMINATOR = new Uint8Array([
  227,
  62,
  2,
  252,
  247,
  10,
  171,
  185
]);
function getLockPositionInstructionDataEncoder() {
  return transformEncoder33(
    getStructEncoder84([
      ["discriminator", fixEncoderSize42(getBytesEncoder51(), 8)],
      ["params", getVestingParametersEncoder()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: LOCK_POSITION_DISCRIMINATOR })
  );
}
function getLockPositionInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: false },
      position: { value: (_c = input.position) != null ? _c : null, isWritable: true },
      vesting: { value: (_d = input.vesting) != null ? _d : null, isWritable: true },
      positionNftAccount: {
        value: (_e = input.positionNftAccount) != null ? _e : null,
        isWritable: false
      },
      owner: { value: (_f = input.owner) != null ? _f : null, isWritable: false },
      payer: { value: (_g = input.payer) != null ? _g : null, isWritable: true },
      systemProgram: { value: (_h = input.systemProgram) != null ? _h : null, isWritable: false },
      eventAuthority: { value: (_i = input.eventAuthority) != null ? _i : null, isWritable: false },
      program: { value: (_j = input.program) != null ? _j : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.systemProgram.value) {
      accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory24(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("vesting", accounts.vesting),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("payer", accounts.payer),
        getAccountMeta("systemProgram", accounts.systemProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getLockPositionInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/permanentLockPosition.ts
import {
  combineCodec as combineCodec85,
  fixDecoderSize as fixDecoderSize43,
  fixEncoderSize as fixEncoderSize43,
  getBytesDecoder as getBytesDecoder43,
  getBytesEncoder as getBytesEncoder52,
  getStructDecoder as getStructDecoder85,
  getStructEncoder as getStructEncoder85,
  getU128Decoder as getU128Decoder32,
  getU128Encoder as getU128Encoder32,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS25,
  SolanaError as SolanaError25,
  transformEncoder as transformEncoder34
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory25
} from "@solana/kit/program-client-core";
var PERMANENT_LOCK_POSITION_DISCRIMINATOR = new Uint8Array([
  165,
  176,
  125,
  6,
  231,
  171,
  186,
  213
]);
function getPermanentLockPositionInstructionDataEncoder() {
  return transformEncoder34(
    getStructEncoder85([
      ["discriminator", fixEncoderSize43(getBytesEncoder52(), 8)],
      ["permanentLockLiquidity", getU128Encoder32()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), {
      discriminator: PERMANENT_LOCK_POSITION_DISCRIMINATOR
    })
  );
}
function getPermanentLockPositionInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      position: { value: (_c = input.position) != null ? _c : null, isWritable: true },
      positionNftAccount: {
        value: (_d = input.positionNftAccount) != null ? _d : null,
        isWritable: false
      },
      owner: { value: (_e = input.owner) != null ? _e : null, isWritable: false },
      eventAuthority: { value: (_f = input.eventAuthority) != null ? _f : null, isWritable: false },
      program: { value: (_g = input.program) != null ? _g : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory25(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getPermanentLockPositionInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/refreshVesting.ts
import {
  combineCodec as combineCodec86,
  fixDecoderSize as fixDecoderSize44,
  fixEncoderSize as fixEncoderSize44,
  getBytesDecoder as getBytesDecoder44,
  getBytesEncoder as getBytesEncoder53,
  getStructDecoder as getStructDecoder86,
  getStructEncoder as getStructEncoder86,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS26,
  SolanaError as SolanaError26,
  transformEncoder as transformEncoder35
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory26
} from "@solana/kit/program-client-core";
var REFRESH_VESTING_DISCRIMINATOR = new Uint8Array([
  9,
  94,
  216,
  14,
  116,
  204,
  247,
  0
]);
function getRefreshVestingInstructionDataEncoder() {
  return transformEncoder35(
    getStructEncoder86([["discriminator", fixEncoderSize44(getBytesEncoder53(), 8)]]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: REFRESH_VESTING_DISCRIMINATOR })
  );
}
function getRefreshVestingInstruction(input, config) {
  var _a, _b, _c, _d, _e;
  const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
  const originalAccounts = {
    pool: { value: (_b = input.pool) != null ? _b : null, isWritable: false },
    position: { value: (_c = input.position) != null ? _c : null, isWritable: true },
    positionNftAccount: {
      value: (_d = input.positionNftAccount) != null ? _d : null,
      isWritable: false
    },
    owner: { value: (_e = input.owner) != null ? _e : null, isWritable: false }
  };
  const accounts = originalAccounts;
  const getAccountMeta = getAccountMetaFactory26(programAddress, "programId");
  return Object.freeze({
    accounts: [
      getAccountMeta("pool", accounts.pool),
      getAccountMeta("position", accounts.position),
      getAccountMeta("positionNftAccount", accounts.positionNftAccount),
      getAccountMeta("owner", accounts.owner)
    ],
    data: getRefreshVestingInstructionDataEncoder().encode({}),
    programAddress
  });
}

// src/kit/generated/instructions/removeAllLiquidity.ts
import {
  combineCodec as combineCodec87,
  fixDecoderSize as fixDecoderSize45,
  fixEncoderSize as fixEncoderSize45,
  getBytesDecoder as getBytesDecoder45,
  getBytesEncoder as getBytesEncoder54,
  getStructDecoder as getStructDecoder87,
  getStructEncoder as getStructEncoder87,
  getU64Decoder as getU64Decoder48,
  getU64Encoder as getU64Encoder49,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS27,
  SolanaError as SolanaError27,
  transformEncoder as transformEncoder36
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory27
} from "@solana/kit/program-client-core";
var REMOVE_ALL_LIQUIDITY_DISCRIMINATOR = new Uint8Array([
  10,
  51,
  61,
  35,
  112,
  105,
  24,
  85
]);
function getRemoveAllLiquidityInstructionDataEncoder() {
  return transformEncoder36(
    getStructEncoder87([
      ["discriminator", fixEncoderSize45(getBytesEncoder54(), 8)],
      ["tokenAAmountThreshold", getU64Encoder49()],
      ["tokenBAmountThreshold", getU64Encoder49()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), {
      discriminator: REMOVE_ALL_LIQUIDITY_DISCRIMINATOR
    })
  );
}
function getRemoveAllLiquidityInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      poolAuthority: { value: (_b = input.poolAuthority) != null ? _b : null, isWritable: false },
      pool: { value: (_c = input.pool) != null ? _c : null, isWritable: true },
      position: { value: (_d = input.position) != null ? _d : null, isWritable: true },
      tokenAAccount: { value: (_e = input.tokenAAccount) != null ? _e : null, isWritable: true },
      tokenBAccount: { value: (_f = input.tokenBAccount) != null ? _f : null, isWritable: true },
      tokenAVault: { value: (_g = input.tokenAVault) != null ? _g : null, isWritable: true },
      tokenBVault: { value: (_h = input.tokenBVault) != null ? _h : null, isWritable: true },
      tokenAMint: { value: (_i = input.tokenAMint) != null ? _i : null, isWritable: false },
      tokenBMint: { value: (_j = input.tokenBMint) != null ? _j : null, isWritable: false },
      positionNftAccount: {
        value: (_k = input.positionNftAccount) != null ? _k : null,
        isWritable: false
      },
      owner: { value: (_l = input.owner) != null ? _l : null, isWritable: false },
      tokenAProgram: { value: (_m = input.tokenAProgram) != null ? _m : null, isWritable: false },
      tokenBProgram: { value: (_n = input.tokenBProgram) != null ? _n : null, isWritable: false },
      eventAuthority: { value: (_o = input.eventAuthority) != null ? _o : null, isWritable: false },
      program: { value: (_p = input.program) != null ? _p : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory27(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("tokenAAccount", accounts.tokenAAccount),
        getAccountMeta("tokenBAccount", accounts.tokenBAccount),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getRemoveAllLiquidityInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/removeLiquidity.ts
import {
  combineCodec as combineCodec88,
  fixDecoderSize as fixDecoderSize46,
  fixEncoderSize as fixEncoderSize46,
  getBytesDecoder as getBytesDecoder46,
  getBytesEncoder as getBytesEncoder55,
  getStructDecoder as getStructDecoder88,
  getStructEncoder as getStructEncoder88,
  getU128Decoder as getU128Decoder33,
  getU128Encoder as getU128Encoder33,
  getU64Decoder as getU64Decoder49,
  getU64Encoder as getU64Encoder50,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS28,
  SolanaError as SolanaError28,
  transformEncoder as transformEncoder37
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory28
} from "@solana/kit/program-client-core";
var REMOVE_LIQUIDITY_DISCRIMINATOR = new Uint8Array([
  80,
  85,
  209,
  72,
  24,
  206,
  177,
  108
]);
function getRemoveLiquidityInstructionDataEncoder() {
  return transformEncoder37(
    getStructEncoder88([
      ["discriminator", fixEncoderSize46(getBytesEncoder55(), 8)],
      ["liquidityDelta", getU128Encoder33()],
      ["tokenAAmountThreshold", getU64Encoder50()],
      ["tokenBAmountThreshold", getU64Encoder50()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: REMOVE_LIQUIDITY_DISCRIMINATOR })
  );
}
function getRemoveLiquidityInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      poolAuthority: { value: (_b = input.poolAuthority) != null ? _b : null, isWritable: false },
      pool: { value: (_c = input.pool) != null ? _c : null, isWritable: true },
      position: { value: (_d = input.position) != null ? _d : null, isWritable: true },
      tokenAAccount: { value: (_e = input.tokenAAccount) != null ? _e : null, isWritable: true },
      tokenBAccount: { value: (_f = input.tokenBAccount) != null ? _f : null, isWritable: true },
      tokenAVault: { value: (_g = input.tokenAVault) != null ? _g : null, isWritable: true },
      tokenBVault: { value: (_h = input.tokenBVault) != null ? _h : null, isWritable: true },
      tokenAMint: { value: (_i = input.tokenAMint) != null ? _i : null, isWritable: false },
      tokenBMint: { value: (_j = input.tokenBMint) != null ? _j : null, isWritable: false },
      positionNftAccount: {
        value: (_k = input.positionNftAccount) != null ? _k : null,
        isWritable: false
      },
      owner: { value: (_l = input.owner) != null ? _l : null, isWritable: false },
      tokenAProgram: { value: (_m = input.tokenAProgram) != null ? _m : null, isWritable: false },
      tokenBProgram: { value: (_n = input.tokenBProgram) != null ? _n : null, isWritable: false },
      eventAuthority: { value: (_o = input.eventAuthority) != null ? _o : null, isWritable: false },
      program: { value: (_p = input.program) != null ? _p : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory28(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("position", accounts.position),
        getAccountMeta("tokenAAccount", accounts.tokenAAccount),
        getAccountMeta("tokenBAccount", accounts.tokenBAccount),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("positionNftAccount", accounts.positionNftAccount),
        getAccountMeta("owner", accounts.owner),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getRemoveLiquidityInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/setPoolStatus.ts
import {
  combineCodec as combineCodec89,
  fixDecoderSize as fixDecoderSize47,
  fixEncoderSize as fixEncoderSize47,
  getBytesDecoder as getBytesDecoder47,
  getBytesEncoder as getBytesEncoder56,
  getStructDecoder as getStructDecoder89,
  getStructEncoder as getStructEncoder89,
  getU8Decoder as getU8Decoder31,
  getU8Encoder as getU8Encoder32,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS29,
  SolanaError as SolanaError29,
  transformEncoder as transformEncoder38
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory29
} from "@solana/kit/program-client-core";
var SET_POOL_STATUS_DISCRIMINATOR = new Uint8Array([
  112,
  87,
  135,
  223,
  83,
  204,
  132,
  53
]);

// src/kit/generated/instructions/splitPosition.ts
import {
  combineCodec as combineCodec90,
  fixDecoderSize as fixDecoderSize48,
  fixEncoderSize as fixEncoderSize48,
  getBytesDecoder as getBytesDecoder48,
  getBytesEncoder as getBytesEncoder57,
  getStructDecoder as getStructDecoder90,
  getStructEncoder as getStructEncoder90,
  getU8Decoder as getU8Decoder32,
  getU8Encoder as getU8Encoder33,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS30,
  SolanaError as SolanaError30,
  transformEncoder as transformEncoder39
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory30
} from "@solana/kit/program-client-core";
var SPLIT_POSITION_DISCRIMINATOR = new Uint8Array([
  172,
  241,
  221,
  138,
  161,
  29,
  253,
  42
]);
function getSplitPositionInstructionDataEncoder() {
  return transformEncoder39(
    getStructEncoder90([
      ["discriminator", fixEncoderSize48(getBytesEncoder57(), 8)],
      ["unlockedLiquidityPercentage", getU8Encoder33()],
      ["permanentLockedLiquidityPercentage", getU8Encoder33()],
      ["feeAPercentage", getU8Encoder33()],
      ["feeBPercentage", getU8Encoder33()],
      ["reward0Percentage", getU8Encoder33()],
      ["reward1Percentage", getU8Encoder33()],
      ["innerVestingLiquidityPercentage", getU8Encoder33()],
      ["padding", fixEncoderSize48(getBytesEncoder57(), 15)]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: SPLIT_POSITION_DISCRIMINATOR })
  );
}
function getSplitPositionInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      firstPosition: { value: (_c = input.firstPosition) != null ? _c : null, isWritable: true },
      firstPositionNftAccount: {
        value: (_d = input.firstPositionNftAccount) != null ? _d : null,
        isWritable: false
      },
      secondPosition: { value: (_e = input.secondPosition) != null ? _e : null, isWritable: true },
      secondPositionNftAccount: {
        value: (_f = input.secondPositionNftAccount) != null ? _f : null,
        isWritable: false
      },
      firstOwner: { value: (_g = input.firstOwner) != null ? _g : null, isWritable: false },
      secondOwner: { value: (_h = input.secondOwner) != null ? _h : null, isWritable: false },
      eventAuthority: { value: (_i = input.eventAuthority) != null ? _i : null, isWritable: false },
      program: { value: (_j = input.program) != null ? _j : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory30(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("firstPosition", accounts.firstPosition),
        getAccountMeta(
          "firstPositionNftAccount",
          accounts.firstPositionNftAccount
        ),
        getAccountMeta("secondPosition", accounts.secondPosition),
        getAccountMeta(
          "secondPositionNftAccount",
          accounts.secondPositionNftAccount
        ),
        getAccountMeta("firstOwner", accounts.firstOwner),
        getAccountMeta("secondOwner", accounts.secondOwner),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getSplitPositionInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/splitPosition2.ts
import {
  combineCodec as combineCodec91,
  fixDecoderSize as fixDecoderSize49,
  fixEncoderSize as fixEncoderSize49,
  getBytesDecoder as getBytesDecoder49,
  getBytesEncoder as getBytesEncoder58,
  getStructDecoder as getStructDecoder91,
  getStructEncoder as getStructEncoder91,
  getU32Decoder as getU32Decoder10,
  getU32Encoder as getU32Encoder10,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS31,
  SolanaError as SolanaError31,
  transformEncoder as transformEncoder40
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory31
} from "@solana/kit/program-client-core";
var SPLIT_POSITION2_DISCRIMINATOR = new Uint8Array([
  221,
  147,
  228,
  207,
  140,
  212,
  17,
  119
]);
function getSplitPosition2InstructionDataEncoder() {
  return transformEncoder40(
    getStructEncoder91([
      ["discriminator", fixEncoderSize49(getBytesEncoder58(), 8)],
      ["numerator", getU32Encoder10()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: SPLIT_POSITION2_DISCRIMINATOR })
  );
}
function getSplitPosition2InstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      firstPosition: { value: (_c = input.firstPosition) != null ? _c : null, isWritable: true },
      firstPositionNftAccount: {
        value: (_d = input.firstPositionNftAccount) != null ? _d : null,
        isWritable: false
      },
      secondPosition: { value: (_e = input.secondPosition) != null ? _e : null, isWritable: true },
      secondPositionNftAccount: {
        value: (_f = input.secondPositionNftAccount) != null ? _f : null,
        isWritable: false
      },
      firstOwner: { value: (_g = input.firstOwner) != null ? _g : null, isWritable: false },
      secondOwner: { value: (_h = input.secondOwner) != null ? _h : null, isWritable: false },
      eventAuthority: { value: (_i = input.eventAuthority) != null ? _i : null, isWritable: false },
      program: { value: (_j = input.program) != null ? _j : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory31(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("firstPosition", accounts.firstPosition),
        getAccountMeta(
          "firstPositionNftAccount",
          accounts.firstPositionNftAccount
        ),
        getAccountMeta("secondPosition", accounts.secondPosition),
        getAccountMeta(
          "secondPositionNftAccount",
          accounts.secondPositionNftAccount
        ),
        getAccountMeta("firstOwner", accounts.firstOwner),
        getAccountMeta("secondOwner", accounts.secondOwner),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getSplitPosition2InstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/swap.ts
import {
  combineCodec as combineCodec92,
  fixDecoderSize as fixDecoderSize50,
  fixEncoderSize as fixEncoderSize50,
  getBytesDecoder as getBytesDecoder50,
  getBytesEncoder as getBytesEncoder59,
  getStructDecoder as getStructDecoder92,
  getStructEncoder as getStructEncoder92,
  getU64Decoder as getU64Decoder50,
  getU64Encoder as getU64Encoder51,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS32,
  SolanaError as SolanaError32,
  transformEncoder as transformEncoder41
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory32
} from "@solana/kit/program-client-core";
var SWAP_DISCRIMINATOR = new Uint8Array([
  248,
  198,
  158,
  145,
  225,
  117,
  135,
  200
]);
function getSwapInstructionDataEncoder() {
  return transformEncoder41(
    getStructEncoder92([
      ["discriminator", fixEncoderSize50(getBytesEncoder59(), 8)],
      ["amountIn", getU64Encoder51()],
      ["minimumAmountOut", getU64Encoder51()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: SWAP_DISCRIMINATOR })
  );
}
function getSwapInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      poolAuthority: { value: (_b = input.poolAuthority) != null ? _b : null, isWritable: false },
      pool: { value: (_c = input.pool) != null ? _c : null, isWritable: true },
      inputTokenAccount: {
        value: (_d = input.inputTokenAccount) != null ? _d : null,
        isWritable: true
      },
      outputTokenAccount: {
        value: (_e = input.outputTokenAccount) != null ? _e : null,
        isWritable: true
      },
      tokenAVault: { value: (_f = input.tokenAVault) != null ? _f : null, isWritable: true },
      tokenBVault: { value: (_g = input.tokenBVault) != null ? _g : null, isWritable: true },
      tokenAMint: { value: (_h = input.tokenAMint) != null ? _h : null, isWritable: false },
      tokenBMint: { value: (_i = input.tokenBMint) != null ? _i : null, isWritable: false },
      payer: { value: (_j = input.payer) != null ? _j : null, isWritable: false },
      tokenAProgram: { value: (_k = input.tokenAProgram) != null ? _k : null, isWritable: false },
      tokenBProgram: { value: (_l = input.tokenBProgram) != null ? _l : null, isWritable: false },
      referralTokenAccount: {
        value: (_m = input.referralTokenAccount) != null ? _m : null,
        isWritable: true
      },
      eventAuthority: { value: (_n = input.eventAuthority) != null ? _n : null, isWritable: false },
      program: { value: (_o = input.program) != null ? _o : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory32(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("inputTokenAccount", accounts.inputTokenAccount),
        getAccountMeta("outputTokenAccount", accounts.outputTokenAccount),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("payer", accounts.payer),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("referralTokenAccount", accounts.referralTokenAccount),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getSwapInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/swap2.ts
import {
  combineCodec as combineCodec93,
  fixDecoderSize as fixDecoderSize51,
  fixEncoderSize as fixEncoderSize51,
  getBytesDecoder as getBytesDecoder51,
  getBytesEncoder as getBytesEncoder60,
  getStructDecoder as getStructDecoder93,
  getStructEncoder as getStructEncoder93,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS33,
  SolanaError as SolanaError33,
  transformEncoder as transformEncoder42
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory33
} from "@solana/kit/program-client-core";
var SWAP2_DISCRIMINATOR = new Uint8Array([
  65,
  75,
  63,
  76,
  235,
  91,
  91,
  136
]);
function getSwap2InstructionDataEncoder() {
  return transformEncoder42(
    getStructEncoder93([
      ["discriminator", fixEncoderSize51(getBytesEncoder60(), 8)],
      ["params", getSwapParameters2Encoder()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), { discriminator: SWAP2_DISCRIMINATOR })
  );
}
function getSwap2InstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      poolAuthority: { value: (_b = input.poolAuthority) != null ? _b : null, isWritable: false },
      pool: { value: (_c = input.pool) != null ? _c : null, isWritable: true },
      inputTokenAccount: {
        value: (_d = input.inputTokenAccount) != null ? _d : null,
        isWritable: true
      },
      outputTokenAccount: {
        value: (_e = input.outputTokenAccount) != null ? _e : null,
        isWritable: true
      },
      tokenAVault: { value: (_f = input.tokenAVault) != null ? _f : null, isWritable: true },
      tokenBVault: { value: (_g = input.tokenBVault) != null ? _g : null, isWritable: true },
      tokenAMint: { value: (_h = input.tokenAMint) != null ? _h : null, isWritable: false },
      tokenBMint: { value: (_i = input.tokenBMint) != null ? _i : null, isWritable: false },
      payer: { value: (_j = input.payer) != null ? _j : null, isWritable: false },
      tokenAProgram: { value: (_k = input.tokenAProgram) != null ? _k : null, isWritable: false },
      tokenBProgram: { value: (_l = input.tokenBProgram) != null ? _l : null, isWritable: false },
      referralTokenAccount: {
        value: (_m = input.referralTokenAccount) != null ? _m : null,
        isWritable: true
      },
      eventAuthority: { value: (_n = input.eventAuthority) != null ? _n : null, isWritable: false },
      program: { value: (_o = input.program) != null ? _o : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory33(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("inputTokenAccount", accounts.inputTokenAccount),
        getAccountMeta("outputTokenAccount", accounts.outputTokenAccount),
        getAccountMeta("tokenAVault", accounts.tokenAVault),
        getAccountMeta("tokenBVault", accounts.tokenBVault),
        getAccountMeta("tokenAMint", accounts.tokenAMint),
        getAccountMeta("tokenBMint", accounts.tokenBMint),
        getAccountMeta("payer", accounts.payer),
        getAccountMeta("tokenAProgram", accounts.tokenAProgram),
        getAccountMeta("tokenBProgram", accounts.tokenBProgram),
        getAccountMeta("referralTokenAccount", accounts.referralTokenAccount),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getSwap2InstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/updatePoolFees.ts
import {
  combineCodec as combineCodec94,
  fixDecoderSize as fixDecoderSize52,
  fixEncoderSize as fixEncoderSize52,
  getBytesDecoder as getBytesDecoder52,
  getBytesEncoder as getBytesEncoder61,
  getStructDecoder as getStructDecoder94,
  getStructEncoder as getStructEncoder94,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS34,
  SolanaError as SolanaError34,
  transformEncoder as transformEncoder43
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory34
} from "@solana/kit/program-client-core";
var UPDATE_POOL_FEES_DISCRIMINATOR = new Uint8Array([
  118,
  217,
  203,
  179,
  60,
  8,
  70,
  89
]);

// src/kit/generated/instructions/updateRewardDuration.ts
import {
  combineCodec as combineCodec95,
  fixDecoderSize as fixDecoderSize53,
  fixEncoderSize as fixEncoderSize53,
  getBytesDecoder as getBytesDecoder53,
  getBytesEncoder as getBytesEncoder62,
  getStructDecoder as getStructDecoder95,
  getStructEncoder as getStructEncoder95,
  getU64Decoder as getU64Decoder51,
  getU64Encoder as getU64Encoder52,
  getU8Decoder as getU8Decoder33,
  getU8Encoder as getU8Encoder34,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS35,
  SolanaError as SolanaError35,
  transformEncoder as transformEncoder44
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory35
} from "@solana/kit/program-client-core";
var UPDATE_REWARD_DURATION_DISCRIMINATOR = new Uint8Array([
  138,
  174,
  196,
  169,
  213,
  235,
  254,
  107
]);
function getUpdateRewardDurationInstructionDataEncoder() {
  return transformEncoder44(
    getStructEncoder95([
      ["discriminator", fixEncoderSize53(getBytesEncoder62(), 8)],
      ["rewardIndex", getU8Encoder34()],
      ["newDuration", getU64Encoder52()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), {
      discriminator: UPDATE_REWARD_DURATION_DISCRIMINATOR
    })
  );
}
function getUpdateRewardDurationInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      signer: { value: (_c = input.signer) != null ? _c : null, isWritable: false },
      eventAuthority: { value: (_d = input.eventAuthority) != null ? _d : null, isWritable: false },
      program: { value: (_e = input.program) != null ? _e : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory35(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("signer", accounts.signer),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getUpdateRewardDurationInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/updateRewardFunder.ts
import {
  combineCodec as combineCodec96,
  fixDecoderSize as fixDecoderSize54,
  fixEncoderSize as fixEncoderSize54,
  getAddressDecoder as getAddressDecoder34,
  getAddressEncoder as getAddressEncoder41,
  getBytesDecoder as getBytesDecoder54,
  getBytesEncoder as getBytesEncoder63,
  getStructDecoder as getStructDecoder96,
  getStructEncoder as getStructEncoder96,
  getU8Decoder as getU8Decoder34,
  getU8Encoder as getU8Encoder35,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS36,
  SolanaError as SolanaError36,
  transformEncoder as transformEncoder45
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory36
} from "@solana/kit/program-client-core";
var UPDATE_REWARD_FUNDER_DISCRIMINATOR = new Uint8Array([
  211,
  28,
  48,
  32,
  215,
  160,
  35,
  23
]);
function getUpdateRewardFunderInstructionDataEncoder() {
  return transformEncoder45(
    getStructEncoder96([
      ["discriminator", fixEncoderSize54(getBytesEncoder63(), 8)],
      ["rewardIndex", getU8Encoder35()],
      ["newFunder", getAddressEncoder41()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), {
      discriminator: UPDATE_REWARD_FUNDER_DISCRIMINATOR
    })
  );
}
function getUpdateRewardFunderInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      signer: { value: (_c = input.signer) != null ? _c : null, isWritable: false },
      eventAuthority: { value: (_d = input.eventAuthority) != null ? _d : null, isWritable: false },
      program: { value: (_e = input.program) != null ? _e : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory36(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("signer", accounts.signer),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getUpdateRewardFunderInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/withdrawIneligibleReward.ts
import {
  combineCodec as combineCodec97,
  fixDecoderSize as fixDecoderSize55,
  fixEncoderSize as fixEncoderSize55,
  getBytesDecoder as getBytesDecoder55,
  getBytesEncoder as getBytesEncoder64,
  getStructDecoder as getStructDecoder97,
  getStructEncoder as getStructEncoder97,
  getU8Decoder as getU8Decoder35,
  getU8Encoder as getU8Encoder36,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS37,
  SolanaError as SolanaError37,
  transformEncoder as transformEncoder46
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory37
} from "@solana/kit/program-client-core";
var WITHDRAW_INELIGIBLE_REWARD_DISCRIMINATOR = new Uint8Array([
  148,
  206,
  42,
  195,
  247,
  49,
  103,
  8
]);
function getWithdrawIneligibleRewardInstructionDataEncoder() {
  return transformEncoder46(
    getStructEncoder97([
      ["discriminator", fixEncoderSize55(getBytesEncoder64(), 8)],
      ["rewardIndex", getU8Encoder36()]
    ]),
    (value) => __spreadProps(__spreadValues({}, value), {
      discriminator: WITHDRAW_INELIGIBLE_REWARD_DISCRIMINATOR
    })
  );
}
function getWithdrawIneligibleRewardInstructionAsync(input, config) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      poolAuthority: { value: (_b = input.poolAuthority) != null ? _b : null, isWritable: false },
      pool: { value: (_c = input.pool) != null ? _c : null, isWritable: true },
      rewardVault: { value: (_d = input.rewardVault) != null ? _d : null, isWritable: true },
      rewardMint: { value: (_e = input.rewardMint) != null ? _e : null, isWritable: false },
      funderTokenAccount: {
        value: (_f = input.funderTokenAccount) != null ? _f : null,
        isWritable: true
      },
      funder: { value: (_g = input.funder) != null ? _g : null, isWritable: false },
      tokenProgram: { value: (_h = input.tokenProgram) != null ? _h : null, isWritable: false },
      eventAuthority: { value: (_i = input.eventAuthority) != null ? _i : null, isWritable: false },
      program: { value: (_j = input.program) != null ? _j : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = __spreadValues({}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = getAccountMetaFactory37(programAddress, "programId");
    return Object.freeze({
      accounts: [
        getAccountMeta("poolAuthority", accounts.poolAuthority),
        getAccountMeta("pool", accounts.pool),
        getAccountMeta("rewardVault", accounts.rewardVault),
        getAccountMeta("rewardMint", accounts.rewardMint),
        getAccountMeta("funderTokenAccount", accounts.funderTokenAccount),
        getAccountMeta("funder", accounts.funder),
        getAccountMeta("tokenProgram", accounts.tokenProgram),
        getAccountMeta("eventAuthority", accounts.eventAuthority),
        getAccountMeta("program", accounts.program)
      ],
      data: getWithdrawIneligibleRewardInstructionDataEncoder().encode(
        args
      ),
      programAddress
    });
  });
}

// src/kit/generated/instructions/zapProtocolFee.ts
import {
  combineCodec as combineCodec98,
  fixDecoderSize as fixDecoderSize56,
  fixEncoderSize as fixEncoderSize56,
  getBytesDecoder as getBytesDecoder56,
  getBytesEncoder as getBytesEncoder65,
  getStructDecoder as getStructDecoder98,
  getStructEncoder as getStructEncoder98,
  getU64Decoder as getU64Decoder52,
  getU64Encoder as getU64Encoder53,
  SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS as SOLANA_ERROR__PROGRAM_CLIENTS__INSUFFICIENT_ACCOUNT_METAS38,
  SolanaError as SolanaError38,
  transformEncoder as transformEncoder47
} from "@solana/kit";
import {
  getAccountMetaFactory as getAccountMetaFactory38
} from "@solana/kit/program-client-core";
var ZAP_PROTOCOL_FEE_DISCRIMINATOR = new Uint8Array([
  213,
  155,
  187,
  34,
  56,
  182,
  91,
  240
]);

// src/kit/generated/programs/cpAmm.ts
var CP_AMM_PROGRAM_ADDRESS = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG";

// src/kit/generated/errors/cpAmm.ts
var CP_AMM_ERROR__MATH_OVERFLOW = 6e3;
var CP_AMM_ERROR__INVALID_FEE = 6001;
var CP_AMM_ERROR__EXCEEDED_SLIPPAGE = 6002;
var CP_AMM_ERROR__POOL_DISABLED = 6003;
var CP_AMM_ERROR__EXCEED_MAX_FEE_BPS = 6004;
var CP_AMM_ERROR__INVALID_ADMIN = 6005;
var CP_AMM_ERROR__AMOUNT_IS_ZERO = 6006;
var CP_AMM_ERROR__TYPE_CAST_FAILED = 6007;
var CP_AMM_ERROR__UNABLE_TO_MODIFY_ACTIVATION_POINT = 6008;
var CP_AMM_ERROR__INVALID_AUTHORITY_TO_CREATE_THE_POOL = 6009;
var CP_AMM_ERROR__INVALID_ACTIVATION_TYPE = 6010;
var CP_AMM_ERROR__INVALID_ACTIVATION_POINT = 6011;
var CP_AMM_ERROR__INVALID_QUOTE_MINT = 6012;
var CP_AMM_ERROR__INVALID_FEE_CURVE = 6013;
var CP_AMM_ERROR__INVALID_PRICE_RANGE = 6014;
var CP_AMM_ERROR__PRICE_RANGE_VIOLATION = 6015;
var CP_AMM_ERROR__INVALID_PARAMETERS = 6016;
var CP_AMM_ERROR__INVALID_COLLECT_FEE_MODE = 6017;
var CP_AMM_ERROR__INVALID_INPUT = 6018;
var CP_AMM_ERROR__CANNOT_CREATE_TOKEN_BADGE_ON_SUPPORTED_MINT = 6019;
var CP_AMM_ERROR__INVALID_TOKEN_BADGE = 6020;
var CP_AMM_ERROR__INVALID_MINIMUM_LIQUIDITY = 6021;
var CP_AMM_ERROR__INVALID_VESTING_INFO = 6022;
var CP_AMM_ERROR__INSUFFICIENT_LIQUIDITY = 6023;
var CP_AMM_ERROR__INVALID_VESTING_ACCOUNT = 6024;
var CP_AMM_ERROR__INVALID_POOL_STATUS = 6025;
var CP_AMM_ERROR__UNSUPPORT_NATIVE_MINT_TOKEN2022 = 6026;
var CP_AMM_ERROR__INVALID_REWARD_INDEX = 6027;
var CP_AMM_ERROR__INVALID_REWARD_DURATION = 6028;
var CP_AMM_ERROR__REWARD_INITIALIZED = 6029;
var CP_AMM_ERROR__REWARD_UNINITIALIZED = 6030;
var CP_AMM_ERROR__INVALID_REWARD_VAULT = 6031;
var CP_AMM_ERROR__MUST_WITHDRAWN_INELIGIBLE_REWARD = 6032;
var CP_AMM_ERROR__IDENTICAL_REWARD_DURATION = 6033;
var CP_AMM_ERROR__REWARD_CAMPAIGN_IN_PROGRESS = 6034;
var CP_AMM_ERROR__IDENTICAL_FUNDER = 6035;
var CP_AMM_ERROR__INVALID_FUNDER = 6036;
var CP_AMM_ERROR__REWARD_NOT_ENDED = 6037;
var CP_AMM_ERROR__FEE_INVERSE_IS_INCORRECT = 6038;
var CP_AMM_ERROR__POSITION_IS_NOT_EMPTY = 6039;
var CP_AMM_ERROR__INVALID_POOL_CREATOR_AUTHORITY = 6040;
var CP_AMM_ERROR__INVALID_CONFIG_TYPE = 6041;
var CP_AMM_ERROR__INVALID_POOL_CREATOR = 6042;
var CP_AMM_ERROR__REWARD_VAULT_FROZEN_SKIP_REQUIRED = 6043;
var CP_AMM_ERROR__INVALID_SPLIT_POSITION_PARAMETERS = 6044;
var CP_AMM_ERROR__UNSUPPORT_POSITION_HAS_VESTING_LOCK = 6045;
var CP_AMM_ERROR__SAME_POSITION = 6046;
var CP_AMM_ERROR__INVALID_BASE_FEE_MODE = 6047;
var CP_AMM_ERROR__INVALID_FEE_RATE_LIMITER = 6048;
var CP_AMM_ERROR__FAIL_TO_VALIDATE_SINGLE_SWAP_INSTRUCTION = 6049;
var CP_AMM_ERROR__INVALID_FEE_TIME_SCHEDULER = 6050;
var CP_AMM_ERROR__UNDETERMINED_ERROR = 6051;
var CP_AMM_ERROR__INVALID_POOL_VERSION = 6052;
var CP_AMM_ERROR__INVALID_AUTHORITY = 6053;
var CP_AMM_ERROR__INVALID_PERMISSION = 6054;
var CP_AMM_ERROR__INVALID_FEE_MARKET_CAP_SCHEDULER = 6055;
var CP_AMM_ERROR__CANNOT_UPDATE_BASE_FEE = 6056;
var CP_AMM_ERROR__INVALID_DYNAMIC_FEE_PARAMETERS = 6057;
var CP_AMM_ERROR__INVALID_UPDATE_POOL_FEES_PARAMETERS = 6058;
var CP_AMM_ERROR__MISSING_OPERATOR_ACCOUNT = 6059;
var CP_AMM_ERROR__INCORRECT_A_T_A = 6060;
var CP_AMM_ERROR__INVALID_ZAP_OUT_PARAMETERS = 6061;
var CP_AMM_ERROR__INVALID_WITHDRAW_PROTOCOL_FEE_ZAP_ACCOUNTS = 6062;
var CP_AMM_ERROR__MINT_RESTRICTED_FROM_ZAP = 6063;
var CP_AMM_ERROR__CPI_DISABLED = 6064;
var CP_AMM_ERROR__MISSING_ZAP_OUT_INSTRUCTION = 6065;
var CP_AMM_ERROR__INVALID_ZAP_ACCOUNTS = 6066;
var CP_AMM_ERROR__INVALID_COMPOUNDING_FEE_BPS = 6067;
var cpAmmErrorMessages;
if (process.env.NODE_ENV !== "production") {
  cpAmmErrorMessages = {
    [CP_AMM_ERROR__AMOUNT_IS_ZERO]: `Amount is zero`,
    [CP_AMM_ERROR__CANNOT_CREATE_TOKEN_BADGE_ON_SUPPORTED_MINT]: `Cannot create token badge on supported mint`,
    [CP_AMM_ERROR__CANNOT_UPDATE_BASE_FEE]: `Cannot update base fee`,
    [CP_AMM_ERROR__CPI_DISABLED]: `CPI disabled`,
    [CP_AMM_ERROR__EXCEEDED_SLIPPAGE]: `Exceeded slippage tolerance`,
    [CP_AMM_ERROR__EXCEED_MAX_FEE_BPS]: `Exceeded max fee bps`,
    [CP_AMM_ERROR__FAIL_TO_VALIDATE_SINGLE_SWAP_INSTRUCTION]: `Fail to validate single swap instruction in rate limiter`,
    [CP_AMM_ERROR__FEE_INVERSE_IS_INCORRECT]: `Fee inverse is incorrect`,
    [CP_AMM_ERROR__IDENTICAL_FUNDER]: `Identical funder`,
    [CP_AMM_ERROR__IDENTICAL_REWARD_DURATION]: `Reward duration is the same`,
    [CP_AMM_ERROR__INCORRECT_A_T_A]: `Incorrect ATA`,
    [CP_AMM_ERROR__INSUFFICIENT_LIQUIDITY]: `Insufficient liquidity`,
    [CP_AMM_ERROR__INVALID_ACTIVATION_POINT]: `Invalid activation point`,
    [CP_AMM_ERROR__INVALID_ACTIVATION_TYPE]: `Invalid activation type`,
    [CP_AMM_ERROR__INVALID_ADMIN]: `Invalid admin`,
    [CP_AMM_ERROR__INVALID_AUTHORITY]: `Invalid authority to do that action`,
    [CP_AMM_ERROR__INVALID_AUTHORITY_TO_CREATE_THE_POOL]: `Invalid authority to create the pool`,
    [CP_AMM_ERROR__INVALID_BASE_FEE_MODE]: `Invalid base fee mode`,
    [CP_AMM_ERROR__INVALID_COLLECT_FEE_MODE]: `Invalid collect fee mode`,
    [CP_AMM_ERROR__INVALID_COMPOUNDING_FEE_BPS]: `Invalid compounding fee bps`,
    [CP_AMM_ERROR__INVALID_CONFIG_TYPE]: `Invalid config type`,
    [CP_AMM_ERROR__INVALID_DYNAMIC_FEE_PARAMETERS]: `Invalid dynamic fee parameters`,
    [CP_AMM_ERROR__INVALID_FEE]: `Invalid fee setup`,
    [CP_AMM_ERROR__INVALID_FEE_CURVE]: `Invalid fee curve`,
    [CP_AMM_ERROR__INVALID_FEE_MARKET_CAP_SCHEDULER]: `Invalid fee market cap scheduler`,
    [CP_AMM_ERROR__INVALID_FEE_RATE_LIMITER]: `Invalid fee rate limiter`,
    [CP_AMM_ERROR__INVALID_FEE_TIME_SCHEDULER]: `Invalid fee scheduler`,
    [CP_AMM_ERROR__INVALID_FUNDER]: `Invalid funder`,
    [CP_AMM_ERROR__INVALID_INPUT]: `Invalid input`,
    [CP_AMM_ERROR__INVALID_MINIMUM_LIQUIDITY]: `Invalid minimum liquidity`,
    [CP_AMM_ERROR__INVALID_PARAMETERS]: `Invalid parameters`,
    [CP_AMM_ERROR__INVALID_PERMISSION]: `Invalid permission`,
    [CP_AMM_ERROR__INVALID_POOL_CREATOR]: `Invalid pool creator`,
    [CP_AMM_ERROR__INVALID_POOL_CREATOR_AUTHORITY]: `Invalid pool creator authority`,
    [CP_AMM_ERROR__INVALID_POOL_STATUS]: `Invalid pool status`,
    [CP_AMM_ERROR__INVALID_POOL_VERSION]: `Invalid pool version`,
    [CP_AMM_ERROR__INVALID_PRICE_RANGE]: `Invalid Price Range`,
    [CP_AMM_ERROR__INVALID_QUOTE_MINT]: `Quote token must be SOL,USDC`,
    [CP_AMM_ERROR__INVALID_REWARD_DURATION]: `Invalid reward duration`,
    [CP_AMM_ERROR__INVALID_REWARD_INDEX]: `Invalid reward index`,
    [CP_AMM_ERROR__INVALID_REWARD_VAULT]: `Invalid reward vault`,
    [CP_AMM_ERROR__INVALID_SPLIT_POSITION_PARAMETERS]: `Invalid parameters for split position`,
    [CP_AMM_ERROR__INVALID_TOKEN_BADGE]: `Invalid token badge`,
    [CP_AMM_ERROR__INVALID_UPDATE_POOL_FEES_PARAMETERS]: `Invalid update pool fees parameters`,
    [CP_AMM_ERROR__INVALID_VESTING_ACCOUNT]: `Invalid vesting account`,
    [CP_AMM_ERROR__INVALID_VESTING_INFO]: `Invalid vesting information`,
    [CP_AMM_ERROR__INVALID_WITHDRAW_PROTOCOL_FEE_ZAP_ACCOUNTS]: `Invalid withdraw protocol fee zap accounts`,
    [CP_AMM_ERROR__INVALID_ZAP_ACCOUNTS]: `Invalid zap accounts`,
    [CP_AMM_ERROR__INVALID_ZAP_OUT_PARAMETERS]: `Invalid zap out parameters`,
    [CP_AMM_ERROR__MATH_OVERFLOW]: `Math operation overflow`,
    [CP_AMM_ERROR__MINT_RESTRICTED_FROM_ZAP]: `SOL,USDC protocol fee cannot be withdrawn via zap`,
    [CP_AMM_ERROR__MISSING_OPERATOR_ACCOUNT]: `Missing operator account`,
    [CP_AMM_ERROR__MISSING_ZAP_OUT_INSTRUCTION]: `Missing zap out instruction`,
    [CP_AMM_ERROR__MUST_WITHDRAWN_INELIGIBLE_REWARD]: `Must withdraw ineligible reward`,
    [CP_AMM_ERROR__POOL_DISABLED]: `Pool disabled`,
    [CP_AMM_ERROR__POSITION_IS_NOT_EMPTY]: `Position is not empty`,
    [CP_AMM_ERROR__PRICE_RANGE_VIOLATION]: `Trade is over price range`,
    [CP_AMM_ERROR__REWARD_CAMPAIGN_IN_PROGRESS]: `Reward campaign in progress`,
    [CP_AMM_ERROR__REWARD_INITIALIZED]: `Reward already initialized`,
    [CP_AMM_ERROR__REWARD_NOT_ENDED]: `Reward not ended`,
    [CP_AMM_ERROR__REWARD_UNINITIALIZED]: `Reward not initialized`,
    [CP_AMM_ERROR__REWARD_VAULT_FROZEN_SKIP_REQUIRED]: `Reward vault is frozen, must skip reward to proceed`,
    [CP_AMM_ERROR__SAME_POSITION]: `Same position`,
    [CP_AMM_ERROR__TYPE_CAST_FAILED]: `Type cast error`,
    [CP_AMM_ERROR__UNABLE_TO_MODIFY_ACTIVATION_POINT]: `Unable to modify activation point`,
    [CP_AMM_ERROR__UNDETERMINED_ERROR]: `Undetermined error`,
    [CP_AMM_ERROR__UNSUPPORT_NATIVE_MINT_TOKEN2022]: `Unsupported native mint token2022`,
    [CP_AMM_ERROR__UNSUPPORT_POSITION_HAS_VESTING_LOCK]: `Unsupported split position has vesting lock`
  };
}

// src/kit/builders/common.ts
var POOL_AUTHORITY_ADDRESS = address(
  "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC"
);
var SYSVAR_INSTRUCTIONS_ADDRESS = address(
  "Sysvar1nstructions1111111111111111111111111"
);
function deduplicateSigners(signers) {
  const deduplicated = /* @__PURE__ */ new Map();
  for (const signer of signers) {
    if (signer && !deduplicated.has(signer.address)) {
      deduplicated.set(signer.address, signer);
    }
  }
  return Array.from(deduplicated.values());
}
function buildTransactionPlan(instructions, signers) {
  return {
    instructions: instructions.map((instruction) => {
      return Object.freeze(__spreadProps(__spreadValues({}, instruction), {
        accounts: instruction.accounts.map(({ address: address5, role }) => ({
          address: address5,
          role
        }))
      }));
    }),
    signers: deduplicateSigners(signers)
  };
}
function readonlyAccountMeta(address5) {
  return {
    address: address5,
    role: AccountRole.READONLY
  };
}
function writableAccountMeta(address5) {
  return {
    address: address5,
    role: AccountRole.WRITABLE
  };
}
function appendRemainingAccounts(instruction, remainingAccounts) {
  if (remainingAccounts.length === 0) {
    return instruction;
  }
  return Object.freeze(__spreadProps(__spreadValues({}, instruction), {
    accounts: [...instruction.accounts, ...remainingAccounts]
  }));
}
function replaceInstructionAccount(instruction, index, account) {
  return Object.freeze(__spreadProps(__spreadValues({}, instruction), {
    accounts: instruction.accounts.map(
      (currentAccount, currentIndex) => currentIndex === index ? account : currentAccount
    )
  }));
}
function bnToBigInt(value) {
  return BigInt(value.toString());
}
function optionalBnToBigInt(value) {
  if (value === null) {
    return null;
  }
  return value === void 0 ? void 0 : bnToBigInt(value);
}
function cpAmmProgramAddress() {
  return CP_AMM_PROGRAM_ADDRESS;
}

// src/kit/builders/core.ts
import {
  AccountRole as AccountRole3
} from "@solana/kit";
import BN4 from "bn.js";

// src/kit/types.ts
var CollectFeeMode = /* @__PURE__ */ ((CollectFeeMode2) => {
  CollectFeeMode2[CollectFeeMode2["BothToken"] = 0] = "BothToken";
  CollectFeeMode2[CollectFeeMode2["OnlyB"] = 1] = "OnlyB";
  CollectFeeMode2[CollectFeeMode2["Compounding"] = 2] = "Compounding";
  return CollectFeeMode2;
})(CollectFeeMode || {});
var ActivationType = /* @__PURE__ */ ((ActivationType2) => {
  ActivationType2[ActivationType2["Slot"] = 0] = "Slot";
  ActivationType2[ActivationType2["Timestamp"] = 1] = "Timestamp";
  return ActivationType2;
})(ActivationType || {});
var BaseFeeMode = /* @__PURE__ */ ((BaseFeeMode2) => {
  BaseFeeMode2[BaseFeeMode2["FeeTimeSchedulerLinear"] = 0] = "FeeTimeSchedulerLinear";
  BaseFeeMode2[BaseFeeMode2["FeeTimeSchedulerExponential"] = 1] = "FeeTimeSchedulerExponential";
  BaseFeeMode2[BaseFeeMode2["RateLimiter"] = 2] = "RateLimiter";
  BaseFeeMode2[BaseFeeMode2["FeeMarketCapSchedulerLinear"] = 3] = "FeeMarketCapSchedulerLinear";
  BaseFeeMode2[BaseFeeMode2["FeeMarketCapSchedulerExponential"] = 4] = "FeeMarketCapSchedulerExponential";
  return BaseFeeMode2;
})(BaseFeeMode || {});
var SwapMode = /* @__PURE__ */ ((SwapMode2) => {
  SwapMode2[SwapMode2["ExactIn"] = 0] = "ExactIn";
  SwapMode2[SwapMode2["PartialFill"] = 1] = "PartialFill";
  SwapMode2[SwapMode2["ExactOut"] = 2] = "ExactOut";
  return SwapMode2;
})(SwapMode || {});

// src/kit/helpers/feeCodec.ts
import BN from "bn.js";
import {
  getStructDecoder as getStructDecoder99,
  getU16Decoder as getU16Decoder16,
  getU32Decoder as getU32Decoder11,
  getU64Decoder as getU64Decoder53,
  getU8Decoder as getU8Decoder36,
  fixDecoderSize as fixDecoderSize57,
  getBytesDecoder as getBytesDecoder57
} from "@solana/kit";
var podAlignedFeeTimeSchedulerDecoder = getStructDecoder99([
  ["cliffFeeNumerator", getU64Decoder53()],
  ["baseFeeMode", getU8Decoder36()],
  ["padding", fixDecoderSize57(getBytesDecoder57(), 5)],
  ["numberOfPeriod", getU16Decoder16()],
  ["periodFrequency", getU64Decoder53()],
  ["reductionFactor", getU64Decoder53()]
]);
var podAlignedFeeMarketCapSchedulerDecoder = getStructDecoder99([
  ["cliffFeeNumerator", getU64Decoder53()],
  ["baseFeeMode", getU8Decoder36()],
  ["padding", fixDecoderSize57(getBytesDecoder57(), 5)],
  ["numberOfPeriod", getU16Decoder16()],
  ["sqrtPriceStepBps", getU32Decoder11()],
  ["schedulerExpirationDuration", getU32Decoder11()],
  ["reductionFactor", getU64Decoder53()]
]);
var podAlignedFeeRateLimiterDecoder = getStructDecoder99([
  ["cliffFeeNumerator", getU64Decoder53()],
  ["baseFeeMode", getU8Decoder36()],
  ["padding", fixDecoderSize57(getBytesDecoder57(), 5)],
  ["feeIncrementBps", getU16Decoder16()],
  ["maxLimiterDuration", getU32Decoder11()],
  ["maxFeeBps", getU32Decoder11()],
  ["referenceAmount", getU64Decoder53()]
]);
function toBn(value) {
  return new BN(value.toString());
}
function decodePodAlignedFeeTimeScheduler(data) {
  const decoded = podAlignedFeeTimeSchedulerDecoder.decode(data);
  return {
    cliffFeeNumerator: toBn(decoded.cliffFeeNumerator),
    baseFeeMode: decoded.baseFeeMode,
    padding: decoded.padding,
    numberOfPeriod: decoded.numberOfPeriod,
    periodFrequency: toBn(decoded.periodFrequency),
    reductionFactor: toBn(decoded.reductionFactor)
  };
}
function decodePodAlignedFeeMarketCapScheduler(data) {
  const decoded = podAlignedFeeMarketCapSchedulerDecoder.decode(data);
  return {
    cliffFeeNumerator: toBn(decoded.cliffFeeNumerator),
    baseFeeMode: decoded.baseFeeMode,
    padding: decoded.padding,
    numberOfPeriod: decoded.numberOfPeriod,
    sqrtPriceStepBps: decoded.sqrtPriceStepBps,
    schedulerExpirationDuration: decoded.schedulerExpirationDuration,
    reductionFactor: toBn(decoded.reductionFactor)
  };
}
function decodePodAlignedFeeRateLimiter(data) {
  const decoded = podAlignedFeeRateLimiterDecoder.decode(data);
  return {
    cliffFeeNumerator: toBn(decoded.cliffFeeNumerator),
    baseFeeMode: decoded.baseFeeMode,
    padding: decoded.padding,
    feeIncrementBps: decoded.feeIncrementBps,
    maxLimiterDuration: decoded.maxLimiterDuration,
    maxFeeBps: decoded.maxFeeBps,
    referenceAmount: toBn(decoded.referenceAmount)
  };
}
function decodePoolFeeData(data) {
  const baseFeeMode = data[8];
  switch (baseFeeMode) {
    case 0 /* FeeTimeSchedulerLinear */:
    case 1 /* FeeTimeSchedulerExponential */:
      return decodePodAlignedFeeTimeScheduler(data);
    case 2 /* RateLimiter */:
      return decodePodAlignedFeeRateLimiter(data);
    case 3 /* FeeMarketCapSchedulerLinear */:
    case 4 /* FeeMarketCapSchedulerExponential */:
      return decodePodAlignedFeeMarketCapScheduler(data);
    default:
      throw new Error(`Invalid base fee mode: ${baseFeeMode}`);
  }
}

// src/kit/services/reads.ts
import { address as address3 } from "@solana/kit";

// src/kit/helpers/accountFilters.ts
import {
  getAddressEncoder as getAddressEncoder42,
  getBase58Decoder
} from "@solana/kit";
var CONFIG_DISCRIMINATOR_OFFSET = 0;
var POSITION_POOL_OFFSET = 8;
var VESTING_POSITION_OFFSET = 8;
var POOL_TOKEN_A_MINT_OFFSET = 168;
function encodeBase58(bytes) {
  return getBase58Decoder().decode(bytes);
}
function bytesMemcmpFilter(offset, bytes) {
  return {
    memcmp: {
      offset,
      bytes: encodeBase58(bytes)
    }
  };
}
function addressMemcmpFilter(offset, value) {
  return bytesMemcmpFilter(offset, getAddressEncoder42().encode(value));
}
function configDiscriminatorFilter() {
  return bytesMemcmpFilter(CONFIG_DISCRIMINATOR_OFFSET, CONFIG_DISCRIMINATOR);
}
function poolDiscriminatorFilter() {
  return bytesMemcmpFilter(CONFIG_DISCRIMINATOR_OFFSET, POOL_DISCRIMINATOR);
}
function positionDiscriminatorFilter() {
  return bytesMemcmpFilter(CONFIG_DISCRIMINATOR_OFFSET, POSITION_DISCRIMINATOR);
}
function vestingDiscriminatorFilter() {
  return bytesMemcmpFilter(CONFIG_DISCRIMINATOR_OFFSET, VESTING_DISCRIMINATOR);
}
function positionByPoolFilter(pool) {
  return addressMemcmpFilter(POSITION_POOL_OFFSET, pool);
}
function vestingByPositionFilter(position) {
  return addressMemcmpFilter(VESTING_POSITION_OFFSET, position);
}
function poolByTokenAMintFilter(tokenAMint) {
  return addressMemcmpFilter(POOL_TOKEN_A_MINT_OFFSET, tokenAMint);
}

// src/kit/helpers/programAccounts.ts
import {
  address as address2,
  parseBase64RpcAccount,
  parseJsonRpcAccount
} from "@solana/kit";
function unwrapRpcListResponse(response) {
  if (Array.isArray(response)) {
    return response;
  }
  if (typeof response === "object" && response !== null && "value" in response && Array.isArray(response.value)) {
    return response.value;
  }
  return [];
}
function getBase64ProgramAccounts(_0, _1) {
  return __async(this, arguments, function* (rpc, programAddress, filters = []) {
    const response = yield rpc.getProgramAccounts(programAddress, {
      encoding: "base64",
      filters
    }).send();
    return unwrapRpcListResponse(response).map(({ pubkey, account }) => {
      const publicKey = address2(pubkey);
      return {
        publicKey,
        encodedAccount: parseBase64RpcAccount(publicKey, account)
      };
    });
  });
}
function getJsonParsedTokenAccountsByOwner(rpc, owner, programId) {
  return __async(this, null, function* () {
    const response = yield rpc.getTokenAccountsByOwner(
      owner,
      {
        programId
      },
      {
        encoding: "jsonParsed"
      }
    ).send();
    return unwrapRpcListResponse(response).map(({ pubkey, account }) => {
      const publicKey = address2(pubkey);
      return {
        publicKey,
        parsedAccount: parseJsonRpcAccount(publicKey, account)
      };
    });
  });
}

// src/kit/helpers/state.ts
import BN2 from "bn.js";
function isReadonlyUint8Array(value) {
  return value instanceof Uint8Array;
}
function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function adaptGeneratedValue(value) {
  if (typeof value === "bigint") {
    return new BN2(value.toString());
  }
  if (Array.isArray(value)) {
    return value.map((item) => adaptGeneratedValue(item));
  }
  if (isReadonlyUint8Array(value)) {
    return value;
  }
  if (isPlainObject(value)) {
    const nextValue = {};
    for (const [key, innerValue] of Object.entries(value)) {
      if (key === "discriminator") {
        continue;
      }
      nextValue[key] = adaptGeneratedValue(innerValue);
    }
    return nextValue;
  }
  return value;
}
function adaptGeneratedAccountRecord(publicKey, account) {
  return {
    publicKey,
    account: adaptGeneratedValue(account)
  };
}

// src/kit/services/reads.ts
var DEFAULT_ADDRESS = address3("11111111111111111111111111111111");
var TOKEN_2022_PROGRAM_ADDRESS = address3(
  "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
);
function adaptKitValue(value) {
  return adaptGeneratedValue(value);
}
function adaptKitRecord(publicKey, account) {
  return adaptGeneratedAccountRecord(
    publicKey,
    account
  );
}
function totalPositionLiquidity(position) {
  return position.vestedLiquidity.add(position.permanentLockedLiquidity).add(position.unlockedLiquidity);
}
function parsedTokenAmount(account) {
  var _a, _b;
  if (typeof account === "object" && account !== null && "data" in account && typeof account.data === "object") {
    const data = account.data;
    return (_b = (_a = data.tokenAmount) == null ? void 0 : _a.amount) != null ? _b : null;
  }
  return null;
}
function parsedTokenMint(account) {
  if (typeof account === "object" && account !== null && "data" in account && typeof account.data === "object") {
    const data = account.data;
    return data.mint ? address3(data.mint) : null;
  }
  return null;
}
function fetchConfigState(rpc, config) {
  return __async(this, null, function* () {
    const account = yield fetchConfig(rpc, config);
    return adaptKitValue(account.data);
  });
}
function fetchPoolState(rpc, pool) {
  return __async(this, null, function* () {
    const account = yield fetchPool(rpc, pool);
    return adaptKitValue(account.data);
  });
}
function fetchPoolStatesByTokenAMint(rpc, tokenAMint) {
  return __async(this, null, function* () {
    const accounts = yield getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
      poolDiscriminatorFilter(),
      poolByTokenAMintFilter(tokenAMint)
    ]);
    return accounts.map(({ publicKey, encodedAccount }) => {
      const decodedAccount = decodePool(encodedAccount);
      return adaptKitRecord(publicKey, decodedAccount.data);
    });
  });
}
function fetchPoolFees(rpc, pool) {
  return __async(this, null, function* () {
    const poolState = yield fetchPoolState(rpc, pool);
    return decodePoolFeeData(poolState.poolFees.baseFee.baseFeeInfo.data);
  });
}
function fetchPositionState(rpc, position) {
  return __async(this, null, function* () {
    const account = yield fetchPosition(rpc, position);
    return adaptKitValue(account.data);
  });
}
function getMultipleConfigs(rpc, configs) {
  return __async(this, null, function* () {
    const accounts = yield fetchAllConfig(rpc, [...configs]);
    return accounts.map((account) => adaptKitValue(account.data));
  });
}
function getMultiplePools(rpc, pools) {
  return __async(this, null, function* () {
    const accounts = yield fetchAllPool(rpc, [...pools]);
    return accounts.map((account) => adaptKitValue(account.data));
  });
}
function getMultiplePositions(rpc, positions) {
  return __async(this, null, function* () {
    const accounts = yield fetchAllPosition(rpc, [...positions]);
    return accounts.map(
      (account) => adaptKitValue(account.data)
    );
  });
}
function getAllConfigs(rpc) {
  return __async(this, null, function* () {
    const accounts = yield getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
      configDiscriminatorFilter()
    ]);
    return accounts.map(({ publicKey, encodedAccount }) => {
      const decodedAccount = decodeConfig(encodedAccount);
      return adaptKitRecord(publicKey, decodedAccount.data);
    });
  });
}
function getStaticConfigs(rpc) {
  return __async(this, null, function* () {
    const configs = yield getAllConfigs(rpc);
    return configs.filter(
      (config) => config.account.configType === 0 && config.account.vaultConfigKey === DEFAULT_ADDRESS && config.account.poolCreatorAuthority === DEFAULT_ADDRESS
    );
  });
}
function getAllPools(rpc) {
  return __async(this, null, function* () {
    const accounts = yield getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
      poolDiscriminatorFilter()
    ]);
    return accounts.map(({ publicKey, encodedAccount }) => {
      const decodedAccount = decodePool(encodedAccount);
      return adaptKitRecord(publicKey, decodedAccount.data);
    });
  });
}
function getAllPositions(rpc) {
  return __async(this, null, function* () {
    const accounts = yield getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
      positionDiscriminatorFilter()
    ]);
    return accounts.map(({ publicKey, encodedAccount }) => {
      const decodedAccount = decodePosition(encodedAccount);
      return adaptKitRecord(publicKey, decodedAccount.data);
    });
  });
}
function getAllPositionsByPool(rpc, pool) {
  return __async(this, null, function* () {
    const accounts = yield getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
      positionDiscriminatorFilter(),
      positionByPoolFilter(pool)
    ]);
    return accounts.map(({ publicKey, encodedAccount }) => {
      const decodedAccount = decodePosition(encodedAccount);
      return adaptKitRecord(publicKey, decodedAccount.data);
    });
  });
}
function getAllVestingsByPosition(rpc, position) {
  return __async(this, null, function* () {
    const accounts = yield getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
      vestingDiscriminatorFilter(),
      vestingByPositionFilter(position)
    ]);
    return accounts.map(({ publicKey, encodedAccount }) => {
      const decodedAccount = decodeVesting(encodedAccount);
      return {
        account: publicKey,
        vestingState: adaptKitValue(
          decodedAccount.data
        )
      };
    });
  });
}
function getPositionsByUser(rpc, user) {
  return __async(this, null, function* () {
    const userTokenAccounts = yield getJsonParsedTokenAccountsByOwner(
      rpc,
      user,
      TOKEN_2022_PROGRAM_ADDRESS
    );
    const positionNftAccounts = userTokenAccounts.map(({ publicKey, parsedAccount }) => {
      const amount = parsedTokenAmount(parsedAccount);
      const mint = parsedTokenMint(parsedAccount);
      if (amount !== "1" || !mint) {
        return null;
      }
      return {
        positionNftAccount: publicKey,
        positionNft: mint
      };
    }).filter((value) => value !== null);
    if (positionNftAccounts.length === 0) {
      return [];
    }
    const positionAddresses = yield Promise.all(
      positionNftAccounts.map((_0) => __async(null, [_0], function* ({ positionNft }) {
        const [position] = yield findPositionPda({ positionNftMint: positionNft });
        return position;
      }))
    );
    const maybePositions = yield fetchAllMaybePosition(rpc, positionAddresses);
    const results = positionNftAccounts.map((positionNftAccount, index) => {
      const maybePosition = maybePositions[index];
      if (!maybePosition.exists) {
        return null;
      }
      return {
        positionNftAccount: positionNftAccount.positionNftAccount,
        position: positionAddresses[index],
        positionState: adaptKitValue(maybePosition.data)
      };
    }).filter((value) => value !== null);
    results.sort(
      (a, b) => totalPositionLiquidity(b.positionState).cmp(
        totalPositionLiquidity(a.positionState)
      )
    );
    return results;
  });
}
function getUserPositionByPool(rpc, pool, user) {
  return __async(this, null, function* () {
    const positions = yield getPositionsByUser(rpc, user);
    return positions.filter((position) => position.positionState.pool === pool);
  });
}
function isPoolExist(rpc, pool) {
  return __async(this, null, function* () {
    try {
      const maybePool = yield fetchMaybePool(rpc, pool);
      return maybePool.exists;
    } catch (e) {
      return false;
    }
  });
}

// src/kit/builders/pda.ts
import {
  getAddressEncoder as getAddressEncoder43,
  getProgramDerivedAddress as getProgramDerivedAddress10
} from "@solana/kit";
var addressEncoder = getAddressEncoder43();
var textEncoder = new TextEncoder();
function compareBytes(left, right) {
  const length = Math.min(left.length, right.length);
  for (let index = 0; index < length; index += 1) {
    if (left[index] > right[index]) {
      return 1;
    }
    if (left[index] < right[index]) {
      return -1;
    }
  }
  if (left.length === right.length) {
    return 0;
  }
  return left.length > right.length ? 1 : -1;
}
function sortedMintSeeds(tokenAMint, tokenBMint) {
  const encodedA = addressEncoder.encode(tokenAMint);
  const encodedB = addressEncoder.encode(tokenBMint);
  return compareBytes(encodedA, encodedB) >= 0 ? [tokenAMint, tokenBMint] : [tokenBMint, tokenAMint];
}
function derivePoolAddress(config, tokenAMint, tokenBMint) {
  return __async(this, null, function* () {
    const [firstMint, secondMint] = sortedMintSeeds(tokenAMint, tokenBMint);
    const [pool] = yield getProgramDerivedAddress10({
      programAddress: cpAmmProgramAddress(),
      seeds: [
        textEncoder.encode("pool"),
        addressEncoder.encode(config),
        addressEncoder.encode(firstMint),
        addressEncoder.encode(secondMint)
      ]
    });
    return pool;
  });
}
function deriveCustomizablePoolAddress(tokenAMint, tokenBMint) {
  return __async(this, null, function* () {
    const [firstMint, secondMint] = sortedMintSeeds(tokenAMint, tokenBMint);
    const [pool] = yield getProgramDerivedAddress10({
      programAddress: cpAmmProgramAddress(),
      seeds: [
        textEncoder.encode("cpool"),
        addressEncoder.encode(firstMint),
        addressEncoder.encode(secondMint)
      ]
    });
    return pool;
  });
}
function deriveOperatorAddress(whitelistedAddress) {
  return __async(this, null, function* () {
    const [operator] = yield findOperatorPda({ whitelistedAddress });
    return operator;
  });
}
function deriveTokenBadgeAddress(tokenMint) {
  return __async(this, null, function* () {
    const [tokenBadge] = yield findTokenBadgePda({ tokenMint });
    return tokenBadge;
  });
}

// src/kit/builders/token.ts
import {
  AccountRole as AccountRole2,
  address as address4
} from "@solana/kit";
import { getTransferSolInstruction } from "@solana-program/system";
import {
  TOKEN_PROGRAM_ADDRESS,
  findAssociatedTokenPda,
  getCloseAccountInstruction,
  getCreateAssociatedTokenIdempotentInstructionAsync,
  getSyncNativeInstruction
} from "@solana-program/token";
var NATIVE_MINT_ADDRESS = address4(
  "So11111111111111111111111111111111111111112"
);
var TOKEN_2022_PROGRAM_ADDRESS2 = address4(
  "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
);
function isNativeMint(mint) {
  return mint === NATIVE_MINT_ADDRESS;
}
function getTokenProgramAddress(flag) {
  return flag === 0 ? TOKEN_PROGRAM_ADDRESS : TOKEN_2022_PROGRAM_ADDRESS2;
}
function getOrCreateAssociatedTokenInstruction(mint, owner, payer, tokenProgram) {
  return __async(this, null, function* () {
    const [ata] = yield findAssociatedTokenPda({
      owner,
      mint,
      tokenProgram
    });
    const instruction = yield getCreateAssociatedTokenIdempotentInstructionAsync({
      payer,
      ata,
      owner,
      mint,
      tokenProgram
    });
    return { ata, instruction };
  });
}
function prepareTokenAccounts(params) {
  return __async(this, null, function* () {
    const {
      payer,
      tokenAOwner,
      tokenBOwner,
      tokenAMint,
      tokenBMint,
      tokenAProgram,
      tokenBProgram
    } = params;
    const [
      { ata: tokenAAta, instruction: createTokenAInstruction },
      { ata: tokenBAta, instruction: createTokenBInstruction }
    ] = yield Promise.all([
      getOrCreateAssociatedTokenInstruction(
        tokenAMint,
        tokenAOwner,
        payer,
        tokenAProgram
      ),
      getOrCreateAssociatedTokenInstruction(
        tokenBMint,
        tokenBOwner,
        payer,
        tokenBProgram
      )
    ]);
    return {
      tokenAAta,
      tokenBAta,
      instructions: [createTokenAInstruction, createTokenBInstruction]
    };
  });
}
function wrapSolInstructions(sourceAddress, sourceSigner, destination, amount) {
  const transferInstruction = getTransferSolInstruction({
    source: sourceSigner,
    destination,
    amount
  });
  const normalizedTransferInstruction = sourceAddress === sourceSigner.address ? transferInstruction : replaceInstructionAccount(transferInstruction, 0, {
    address: sourceAddress,
    role: AccountRole2.WRITABLE_SIGNER
  });
  return [
    normalizedTransferInstruction,
    getSyncNativeInstruction({
      account: destination
    })
  ];
}
function unwrapSolInstruction(_0, _1) {
  return __async(this, arguments, function* (ownerAddress, ownerSigner, receiver = ownerAddress) {
    const [wSolAta] = yield findAssociatedTokenPda({
      owner: ownerAddress,
      mint: NATIVE_MINT_ADDRESS,
      tokenProgram: TOKEN_PROGRAM_ADDRESS
    });
    const instruction = getCloseAccountInstruction({
      account: wSolAta,
      destination: receiver,
      owner: ownerSigner
    });
    return ownerAddress === ownerSigner.address ? instruction : replaceInstructionAccount(instruction, 2, {
      address: ownerAddress,
      role: AccountRole2.READONLY_SIGNER
    });
  });
}

// src/kit/builders/validation.ts
import BN3 from "bn.js";
var SPLIT_POSITION_DENOMINATOR = 1e9;
var NUM_REWARDS = 2;
var MIN_REWARD_DURATION = 86400;
var MAX_REWARD_DURATION = 31536e3;
function validateTokenMints(tokenAMint, tokenBMint) {
  if (tokenAMint === tokenBMint) {
    throw new SameTokenMintsError();
  }
}
function validateCreatePoolParams(params) {
  const { tokenAMint, tokenBMint, liquidityDelta, tokenAAmount, tokenBAmount } = params;
  validateTokenMints(tokenAMint, tokenBMint);
  if (liquidityDelta.lte(new BN3(0))) {
    throw new InvalidMinimumLiquidityError();
  }
  if (tokenAAmount.lte(new BN3(0)) && tokenBAmount.lte(new BN3(0))) {
    throw new AmountIsZeroError();
  }
}
function validateAddLiquidityParams(liquidityDelta) {
  if (liquidityDelta.lte(new BN3(0))) {
    throw new InvalidParametersError("liquidityDelta must be greater than 0");
  }
}
function validateRemoveLiquidityParams(liquidityDelta) {
  if (liquidityDelta.lte(new BN3(0))) {
    throw new InvalidParametersError("liquidityDelta must be greater than 0");
  }
}
function validateSplitPositionParams(params) {
  const percentages = [
    params.permanentLockedLiquidityPercentage,
    params.unlockedLiquidityPercentage,
    params.feeAPercentage,
    params.feeBPercentage,
    params.reward0Percentage,
    params.reward1Percentage,
    params.innerVestingLiquidityPercentage
  ];
  for (const percentage of percentages) {
    if (percentage > 100 || percentage < 0) {
      throw new InvalidSplitPositionParametersError(
        "Each percentage must be <= 100"
      );
    }
  }
  if (percentages.every((percentage) => percentage === 0)) {
    throw new InvalidSplitPositionParametersError(
      "At least one percentage must be greater than 0"
    );
  }
}
function validateSplitPosition2Params(numerator) {
  if (numerator <= 0 || numerator > SPLIT_POSITION_DENOMINATOR) {
    throw new InvalidSplitPositionParametersError(
      `numerator must be in (0, ${SPLIT_POSITION_DENOMINATOR}]`
    );
  }
}
function validateLockPositionParams(params) {
  const {
    numberOfPeriod,
    periodFrequency,
    cliffUnlockLiquidity,
    liquidityPerPeriod
  } = params;
  if (numberOfPeriod < 0) {
    throw new InvalidVestingInfoError("numberOfPeriod must be >= 0");
  }
  if (numberOfPeriod > 0 && (periodFrequency.lte(new BN3(0)) || liquidityPerPeriod.lte(new BN3(0)))) {
    throw new InvalidVestingInfoError(
      "periodFrequency and liquidityPerPeriod must be greater than 0 when numberOfPeriod > 0"
    );
  }
  const totalLockAmount = cliffUnlockLiquidity.add(
    liquidityPerPeriod.muln(numberOfPeriod)
  );
  if (totalLockAmount.lte(new BN3(0))) {
    throw new InvalidVestingInfoError(
      "Total lock amount must be greater than 0"
    );
  }
}
function validateRewardIndex(rewardIndex) {
  if (rewardIndex < 0 || rewardIndex >= NUM_REWARDS) {
    throw new InvalidRewardIndexError(
      `rewardIndex must be in [0, ${NUM_REWARDS})`
    );
  }
}
function validateRewardDuration(rewardDuration) {
  if (rewardDuration.lt(new BN3(MIN_REWARD_DURATION)) || rewardDuration.gt(new BN3(MAX_REWARD_DURATION))) {
    throw new InvalidRewardDurationError(
      `rewardDuration must be between ${MIN_REWARD_DURATION} and ${MAX_REWARD_DURATION} seconds`
    );
  }
}

// src/kit/builders/core.ts
function normalizePoolFees(poolFees) {
  return {
    baseFee: {
      data: new Uint8Array(poolFees.baseFee.data)
    },
    compoundingFeeBps: poolFees.compoundingFeeBps,
    padding: poolFees.padding,
    dynamicFee: normalizeInstructionValue(poolFees.dynamicFee)
  };
}
function normalizeInstructionValue(value) {
  if (value === null || value === void 0) {
    return value;
  }
  if (BN4.isBN(value)) {
    return bnToBigInt(value);
  }
  if (value instanceof Uint8Array) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((entry) => normalizeInstructionValue(entry));
  }
  if (typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entryValue]) => [
        key,
        normalizeInstructionValue(entryValue)
      ])
    );
  }
  return value;
}
function unwrapRpcValue(response) {
  return response && typeof response === "object" && "value" in response ? response.value : response;
}
function getCurrentPoint(rpc, activationType) {
  return __async(this, null, function* () {
    const currentSlot = unwrapRpcValue(
      yield rpc.getSlot().send()
    );
    if (activationType === 0 /* Slot */) {
      return new BN4(currentSlot.toString());
    }
    const currentBlockTime = unwrapRpcValue(
      yield rpc.getBlockTime(currentSlot).send()
    );
    return new BN4((currentBlockTime != null ? currentBlockTime : 0).toString());
  });
}
function isRateLimiterApplied(params) {
  const {
    referenceAmount,
    maxLimiterDuration,
    maxFeeBps,
    feeIncrementBps,
    currentPoint,
    activationPoint,
    isAtoB
  } = params;
  if (referenceAmount.isZero() && maxLimiterDuration === 0 && maxFeeBps === 0 && feeIncrementBps === 0) {
    return false;
  }
  if (isAtoB || currentPoint.lt(activationPoint)) {
    return false;
  }
  return currentPoint.lte(activationPoint.add(new BN4(maxLimiterDuration)));
}
function buildPoolCreationContext(params) {
  return __async(this, null, function* () {
    const {
      pool,
      payer,
      positionNft,
      tokenAMint,
      tokenBMint,
      tokenAAmount,
      tokenBAmount,
      tokenAProgram,
      tokenBProgram,
      minimumNativeTokenBAmount = false
    } = params;
    const [position] = yield findPositionPda({
      positionNftMint: positionNft.address
    });
    const [positionNftAccount] = yield findPositionNftAccountPda({
      positionNftMint: positionNft.address
    });
    const [tokenAVault] = yield findTokenAVaultPda({ tokenAMint, pool });
    const [tokenBVault] = yield findTokenBVaultPda({ tokenBMint, pool });
    const {
      tokenAAta: payerTokenA,
      tokenBAta: payerTokenB,
      instructions: preInstructions
    } = yield prepareTokenAccounts({
      payer,
      tokenAOwner: payer.address,
      tokenBOwner: payer.address,
      tokenAMint,
      tokenBMint,
      tokenAProgram,
      tokenBProgram
    });
    if (isNativeMint(tokenAMint)) {
      preInstructions.push(
        ...wrapSolInstructions(payer.address, payer, payerTokenA, bnToBigInt(tokenAAmount))
      );
    }
    if (isNativeMint(tokenBMint)) {
      const nativeTokenBAmount = minimumNativeTokenBAmount && tokenBAmount.lt(new BN4(1)) ? new BN4(1) : tokenBAmount;
      preInstructions.push(
        ...wrapSolInstructions(
          payer.address,
          payer,
          payerTokenB,
          bnToBigInt(nativeTokenBAmount)
        )
      );
    }
    const [tokenABadge, tokenBBadge] = yield Promise.all([
      deriveTokenBadgeAddress(tokenAMint),
      deriveTokenBadgeAddress(tokenBMint)
    ]);
    return {
      position,
      positionNftAccount,
      tokenAVault,
      tokenBVault,
      payerTokenA,
      payerTokenB,
      preInstructions,
      tokenBadgeAccounts: [
        readonlyAccountMeta(tokenABadge),
        readonlyAccountMeta(tokenBBadge)
      ]
    };
  });
}
function buildPoolPermanentLockInstruction(params) {
  return __async(this, null, function* () {
    var _a;
    const ownerSigner = (_a = params.creatorSigner) != null ? _a : params.payer;
    let instruction = yield getPermanentLockPositionInstructionAsync({
      pool: params.pool,
      position: params.position,
      positionNftAccount: params.positionNftAccount,
      owner: ownerSigner,
      permanentLockLiquidity: bnToBigInt(params.liquidityDelta),
      program: CP_AMM_PROGRAM_ADDRESS
    });
    if (params.creator !== ownerSigner.address) {
      instruction = replaceInstructionAccount(instruction, 3, {
        address: params.creator,
        role: AccountRole3.READONLY_SIGNER
      });
    }
    return instruction;
  });
}
function createPoolPlan(params) {
  return __async(this, null, function* () {
    validateCreatePoolParams({
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      liquidityDelta: params.liquidityDelta,
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount
    });
    const pool = yield derivePoolAddress(
      params.config,
      params.tokenAMint,
      params.tokenBMint
    );
    const context = yield buildPoolCreationContext({
      pool,
      payer: params.payer,
      positionNft: params.positionNft,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram
    });
    const initializePoolInstruction = appendRemainingAccounts(
      yield getInitializePoolInstructionAsync({
        creator: params.creator,
        positionNftMint: params.positionNft,
        positionNftAccount: context.positionNftAccount,
        payer: params.payer,
        config: params.config,
        poolAuthority: POOL_AUTHORITY_ADDRESS,
        pool,
        position: context.position,
        tokenAMint: params.tokenAMint,
        tokenBMint: params.tokenBMint,
        tokenAVault: context.tokenAVault,
        tokenBVault: context.tokenBVault,
        payerTokenA: context.payerTokenA,
        payerTokenB: context.payerTokenB,
        tokenAProgram: params.tokenAProgram,
        tokenBProgram: params.tokenBProgram,
        program: CP_AMM_PROGRAM_ADDRESS,
        liquidity: bnToBigInt(params.liquidityDelta),
        sqrtPrice: bnToBigInt(params.initSqrtPrice),
        activationPoint: optionalBnToBigInt(params.activationPoint)
      }),
      context.tokenBadgeAccounts
    );
    const instructions = [
      ...context.preInstructions,
      initializePoolInstruction
    ];
    if (params.isLockLiquidity) {
      instructions.push(
        yield buildPoolPermanentLockInstruction({
          creator: params.creator,
          payer: params.payer,
          pool,
          position: context.position,
          positionNftAccount: context.positionNftAccount,
          liquidityDelta: params.liquidityDelta
        })
      );
    }
    return {
      plan: buildTransactionPlan(instructions, [params.payer, params.positionNft]),
      pool,
      position: context.position
    };
  });
}
function createCustomPoolPlan(params) {
  return __async(this, null, function* () {
    validateTokenMints(params.tokenAMint, params.tokenBMint);
    const pool = yield deriveCustomizablePoolAddress(
      params.tokenAMint,
      params.tokenBMint
    );
    const context = yield buildPoolCreationContext({
      pool,
      payer: params.payer,
      positionNft: params.positionNft,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram,
      minimumNativeTokenBAmount: true
    });
    const initializePoolInstruction = appendRemainingAccounts(
      yield getInitializeCustomizablePoolInstructionAsync({
        creator: params.creator,
        positionNftMint: params.positionNft,
        positionNftAccount: context.positionNftAccount,
        payer: params.payer,
        poolAuthority: POOL_AUTHORITY_ADDRESS,
        pool,
        position: context.position,
        tokenAMint: params.tokenAMint,
        tokenBMint: params.tokenBMint,
        tokenAVault: context.tokenAVault,
        tokenBVault: context.tokenBVault,
        payerTokenA: context.payerTokenA,
        payerTokenB: context.payerTokenB,
        tokenAProgram: params.tokenAProgram,
        tokenBProgram: params.tokenBProgram,
        program: CP_AMM_PROGRAM_ADDRESS,
        params: {
          poolFees: normalizePoolFees(params.poolFees),
          sqrtMinPrice: bnToBigInt(params.sqrtMinPrice),
          sqrtMaxPrice: bnToBigInt(params.sqrtMaxPrice),
          hasAlphaVault: params.hasAlphaVault,
          liquidity: bnToBigInt(params.liquidityDelta),
          sqrtPrice: bnToBigInt(params.initSqrtPrice),
          activationType: params.activationType,
          collectFeeMode: params.collectFeeMode,
          activationPoint: optionalBnToBigInt(params.activationPoint)
        }
      }),
      context.tokenBadgeAccounts
    );
    const instructions = [
      ...context.preInstructions,
      initializePoolInstruction
    ];
    if (params.isLockLiquidity) {
      instructions.push(
        yield buildPoolPermanentLockInstruction({
          creator: params.creator,
          payer: params.payer,
          pool,
          position: context.position,
          positionNftAccount: context.positionNftAccount,
          liquidityDelta: params.liquidityDelta
        })
      );
    }
    return {
      plan: buildTransactionPlan(instructions, [params.payer, params.positionNft]),
      pool,
      position: context.position
    };
  });
}
function createCustomPoolWithDynamicConfigPlan(params) {
  return __async(this, null, function* () {
    validateTokenMints(params.tokenAMint, params.tokenBMint);
    const pool = yield derivePoolAddress(
      params.config,
      params.tokenAMint,
      params.tokenBMint
    );
    const context = yield buildPoolCreationContext({
      pool,
      payer: params.payer,
      positionNft: params.positionNft,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram
    });
    const initializePoolInstruction = appendRemainingAccounts(
      yield getInitializePoolWithDynamicConfigInstructionAsync({
        creator: params.creator.address,
        positionNftMint: params.positionNft,
        positionNftAccount: context.positionNftAccount,
        payer: params.payer,
        poolAuthority: POOL_AUTHORITY_ADDRESS,
        pool,
        position: context.position,
        poolCreatorAuthority: params.payer,
        config: params.config,
        tokenAMint: params.tokenAMint,
        tokenBMint: params.tokenBMint,
        tokenAVault: context.tokenAVault,
        tokenBVault: context.tokenBVault,
        payerTokenA: context.payerTokenA,
        payerTokenB: context.payerTokenB,
        tokenAProgram: params.tokenAProgram,
        tokenBProgram: params.tokenBProgram,
        program: CP_AMM_PROGRAM_ADDRESS,
        params: {
          poolFees: normalizePoolFees(params.poolFees),
          sqrtMinPrice: bnToBigInt(params.sqrtMinPrice),
          sqrtMaxPrice: bnToBigInt(params.sqrtMaxPrice),
          hasAlphaVault: params.hasAlphaVault,
          liquidity: bnToBigInt(params.liquidityDelta),
          sqrtPrice: bnToBigInt(params.initSqrtPrice),
          activationType: params.activationType,
          collectFeeMode: params.collectFeeMode,
          activationPoint: optionalBnToBigInt(params.activationPoint)
        }
      }).then(
        (instruction) => params.poolCreatorAuthority === params.payer.address ? instruction : replaceInstructionAccount(instruction, 4, {
          address: params.poolCreatorAuthority,
          role: AccountRole3.READONLY_SIGNER
        })
      ),
      context.tokenBadgeAccounts
    );
    const instructions = [
      ...context.preInstructions,
      initializePoolInstruction
    ];
    const signers = [
      params.payer,
      params.positionNft
    ];
    if (params.isLockLiquidity) {
      instructions.push(
        yield buildPoolPermanentLockInstruction({
          creator: params.creator.address,
          creatorSigner: params.creator,
          payer: params.payer,
          pool,
          position: context.position,
          positionNftAccount: context.positionNftAccount,
          liquidityDelta: params.liquidityDelta
        })
      );
      signers.push(params.creator);
    }
    return {
      plan: buildTransactionPlan(instructions, signers),
      pool,
      position: context.position
    };
  });
}
function createPositionPlan(params) {
  return __async(this, null, function* () {
    const instruction = yield getCreatePositionInstructionAsync({
      owner: params.owner,
      positionNftMint: params.positionNft,
      payer: params.payer,
      pool: params.pool,
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan([instruction], [params.payer, params.positionNft]);
  });
}
function swap2Plan(rpc, params) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f;
    const amount = "amountIn" in params ? params.amountIn : params.amountOut;
    if (amount.isZero()) {
      throw new AmountIsZeroError("swap amount must be greater than 0");
    }
    const isInputTokenA = params.inputTokenMint === params.tokenAMint;
    const inputTokenProgram = isInputTokenA ? params.tokenAProgram : params.tokenBProgram;
    const outputTokenProgram = isInputTokenA ? params.tokenBProgram : params.tokenAProgram;
    const tokenOwner = (_a = params.receiver) != null ? _a : params.payer.address;
    const {
      tokenAAta: inputTokenAccount,
      tokenBAta: outputTokenAccount,
      instructions: preInstructions
    } = yield prepareTokenAccounts({
      payer: params.payer,
      tokenAOwner: tokenOwner,
      tokenBOwner: tokenOwner,
      tokenAMint: params.inputTokenMint,
      tokenBMint: params.outputTokenMint,
      tokenAProgram: inputTokenProgram,
      tokenBProgram: outputTokenProgram
    });
    let amount0;
    let amount1;
    if (params.swapMode === 2 /* ExactOut */) {
      amount0 = params.amountOut;
      amount1 = params.maximumAmountIn;
    } else {
      amount0 = params.amountIn;
      amount1 = params.minimumAmountOut;
    }
    if (isNativeMint(params.inputTokenMint)) {
      const wrapSource = (_b = params.receiver) != null ? _b : params.payer.address;
      const wrapAmount = params.swapMode === 2 /* ExactOut */ ? amount1 : amount0;
      preInstructions.push(
        ...wrapSolInstructions(
          wrapSource,
          params.payer,
          inputTokenAccount,
          bnToBigInt(wrapAmount)
        )
      );
    }
    const postInstructions = [];
    if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
      postInstructions.push(
        yield unwrapSolInstruction(
          (_c = params.receiver) != null ? _c : params.payer.address,
          params.payer,
          (_d = params.receiver) != null ? _d : params.payer.address
        )
      );
    }
    const poolState = (_e = params.poolState) != null ? _e : yield fetchPoolState(rpc, params.pool);
    const baseFeeData = Buffer.from(poolState.poolFees.baseFee.baseFeeInfo.data);
    const baseFeeMode = baseFeeData.readUInt8(8);
    let remainingAccounts = [];
    if (baseFeeMode === 2 /* RateLimiter */) {
      const currentPoint = yield getCurrentPoint(
        rpc,
        poolState.activationType
      );
      const rateLimiter = decodePodAlignedFeeRateLimiter(baseFeeData);
      const rateLimiterApplied = isRateLimiterApplied({
        referenceAmount: rateLimiter.referenceAmount,
        maxLimiterDuration: rateLimiter.maxLimiterDuration,
        maxFeeBps: rateLimiter.maxFeeBps,
        feeIncrementBps: rateLimiter.feeIncrementBps,
        currentPoint,
        activationPoint: poolState.activationPoint,
        isAtoB: isInputTokenA
      });
      if (rateLimiterApplied) {
        remainingAccounts = [readonlyAccountMeta(SYSVAR_INSTRUCTIONS_ADDRESS)];
      }
    }
    const swapInstruction = appendRemainingAccounts(
      yield getSwap2InstructionAsync({
        poolAuthority: POOL_AUTHORITY_ADDRESS,
        pool: params.pool,
        inputTokenAccount,
        outputTokenAccount,
        tokenAVault: params.tokenAVault,
        tokenBVault: params.tokenBVault,
        tokenAMint: params.tokenAMint,
        tokenBMint: params.tokenBMint,
        payer: params.payer,
        tokenAProgram: params.tokenAProgram,
        tokenBProgram: params.tokenBProgram,
        referralTokenAccount: (_f = params.referralTokenAccount) != null ? _f : void 0,
        program: CP_AMM_PROGRAM_ADDRESS,
        params: {
          amount0: bnToBigInt(amount0),
          amount1: bnToBigInt(amount1),
          swapMode: params.swapMode
        }
      }),
      remainingAccounts
    );
    return buildTransactionPlan(
      [...preInstructions, swapInstruction, ...postInstructions],
      [params.payer]
    );
  });
}
function swapPlan(rpc, params) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f;
    if (params.amountIn.isZero()) {
      throw new AmountIsZeroError("amountIn must be greater than 0");
    }
    const isInputTokenA = params.inputTokenMint === params.tokenAMint;
    const inputTokenProgram = isInputTokenA ? params.tokenAProgram : params.tokenBProgram;
    const outputTokenProgram = isInputTokenA ? params.tokenBProgram : params.tokenAProgram;
    const tokenOwner = (_a = params.receiver) != null ? _a : params.payer.address;
    const {
      tokenAAta: inputTokenAccount,
      tokenBAta: outputTokenAccount,
      instructions: preInstructions
    } = yield prepareTokenAccounts({
      payer: params.payer,
      tokenAOwner: tokenOwner,
      tokenBOwner: tokenOwner,
      tokenAMint: params.inputTokenMint,
      tokenBMint: params.outputTokenMint,
      tokenAProgram: inputTokenProgram,
      tokenBProgram: outputTokenProgram
    });
    if (isNativeMint(params.inputTokenMint)) {
      const wrapSource = (_b = params.receiver) != null ? _b : params.payer.address;
      preInstructions.push(
        ...wrapSolInstructions(
          wrapSource,
          params.payer,
          inputTokenAccount,
          bnToBigInt(params.amountIn)
        )
      );
    }
    const postInstructions = [];
    if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
      postInstructions.push(
        yield unwrapSolInstruction(
          (_c = params.receiver) != null ? _c : params.payer.address,
          params.payer,
          (_d = params.receiver) != null ? _d : params.payer.address
        )
      );
    }
    const poolState = (_e = params.poolState) != null ? _e : yield fetchPoolState(rpc, params.pool);
    const baseFeeData = Buffer.from(poolState.poolFees.baseFee.baseFeeInfo.data);
    const baseFeeMode = baseFeeData.readUInt8(8);
    let remainingAccounts = [];
    if (baseFeeMode === 2 /* RateLimiter */) {
      const currentPoint = yield getCurrentPoint(
        rpc,
        poolState.activationType
      );
      const rateLimiter = decodePodAlignedFeeRateLimiter(baseFeeData);
      const rateLimiterApplied = isRateLimiterApplied({
        referenceAmount: rateLimiter.referenceAmount,
        maxLimiterDuration: rateLimiter.maxLimiterDuration,
        maxFeeBps: rateLimiter.maxFeeBps,
        feeIncrementBps: rateLimiter.feeIncrementBps,
        currentPoint,
        activationPoint: poolState.activationPoint,
        isAtoB: isInputTokenA
      });
      if (rateLimiterApplied) {
        remainingAccounts = [readonlyAccountMeta(SYSVAR_INSTRUCTIONS_ADDRESS)];
      }
    }
    const swapInstruction = appendRemainingAccounts(
      yield getSwapInstructionAsync({
        poolAuthority: POOL_AUTHORITY_ADDRESS,
        pool: params.pool,
        inputTokenAccount,
        outputTokenAccount,
        tokenAVault: params.tokenAVault,
        tokenBVault: params.tokenBVault,
        tokenAMint: params.tokenAMint,
        tokenBMint: params.tokenBMint,
        payer: params.payer,
        tokenAProgram: params.tokenAProgram,
        tokenBProgram: params.tokenBProgram,
        referralTokenAccount: (_f = params.referralTokenAccount) != null ? _f : void 0,
        program: CP_AMM_PROGRAM_ADDRESS,
        amountIn: bnToBigInt(params.amountIn),
        minimumAmountOut: bnToBigInt(params.minimumAmountOut)
      }),
      remainingAccounts
    );
    return buildTransactionPlan(
      [...preInstructions, swapInstruction, ...postInstructions],
      [params.payer]
    );
  });
}

// src/kit/builders/positions.ts
import BN21 from "bn.js";

// src/kit/math/liquidity/compoundingLiquidity.ts
import BN7 from "bn.js";

// src/kit/math/utilsMath.ts
import Decimal from "decimal.js";

// src/kit/math/constants.ts
import BN5 from "bn.js";
var SCALE_OFFSET = 64;
var BASIS_POINT_MAX = 1e4;
var FEE_DENOMINATOR = 1e9;
var ONE_Q64 = new BN5(1).shln(SCALE_OFFSET);
var MAX_EXPONENTIAL = new BN5(524288);
var MAX = new BN5(2).pow(new BN5(128)).sub(new BN5(1));
var MAX_FEE_NUMERATOR_V0 = 5e8;
var MAX_FEE_NUMERATOR_V1 = 99e7;
var MIN_SQRT_PRICE = new BN5("4295048016");
var MAX_SQRT_PRICE = new BN5("79226673521066979257578248091");
var DYNAMIC_FEE_SCALING_FACTOR = new BN5(1e11);
var DYNAMIC_FEE_ROUNDING_OFFSET = new BN5(99999999999);
var U128_MAX = new BN5("340282366920938463463374607431768211455");
var U64_MAX = new BN5("18446744073709551615");
var U16_MAX = 65535;
var DEAD_LIQUIDITY = new BN5(100).shln(SCALE_OFFSET);

// src/kit/math/utilsMath.ts
import BN6 from "bn.js";
function mulDiv(x, y, denominator, rounding) {
  const { div, mod } = x.mul(y).divmod(denominator);
  if (rounding == 0 /* Up */ && !mod.isZero()) {
    return div.add(new BN6(1));
  }
  return div;
}
function sqrt(value) {
  if (value.isZero()) {
    return new BN6(0);
  }
  if (value.eq(new BN6(1))) {
    return new BN6(1);
  }
  let x = value;
  let y = value.add(new BN6(1)).div(new BN6(2));
  while (y.lt(x)) {
    x = y;
    y = x.add(value.div(x)).div(new BN6(2));
  }
  return x;
}
function pow(base, exp) {
  let invert = exp.isNeg();
  if (exp.isZero()) {
    return ONE_Q64;
  }
  exp = invert ? exp.abs() : exp;
  if (exp.gt(MAX_EXPONENTIAL)) {
    return new BN6(0);
  }
  let squaredBase = base;
  let result = ONE_Q64;
  if (squaredBase.gte(result)) {
    squaredBase = MAX.div(squaredBase);
    invert = !invert;
  }
  if (!exp.and(new BN6(1)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(2)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(4)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(8)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(16)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(32)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(64)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(128)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(256)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(512)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(1024)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(2048)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(4096)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(8192)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(16384)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(32768)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(65536)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(131072)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new BN6(262144)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  if (result.isZero()) {
    return new BN6(0);
  }
  if (invert) {
    result = MAX.div(result);
  }
  return result;
}

// src/kit/math/errors.ts
var DepositTokenNotAcceptedError = class extends Error {
  constructor(acceptedToken) {
    const rejectedToken = acceptedToken === "A" ? "B" : "A";
    super(
      `Cannot deposit token ${rejectedToken}: pool price is at the ${rejectedToken === "A" ? "upper" : "lower"} bound. All liquidity is in token ${acceptedToken}.`
    );
    this.name = "DepositTokenNotAcceptedError";
    this.acceptedToken = acceptedToken;
  }
};
var InvalidFeeError = class extends Error {
  constructor(message) {
    super(
      message != null ? message : "Fee numerator must be less than denominator and denominator must be non-zero"
    );
    this.name = "InvalidFeeError";
  }
};
var InvalidCollectFeeModeError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid collect fee mode");
    this.name = "InvalidCollectFeeModeError";
  }
};
var AmountIsZeroError2 = class extends Error {
  constructor(message) {
    super(message != null ? message : "Amount is zero");
    this.name = "AmountIsZeroError";
  }
};
var InvalidBaseFeeModeError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid base fee mode");
    this.name = "InvalidBaseFeeModeError";
  }
};
var InvalidPoolVersionError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid pool version");
    this.name = "InvalidPoolVersionError";
  }
};
var MathOverflowError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Math overflow");
    this.name = "MathOverflowError";
  }
};
var InsufficientLiquidityError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Insufficient liquidity");
    this.name = "InsufficientLiquidityError";
  }
};
var SwapDisabledError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Swap is disabled");
    this.name = "SwapDisabledError";
  }
};
var InvalidInputError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid input");
    this.name = "InvalidInputError";
  }
};
var PriceRangeViolationError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Price range is violated");
    this.name = "PriceRangeViolationError";
  }
};

// src/kit/math/liquidity/compoundingLiquidity.ts
function getAmountsForModifyForCompoundingLiquidity(tokenAAmount, tokenBAmount, liquidity, liquidityDelta, round) {
  const amountA = mulDiv(liquidityDelta, tokenAAmount, liquidity, round);
  const amountB = mulDiv(liquidityDelta, tokenBAmount, liquidity, round);
  return [amountA, amountB];
}
function calculateAtoBFromAmountInForCompoundingLiquidity(tokenAAmount, tokenBAmount, amountIn) {
  const denominator = tokenAAmount.add(amountIn);
  const outputAmount = mulDiv(
    tokenBAmount,
    amountIn,
    denominator,
    1 /* Down */
  );
  return {
    amountLeft: new BN7(0),
    outputAmount,
    nextSqrtPrice: new BN7(0)
  };
}
function calculateBtoAFromAmountInForCompoundingLiquidity(tokenAAmount, tokenBAmount, amountIn) {
  const denominator = tokenBAmount.add(amountIn);
  const outputAmount = mulDiv(
    tokenAAmount,
    amountIn,
    denominator,
    1 /* Down */
  );
  return {
    amountLeft: new BN7(0),
    outputAmount,
    nextSqrtPrice: new BN7(0)
  };
}
function calculateAtoBFromPartialAmountInForCompoundingLiquidity(tokenAAmount, tokenBAmount, amountIn) {
  return calculateAtoBFromAmountInForCompoundingLiquidity(
    tokenAAmount,
    tokenBAmount,
    amountIn
  );
}
function calculateBtoAFromPartialAmountInForCompoundingLiquidity(tokenAAmount, tokenBAmount, amountIn) {
  return calculateBtoAFromAmountInForCompoundingLiquidity(
    tokenAAmount,
    tokenBAmount,
    amountIn
  );
}
function calculateAtoBFromAmountOutForCompoundingLiquidity(tokenAAmount, tokenBAmount, amountOut) {
  if (amountOut.gte(tokenBAmount)) {
    throw new InsufficientLiquidityError();
  }
  const inputAmount = mulDiv(
    tokenAAmount,
    amountOut,
    tokenBAmount.sub(amountOut),
    0 /* Up */
  );
  return {
    inputAmount,
    nextSqrtPrice: new BN7(0)
    // don't need to care for next sqrt price now
  };
}
function calculateBtoAFromAmountOutForCompoundingLiquidity(tokenAAmount, tokenBAmount, amountOut) {
  if (amountOut.gte(tokenAAmount)) {
    throw new InsufficientLiquidityError();
  }
  const inputAmount = mulDiv(
    tokenBAmount,
    amountOut,
    tokenAAmount.sub(amountOut),
    0 /* Up */
  );
  return {
    inputAmount,
    nextSqrtPrice: new BN7(0)
    // don't need to care for next sqrt price now
  };
}
function getReservesAmountForCompoundingLiquidity(tokenAAmount, tokenBAmount) {
  return [tokenAAmount, tokenBAmount];
}
function getNextSqrtPriceForCompoundingLiquidity(tokenAAmount, tokenBAmount) {
  return getSqrtPriceFromAmountsForCompoundingLiquidity(
    tokenAAmount,
    tokenBAmount
  );
}
function getSqrtPriceFromAmountsForCompoundingLiquidity(tokenAAmount, tokenBAmount) {
  const tokenBShifted = tokenBAmount.ushln(128);
  const price = tokenBShifted.div(tokenAAmount);
  const sqrtPrice = sqrt(price);
  if (!sqrtPrice) {
    throw new MathOverflowError("MathOverflow in getSqrtPriceFromAmounts");
  }
  return sqrtPrice;
}
function getAmountAFromLiquidityDeltaForCompoundingLiquidity(liquidityDelta, tokenAAmount, liquidity, rounding) {
  return mulDiv(liquidityDelta, tokenAAmount, liquidity, rounding);
}
function getAmountBFromLiquidityDeltaForCompoundingLiquidity(liquidityDelta, tokenBAmount, liquidity, rounding) {
  return mulDiv(liquidityDelta, tokenBAmount, liquidity, rounding);
}
function getPoolCreationAmountAFromLiquidityDeltaForCompoundingLiquidity(sqrtPrice, liquidity) {
  const amount = liquidity.add(sqrtPrice.subn(1)).div(sqrtPrice);
  return amount;
}
function getPoolCreationAmountBFromLiquidityDeltaForCompoundingLiquidity(sqrtPrice, liquidity) {
  const numerator = liquidity.mul(sqrtPrice);
  const denominator = new BN7(1).ushln(128);
  const amount = numerator.add(denominator.subn(1)).div(denominator);
  return amount;
}
function getLiquidityDeltaFromAmountAForCompoundingLiquidity(amountA, tokenAAmount, liquidity) {
  return mulDiv(amountA, liquidity, tokenAAmount, 1 /* Down */);
}
function getLiquidityDeltaFromAmountBForCompoundingLiquidity(amountB, tokenBAmount, liquidity) {
  return mulDiv(amountB, liquidity, tokenBAmount, 1 /* Down */);
}
function getPoolCreationLiquidityDeltaFromAmountAForCompoundingLiquidity(amountA, sqrtPrice) {
  return amountA.mul(sqrtPrice);
}
function getPoolCreationLiquidityDeltaFromAmountBForCompoundingLiquidity(amountB, sqrtPrice) {
  return amountB.ushln(128).div(sqrtPrice);
}

// src/kit/math/liquidity/concentratedLiquidity.ts
import BN8 from "bn.js";
function getAmountsForModifyForConcentratedLiquidity(sqrtPrice, sqrtMinPrice, sqrtMaxPrice, liquidityDelta, round) {
  const tokenAAmount = getAmountAFromLiquidityDeltaForConcentratedLiquidity(
    sqrtPrice,
    sqrtMaxPrice,
    liquidityDelta,
    round
  );
  const tokenBAmount = getAmountBFromLiquidityDeltaForConcentratedLiquidity(
    sqrtMinPrice,
    sqrtPrice,
    liquidityDelta,
    round
  );
  return [tokenAAmount, tokenBAmount];
}
function calculateAtoBFromAmountInForConcentratedLiquidity(sqrtMinPrice, sqrtPrice, liquidity, amountIn) {
  const nextSqrtPrice = getNextSqrtPriceFromInput(
    sqrtPrice,
    liquidity,
    amountIn,
    true
  );
  if (nextSqrtPrice.lt(sqrtMinPrice)) {
    throw new PriceRangeViolationError();
  }
  const outputAmount = getAmountBFromLiquidityDeltaForConcentratedLiquidity(
    nextSqrtPrice,
    sqrtPrice,
    liquidity,
    1 /* Down */
  );
  return {
    outputAmount,
    nextSqrtPrice,
    amountLeft: new BN8(0)
  };
}
function calculateBtoAFromAmountInForConcentratedLiquidity(sqrtMaxPrice, sqrtPrice, liquidity, amountIn) {
  const nextSqrtPrice = getNextSqrtPriceFromInput(
    sqrtPrice,
    liquidity,
    amountIn,
    false
  );
  if (nextSqrtPrice.gt(sqrtMaxPrice)) {
    throw new PriceRangeViolationError();
  }
  const outputAmount = getAmountAFromLiquidityDeltaForConcentratedLiquidity(
    sqrtPrice,
    nextSqrtPrice,
    liquidity,
    1 /* Down */
  );
  return {
    outputAmount,
    nextSqrtPrice,
    amountLeft: new BN8(0)
  };
}
function calculateAtoBFromPartialAmountInForConcentratedLiquidity(sqrtMinPrice, sqrtPrice, liquidity, amountIn) {
  const maxAmountIn = getAmountAFromLiquidityDeltaForConcentratedLiquidity(
    sqrtMinPrice,
    sqrtPrice,
    liquidity,
    0 /* Up */
  );
  let consumedInAmount;
  let nextSqrtPrice;
  if (amountIn.gte(maxAmountIn)) {
    consumedInAmount = maxAmountIn;
    nextSqrtPrice = sqrtMinPrice;
  } else {
    nextSqrtPrice = getNextSqrtPriceFromInput(
      sqrtPrice,
      liquidity,
      amountIn,
      true
    );
    consumedInAmount = amountIn;
  }
  const outputAmount = getAmountBFromLiquidityDeltaForConcentratedLiquidity(
    nextSqrtPrice,
    sqrtPrice,
    liquidity,
    1 /* Down */
  );
  const amountLeft = amountIn.sub(consumedInAmount);
  return {
    outputAmount,
    nextSqrtPrice,
    amountLeft
  };
}
function calculateBtoAFromPartialAmountInForConcentratedLiquidity(sqrtMaxPrice, sqrtPrice, liquidity, amountIn) {
  const maxAmountIn = getAmountBFromLiquidityDeltaForConcentratedLiquidity(
    sqrtPrice,
    sqrtMaxPrice,
    liquidity,
    0 /* Up */
  );
  let consumedInAmount;
  let nextSqrtPrice;
  if (amountIn.gte(maxAmountIn)) {
    consumedInAmount = maxAmountIn;
    nextSqrtPrice = sqrtMaxPrice;
  } else {
    nextSqrtPrice = getNextSqrtPriceFromInput(
      sqrtPrice,
      liquidity,
      amountIn,
      false
    );
    consumedInAmount = amountIn;
  }
  const outputAmount = getAmountAFromLiquidityDeltaForConcentratedLiquidity(
    sqrtPrice,
    nextSqrtPrice,
    liquidity,
    1 /* Down */
  );
  const amountLeft = amountIn.sub(consumedInAmount);
  return {
    outputAmount,
    nextSqrtPrice,
    amountLeft
  };
}
function calculateAtoBFromAmountOutForConcentratedLiquidity(sqrtMinPrice, sqrtPrice, liquidity, amountOut) {
  const nextSqrtPrice = getNextSqrtPriceFromOutput(
    sqrtPrice,
    liquidity,
    amountOut,
    true
  );
  if (nextSqrtPrice.lt(sqrtMinPrice)) {
    throw new PriceRangeViolationError();
  }
  const inputAmount = getAmountAFromLiquidityDeltaForConcentratedLiquidity(
    nextSqrtPrice,
    sqrtPrice,
    liquidity,
    0 /* Up */
  );
  return {
    inputAmount,
    nextSqrtPrice
  };
}
function calculateBtoAFromAmountOutForConcentratedLiquidity(sqrtMaxPrice, sqrtPrice, liquidity, amountOut) {
  const nextSqrtPrice = getNextSqrtPriceFromOutput(
    sqrtPrice,
    liquidity,
    amountOut,
    false
  );
  if (nextSqrtPrice.gt(sqrtMaxPrice)) {
    throw new PriceRangeViolationError();
  }
  const inputAmount = getAmountBFromLiquidityDeltaForConcentratedLiquidity(
    sqrtPrice,
    nextSqrtPrice,
    liquidity,
    0 /* Up */
  );
  return {
    inputAmount,
    nextSqrtPrice
  };
}
function getReservesAmountForConcentratedLiquidity(sqrtPrice, sqrtMinPrice, sqrtMaxPrice, liquidity) {
  const reserveA = getAmountAFromLiquidityDeltaForConcentratedLiquidity(
    sqrtPrice,
    sqrtMaxPrice,
    liquidity,
    0 /* Up */
  );
  const reserveB = getAmountBFromLiquidityDeltaForConcentratedLiquidity(
    sqrtMinPrice,
    sqrtPrice,
    liquidity,
    0 /* Up */
  );
  return [reserveA, reserveB];
}
function getAmountBFromLiquidityDeltaForConcentratedLiquidity(lowerSqrtPrice, upperSqrtPrice, liquidity, rounding) {
  const deltaSqrtPrice = upperSqrtPrice.sub(lowerSqrtPrice);
  const prod = liquidity.mul(deltaSqrtPrice);
  const shift = SCALE_OFFSET * 2;
  if (rounding === 0 /* Up */) {
    const denominator = new BN8(1).ushln(shift);
    const result = prod.add(denominator.subn(1)).div(denominator);
    return result;
  } else {
    const result = prod.ushrn(shift);
    return result;
  }
}
function getAmountAFromLiquidityDeltaForConcentratedLiquidity(lowerSqrtPrice, upperSqrtPrice, liquidity, rounding) {
  const numerator1 = liquidity;
  const numerator2 = upperSqrtPrice.sub(lowerSqrtPrice);
  const denominator = lowerSqrtPrice.mul(upperSqrtPrice);
  if (denominator.lte(new BN8(0))) {
    throw new MathOverflowError("Denominator must be greater than zero");
  }
  const result = mulDiv(numerator1, numerator2, denominator, rounding);
  return result;
}
function getNextSqrtPriceFromInput(sqrtPrice, liquidity, amountIn, aForB) {
  if (sqrtPrice.lte(new BN8(0))) {
    throw new InvalidInputError("sqrtPrice must be greater than 0");
  }
  if (liquidity.lte(new BN8(0))) {
    throw new InvalidInputError("liquidity must be greater than 0");
  }
  if (aForB) {
    return getNextSqrtPriceFromAmountInARoundingUp(
      sqrtPrice,
      liquidity,
      amountIn
    );
  } else {
    return getNextSqrtPriceFromAmountInBRoundingDown(
      sqrtPrice,
      liquidity,
      amountIn
    );
  }
}
function getNextSqrtPriceFromOutput(sqrtPrice, liquidity, amountOut, aForB) {
  if (sqrtPrice.lte(new BN8(0))) {
    throw new InvalidInputError("sqrtPrice must be greater than 0");
  }
  if (liquidity.lte(new BN8(0))) {
    throw new InvalidInputError("liquidity must be greater than 0");
  }
  if (aForB) {
    return getNextSqrtPriceFromAmountOutBRoundingDown(
      sqrtPrice,
      liquidity,
      amountOut
    );
  } else {
    return getNextSqrtPriceFromAmountOutARoundingUp(
      sqrtPrice,
      liquidity,
      amountOut
    );
  }
}
function getNextSqrtPriceFromAmountInARoundingUp(sqrtPrice, liquidity, amount) {
  if (amount.isZero()) {
    return sqrtPrice;
  }
  const product = amount.mul(sqrtPrice);
  const denominator = liquidity.add(product);
  const result = mulDiv(liquidity, sqrtPrice, denominator, 0 /* Up */);
  return result;
}
function getNextSqrtPriceFromAmountOutARoundingUp(sqrtPrice, liquidity, amount) {
  if (amount.isZero()) {
    return sqrtPrice;
  }
  const product = amount.mul(sqrtPrice);
  const denominator = liquidity.sub(product);
  if (denominator.lte(new BN8(0))) {
    throw new MathOverflowError("Denominator is zero or negative");
  }
  return mulDiv(liquidity, sqrtPrice, denominator, 0 /* Up */);
}
function getNextSqrtPriceFromAmountInBRoundingDown(sqrtPrice, liquidity, amount) {
  const quotient = amount.shln(SCALE_OFFSET * 2).div(liquidity);
  const result = sqrtPrice.add(quotient);
  return result;
}
function getNextSqrtPriceFromAmountOutBRoundingDown(sqrtPrice, liquidity, amount) {
  const numerator = amount.shln(SCALE_OFFSET * 2);
  const quotient = numerator.add(liquidity).subn(1).div(liquidity);
  const result = sqrtPrice.sub(quotient);
  if (result.isNeg()) {
    throw new MathOverflowError("sqrt price cannot be negative");
  }
  return result;
}
function getLiquidityDeltaFromAmountAForConcentratedLiquidity(amountA, lowerSqrtPrice, upperSqrtPrice) {
  const product = amountA.mul(lowerSqrtPrice).mul(upperSqrtPrice);
  const denominator = upperSqrtPrice.sub(lowerSqrtPrice);
  return product.div(denominator);
}
function getLiquidityDeltaFromAmountBForConcentratedLiquidity(amountB, lowerSqrtPrice, upperSqrtPrice) {
  const denominator = upperSqrtPrice.sub(lowerSqrtPrice);
  const product = amountB.shln(128);
  return product.div(denominator);
}

// src/kit/math/liquidity/liquidityHandler.ts
var CompoundingLiquidityHandler = class {
  constructor(tokenAAmount, tokenBAmount, liquidity) {
    this.tokenAAmount = tokenAAmount;
    this.tokenBAmount = tokenBAmount;
    this.liquidity = liquidity;
  }
  getAmountsForModifyLiquidity(liquidityDelta, round) {
    return getAmountsForModifyForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount,
      this.liquidity,
      liquidityDelta,
      round
    );
  }
  calculateAtoBFromAmountIn(amountIn) {
    return calculateAtoBFromAmountInForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount,
      amountIn
    );
  }
  calculateBtoAFromAmountIn(amountIn) {
    return calculateBtoAFromAmountInForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount,
      amountIn
    );
  }
  calculateAtoBFromPartialAmountIn(amountIn) {
    return calculateAtoBFromPartialAmountInForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount,
      amountIn
    );
  }
  calculateBtoAFromPartialAmountIn(amountIn) {
    return calculateBtoAFromPartialAmountInForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount,
      amountIn
    );
  }
  calculateAtoBFromAmountOut(amountOut) {
    return calculateAtoBFromAmountOutForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount,
      amountOut
    );
  }
  calculateBtoAFromAmountOut(amountOut) {
    return calculateBtoAFromAmountOutForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount,
      amountOut
    );
  }
  getReservesAmount() {
    return getReservesAmountForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount
    );
  }
  getNextSqrtPrice(_nextSqrtPrice) {
    return getNextSqrtPriceForCompoundingLiquidity(
      this.tokenAAmount,
      this.tokenBAmount
    );
  }
  getMaxAmountIn(_tradeDirection) {
    return U64_MAX;
  }
};
var ConcentratedLiquidityHandler = class {
  constructor(sqrtMaxPrice, sqrtMinPrice, sqrtPrice, liquidity) {
    this.sqrtMaxPrice = sqrtMaxPrice;
    this.sqrtMinPrice = sqrtMinPrice;
    this.sqrtPrice = sqrtPrice;
    this.liquidity = liquidity;
  }
  getAmountsForModifyLiquidity(liquidityDelta, round) {
    return getAmountsForModifyForConcentratedLiquidity(
      this.sqrtPrice,
      this.sqrtMinPrice,
      this.sqrtMaxPrice,
      liquidityDelta,
      round
    );
  }
  calculateAtoBFromAmountIn(amountIn) {
    return calculateAtoBFromAmountInForConcentratedLiquidity(
      this.sqrtMinPrice,
      this.sqrtPrice,
      this.liquidity,
      amountIn
    );
  }
  calculateBtoAFromAmountIn(amountIn) {
    return calculateBtoAFromAmountInForConcentratedLiquidity(
      this.sqrtMaxPrice,
      this.sqrtPrice,
      this.liquidity,
      amountIn
    );
  }
  calculateAtoBFromPartialAmountIn(amountIn) {
    return calculateAtoBFromPartialAmountInForConcentratedLiquidity(
      this.sqrtMinPrice,
      this.sqrtPrice,
      this.liquidity,
      amountIn
    );
  }
  calculateBtoAFromPartialAmountIn(amountIn) {
    return calculateBtoAFromPartialAmountInForConcentratedLiquidity(
      this.sqrtMaxPrice,
      this.sqrtPrice,
      this.liquidity,
      amountIn
    );
  }
  calculateAtoBFromAmountOut(amountOut) {
    return calculateAtoBFromAmountOutForConcentratedLiquidity(
      this.sqrtMinPrice,
      this.sqrtPrice,
      this.liquidity,
      amountOut
    );
  }
  calculateBtoAFromAmountOut(amountOut) {
    return calculateBtoAFromAmountOutForConcentratedLiquidity(
      this.sqrtMaxPrice,
      this.sqrtPrice,
      this.liquidity,
      amountOut
    );
  }
  getReservesAmount() {
    return getReservesAmountForConcentratedLiquidity(
      this.sqrtPrice,
      this.sqrtMinPrice,
      this.sqrtMaxPrice,
      this.liquidity
    );
  }
  // it does nothing because next_sqrt_price is computed by swap-path + rounding direction.
  getNextSqrtPrice(nextSqrtPrice) {
    return nextSqrtPrice;
  }
  getMaxAmountIn(tradeDirection) {
    let amount;
    if (tradeDirection === 0 /* AtoB */) {
      amount = getAmountAFromLiquidityDeltaForConcentratedLiquidity(
        this.sqrtMinPrice,
        this.sqrtPrice,
        this.liquidity,
        0 /* Up */
      );
    } else {
      amount = getAmountBFromLiquidityDeltaForConcentratedLiquidity(
        this.sqrtPrice,
        this.sqrtMaxPrice,
        this.liquidity,
        0 /* Up */
      );
    }
    return amount.gt(U64_MAX) ? U64_MAX : amount;
  }
};
function getLiquidityHandler(poolState) {
  const collectFeeMode = poolState.collectFeeMode;
  if (collectFeeMode === 2 /* Compounding */) {
    return new CompoundingLiquidityHandler(
      poolState.tokenAAmount,
      poolState.tokenBAmount,
      poolState.liquidity
    );
  } else {
    return new ConcentratedLiquidityHandler(
      poolState.sqrtMaxPrice,
      poolState.sqrtMinPrice,
      poolState.sqrtPrice,
      poolState.liquidity
    );
  }
}
function getLiquidityDeltaFromAmountA(amountA, sqrtPrice, sqrtMaxPrice, collectFeeMode, tokenAAmount, liquidity) {
  if (collectFeeMode === 2 /* Compounding */) {
    if (tokenAAmount && liquidity) {
      return getLiquidityDeltaFromAmountAForCompoundingLiquidity(
        amountA,
        tokenAAmount,
        liquidity
      );
    }
    return getPoolCreationLiquidityDeltaFromAmountAForCompoundingLiquidity(
      amountA,
      sqrtPrice
    );
  }
  return getLiquidityDeltaFromAmountAForConcentratedLiquidity(
    amountA,
    sqrtPrice,
    sqrtMaxPrice
  );
}
function getLiquidityDeltaFromAmountB(amountB, sqrtMinPrice, sqrtPrice, collectFeeMode, tokenBAmount, liquidity) {
  if (collectFeeMode === 2 /* Compounding */) {
    if (tokenBAmount && liquidity) {
      return getLiquidityDeltaFromAmountBForCompoundingLiquidity(
        amountB,
        tokenBAmount,
        liquidity
      );
    }
    return getPoolCreationLiquidityDeltaFromAmountBForCompoundingLiquidity(
      amountB,
      sqrtPrice
    );
  }
  return getLiquidityDeltaFromAmountBForConcentratedLiquidity(
    amountB,
    sqrtMinPrice,
    sqrtPrice
  );
}
function getAmountAFromLiquidityDelta(sqrtPrice, sqrtMaxPrice, liquidityDelta, rounding, collectFeeMode, tokenAAmount, liquidity) {
  if (collectFeeMode === 2 /* Compounding */) {
    if (tokenAAmount && liquidity) {
      return getAmountAFromLiquidityDeltaForCompoundingLiquidity(
        liquidityDelta,
        tokenAAmount,
        liquidity,
        rounding
      );
    }
    return getPoolCreationAmountAFromLiquidityDeltaForCompoundingLiquidity(
      sqrtPrice,
      liquidityDelta
    );
  }
  return getAmountAFromLiquidityDeltaForConcentratedLiquidity(
    sqrtPrice,
    sqrtMaxPrice,
    liquidityDelta,
    rounding
  );
}
function getAmountBFromLiquidityDelta(sqrtMinPrice, sqrtPrice, liquidityDelta, rounding, collectFeeMode, tokenBAmount, liquidity) {
  if (collectFeeMode === 2 /* Compounding */) {
    if (tokenBAmount && liquidity) {
      return getAmountBFromLiquidityDeltaForCompoundingLiquidity(
        liquidityDelta,
        tokenBAmount,
        liquidity,
        rounding
      );
    }
    return getPoolCreationAmountBFromLiquidityDeltaForCompoundingLiquidity(
      sqrtPrice,
      liquidityDelta
    );
  }
  return getAmountBFromLiquidityDeltaForConcentratedLiquidity(
    sqrtMinPrice,
    sqrtPrice,
    liquidityDelta,
    rounding
  );
}

// src/kit/math/poolFees/baseFee/rateLimiter.ts
import BN10 from "bn.js";

// src/kit/math/feeMath.ts
import BN9 from "bn.js";
function toNumerator(bps, feeDenominator) {
  const numerator = mulDiv(
    bps,
    feeDenominator,
    new BN9(BASIS_POINT_MAX),
    1 /* Down */
  );
  return numerator;
}
function getFeeMode(collectFeeMode, tradeDirection, hasReferral) {
  let feesOnInput;
  let feesOnTokenA;
  switch (collectFeeMode) {
    case 0 /* BothToken */:
      switch (tradeDirection) {
        case 0 /* AtoB */:
          feesOnInput = false;
          feesOnTokenA = false;
          break;
        case 1 /* BtoA */:
          feesOnInput = false;
          feesOnTokenA = true;
          break;
      }
      break;
    case 1 /* OnlyB */:
      switch (tradeDirection) {
        case 0 /* AtoB */:
          feesOnInput = false;
          feesOnTokenA = false;
          break;
        case 1 /* BtoA */:
          feesOnInput = true;
          feesOnTokenA = false;
          break;
      }
      break;
    case 2 /* Compounding */:
      switch (tradeDirection) {
        case 0 /* AtoB */:
          feesOnInput = false;
          feesOnTokenA = false;
          break;
        case 1 /* BtoA */:
          feesOnInput = true;
          feesOnTokenA = false;
          break;
      }
      break;
    default:
      throw new InvalidCollectFeeModeError();
  }
  return {
    feesOnInput,
    feesOnTokenA,
    hasReferral
  };
}
function getTotalFeeNumerator(poolFees, baseFeeNumerator, maxFeeNumerator) {
  let dynamicFeeNumerator = new BN9(0);
  if (poolFees.dynamicFee.initialized !== 0) {
    dynamicFeeNumerator = getDynamicFeeNumerator(
      poolFees.dynamicFee.volatilityAccumulator,
      new BN9(poolFees.dynamicFee.binStep),
      new BN9(poolFees.dynamicFee.variableFeeControl)
    );
  }
  const totalFeeNumerator = dynamicFeeNumerator.add(baseFeeNumerator);
  return BN9.min(totalFeeNumerator, maxFeeNumerator);
}
function getTotalTradingFeeFromIncludedFeeAmount(poolFees, currentPoint, activationPoint, includedFeeAmount, tradeDirection, maxFeeNumerator, initSqrtPrice, currentSqrtPrice) {
  const baseFeeHandler = getBaseFeeHandlerFromPodAlignedData(
    poolFees.baseFee.baseFeeInfo.data
  );
  const baseFeeNumerator = baseFeeHandler.getBaseFeeNumeratorFromIncludedFeeAmount(
    currentPoint,
    activationPoint,
    tradeDirection,
    includedFeeAmount,
    initSqrtPrice,
    currentSqrtPrice
  );
  return getTotalFeeNumerator(poolFees, baseFeeNumerator, maxFeeNumerator);
}
function getTotalTradingFeeFromExcludedFeeAmount(poolFees, currentPoint, activationPoint, excludedFeeAmount, tradeDirection, maxFeeNumerator, initSqrtPrice, currentSqrtPrice) {
  const baseFeeHandler = getBaseFeeHandlerFromPodAlignedData(
    poolFees.baseFee.baseFeeInfo.data
  );
  const baseFeeNumerator = baseFeeHandler.getBaseFeeNumeratorFromExcludedFeeAmount(
    currentPoint,
    activationPoint,
    tradeDirection,
    excludedFeeAmount,
    initSqrtPrice,
    currentSqrtPrice
  );
  return getTotalFeeNumerator(poolFees, baseFeeNumerator, maxFeeNumerator);
}
function splitFees(poolFees, feeAmount, hasReferral) {
  let protocolFee = mulDiv(
    feeAmount,
    new BN9(poolFees.protocolFeePercent),
    new BN9(100),
    1 /* Down */
  );
  let tradingFee = feeAmount.sub(protocolFee);
  const compoundingFeeBps = new BN9(poolFees.compoundingFeeBps);
  let compoundingFee;
  let claimingFee;
  if (compoundingFeeBps.gt(new BN9(0))) {
    compoundingFee = mulDiv(
      tradingFee,
      compoundingFeeBps,
      new BN9(BASIS_POINT_MAX),
      1 /* Down */
    );
    claimingFee = tradingFee.sub(compoundingFee);
  } else {
    compoundingFee = new BN9(0);
    claimingFee = tradingFee;
  }
  let referralFee;
  if (hasReferral) {
    referralFee = mulDiv(
      protocolFee,
      new BN9(poolFees.referralFeePercent),
      new BN9(100),
      1 /* Down */
    );
  } else {
    referralFee = new BN9(0);
  }
  protocolFee = protocolFee.sub(referralFee);
  return {
    claimingFee,
    compoundingFee,
    protocolFee,
    referralFee
  };
}
function getFeeOnAmount(poolFees, amount, tradeFeeNumerator, hasReferral) {
  const { excludedFeeAmount, tradingFee } = getExcludedFeeAmount(
    tradeFeeNumerator,
    amount
  );
  const splitFeesResult = splitFees(poolFees, tradingFee, hasReferral);
  return {
    amount: excludedFeeAmount,
    claimingFee: splitFeesResult.claimingFee,
    compoundingFee: splitFeesResult.compoundingFee,
    protocolFee: splitFeesResult.protocolFee,
    referralFee: splitFeesResult.referralFee
  };
}
function getExcludedFeeAmount(tradeFeeNumerator, includedFeeAmount) {
  const tradingFee = mulDiv(
    includedFeeAmount,
    tradeFeeNumerator,
    new BN9(FEE_DENOMINATOR),
    0 /* Up */
  );
  const excludedFeeAmount = includedFeeAmount.sub(tradingFee);
  return { excludedFeeAmount, tradingFee };
}
function getIncludedFeeAmount(tradeFeeNumerator, excludedFeeAmount) {
  const denominator = new BN9(FEE_DENOMINATOR).sub(tradeFeeNumerator);
  if (denominator.isZero() || denominator.isNeg()) {
    throw new InvalidFeeError("Fee denominator must be positive and non-zero");
  }
  const includedFeeAmount = mulDiv(
    excludedFeeAmount,
    new BN9(FEE_DENOMINATOR),
    denominator,
    0 /* Up */
  );
  const feeAmount = includedFeeAmount.sub(excludedFeeAmount);
  return { includedFeeAmount, feeAmount };
}
function getMaxFeeNumerator(feeVersion) {
  switch (feeVersion) {
    case 0:
      return new BN9(MAX_FEE_NUMERATOR_V0);
    case 1:
      return new BN9(MAX_FEE_NUMERATOR_V1);
    default:
      throw new InvalidPoolVersionError();
  }
}

// src/kit/math/poolFees/baseFee/rateLimiter.ts
function isZeroRateLimiter(referenceAmount, maxLimiterDuration, maxFeeBps, feeIncrementBps) {
  return referenceAmount.isZero() && maxLimiterDuration === 0 && maxFeeBps === 0 && feeIncrementBps === 0;
}
function isRateLimiterApplied2(referenceAmount, maxLimiterDuration, maxFeeBps, feeIncrementBps, currentPoint, activationPoint, tradeDirection) {
  if (isZeroRateLimiter(
    referenceAmount,
    maxLimiterDuration,
    maxFeeBps,
    feeIncrementBps
  )) {
    return false;
  }
  if (tradeDirection === 0 /* AtoB */) {
    return false;
  }
  if (currentPoint.lt(activationPoint)) {
    return false;
  }
  const lastEffectiveRateLimiterPoint = activationPoint.add(
    new BN10(maxLimiterDuration)
  );
  if (currentPoint.gt(lastEffectiveRateLimiterPoint)) {
    return false;
  }
  return true;
}
function getMaxIndex(maxFeeBps, cliffFeeNumerator, feeIncrementBps) {
  const maxFeeNumerator = toNumerator(
    new BN10(maxFeeBps),
    new BN10(FEE_DENOMINATOR)
  );
  if (cliffFeeNumerator.gt(maxFeeNumerator)) {
    throw new InvalidInputError(
      "cliffFeeNumerator cannot be greater than maxFeeNumerator"
    );
  }
  const deltaNumerator = maxFeeNumerator.sub(cliffFeeNumerator);
  const feeIncrementNumerator = toNumerator(
    new BN10(feeIncrementBps),
    new BN10(FEE_DENOMINATOR)
  );
  if (feeIncrementNumerator.isZero()) {
    throw new InvalidInputError("feeIncrementNumerator cannot be zero");
  }
  const maxIndex = deltaNumerator.div(feeIncrementNumerator);
  return maxIndex;
}
function getFeeNumeratorFromIncludedFeeAmount(inputAmount, referenceAmount, cliffFeeNumerator, maxFeeBps, feeIncrementBps) {
  if (inputAmount.lte(referenceAmount)) {
    return cliffFeeNumerator;
  } else {
    const maxFeeNumerator = toNumerator(
      new BN10(maxFeeBps),
      new BN10(FEE_DENOMINATOR)
    );
    const c = cliffFeeNumerator;
    const inputMinusRef = inputAmount.sub(referenceAmount);
    const a = inputMinusRef.div(referenceAmount);
    const b = inputMinusRef.mod(referenceAmount);
    const maxIndex = getMaxIndex(maxFeeBps, cliffFeeNumerator, feeIncrementBps);
    const i = toNumerator(new BN10(feeIncrementBps), new BN10(FEE_DENOMINATOR));
    const x0 = referenceAmount;
    const one = new BN10(1);
    const two = new BN10(2);
    let tradingFeeNumerator;
    if (a.lt(maxIndex)) {
      const numerator1 = c.add(c.mul(a)).add(i.mul(a).mul(a.add(one)).div(two));
      const numerator2 = c.add(i.mul(a.add(one)));
      const firstFee = x0.mul(numerator1);
      const secondFee = b.mul(numerator2);
      tradingFeeNumerator = firstFee.add(secondFee);
    } else {
      const numerator1 = c.add(c.mul(maxIndex)).add(i.mul(maxIndex).mul(maxIndex.add(one)).div(two));
      const numerator2 = maxFeeNumerator;
      const firstFee = x0.mul(numerator1);
      const d = a.sub(maxIndex);
      const leftAmount = d.mul(x0).add(b);
      const secondFee = leftAmount.mul(numerator2);
      tradingFeeNumerator = firstFee.add(secondFee);
    }
    const denominator = new BN10(FEE_DENOMINATOR);
    const tradingFee = tradingFeeNumerator.add(denominator).sub(one).div(denominator);
    const numerator = mulDiv(tradingFee, denominator, inputAmount, 0 /* Up */);
    if (numerator.gt(new BN10(U64_MAX))) {
      throw new MathOverflowError("Numerator does not fit in u64");
    }
    return numerator;
  }
}
function getExcludedFeeAmountFromIncludedFeeAmount(includedFeeAmount, referenceAmount, cliffFeeNumerator, maxFeeBps, feeIncrementBps) {
  const feeNumerator = getFeeNumeratorFromIncludedFeeAmount(
    includedFeeAmount,
    referenceAmount,
    cliffFeeNumerator,
    maxFeeBps,
    feeIncrementBps
  );
  const { excludedFeeAmount } = getExcludedFeeAmount(
    feeNumerator,
    includedFeeAmount
  );
  return excludedFeeAmount;
}
function getCheckedAmounts(referenceAmount, cliffFeeNumerator, maxFeeBps, feeIncrementBps) {
  const maxIndex = getMaxIndex(maxFeeBps, cliffFeeNumerator, feeIncrementBps);
  const x0 = referenceAmount;
  const one = new BN10(1);
  const maxIndexInputAmount = maxIndex.add(one).mul(x0);
  if (maxIndexInputAmount.lte(U64_MAX)) {
    const checkedIncludedFeeAmount = maxIndexInputAmount;
    const checkedExcludedFeeAmount = getExcludedFeeAmountFromIncludedFeeAmount(
      checkedIncludedFeeAmount,
      referenceAmount,
      cliffFeeNumerator,
      maxFeeBps,
      feeIncrementBps
    );
    return {
      checkedExcludedFeeAmount,
      checkedIncludedFeeAmount,
      isOverflow: false
    };
  } else {
    const checkedIncludedFeeAmount = U64_MAX;
    const checkedExcludedFeeAmount = getExcludedFeeAmountFromIncludedFeeAmount(
      checkedIncludedFeeAmount,
      referenceAmount,
      cliffFeeNumerator,
      maxFeeBps,
      feeIncrementBps
    );
    return {
      checkedExcludedFeeAmount,
      checkedIncludedFeeAmount,
      isOverflow: true
    };
  }
}
function getFeeNumeratorFromExcludedFeeAmount(excludedFeeAmount, referenceAmount, cliffFeeNumerator, maxFeeBps, feeIncrementBps) {
  const excludedFeeReferenceAmount = getExcludedFeeAmountFromIncludedFeeAmount(
    referenceAmount,
    referenceAmount,
    cliffFeeNumerator,
    maxFeeBps,
    feeIncrementBps
  );
  if (excludedFeeAmount.lte(excludedFeeReferenceAmount)) {
    return cliffFeeNumerator;
  }
  const { checkedExcludedFeeAmount, checkedIncludedFeeAmount, isOverflow } = getCheckedAmounts(
    referenceAmount,
    cliffFeeNumerator,
    maxFeeBps,
    feeIncrementBps
  );
  if (excludedFeeAmount.eq(checkedExcludedFeeAmount)) {
    return getFeeNumeratorFromIncludedFeeAmount(
      checkedIncludedFeeAmount,
      referenceAmount,
      cliffFeeNumerator,
      maxFeeBps,
      feeIncrementBps
    );
  }
  let includedFeeAmount;
  if (excludedFeeAmount.lt(checkedExcludedFeeAmount)) {
    const TWO = new BN10(2);
    const FOUR = new BN10(4);
    const i = toNumerator(new BN10(feeIncrementBps), new BN10(FEE_DENOMINATOR));
    const x0 = referenceAmount;
    const d = new BN10(FEE_DENOMINATOR);
    const c = cliffFeeNumerator;
    const ex = excludedFeeAmount;
    const x = i;
    const y = TWO.mul(d).mul(x0).add(i.mul(x0)).sub(TWO.mul(c).mul(x0));
    const z = TWO.mul(ex).mul(d).mul(x0);
    const discriminant = y.mul(y).sub(FOUR.mul(x).mul(z));
    const sqrtDiscriminant = sqrt(discriminant);
    includedFeeAmount = y.sub(sqrtDiscriminant).div(TWO.mul(x));
    const numerator = y.sub(sqrtDiscriminant);
    const denominator = TWO.mul(x);
    includedFeeAmount = numerator.div(denominator);
    const aPlusOne = includedFeeAmount.div(x0);
    const firstExcludedFeeAmount = getExcludedFeeAmountFromIncludedFeeAmount(
      includedFeeAmount,
      referenceAmount,
      cliffFeeNumerator,
      maxFeeBps,
      feeIncrementBps
    );
    const excludedFeeRemainingAmount = excludedFeeAmount.sub(
      firstExcludedFeeAmount
    );
    const remainingAmountFeeNumerator = c.add(i.mul(aPlusOne));
    const { includedFeeAmount: includedFeeRemainingAmount } = getIncludedFeeAmount(
      remainingAmountFeeNumerator,
      excludedFeeRemainingAmount
    );
    includedFeeAmount = includedFeeAmount.add(includedFeeRemainingAmount);
  } else {
    if (isOverflow) {
      throw new MathOverflowError(
        "Math overflow in getFeeNumeratorFromExcludedFeeAmount"
      );
    }
    const excludedFeeRemainingAmount = excludedFeeAmount.sub(
      checkedExcludedFeeAmount
    );
    const maxFeeNumerator = toNumerator(
      new BN10(maxFeeBps),
      new BN10(FEE_DENOMINATOR)
    );
    const { includedFeeAmount: includedFeeRemainingAmount } = getIncludedFeeAmount(maxFeeNumerator, excludedFeeRemainingAmount);
    includedFeeAmount = includedFeeRemainingAmount.add(
      checkedIncludedFeeAmount
    );
  }
  const tradingFee = includedFeeAmount.sub(excludedFeeAmount);
  const feeNumerator = mulDiv(
    tradingFee,
    new BN10(FEE_DENOMINATOR),
    includedFeeAmount,
    0 /* Up */
  );
  if (feeNumerator.lt(cliffFeeNumerator)) {
    throw new InvalidInputError("feeNumerator is less than cliffFeeNumerator");
  }
  return feeNumerator;
}

// src/kit/math/poolFees/baseFee/feeTimeScheduler.ts
import BN12 from "bn.js";

// src/kit/math/poolFees/baseFee/feeScheduler.ts
import BN11 from "bn.js";
function getFeeNumeratorOnLinearFeeScheduler(cliffFeeNumerator, reductionFactor, period) {
  const reduction = new BN11(period).mul(reductionFactor);
  return cliffFeeNumerator.sub(reduction);
}
function getFeeNumeratorOnExponentialFeeScheduler(cliffFeeNumerator, reductionFactor, period) {
  if (period === 0) {
    return cliffFeeNumerator;
  }
  const basisPointMax = new BN11(BASIS_POINT_MAX);
  const bps = new BN11(reductionFactor).shln(64).div(basisPointMax);
  const base = ONE_Q64.sub(bps);
  const result = pow(base, new BN11(period));
  return cliffFeeNumerator.mul(result).div(ONE_Q64);
}

// src/kit/math/poolFees/baseFee/feeTimeScheduler.ts
function getFeeTimeBaseFeeNumeratorByPeriod(cliffFeeNumerator, numberOfPeriod, period, reductionFactor, feeTimeSchedulerMode) {
  const periodValue = BN12.min(period, new BN12(numberOfPeriod));
  const periodNumber = periodValue.toNumber();
  if (periodNumber > U16_MAX) {
    throw new MathOverflowError();
  }
  switch (feeTimeSchedulerMode) {
    case 0 /* FeeTimeSchedulerLinear */: {
      const feeNumerator = getFeeNumeratorOnLinearFeeScheduler(
        cliffFeeNumerator,
        reductionFactor,
        periodNumber
      );
      return feeNumerator;
    }
    case 1 /* FeeTimeSchedulerExponential */: {
      const feeNumerator = getFeeNumeratorOnExponentialFeeScheduler(
        cliffFeeNumerator,
        reductionFactor,
        periodNumber
      );
      return feeNumerator;
    }
    default:
      throw new InvalidBaseFeeModeError("Invalid fee time scheduler mode");
  }
}
function getFeeTimeBaseFeeNumerator(cliffFeeNumerator, numberOfPeriod, periodFrequency, reductionFactor, feeTimeSchedulerMode, currentPoint, activationPoint) {
  if (periodFrequency.isZero()) {
    return cliffFeeNumerator;
  }
  let period;
  if (currentPoint.lt(activationPoint)) {
    period = new BN12(numberOfPeriod);
  } else {
    period = currentPoint.sub(activationPoint).div(periodFrequency);
    if (period.gt(new BN12(numberOfPeriod))) {
      period = new BN12(numberOfPeriod);
    }
  }
  return getFeeTimeBaseFeeNumeratorByPeriod(
    cliffFeeNumerator,
    numberOfPeriod,
    period,
    reductionFactor,
    feeTimeSchedulerMode
  );
}

// src/kit/math/poolFees/baseFee/feeMarketCapScheduler.ts
import BN13 from "bn.js";
function getFeeMarketCapBaseFeeNumeratorByPeriod(cliffFeeNumerator, numberOfPeriod, period, reductionFactor, feeMarketCapSchedulerMode) {
  const periodValue = BN13.min(period, new BN13(numberOfPeriod));
  const periodNumber = periodValue.toNumber();
  switch (feeMarketCapSchedulerMode) {
    case 3 /* FeeMarketCapSchedulerLinear */: {
      const feeNumerator = getFeeNumeratorOnLinearFeeScheduler(
        cliffFeeNumerator,
        reductionFactor,
        periodNumber
      );
      return feeNumerator;
    }
    case 4 /* FeeMarketCapSchedulerExponential */: {
      const feeNumerator = getFeeNumeratorOnExponentialFeeScheduler(
        cliffFeeNumerator,
        reductionFactor,
        periodNumber
      );
      return feeNumerator;
    }
    default:
      throw new InvalidBaseFeeModeError(
        "Invalid fee market cap scheduler mode"
      );
  }
}
function getFeeMarketCapBaseFeeNumerator(cliffFeeNumerator, numberOfPeriod, sqrtPriceStepBps, schedulerExpirationDuration, reductionFactor, feeMarketCapSchedulerMode, currentPoint, activationPoint, initSqrtPrice, currentSqrtPrice) {
  const schedulerExpirationPoint = activationPoint.add(
    new BN13(schedulerExpirationDuration)
  );
  let period;
  if (currentPoint.gt(schedulerExpirationPoint) || currentPoint.lt(activationPoint)) {
    period = new BN13(numberOfPeriod);
  } else {
    if (currentSqrtPrice.lte(initSqrtPrice)) {
      period = new BN13(0);
    } else {
      const maxBps = new BN13(BASIS_POINT_MAX);
      const stepBps = new BN13(sqrtPriceStepBps);
      const passedPeriod = currentSqrtPrice.sub(initSqrtPrice).mul(maxBps).div(initSqrtPrice).div(stepBps);
      if (passedPeriod.gt(new BN13(numberOfPeriod))) {
        period = new BN13(numberOfPeriod);
      } else {
        period = passedPeriod;
      }
    }
    period = BN13.min(period, new BN13(numberOfPeriod));
  }
  return getFeeMarketCapBaseFeeNumeratorByPeriod(
    cliffFeeNumerator,
    numberOfPeriod,
    period,
    reductionFactor,
    feeMarketCapSchedulerMode
  );
}

// src/kit/math/poolFees/baseFee/baseFeesHandler.ts
var FeeRateLimiter = class {
  constructor(cliffFeeNumerator, feeIncrementBps, maxFeeBps, maxLimiterDuration, referenceAmount) {
    this.cliffFeeNumerator = cliffFeeNumerator;
    this.feeIncrementBps = feeIncrementBps;
    this.maxFeeBps = maxFeeBps;
    this.maxLimiterDuration = maxLimiterDuration;
    this.referenceAmount = referenceAmount;
  }
  getBaseFeeNumeratorFromIncludedFeeAmount(currentPoint, activationPoint, tradeDirection, includedFeeAmount, _initSqrtPrice, _currentSqrtPrice) {
    if (isRateLimiterApplied2(
      this.referenceAmount,
      this.maxLimiterDuration,
      this.maxFeeBps,
      this.feeIncrementBps,
      currentPoint,
      activationPoint,
      tradeDirection
    )) {
      return getFeeNumeratorFromIncludedFeeAmount(
        includedFeeAmount,
        this.referenceAmount,
        this.cliffFeeNumerator,
        this.maxFeeBps,
        this.feeIncrementBps
      );
    } else {
      return this.cliffFeeNumerator;
    }
  }
  getBaseFeeNumeratorFromExcludedFeeAmount(currentPoint, activationPoint, tradeDirection, excludedFeeAmount, _initSqrtPrice, _currentSqrtPrice) {
    if (isRateLimiterApplied2(
      this.referenceAmount,
      this.maxLimiterDuration,
      this.maxFeeBps,
      this.feeIncrementBps,
      currentPoint,
      activationPoint,
      tradeDirection
    )) {
      return getFeeNumeratorFromExcludedFeeAmount(
        excludedFeeAmount,
        this.referenceAmount,
        this.cliffFeeNumerator,
        this.maxFeeBps,
        this.feeIncrementBps
      );
    } else {
      return this.cliffFeeNumerator;
    }
  }
};
var FeeTimeScheduler = class {
  constructor(cliffFeeNumerator, numberOfPeriod, periodFrequency, reductionFactor, feeTimeSchedulerMode) {
    this.cliffFeeNumerator = cliffFeeNumerator;
    this.numberOfPeriod = numberOfPeriod;
    this.periodFrequency = periodFrequency;
    this.reductionFactor = reductionFactor;
    this.feeTimeSchedulerMode = feeTimeSchedulerMode;
  }
  getBaseFeeNumeratorFromIncludedFeeAmount(currentPoint, activationPoint, _tradeDirection, _includedFeeAmount, _initSqrtPrice, _currentSqrtPrice) {
    return getFeeTimeBaseFeeNumerator(
      this.cliffFeeNumerator,
      this.numberOfPeriod,
      this.periodFrequency,
      this.reductionFactor,
      this.feeTimeSchedulerMode,
      currentPoint,
      activationPoint
    );
  }
  getBaseFeeNumeratorFromExcludedFeeAmount(currentPoint, activationPoint, _tradeDirection, _excludedFeeAmount, _initSqrtPrice, _currentSqrtPrice) {
    return getFeeTimeBaseFeeNumerator(
      this.cliffFeeNumerator,
      this.numberOfPeriod,
      this.periodFrequency,
      this.reductionFactor,
      this.feeTimeSchedulerMode,
      currentPoint,
      activationPoint
    );
  }
};
var FeeMarketCapScheduler = class {
  constructor(cliffFeeNumerator, numberOfPeriod, sqrtPriceStepBps, schedulerExpirationDuration, reductionFactor, feeMarketCapSchedulerMode) {
    this.cliffFeeNumerator = cliffFeeNumerator;
    this.numberOfPeriod = numberOfPeriod;
    this.sqrtPriceStepBps = sqrtPriceStepBps;
    this.schedulerExpirationDuration = schedulerExpirationDuration;
    this.reductionFactor = reductionFactor;
    this.feeMarketCapSchedulerMode = feeMarketCapSchedulerMode;
  }
  getBaseFeeNumeratorFromIncludedFeeAmount(currentPoint, activationPoint, _tradeDirection, _includedFeeAmount, initSqrtPrice, currentSqrtPrice) {
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
      currentSqrtPrice
    );
  }
  getBaseFeeNumeratorFromExcludedFeeAmount(currentPoint, activationPoint, _tradeDirection, _excludedFeeAmount, initSqrtPrice, currentSqrtPrice) {
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
      currentSqrtPrice
    );
  }
};
function getBaseFeeHandlerFromPodAlignedData(rawData) {
  const poolFees = decodePoolFeeData(rawData);
  const baseFeeMode = poolFees.baseFeeMode;
  switch (baseFeeMode) {
    case 0 /* FeeTimeSchedulerLinear */:
    case 1 /* FeeTimeSchedulerExponential */: {
      const timeScheduler = poolFees;
      return new FeeTimeScheduler(
        timeScheduler.cliffFeeNumerator,
        timeScheduler.numberOfPeriod,
        timeScheduler.periodFrequency,
        timeScheduler.reductionFactor,
        timeScheduler.baseFeeMode
      );
    }
    case 2 /* RateLimiter */: {
      const rateLimiter = poolFees;
      return new FeeRateLimiter(
        rateLimiter.cliffFeeNumerator,
        rateLimiter.feeIncrementBps,
        rateLimiter.maxFeeBps,
        rateLimiter.maxLimiterDuration,
        rateLimiter.referenceAmount
      );
    }
    case 3 /* FeeMarketCapSchedulerLinear */:
    case 4 /* FeeMarketCapSchedulerExponential */: {
      const marketCapScheduler = poolFees;
      return new FeeMarketCapScheduler(
        marketCapScheduler.cliffFeeNumerator,
        marketCapScheduler.numberOfPeriod,
        marketCapScheduler.sqrtPriceStepBps,
        marketCapScheduler.schedulerExpirationDuration,
        marketCapScheduler.reductionFactor,
        marketCapScheduler.baseFeeMode
      );
    }
    default:
      throw new InvalidBaseFeeModeError();
  }
}

// src/kit/math/poolFees/dynamicFee.ts
import BN14 from "bn.js";
function getDynamicFeeNumerator(volatilityAccumulator, binStep, variableFeeControl) {
  const squareVfaBin = volatilityAccumulator.mul(new BN14(binStep)).pow(new BN14(2));
  const vFee = variableFeeControl.mul(squareVfaBin);
  return vFee.add(new BN14(DYNAMIC_FEE_ROUNDING_OFFSET)).div(new BN14(DYNAMIC_FEE_SCALING_FACTOR));
}

// src/kit/math/swapQuote.ts
import BN17 from "bn.js";

// src/kit/math/transferFees.ts
import BN15 from "bn.js";
import {
  calculateFee,
  getEpochFee,
  getTransferFeeConfig,
  MAX_FEE_BASIS_POINTS
} from "@solana/spl-token";
function calculatePreFeeAmount(transferFee, postFeeAmount) {
  if (postFeeAmount.isZero()) {
    return new BN15(0);
  }
  if (transferFee.transferFeeBasisPoints === 0) {
    return postFeeAmount;
  }
  const maximumFee = new BN15(transferFee.maximumFee.toString());
  if (transferFee.transferFeeBasisPoints === MAX_FEE_BASIS_POINTS) {
    return postFeeAmount.add(maximumFee);
  }
  const oneInBasisPoints = new BN15(MAX_FEE_BASIS_POINTS);
  const numerator = postFeeAmount.mul(oneInBasisPoints);
  const denominator = oneInBasisPoints.sub(
    new BN15(transferFee.transferFeeBasisPoints)
  );
  const rawPreFeeAmount = numerator.add(denominator).sub(new BN15(1)).div(denominator);
  if (rawPreFeeAmount.sub(postFeeAmount).gte(maximumFee)) {
    return postFeeAmount.add(maximumFee);
  }
  return rawPreFeeAmount;
}
function calculateInverseFee(transferFee, postFeeAmount) {
  const preFeeAmount = calculatePreFeeAmount(transferFee, postFeeAmount);
  return new BN15(
    calculateFee(transferFee, BigInt(preFeeAmount.toString())).toString()
  );
}
function calculateTransferFeeIncludedAmount(transferFeeExcludedAmount, mint, currentEpoch) {
  if (transferFeeExcludedAmount.isZero()) {
    return {
      amount: new BN15(0),
      transferFee: new BN15(0)
    };
  }
  const transferFeeConfig = getTransferFeeConfig(mint);
  if (transferFeeConfig === null) {
    return {
      amount: transferFeeExcludedAmount,
      transferFee: new BN15(0)
    };
  }
  const epochFee = getEpochFee(transferFeeConfig, BigInt(currentEpoch));
  const transferFee = epochFee.transferFeeBasisPoints === MAX_FEE_BASIS_POINTS ? new BN15(epochFee.maximumFee.toString()) : calculateInverseFee(epochFee, transferFeeExcludedAmount);
  return {
    amount: transferFeeExcludedAmount.add(transferFee),
    transferFee
  };
}
function calculateTransferFeeExcludedAmount(transferFeeIncludedAmount, mint, currentEpoch) {
  const transferFeeConfig = getTransferFeeConfig(mint);
  if (transferFeeConfig === null) {
    return {
      amount: transferFeeIncludedAmount,
      transferFee: new BN15(0)
    };
  }
  const transferFeeIncludedAmountN = BigInt(
    transferFeeIncludedAmount.toString()
  );
  const transferFee = calculateFee(
    getEpochFee(transferFeeConfig, BigInt(currentEpoch)),
    transferFeeIncludedAmountN
  );
  return {
    amount: new BN15((transferFeeIncludedAmountN - transferFee).toString()),
    transferFee: new BN15(transferFee.toString())
  };
}

// src/kit/math/support.ts
import BN16 from "bn.js";
import Decimal2 from "decimal.js";
function isSwapEnabled(pool, currentPoint) {
  return pool.poolStatus === 0 /* Enable */ && currentPoint.gte(pool.activationPoint);
}
function getAmountWithSlippage(amount, slippageBps, swapMode) {
  if (slippageBps <= 0) {
    return amount;
  }
  if (swapMode === 2 /* ExactOut */) {
    return amount.mul(new BN16(BASIS_POINT_MAX + slippageBps)).div(new BN16(BASIS_POINT_MAX));
  }
  return amount.mul(new BN16(BASIS_POINT_MAX - slippageBps)).div(new BN16(BASIS_POINT_MAX));
}
function getPriceFromSqrtPrice(sqrtPrice, tokenADecimal, tokenBDecimal) {
  const decimalSqrtPrice = new Decimal2(sqrtPrice.toString());
  return decimalSqrtPrice.mul(decimalSqrtPrice).mul(new Decimal2(__pow(10, tokenADecimal - tokenBDecimal))).div(Decimal2.pow(2, 128));
}
function getPriceImpact(amountIn, amountOut, currentSqrtPrice, aToB, tokenADecimal, tokenBDecimal) {
  if (amountIn.eq(new BN16(0))) {
    return new Decimal2(0);
  }
  if (amountOut.eq(new BN16(0))) {
    throw new Error("Amount out must be greater than 0");
  }
  const spotPrice = getPriceFromSqrtPrice(
    currentSqrtPrice,
    tokenADecimal,
    tokenBDecimal
  );
  const executionPrice = new Decimal2(amountIn.toString()).div(new Decimal2(amountOut.toString())).mul(
    Decimal2.pow(
      10,
      aToB ? tokenBDecimal - tokenADecimal : tokenADecimal - tokenBDecimal
    )
  );
  const actualExecutionPrice = aToB ? new Decimal2(1).div(executionPrice) : executionPrice;
  return actualExecutionPrice.sub(spotPrice).abs().div(spotPrice).mul(100);
}

// src/kit/math/swapQuote.ts
function applySwapResult(poolState, result, feeMode, tradeDirection) {
  if (poolState.collectFeeMode !== 2 /* Compounding */) {
    return result.nextSqrtPrice;
  }
  const tradingFee = result.claimingFee.add(result.compoundingFee);
  const includedFeeOutputAmount = feeMode.feesOnInput ? result.outputAmount : result.outputAmount.add(tradingFee).add(result.protocolFee).add(result.referralFee);
  let newTokenAAmount;
  let newTokenBAmount;
  if (tradeDirection === 0 /* AtoB */) {
    newTokenAAmount = poolState.tokenAAmount.add(result.excludedFeeInputAmount);
    newTokenBAmount = poolState.tokenBAmount.sub(includedFeeOutputAmount);
  } else {
    newTokenBAmount = poolState.tokenBAmount.add(result.excludedFeeInputAmount);
    newTokenAAmount = poolState.tokenAAmount.sub(includedFeeOutputAmount);
  }
  newTokenBAmount = newTokenBAmount.add(result.compoundingFee);
  return getNextSqrtPriceForCompoundingLiquidity(
    newTokenAAmount,
    newTokenBAmount
  );
}
function getSwapResultFromExactInput(poolState, amountIn, feeMode, tradeDirection, currentPoint) {
  let actualProtocolFee = new BN17(0);
  let actualClaimingFee = new BN17(0);
  let actualCompoundingFee = new BN17(0);
  let actualReferralFee = new BN17(0);
  const liquidityHandler = getLiquidityHandler(poolState);
  const maxFeeNumerator = getMaxFeeNumerator(poolState.feeVersion);
  const tradeFeeNumerator = getTotalTradingFeeFromIncludedFeeAmount(
    poolState.poolFees,
    currentPoint,
    poolState.activationPoint,
    amountIn,
    tradeDirection,
    maxFeeNumerator,
    poolState.poolFees.initSqrtPrice,
    poolState.sqrtPrice
  );
  let actualAmountIn;
  if (feeMode.feesOnInput) {
    const { amount, claimingFee, compoundingFee, protocolFee, referralFee } = getFeeOnAmount(
      poolState.poolFees,
      amountIn,
      tradeFeeNumerator,
      feeMode.hasReferral
    );
    actualClaimingFee = claimingFee;
    actualCompoundingFee = compoundingFee;
    actualProtocolFee = protocolFee;
    actualReferralFee = referralFee;
    actualAmountIn = amount;
  } else {
    actualAmountIn = amountIn;
  }
  let swapAmountFromInput;
  if (tradeDirection === 0 /* AtoB */) {
    swapAmountFromInput = liquidityHandler.calculateAtoBFromAmountIn(actualAmountIn);
  } else {
    swapAmountFromInput = liquidityHandler.calculateBtoAFromAmountIn(actualAmountIn);
  }
  const { outputAmount, nextSqrtPrice, amountLeft } = swapAmountFromInput;
  let actualAmountOut;
  if (feeMode.feesOnInput) {
    actualAmountOut = outputAmount;
  } else {
    const { amount, claimingFee, compoundingFee, protocolFee, referralFee } = getFeeOnAmount(
      poolState.poolFees,
      outputAmount,
      tradeFeeNumerator,
      feeMode.hasReferral
    );
    actualClaimingFee = claimingFee;
    actualCompoundingFee = compoundingFee;
    actualProtocolFee = protocolFee;
    actualReferralFee = referralFee;
    actualAmountOut = amount;
  }
  const result = {
    amountLeft,
    includedFeeInputAmount: amountIn,
    excludedFeeInputAmount: actualAmountIn,
    outputAmount: actualAmountOut,
    nextSqrtPrice,
    claimingFee: actualClaimingFee,
    compoundingFee: actualCompoundingFee,
    protocolFee: actualProtocolFee,
    referralFee: actualReferralFee
  };
  result.nextSqrtPrice = applySwapResult(
    poolState,
    result,
    feeMode,
    tradeDirection
  );
  return result;
}
function getSwapResultFromPartialInput(poolState, amountIn, feeMode, tradeDirection, currentPoint) {
  let actualProtocolFee = new BN17(0);
  let actualClaimingFee = new BN17(0);
  let actualCompoundingFee = new BN17(0);
  let actualReferralFee = new BN17(0);
  const liquidityHandler = getLiquidityHandler(poolState);
  const maxFeeNumerator = getMaxFeeNumerator(poolState.feeVersion);
  const tradeFeeNumerator = getTotalTradingFeeFromIncludedFeeAmount(
    poolState.poolFees,
    currentPoint,
    poolState.activationPoint,
    amountIn,
    tradeDirection,
    maxFeeNumerator,
    poolState.poolFees.initSqrtPrice,
    poolState.sqrtPrice
  );
  let actualAmountIn;
  if (feeMode.feesOnInput) {
    const { amount, claimingFee, compoundingFee, protocolFee, referralFee } = getFeeOnAmount(
      poolState.poolFees,
      amountIn,
      tradeFeeNumerator,
      feeMode.hasReferral
    );
    actualProtocolFee = protocolFee;
    actualClaimingFee = claimingFee;
    actualCompoundingFee = compoundingFee;
    actualReferralFee = referralFee;
    actualAmountIn = amount;
  } else {
    actualAmountIn = amountIn;
  }
  let swapAmountFromInput;
  if (tradeDirection === 0 /* AtoB */) {
    swapAmountFromInput = liquidityHandler.calculateAtoBFromPartialAmountIn(actualAmountIn);
  } else {
    swapAmountFromInput = liquidityHandler.calculateBtoAFromPartialAmountIn(actualAmountIn);
  }
  let { amountLeft, outputAmount, nextSqrtPrice } = swapAmountFromInput;
  let includedFeeInputAmount;
  if (amountLeft.gt(new BN17(0))) {
    actualAmountIn = actualAmountIn.sub(amountLeft);
    if (feeMode.feesOnInput) {
      const tradeFeeNumerator2 = getTotalTradingFeeFromExcludedFeeAmount(
        poolState.poolFees,
        currentPoint,
        poolState.activationPoint,
        actualAmountIn,
        tradeDirection,
        maxFeeNumerator,
        poolState.poolFees.initSqrtPrice,
        poolState.sqrtPrice
      );
      const { includedFeeAmount, feeAmount } = getIncludedFeeAmount(
        tradeFeeNumerator2,
        actualAmountIn
      );
      const { claimingFee, compoundingFee, protocolFee, referralFee } = splitFees(poolState.poolFees, feeAmount, feeMode.hasReferral);
      actualProtocolFee = protocolFee;
      actualClaimingFee = claimingFee;
      actualCompoundingFee = compoundingFee;
      actualReferralFee = referralFee;
      includedFeeInputAmount = includedFeeAmount;
    } else {
      includedFeeInputAmount = actualAmountIn;
    }
  } else {
    includedFeeInputAmount = amountIn;
  }
  let actualAmountOut;
  if (feeMode.feesOnInput) {
    actualAmountOut = outputAmount;
  } else {
    const { amount, claimingFee, compoundingFee, protocolFee, referralFee } = getFeeOnAmount(
      poolState.poolFees,
      outputAmount,
      tradeFeeNumerator,
      feeMode.hasReferral
    );
    actualProtocolFee = protocolFee;
    actualClaimingFee = claimingFee;
    actualCompoundingFee = compoundingFee;
    actualReferralFee = referralFee;
    actualAmountOut = amount;
  }
  const result = {
    includedFeeInputAmount,
    excludedFeeInputAmount: actualAmountIn,
    amountLeft,
    outputAmount: actualAmountOut,
    nextSqrtPrice,
    claimingFee: actualClaimingFee,
    compoundingFee: actualCompoundingFee,
    protocolFee: actualProtocolFee,
    referralFee: actualReferralFee
  };
  result.nextSqrtPrice = applySwapResult(
    poolState,
    result,
    feeMode,
    tradeDirection
  );
  return result;
}
function getSwapResultFromExactOutput(poolState, amountOut, feeMode, tradeDirection, currentPoint) {
  let actualProtocolFee = new BN17(0);
  let actualCompoundingFee = new BN17(0);
  let actualClaimingFee = new BN17(0);
  let actualReferralFee = new BN17(0);
  const liquidityHandler = getLiquidityHandler(poolState);
  const maxFeeNumerator = getMaxFeeNumerator(poolState.feeVersion);
  let includedFeeAmountOut;
  if (feeMode.feesOnInput) {
    includedFeeAmountOut = amountOut;
  } else {
    const tradeFeeNumerator = getTotalTradingFeeFromExcludedFeeAmount(
      poolState.poolFees,
      currentPoint,
      poolState.activationPoint,
      amountOut,
      tradeDirection,
      maxFeeNumerator,
      poolState.poolFees.initSqrtPrice,
      poolState.sqrtPrice
    );
    const { includedFeeAmount, feeAmount } = getIncludedFeeAmount(
      tradeFeeNumerator,
      amountOut
    );
    const { compoundingFee, claimingFee, protocolFee, referralFee } = splitFees(
      poolState.poolFees,
      feeAmount,
      feeMode.hasReferral
    );
    actualProtocolFee = protocolFee;
    actualClaimingFee = claimingFee;
    actualCompoundingFee = compoundingFee;
    actualReferralFee = referralFee;
    includedFeeAmountOut = includedFeeAmount;
  }
  let swapAmountFromOutput;
  if (tradeDirection === 0 /* AtoB */) {
    swapAmountFromOutput = liquidityHandler.calculateAtoBFromAmountOut(includedFeeAmountOut);
  } else {
    swapAmountFromOutput = liquidityHandler.calculateBtoAFromAmountOut(includedFeeAmountOut);
  }
  const { inputAmount, nextSqrtPrice } = swapAmountFromOutput;
  let includedFeeInputAmount;
  if (feeMode.feesOnInput) {
    const tradeFeeNumerator = getTotalTradingFeeFromExcludedFeeAmount(
      poolState.poolFees,
      currentPoint,
      poolState.activationPoint,
      inputAmount,
      tradeDirection,
      maxFeeNumerator,
      poolState.poolFees.initSqrtPrice,
      poolState.sqrtPrice
    );
    const { includedFeeAmount, feeAmount } = getIncludedFeeAmount(
      tradeFeeNumerator,
      inputAmount
    );
    const { compoundingFee, claimingFee, protocolFee, referralFee } = splitFees(
      poolState.poolFees,
      feeAmount,
      feeMode.hasReferral
    );
    actualProtocolFee = protocolFee;
    actualClaimingFee = claimingFee;
    actualCompoundingFee = compoundingFee;
    actualReferralFee = referralFee;
    includedFeeInputAmount = includedFeeAmount;
  } else {
    includedFeeInputAmount = inputAmount;
  }
  const result = {
    amountLeft: new BN17(0),
    includedFeeInputAmount,
    excludedFeeInputAmount: inputAmount,
    outputAmount: amountOut,
    nextSqrtPrice,
    claimingFee: actualClaimingFee,
    compoundingFee: actualCompoundingFee,
    protocolFee: actualProtocolFee,
    referralFee: actualReferralFee
  };
  result.nextSqrtPrice = applySwapResult(
    poolState,
    result,
    feeMode,
    tradeDirection
  );
  return result;
}
function swapQuoteExactInput(pool, currentPoint, amountIn, slippage, aToB, hasReferral, tokenADecimal, tokenBDecimal, inputTokenInfo, outputTokenInfo) {
  if (amountIn.lte(new BN17(0))) {
    throw new AmountIsZeroError2("Amount in must be greater than 0");
  }
  if (!isSwapEnabled(pool, currentPoint)) {
    throw new SwapDisabledError();
  }
  const tradeDirection = aToB ? 0 /* AtoB */ : 1 /* BtoA */;
  const feeMode = getFeeMode(pool.collectFeeMode, tradeDirection, hasReferral);
  let actualAmountIn = amountIn;
  if (inputTokenInfo) {
    actualAmountIn = calculateTransferFeeExcludedAmount(
      amountIn,
      inputTokenInfo.mint,
      inputTokenInfo.currentEpoch
    ).amount;
  }
  const swapResult = getSwapResultFromExactInput(
    pool,
    actualAmountIn,
    feeMode,
    tradeDirection,
    currentPoint
  );
  let actualAmountOut = swapResult.outputAmount;
  if (outputTokenInfo) {
    actualAmountOut = calculateTransferFeeExcludedAmount(
      swapResult.outputAmount,
      outputTokenInfo.mint,
      outputTokenInfo.currentEpoch
    ).amount;
  }
  const minimumAmountOut = getAmountWithSlippage(
    actualAmountOut,
    slippage,
    0 /* ExactIn */
  );
  const priceImpact = getPriceImpact(
    actualAmountIn,
    actualAmountOut,
    pool.sqrtPrice,
    aToB,
    tokenADecimal,
    tokenBDecimal
  );
  return __spreadProps(__spreadValues({}, swapResult), {
    minimumAmountOut,
    priceImpact
  });
}
function swapQuoteExactOutput(pool, currentPoint, amountOut, slippage, aToB, hasReferral, tokenADecimal, tokenBDecimal, inputTokenInfo, outputTokenInfo) {
  if (amountOut.lte(new BN17(0))) {
    throw new AmountIsZeroError2("Amount out must be greater than 0");
  }
  if (!isSwapEnabled(pool, currentPoint)) {
    throw new SwapDisabledError();
  }
  const tradeDirection = aToB ? 0 /* AtoB */ : 1 /* BtoA */;
  const feeMode = getFeeMode(pool.collectFeeMode, tradeDirection, hasReferral);
  let actualAmountOut = amountOut;
  if (outputTokenInfo) {
    actualAmountOut = calculateTransferFeeIncludedAmount(
      amountOut,
      outputTokenInfo.mint,
      outputTokenInfo.currentEpoch
    ).amount;
  }
  const swapResult = getSwapResultFromExactOutput(
    pool,
    actualAmountOut,
    feeMode,
    tradeDirection,
    currentPoint
  );
  let actualAmountIn = swapResult.includedFeeInputAmount;
  if (inputTokenInfo) {
    actualAmountIn = calculateTransferFeeIncludedAmount(
      swapResult.includedFeeInputAmount,
      inputTokenInfo.mint,
      inputTokenInfo.currentEpoch
    ).amount;
  }
  const maximumAmountIn = getAmountWithSlippage(
    actualAmountIn,
    slippage,
    2 /* ExactOut */
  );
  const priceImpact = getPriceImpact(
    actualAmountIn,
    actualAmountOut,
    pool.sqrtPrice,
    aToB,
    tokenADecimal,
    tokenBDecimal
  );
  return __spreadProps(__spreadValues({}, swapResult), {
    maximumAmountIn,
    priceImpact
  });
}
function swapQuotePartialInput(pool, currentPoint, amountIn, slippage, aToB, hasReferral, tokenADecimal, tokenBDecimal, inputTokenInfo, outputTokenInfo) {
  if (amountIn.lte(new BN17(0))) {
    throw new AmountIsZeroError2("Amount in must be greater than 0");
  }
  if (!isSwapEnabled(pool, currentPoint)) {
    throw new SwapDisabledError();
  }
  const tradeDirection = aToB ? 0 /* AtoB */ : 1 /* BtoA */;
  const feeMode = getFeeMode(pool.collectFeeMode, tradeDirection, hasReferral);
  let actualAmountIn = amountIn;
  if (inputTokenInfo) {
    actualAmountIn = calculateTransferFeeExcludedAmount(
      amountIn,
      inputTokenInfo.mint,
      inputTokenInfo.currentEpoch
    ).amount;
  }
  const swapResult = getSwapResultFromPartialInput(
    pool,
    actualAmountIn,
    feeMode,
    tradeDirection,
    currentPoint
  );
  let actualAmountOut = swapResult.outputAmount;
  if (outputTokenInfo) {
    actualAmountOut = calculateTransferFeeExcludedAmount(
      swapResult.outputAmount,
      outputTokenInfo.mint,
      outputTokenInfo.currentEpoch
    ).amount;
  }
  const minimumAmountOut = getAmountWithSlippage(
    actualAmountOut,
    slippage,
    1 /* PartialFill */
  );
  const priceImpact = getPriceImpact(
    swapResult.includedFeeInputAmount,
    actualAmountOut,
    pool.sqrtPrice,
    aToB,
    tokenADecimal,
    tokenBDecimal
  );
  return __spreadProps(__spreadValues({}, swapResult), {
    minimumAmountOut,
    priceImpact
  });
}

// src/kit/math/api.ts
import BN20 from "bn.js";

// src/kit/math/priceMath.ts
import BN18 from "bn.js";
import Decimal3 from "decimal.js";
function calculateInitSqrtPrice(tokenAAmount, tokenBAmount, minSqrtPrice, maxSqrtPrice) {
  if (tokenAAmount.isZero() || tokenBAmount.isZero()) {
    throw new AmountIsZeroError2("Amount cannot be zero");
  }
  const amountADecimal = new Decimal3(tokenAAmount.toString());
  const amountBDecimal = new Decimal3(tokenBAmount.toString());
  const minSqrtPriceDecimal = new Decimal3(minSqrtPrice.toString()).div(
    Decimal3.pow(2, 64)
  );
  const maxSqrtPriceDecimal = new Decimal3(maxSqrtPrice.toString()).div(
    Decimal3.pow(2, 64)
  );
  const x = new Decimal3(1).div(maxSqrtPriceDecimal);
  const y = amountBDecimal.div(amountADecimal);
  const xy = x.mul(y);
  const paMinusXY = minSqrtPriceDecimal.sub(xy);
  const xyMinusPa = xy.sub(minSqrtPriceDecimal);
  const fourY = new Decimal3(4).mul(y);
  const discriminant = xyMinusPa.mul(xyMinusPa).add(fourY);
  const sqrtDiscriminant = discriminant.sqrt();
  const result = paMinusXY.add(sqrtDiscriminant).div(new Decimal3(2)).mul(Decimal3.pow(2, 64));
  return new BN18(result.floor().toFixed());
}

// src/kit/math/vestings.ts
import BN19 from "bn.js";
function isVestingComplete(vestingData, currentPoint) {
  const cliffPoint = vestingData.innerVesting.cliffPoint;
  const periodFrequency = vestingData.innerVesting.periodFrequency;
  const numberOfPeriods = vestingData.innerVesting.numberOfPeriod;
  const endPoint = cliffPoint.add(periodFrequency.muln(numberOfPeriods));
  return currentPoint.gte(endPoint);
}
function getAvailableVestingLiquidity(vestingData, currentPoint) {
  const {
    cliffPoint,
    periodFrequency,
    cliffUnlockLiquidity,
    liquidityPerPeriod,
    numberOfPeriod,
    totalReleasedLiquidity
  } = vestingData.innerVesting;
  if (currentPoint.lt(cliffPoint)) {
    return new BN19(0);
  }
  if (periodFrequency.isZero()) {
    return cliffUnlockLiquidity;
  }
  let passedPeriod = new BN19(currentPoint).sub(cliffPoint).div(periodFrequency);
  passedPeriod = BN19.min(passedPeriod, new BN19(numberOfPeriod));
  const unlockedLiquidity = cliffUnlockLiquidity.add(
    passedPeriod.mul(liquidityPerPeriod)
  );
  return unlockedLiquidity.sub(totalReleasedLiquidity);
}

// src/kit/math/api.ts
function isLockedPosition(position) {
  return position.vestedLiquidity.add(position.permanentLockedLiquidity).gtn(0);
}
function isPermanentLockedPosition(position) {
  return position.permanentLockedLiquidity.gtn(0);
}
function canUnlockPosition(positionState, vestings, currentPoint) {
  if (vestings.length > 0) {
    if (isPermanentLockedPosition(positionState)) {
      return {
        canUnlock: false,
        reason: "Position is permanently locked"
      };
    }
    for (const vesting of vestings) {
      if (!isVestingComplete(vesting.vestingState, currentPoint)) {
        return {
          canUnlock: false,
          reason: "Position has incomplete vesting schedule"
        };
      }
    }
  }
  return { canUnlock: true };
}
function getLiquidityDelta(params) {
  const liquidityDeltaFromAmountA = getLiquidityDeltaFromAmountA(
    params.maxAmountTokenA,
    params.sqrtPrice,
    params.sqrtMaxPrice,
    params.collectFeeMode,
    params.tokenAAmount,
    params.liquidity
  );
  const liquidityDeltaFromAmountB = getLiquidityDeltaFromAmountB(
    params.maxAmountTokenB,
    params.sqrtMinPrice,
    params.sqrtPrice,
    params.collectFeeMode,
    params.tokenBAmount,
    params.liquidity
  );
  return BN20.min(liquidityDeltaFromAmountA, liquidityDeltaFromAmountB);
}
function preparePoolCreationSingleSide(params) {
  if (!params.initSqrtPrice.eq(params.minSqrtPrice)) {
    throw new Error("Only support single side for base token.");
  }
  const actualAmountIn = params.tokenAInfo ? params.tokenAAmount.sub(
    calculateTransferFeeIncludedAmount(
      params.tokenAAmount,
      params.tokenAInfo.mint,
      params.tokenAInfo.currentEpoch
    ).transferFee
  ) : params.tokenAAmount;
  return getLiquidityDeltaFromAmountA(
    actualAmountIn,
    params.initSqrtPrice,
    params.maxSqrtPrice,
    params.collectFeeMode
  );
}
function preparePoolCreationParams(params) {
  if (params.tokenAAmount.eq(new BN20(0)) && params.tokenBAmount.eq(new BN20(0))) {
    throw new Error("Invalid input amount");
  }
  const actualAmountAIn = params.tokenAInfo ? params.tokenAAmount.sub(
    calculateTransferFeeIncludedAmount(
      params.tokenAAmount,
      params.tokenAInfo.mint,
      params.tokenAInfo.currentEpoch
    ).transferFee
  ) : params.tokenAAmount;
  const actualAmountBIn = params.tokenBInfo ? params.tokenBAmount.sub(
    calculateTransferFeeIncludedAmount(
      params.tokenBAmount,
      params.tokenBInfo.mint,
      params.tokenBInfo.currentEpoch
    ).transferFee
  ) : params.tokenBAmount;
  const initSqrtPrice = calculateInitSqrtPrice(
    params.tokenAAmount,
    params.tokenBAmount,
    params.minSqrtPrice,
    params.maxSqrtPrice
  );
  const liquidityDeltaFromAmountA = getLiquidityDeltaFromAmountA(
    actualAmountAIn,
    initSqrtPrice,
    params.maxSqrtPrice,
    params.collectFeeMode
  );
  const liquidityDeltaFromAmountB = getLiquidityDeltaFromAmountB(
    actualAmountBIn,
    params.minSqrtPrice,
    initSqrtPrice,
    params.collectFeeMode
  );
  return {
    initSqrtPrice,
    liquidityDelta: BN20.min(liquidityDeltaFromAmountA, liquidityDeltaFromAmountB)
  };
}
function getQuote(params) {
  var _a;
  const currentPoint = params.poolState.activationType ? new BN20(params.currentTime) : new BN20(params.currentSlot);
  const swapResult = swapQuoteExactInput(
    params.poolState,
    currentPoint,
    params.inAmount,
    params.slippage,
    params.poolState.tokenAMint === params.inputTokenMint,
    (_a = params.hasReferral) != null ? _a : false,
    params.tokenADecimal,
    params.tokenBDecimal,
    params.inputTokenInfo,
    params.outputTokenInfo
  );
  return {
    swapInAmount: params.inAmount,
    consumedInAmount: swapResult.includedFeeInputAmount,
    swapOutAmount: swapResult.outputAmount,
    minSwapOutAmount: swapResult.minimumAmountOut,
    totalFee: swapResult.claimingFee.add(swapResult.compoundingFee).add(swapResult.protocolFee).add(swapResult.referralFee),
    priceImpact: swapResult.priceImpact
  };
}
function getQuote2(params) {
  const aToB = params.poolState.tokenAMint === params.inputTokenMint;
  switch (params.swapMode) {
    case 0 /* ExactIn */:
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
        params.outputTokenInfo
      );
    case 2 /* ExactOut */:
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
        params.outputTokenInfo
      );
    case 1 /* PartialFill */:
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
        params.outputTokenInfo
      );
  }
  throw new Error("Unsupported swap mode");
}
function getDepositQuote(params) {
  if (params.isTokenA && params.sqrtPrice.gte(params.maxSqrtPrice)) {
    throw new DepositTokenNotAcceptedError("B");
  }
  if (!params.isTokenA && params.sqrtPrice.lte(params.minSqrtPrice)) {
    throw new DepositTokenNotAcceptedError("A");
  }
  const actualAmountIn = params.inputTokenInfo ? calculateTransferFeeExcludedAmount(
    params.inAmount,
    params.inputTokenInfo.mint,
    params.inputTokenInfo.currentEpoch
  ).amount : params.inAmount;
  const { liquidityDelta, rawAmount } = params.isTokenA ? {
    liquidityDelta: getLiquidityDeltaFromAmountA(
      actualAmountIn,
      params.sqrtPrice,
      params.maxSqrtPrice,
      params.collectFeeMode,
      params.tokenAAmount,
      params.liquidity
    ),
    rawAmount: (delta) => getAmountBFromLiquidityDelta(
      params.minSqrtPrice,
      params.sqrtPrice,
      delta,
      0 /* Up */,
      params.collectFeeMode,
      params.tokenBAmount,
      params.liquidity
    )
  } : {
    liquidityDelta: getLiquidityDeltaFromAmountB(
      actualAmountIn,
      params.minSqrtPrice,
      params.sqrtPrice,
      params.collectFeeMode,
      params.tokenBAmount,
      params.liquidity
    ),
    rawAmount: (delta) => getAmountAFromLiquidityDelta(
      params.sqrtPrice,
      params.maxSqrtPrice,
      delta,
      0 /* Up */,
      params.collectFeeMode,
      params.tokenAAmount,
      params.liquidity
    )
  };
  const rawOutputAmount = new BN20(rawAmount(liquidityDelta));
  const outputAmount = params.outputTokenInfo ? calculateTransferFeeIncludedAmount(
    rawOutputAmount,
    params.outputTokenInfo.mint,
    params.outputTokenInfo.currentEpoch
  ).amount : rawOutputAmount;
  return {
    actualInputAmount: actualAmountIn,
    consumedInputAmount: params.inAmount,
    liquidityDelta,
    outputAmount
  };
}
function getWithdrawQuote(params) {
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
    1 /* Down */,
    params.collectFeeMode,
    params.tokenAAmount,
    params.liquidity
  );
  const amountB = getAmountBFromLiquidityDelta(
    params.minSqrtPrice,
    params.sqrtPrice,
    params.liquidityDelta,
    1 /* Down */,
    params.collectFeeMode,
    params.tokenBAmount,
    params.liquidity
  );
  return {
    liquidityDelta: params.liquidityDelta,
    outAmountA: params.tokenATokenInfo ? calculateTransferFeeExcludedAmount(
      amountA,
      params.tokenATokenInfo.mint,
      params.tokenATokenInfo.currentEpoch
    ).amount : amountA,
    outAmountB: params.tokenBTokenInfo ? calculateTransferFeeExcludedAmount(
      amountB,
      params.tokenBTokenInfo.mint,
      params.tokenBTokenInfo.currentEpoch
    ).amount : amountB
  };
}

// src/kit/builders/positions.ts
function coerceAddress(value) {
  return value;
}
function hasNativeMint(poolState) {
  return coerceAddress(poolState.tokenAMint) === NATIVE_MINT_ADDRESS || coerceAddress(poolState.tokenBMint) === NATIVE_MINT_ADDRESS;
}
function buildRefreshVestingInstruction(params) {
  return __async(this, null, function* () {
    const instruction = getRefreshVestingInstruction({
      pool: params.pool,
      position: params.position,
      positionNftAccount: params.positionNftAccount,
      owner: params.owner
    }, {
      programAddress: CP_AMM_PROGRAM_ADDRESS
    });
    return appendRemainingAccounts(
      instruction,
      params.vestingAccounts.map((account) => writableAccountMeta(account))
    );
  });
}
function buildAddLiquidityInstruction(params) {
  return __async(this, null, function* () {
    return yield getAddLiquidityInstructionAsync({
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
      program: CP_AMM_PROGRAM_ADDRESS
    });
  });
}
function buildRemoveLiquidityInstruction(params) {
  return __async(this, null, function* () {
    return yield getRemoveLiquidityInstructionAsync({
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
      program: CP_AMM_PROGRAM_ADDRESS
    });
  });
}
function buildRemoveAllLiquidityInstruction(params) {
  return __async(this, null, function* () {
    return yield getRemoveAllLiquidityInstructionAsync({
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
      program: CP_AMM_PROGRAM_ADDRESS
    });
  });
}
function buildClaimPositionFeeInstruction(params) {
  return __async(this, null, function* () {
    return yield getClaimPositionFeeInstructionAsync({
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
      program: CP_AMM_PROGRAM_ADDRESS
    });
  });
}
function buildClosePositionInstruction(params) {
  return __async(this, null, function* () {
    return yield getClosePositionInstructionAsync({
      positionNftMint: params.positionNftMint,
      positionNftAccount: params.positionNftAccount,
      pool: params.pool,
      position: params.position,
      rentReceiver: params.owner.address,
      owner: params.owner,
      tokenProgram: TOKEN_2022_PROGRAM_ADDRESS2,
      program: CP_AMM_PROGRAM_ADDRESS
    });
  });
}
function buildLiquidatePositionInstructions(params) {
  return __async(this, null, function* () {
    const tokenAProgram = getTokenProgramAddress(params.poolState.tokenAFlag);
    const tokenBProgram = getTokenProgramAddress(params.poolState.tokenBFlag);
    const claimPositionFeeInstruction = yield buildClaimPositionFeeInstruction({
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
      tokenBProgram
    });
    const removeAllLiquidityInstruction = yield buildRemoveAllLiquidityInstruction({
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
      tokenBAmountThreshold: params.tokenBAmountThreshold
    });
    const closePositionInstruction = yield buildClosePositionInstruction({
      owner: params.owner,
      pool: params.pool,
      position: params.position,
      positionNftMint: params.positionNftMint,
      positionNftAccount: params.positionNftAccount
    });
    return [
      claimPositionFeeInstruction,
      removeAllLiquidityInstruction,
      closePositionInstruction
    ];
  });
}
function addLiquidityPlan(params) {
  return __async(this, null, function* () {
    validateAddLiquidityParams(params.liquidityDelta);
    const {
      tokenAAta: tokenAAccount,
      tokenBAta: tokenBAccount,
      instructions
    } = yield prepareTokenAccounts({
      payer: params.owner,
      tokenAOwner: params.owner.address,
      tokenBOwner: params.owner.address,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram
    });
    const preInstructions = [...instructions];
    if (isNativeMint(params.tokenAMint)) {
      preInstructions.push(
        ...wrapSolInstructions(
          params.owner.address,
          params.owner,
          tokenAAccount,
          bnToBigInt(params.maxAmountTokenA)
        )
      );
    }
    if (isNativeMint(params.tokenBMint)) {
      preInstructions.push(
        ...wrapSolInstructions(
          params.owner.address,
          params.owner,
          tokenBAccount,
          bnToBigInt(params.maxAmountTokenB)
        )
      );
    }
    const addLiquidityInstruction = yield buildAddLiquidityInstruction({
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
      tokenBAmountThreshold: params.tokenBAmountThreshold
    });
    const postInstructions = [];
    if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
      postInstructions.push(
        yield unwrapSolInstruction(params.owner.address, params.owner)
      );
    }
    return buildTransactionPlan(
      [...preInstructions, addLiquidityInstruction, ...postInstructions],
      [params.owner]
    );
  });
}
function createPositionAndAddLiquidityPlan(params) {
  return __async(this, null, function* () {
    const {
      tokenAAta: tokenAAccount,
      tokenBAta: tokenBAccount,
      instructions
    } = yield prepareTokenAccounts({
      payer: params.owner,
      tokenAOwner: params.owner.address,
      tokenBOwner: params.owner.address,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram
    });
    const [position] = yield findPositionPda({
      positionNftMint: params.positionNft.address
    });
    const [positionNftAccount] = yield findPositionNftAccountPda({
      positionNftMint: params.positionNft.address
    });
    const [tokenAVault, tokenBVault] = yield Promise.all([
      findTokenAVaultPda({
        tokenAMint: params.tokenAMint,
        pool: params.pool
      }).then(([vault]) => vault),
      findTokenBVaultPda({
        tokenBMint: params.tokenBMint,
        pool: params.pool
      }).then(([vault]) => vault)
    ]);
    const preInstructions = [...instructions];
    if (isNativeMint(params.tokenAMint)) {
      preInstructions.push(
        ...wrapSolInstructions(
          params.owner.address,
          params.owner,
          tokenAAccount,
          bnToBigInt(params.maxAmountTokenA)
        )
      );
    }
    if (isNativeMint(params.tokenBMint)) {
      preInstructions.push(
        ...wrapSolInstructions(
          params.owner.address,
          params.owner,
          tokenBAccount,
          bnToBigInt(params.maxAmountTokenB)
        )
      );
    }
    const createPositionInstruction = yield getCreatePositionInstructionAsync({
      owner: params.owner.address,
      positionNftMint: params.positionNft,
      positionNftAccount,
      pool: params.pool,
      position,
      payer: params.owner,
      tokenProgram: TOKEN_2022_PROGRAM_ADDRESS2,
      program: CP_AMM_PROGRAM_ADDRESS
    });
    const addLiquidityInstruction = yield buildAddLiquidityInstruction({
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
      tokenBAmountThreshold: params.tokenBAmountThreshold
    });
    const postInstructions = [];
    if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
      postInstructions.push(
        yield unwrapSolInstruction(params.owner.address, params.owner)
      );
    }
    return buildTransactionPlan(
      [
        createPositionInstruction,
        ...preInstructions,
        addLiquidityInstruction,
        ...postInstructions
      ],
      [params.owner, params.positionNft]
    );
  });
}
function removeLiquidityPlan(params) {
  return __async(this, null, function* () {
    validateRemoveLiquidityParams(params.liquidityDelta);
    const {
      tokenAAta: tokenAAccount,
      tokenBAta: tokenBAccount,
      instructions
    } = yield prepareTokenAccounts({
      payer: params.owner,
      tokenAOwner: params.owner.address,
      tokenBOwner: params.owner.address,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram
    });
    const preInstructions = [...instructions];
    if (params.vestings.length > 0) {
      preInstructions.push(
        yield buildRefreshVestingInstruction({
          owner: params.owner.address,
          position: params.position,
          positionNftAccount: params.positionNftAccount,
          pool: params.pool,
          vestingAccounts: params.vestings.map(({ account }) => account)
        })
      );
    }
    const removeLiquidityInstruction = yield buildRemoveLiquidityInstruction({
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
      tokenBAmountThreshold: params.tokenBAmountThreshold
    });
    const postInstructions = [];
    if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
      postInstructions.push(
        yield unwrapSolInstruction(params.owner.address, params.owner)
      );
    }
    return buildTransactionPlan(
      [...preInstructions, removeLiquidityInstruction, ...postInstructions],
      [params.owner]
    );
  });
}
function removeAllLiquidityPlan(params) {
  return __async(this, null, function* () {
    const {
      tokenAAta: tokenAAccount,
      tokenBAta: tokenBAccount,
      instructions
    } = yield prepareTokenAccounts({
      payer: params.owner,
      tokenAOwner: params.owner.address,
      tokenBOwner: params.owner.address,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram
    });
    const preInstructions = [...instructions];
    if (params.vestings.length > 0) {
      preInstructions.push(
        yield buildRefreshVestingInstruction({
          owner: params.owner.address,
          position: params.position,
          positionNftAccount: params.positionNftAccount,
          pool: params.pool,
          vestingAccounts: params.vestings.map(({ account }) => account)
        })
      );
    }
    const removeAllLiquidityInstruction = yield buildRemoveAllLiquidityInstruction({
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
      tokenBAmountThreshold: params.tokenBAmountThreshold
    });
    const postInstructions = [];
    if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
      postInstructions.push(
        yield unwrapSolInstruction(params.owner.address, params.owner)
      );
    }
    return buildTransactionPlan(
      [...preInstructions, removeAllLiquidityInstruction, ...postInstructions],
      [params.owner]
    );
  });
}
function lockPositionPlan(params) {
  return __async(this, null, function* () {
    validateLockPositionParams({
      numberOfPeriod: params.numberOfPeriod,
      periodFrequency: params.periodFrequency,
      cliffUnlockLiquidity: params.cliffUnlockLiquidity,
      liquidityPerPeriod: params.liquidityPerPeriod
    });
    const vestingParams = {
      cliffPoint: params.cliffPoint,
      periodFrequency: bnToBigInt(params.periodFrequency),
      cliffUnlockLiquidity: bnToBigInt(params.cliffUnlockLiquidity),
      liquidityPerPeriod: bnToBigInt(params.liquidityPerPeriod),
      numberOfPeriod: params.numberOfPeriod
    };
    if ("innerPosition" in params && params.innerPosition) {
      const instruction2 = yield getLockInnerPositionInstructionAsync({
        pool: params.pool,
        position: params.position,
        positionNftAccount: params.positionNftAccount,
        owner: params.owner,
        params: {
          cliffPoint: params.cliffPoint ? bnToBigInt(params.cliffPoint) : null,
          periodFrequency: bnToBigInt(params.periodFrequency),
          cliffUnlockLiquidity: bnToBigInt(params.cliffUnlockLiquidity),
          liquidityPerPeriod: bnToBigInt(params.liquidityPerPeriod),
          numberOfPeriod: params.numberOfPeriod
        },
        program: CP_AMM_PROGRAM_ADDRESS
      });
      return buildTransactionPlan([instruction2], [params.owner]);
    }
    const instruction = yield getLockPositionInstructionAsync({
      pool: params.pool,
      position: params.position,
      vesting: params.vestingAccount,
      positionNftAccount: params.positionNftAccount,
      owner: params.owner,
      payer: params.payer,
      params: {
        cliffPoint: vestingParams.cliffPoint ? bnToBigInt(vestingParams.cliffPoint) : null,
        periodFrequency: vestingParams.periodFrequency,
        cliffUnlockLiquidity: vestingParams.cliffUnlockLiquidity,
        liquidityPerPeriod: vestingParams.liquidityPerPeriod,
        numberOfPeriod: vestingParams.numberOfPeriod
      },
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan(
      [instruction],
      [params.owner, params.payer, params.vestingAccount]
    );
  });
}
function permanentLockPositionPlan(params) {
  return __async(this, null, function* () {
    const instruction = yield getPermanentLockPositionInstructionAsync({
      pool: params.pool,
      position: params.position,
      positionNftAccount: params.positionNftAccount,
      owner: params.owner,
      permanentLockLiquidity: bnToBigInt(params.unlockedLiquidity),
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan([instruction], [params.owner]);
  });
}
function refreshVestingPlan(params) {
  return __async(this, null, function* () {
    return buildTransactionPlan(
      [yield buildRefreshVestingInstruction(params)],
      []
    );
  });
}
function closePositionPlan(params) {
  return __async(this, null, function* () {
    return buildTransactionPlan(
      [yield buildClosePositionInstruction(params)],
      [params.owner]
    );
  });
}
function removeAllLiquidityAndClosePositionPlan(params) {
  return __async(this, null, function* () {
    const { canUnlock, reason } = canUnlockPosition(
      params.positionState,
      params.vestings,
      params.currentPoint
    );
    if (!canUnlock) {
      throw new Error(`Cannot remove liquidity: ${reason}`);
    }
    const tokenAProgram = getTokenProgramAddress(params.poolState.tokenAFlag);
    const tokenBProgram = getTokenProgramAddress(params.poolState.tokenBFlag);
    const {
      tokenAAta: tokenAAccount,
      tokenBAta: tokenBAccount,
      instructions
    } = yield prepareTokenAccounts({
      payer: params.owner,
      tokenAOwner: params.owner.address,
      tokenBOwner: params.owner.address,
      tokenAMint: coerceAddress(params.poolState.tokenAMint),
      tokenBMint: coerceAddress(params.poolState.tokenBMint),
      tokenAProgram,
      tokenBProgram
    });
    const preInstructions = [...instructions];
    if (params.vestings.length > 0) {
      preInstructions.push(
        yield buildRefreshVestingInstruction({
          owner: params.owner.address,
          position: params.position,
          positionNftAccount: params.positionNftAccount,
          pool: coerceAddress(params.positionState.pool),
          vestingAccounts: params.vestings.map(({ account }) => account)
        })
      );
    }
    const liquidatePositionInstructions = yield buildLiquidatePositionInstructions({
      owner: params.owner,
      pool: coerceAddress(params.positionState.pool),
      position: params.position,
      positionNftAccount: params.positionNftAccount,
      positionNftMint: coerceAddress(params.positionState.nftMint),
      poolState: params.poolState,
      tokenAAccount,
      tokenBAccount,
      tokenAAmountThreshold: params.tokenAAmountThreshold,
      tokenBAmountThreshold: params.tokenBAmountThreshold
    });
    const postInstructions = [];
    if (hasNativeMint(params.poolState)) {
      postInstructions.push(
        yield unwrapSolInstruction(params.owner.address, params.owner)
      );
    }
    return buildTransactionPlan(
      [
        ...preInstructions,
        ...liquidatePositionInstructions,
        ...postInstructions
      ],
      [params.owner]
    );
  });
}
function mergePositionPlan(params) {
  return __async(this, null, function* () {
    const { canUnlock, reason } = canUnlockPosition(
      params.positionBState,
      params.positionBVestings,
      params.currentPoint
    );
    if (!canUnlock) {
      throw new Error(`Cannot remove liquidity: ${reason}`);
    }
    const tokenAProgram = getTokenProgramAddress(params.poolState.tokenAFlag);
    const tokenBProgram = getTokenProgramAddress(params.poolState.tokenBFlag);
    const {
      tokenAAta: tokenAAccount,
      tokenBAta: tokenBAccount,
      instructions
    } = yield prepareTokenAccounts({
      payer: params.owner,
      tokenAOwner: params.owner.address,
      tokenBOwner: params.owner.address,
      tokenAMint: coerceAddress(params.poolState.tokenAMint),
      tokenBMint: coerceAddress(params.poolState.tokenBMint),
      tokenAProgram,
      tokenBProgram
    });
    const preInstructions = [...instructions];
    let positionBLiquidityDelta = params.positionBState.unlockedLiquidity;
    if (params.positionBVestings.length > 0) {
      const totalAvailableVestingLiquidity = params.positionBVestings.reduce(
        (total, vesting) => total.add(
          getAvailableVestingLiquidity(
            vesting.vestingState,
            params.currentPoint
          )
        ),
        new BN21(0)
      );
      positionBLiquidityDelta = positionBLiquidityDelta.add(
        totalAvailableVestingLiquidity
      );
      preInstructions.push(
        yield buildRefreshVestingInstruction({
          owner: params.owner.address,
          position: params.positionB,
          positionNftAccount: params.positionBNftAccount,
          pool: coerceAddress(params.positionBState.pool),
          vestingAccounts: params.positionBVestings.map(({ account }) => account)
        })
      );
    }
    const withdrawQuote = getWithdrawQuote({
      liquidityDelta: positionBLiquidityDelta,
      minSqrtPrice: params.poolState.sqrtMinPrice,
      maxSqrtPrice: params.poolState.sqrtMaxPrice,
      sqrtPrice: params.poolState.sqrtPrice,
      collectFeeMode: params.poolState.collectFeeMode,
      tokenAAmount: params.poolState.tokenAAmount,
      tokenBAmount: params.poolState.tokenBAmount,
      liquidity: params.poolState.liquidity
    });
    const newLiquidityDelta = getLiquidityDelta({
      maxAmountTokenA: withdrawQuote.outAmountA,
      maxAmountTokenB: withdrawQuote.outAmountB,
      sqrtMaxPrice: params.poolState.sqrtMaxPrice,
      sqrtMinPrice: params.poolState.sqrtMinPrice,
      sqrtPrice: params.poolState.sqrtPrice,
      collectFeeMode: params.poolState.collectFeeMode,
      tokenAAmount: params.poolState.tokenAAmount,
      tokenBAmount: params.poolState.tokenBAmount,
      liquidity: params.poolState.liquidity
    });
    const liquidatePositionInstructions = yield buildLiquidatePositionInstructions({
      owner: params.owner,
      pool: coerceAddress(params.positionBState.pool),
      position: params.positionB,
      positionNftAccount: params.positionBNftAccount,
      positionNftMint: coerceAddress(params.positionBState.nftMint),
      poolState: params.poolState,
      tokenAAccount,
      tokenBAccount,
      tokenAAmountThreshold: params.tokenAAmountRemoveLiquidityThreshold,
      tokenBAmountThreshold: params.tokenBAmountRemoveLiquidityThreshold
    });
    const addLiquidityInstruction = yield buildAddLiquidityInstruction({
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
      tokenBAmountThreshold: params.tokenBAmountAddLiquidityThreshold
    });
    const postInstructions = [];
    if (hasNativeMint(params.poolState)) {
      postInstructions.push(
        yield unwrapSolInstruction(params.owner.address, params.owner)
      );
    }
    return buildTransactionPlan(
      [
        ...preInstructions,
        ...liquidatePositionInstructions,
        addLiquidityInstruction,
        ...postInstructions
      ],
      [params.owner]
    );
  });
}
function splitPositionPlan(params) {
  return __async(this, null, function* () {
    validateSplitPositionParams({
      permanentLockedLiquidityPercentage: params.permanentLockedLiquidityPercentage,
      unlockedLiquidityPercentage: params.unlockedLiquidityPercentage,
      feeAPercentage: params.feeAPercentage,
      feeBPercentage: params.feeBPercentage,
      reward0Percentage: params.reward0Percentage,
      reward1Percentage: params.reward1Percentage,
      innerVestingLiquidityPercentage: params.innerVestingLiquidityPercentage
    });
    const instruction = yield getSplitPositionInstructionAsync({
      pool: params.pool,
      firstPosition: params.firstPosition,
      firstPositionNftAccount: params.firstPositionNftAccount,
      secondPosition: params.secondPosition,
      secondPositionNftAccount: params.secondPositionNftAccount,
      firstOwner: params.firstPositionOwner,
      secondOwner: params.secondPositionOwner,
      unlockedLiquidityPercentage: params.unlockedLiquidityPercentage,
      permanentLockedLiquidityPercentage: params.permanentLockedLiquidityPercentage,
      feeAPercentage: params.feeAPercentage,
      feeBPercentage: params.feeBPercentage,
      reward0Percentage: params.reward0Percentage,
      reward1Percentage: params.reward1Percentage,
      innerVestingLiquidityPercentage: params.innerVestingLiquidityPercentage,
      padding: new Uint8Array(15),
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan(
      [instruction],
      [params.firstPositionOwner, params.secondPositionOwner]
    );
  });
}
function splitPosition2Plan(params) {
  return __async(this, null, function* () {
    validateSplitPosition2Params(params.numerator);
    const instruction = yield getSplitPosition2InstructionAsync({
      pool: params.pool,
      firstPosition: params.firstPosition,
      firstPositionNftAccount: params.firstPositionNftAccount,
      secondPosition: params.secondPosition,
      secondPositionNftAccount: params.secondPositionNftAccount,
      firstOwner: params.firstPositionOwner,
      secondOwner: params.secondPositionOwner,
      numerator: params.numerator,
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan(
      [instruction],
      [params.firstPositionOwner, params.secondPositionOwner]
    );
  });
}

// src/kit/builders/rewards.ts
function coerceAddress2(value) {
  return value;
}
function unwrapRpcValue2(response) {
  return response && typeof response === "object" && "value" in response ? response.value : response;
}
function accountExists(rpc, account) {
  return __async(this, null, function* () {
    const accountInfo = unwrapRpcValue2(
      yield rpc.getAccountInfo(account, { encoding: "base64" }).send()
    );
    return accountInfo !== null;
  });
}
function buildClaimPositionFeeInstruction2(params) {
  return __async(this, null, function* () {
    return yield getClaimPositionFeeInstructionAsync({
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
      program: CP_AMM_PROGRAM_ADDRESS
    });
  });
}
function setupFeeClaimAccounts(params) {
  return __async(this, null, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const tokenAIsSol = isNativeMint(params.tokenAMint);
    const tokenBIsSol = isNativeMint(params.tokenBMint);
    const hasSolToken = tokenAIsSol || tokenBIsSol;
    let tokenAOwner = params.owner.address;
    let tokenBOwner = params.owner.address;
    if (params.receiver) {
      tokenAOwner = tokenAIsSol ? (_b = (_a = params.tempWSolAccount) == null ? void 0 : _a.address) != null ? _b : params.owner.address : params.receiver;
      tokenBOwner = tokenBIsSol ? (_d = (_c = params.tempWSolAccount) == null ? void 0 : _c.address) != null ? _d : params.owner.address : params.receiver;
    }
    const {
      tokenAAta: tokenAAccount,
      tokenBAta: tokenBAccount,
      instructions
    } = yield prepareTokenAccounts({
      payer: params.payer,
      tokenAOwner,
      tokenBOwner,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram
    });
    const postInstructions = [];
    if (hasSolToken) {
      postInstructions.push(
        yield unwrapSolInstruction(
          (_f = (_e = params.tempWSolAccount) == null ? void 0 : _e.address) != null ? _f : params.owner.address,
          (_g = params.tempWSolAccount) != null ? _g : params.owner,
          (_h = params.receiver) != null ? _h : params.owner.address
        )
      );
    }
    return {
      tokenAAccount,
      tokenBAccount,
      preInstructions: instructions,
      postInstructions
    };
  });
}
function claimPositionFeePlan(params) {
  return __async(this, null, function* () {
    var _a;
    const payer = (_a = params.feePayer) != null ? _a : params.owner;
    const { tokenAAccount, tokenBAccount, preInstructions, postInstructions } = yield setupFeeClaimAccounts({
      payer,
      owner: params.owner,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram,
      receiver: params.receiver,
      tempWSolAccount: params.tempWSolAccount
    });
    const claimPositionFeeInstruction = yield buildClaimPositionFeeInstruction2({
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
      tokenBProgram: params.tokenBProgram
    });
    return buildTransactionPlan(
      [...preInstructions, claimPositionFeeInstruction, ...postInstructions],
      [params.owner, params.feePayer, params.tempWSolAccount]
    );
  });
}
function claimPositionFee2Plan(params) {
  return __async(this, null, function* () {
    var _a;
    const payer = (_a = params.feePayer) != null ? _a : params.owner;
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
      instructions
    } = yield prepareTokenAccounts({
      payer,
      tokenAOwner,
      tokenBOwner,
      tokenAMint: params.tokenAMint,
      tokenBMint: params.tokenBMint,
      tokenAProgram: params.tokenAProgram,
      tokenBProgram: params.tokenBProgram
    });
    const postInstructions = [];
    if (isNativeMint(params.tokenAMint) || isNativeMint(params.tokenBMint)) {
      postInstructions.push(
        yield unwrapSolInstruction(
          params.owner.address,
          params.owner,
          params.receiver
        )
      );
    }
    const claimPositionFeeInstruction = yield buildClaimPositionFeeInstruction2({
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
      tokenBProgram: params.tokenBProgram
    });
    return buildTransactionPlan(
      [...instructions, claimPositionFeeInstruction, ...postInstructions],
      [params.owner, params.feePayer]
    );
  });
}
function initializeRewardPlan(rpc, params) {
  return __async(this, null, function* () {
    validateRewardIndex(params.rewardIndex);
    validateRewardDuration(params.rewardDuration);
    const [rewardVault] = yield findRewardVaultPda({
      pool: params.pool,
      rewardIndex: params.rewardIndex
    });
    const [tokenBadge, operator] = yield Promise.all([
      deriveTokenBadgeAddress(params.rewardMint),
      deriveOperatorAddress(params.creator.address)
    ]);
    const [tokenBadgeExists, operatorExists] = yield Promise.all([
      accountExists(rpc, tokenBadge),
      accountExists(rpc, operator)
    ]);
    const remainingAccounts = [
      readonlyAccountMeta(
        tokenBadgeExists ? tokenBadge : CP_AMM_PROGRAM_ADDRESS
      ),
      ...operatorExists ? [readonlyAccountMeta(operator)] : []
    ];
    const instruction = appendRemainingAccounts(
      yield getInitializeRewardInstructionAsync({
        pool: params.pool,
        rewardVault,
        rewardMint: params.rewardMint,
        signer: params.creator,
        payer: params.payer,
        tokenProgram: params.rewardMintProgram,
        rewardIndex: params.rewardIndex,
        rewardDuration: bnToBigInt(params.rewardDuration),
        funder: params.funder,
        program: CP_AMM_PROGRAM_ADDRESS
      }),
      remainingAccounts
    );
    return buildTransactionPlan([instruction], [params.creator, params.payer]);
  });
}
function fundRewardPlan(params) {
  return __async(this, null, function* () {
    validateRewardIndex(params.rewardIndex);
    if (params.amount.isZero()) {
      throw new AmountIsZeroError("fund reward amount must be greater than 0");
    }
    const {
      ata: funderTokenAccount,
      instruction: createFunderTokenAccountInstruction
    } = yield getOrCreateAssociatedTokenInstruction(
      params.rewardMint,
      params.funder.address,
      params.funder,
      params.rewardMintProgram
    );
    const preInstructions = [createFunderTokenAccountInstruction];
    if (params.rewardMint === NATIVE_MINT_ADDRESS) {
      preInstructions.push(
        ...wrapSolInstructions(
          params.funder.address,
          params.funder,
          funderTokenAccount,
          bnToBigInt(params.amount)
        )
      );
    }
    const instruction = yield getFundRewardInstructionAsync({
      pool: params.pool,
      rewardVault: params.rewardVault,
      rewardMint: params.rewardMint,
      funderTokenAccount,
      funder: params.funder,
      tokenProgram: params.rewardMintProgram,
      rewardIndex: params.rewardIndex,
      amount: bnToBigInt(params.amount),
      carryForward: params.carryForward,
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan(
      [...preInstructions, instruction],
      [params.funder]
    );
  });
}
function initializeAndFundRewardPlan(rpc, params) {
  return __async(this, null, function* () {
    const [rewardVault] = yield findRewardVaultPda({
      pool: params.pool,
      rewardIndex: params.rewardIndex
    });
    const initializeReward = yield initializeRewardPlan(rpc, {
      rewardIndex: params.rewardIndex,
      rewardDuration: params.rewardDuration,
      pool: params.pool,
      rewardMint: params.rewardMint,
      funder: params.payer.address,
      payer: params.payer,
      creator: params.creator,
      rewardMintProgram: params.rewardMintProgram
    });
    const fundReward = yield fundRewardPlan({
      rewardIndex: params.rewardIndex,
      pool: params.pool,
      carryForward: params.carryForward,
      amount: params.amount,
      rewardMint: params.rewardMint,
      rewardVault,
      rewardMintProgram: params.rewardMintProgram,
      funder: params.payer
    });
    return buildTransactionPlan(
      [...initializeReward.instructions, ...fundReward.instructions],
      [params.creator, params.payer]
    );
  });
}
function updateRewardDurationPlan(params) {
  return __async(this, null, function* () {
    validateRewardIndex(params.rewardIndex);
    validateRewardDuration(params.newDuration);
    const instruction = yield getUpdateRewardDurationInstructionAsync({
      pool: params.pool,
      signer: params.signer,
      rewardIndex: params.rewardIndex,
      newDuration: bnToBigInt(params.newDuration),
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan([instruction], [params.signer]);
  });
}
function updateRewardFunderPlan(params) {
  return __async(this, null, function* () {
    validateRewardIndex(params.rewardIndex);
    const instruction = yield getUpdateRewardFunderInstructionAsync({
      pool: params.pool,
      signer: params.signer,
      rewardIndex: params.rewardIndex,
      newFunder: params.newFunder,
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan([instruction], [params.signer]);
  });
}
function withdrawIneligibleRewardPlan(rpc, params) {
  return __async(this, null, function* () {
    validateRewardIndex(params.rewardIndex);
    const poolState = yield fetchPoolState(rpc, params.pool);
    const rewardInfo = poolState.rewardInfos[params.rewardIndex];
    const rewardMint = coerceAddress2(rewardInfo.mint);
    const rewardVault = coerceAddress2(rewardInfo.vault);
    const tokenProgram = getTokenProgramAddress(rewardInfo.rewardTokenFlag);
    const {
      ata: funderTokenAccount,
      instruction: createFunderTokenAccountInstruction
    } = yield getOrCreateAssociatedTokenInstruction(
      rewardMint,
      params.funder.address,
      params.funder,
      tokenProgram
    );
    const preInstructions = [createFunderTokenAccountInstruction];
    const postInstructions = [];
    if (rewardMint === NATIVE_MINT_ADDRESS) {
      postInstructions.push(
        yield unwrapSolInstruction(params.funder.address, params.funder)
      );
    }
    const instruction = yield getWithdrawIneligibleRewardInstructionAsync({
      pool: params.pool,
      rewardVault,
      rewardMint,
      funderTokenAccount,
      funder: params.funder,
      tokenProgram,
      rewardIndex: params.rewardIndex,
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan(
      [...preInstructions, instruction, ...postInstructions],
      [params.funder]
    );
  });
}
function claimRewardPlan(params) {
  return __async(this, null, function* () {
    var _a;
    validateRewardIndex(params.rewardIndex);
    const rewardInfo = params.poolState.rewardInfos[params.rewardIndex];
    const rewardMint = coerceAddress2(rewardInfo.mint);
    const rewardVault = coerceAddress2(rewardInfo.vault);
    const tokenProgram = getTokenProgramAddress(rewardInfo.rewardTokenFlag);
    const payer = (_a = params.feePayer) != null ? _a : params.user;
    const {
      ata: userTokenAccount,
      instruction: createUserTokenAccountInstruction
    } = yield getOrCreateAssociatedTokenInstruction(
      rewardMint,
      params.user.address,
      payer,
      tokenProgram
    );
    const preInstructions = [createUserTokenAccountInstruction];
    const postInstructions = [];
    if (rewardMint === NATIVE_MINT_ADDRESS) {
      postInstructions.push(
        yield unwrapSolInstruction(params.user.address, params.user)
      );
    }
    const instruction = yield getClaimRewardInstructionAsync({
      pool: coerceAddress2(params.positionState.pool),
      position: params.position,
      rewardVault,
      rewardMint,
      userTokenAccount,
      positionNftAccount: params.positionNftAccount,
      owner: params.user,
      tokenProgram,
      rewardIndex: params.rewardIndex,
      skipReward: params.isSkipReward ? 1 : 0,
      program: CP_AMM_PROGRAM_ADDRESS
    });
    return buildTransactionPlan(
      [...preInstructions, instruction, ...postInstructions],
      [params.user, params.feePayer]
    );
  });
}

// src/kit/helpers/rpc.ts
function getDefaultRpcSubscriptionsUrl(rpcUrl) {
  const parsedUrl = new URL(rpcUrl);
  parsedUrl.protocol = parsedUrl.protocol === "https:" ? "wss:" : "ws:";
  return parsedUrl.toString();
}

// src/kit/client.ts
var CpAmmKitClient = class _CpAmmKitClient {
  constructor(options) {
    this.rpc = options.rpc;
    this.rpcSubscriptions = options.rpcSubscriptions;
  }
  static fromRpc(rpc, options = {}) {
    return new _CpAmmKitClient({
      rpc,
      rpcSubscriptions: options.rpcSubscriptions
    });
  }
  static fromRpcUrl(rpcUrl, options = {}) {
    var _a;
    const rpcSubscriptionsUrl = (_a = options.rpcSubscriptionsUrl) != null ? _a : getDefaultRpcSubscriptionsUrl(rpcUrl);
    return new _CpAmmKitClient({
      rpc: createSolanaRpc(rpcUrl),
      rpcSubscriptions: createSolanaRpcSubscriptions(rpcSubscriptionsUrl)
    });
  }
  static fromRpcAndSubscriptions(rpc, rpcSubscriptions, options = {}) {
    return new _CpAmmKitClient({
      rpc,
      rpcSubscriptions
    });
  }
  fetchConfigState(config) {
    return __async(this, null, function* () {
      return yield fetchConfigState(this.rpc, config);
    });
  }
  fetchPoolState(pool) {
    return __async(this, null, function* () {
      return yield fetchPoolState(this.rpc, pool);
    });
  }
  fetchPoolStatesByTokenAMint(tokenAMint) {
    return __async(this, null, function* () {
      return yield fetchPoolStatesByTokenAMint(this.rpc, tokenAMint);
    });
  }
  fetchPoolFees(pool) {
    return __async(this, null, function* () {
      return yield fetchPoolFees(this.rpc, pool);
    });
  }
  fetchPositionState(position) {
    return __async(this, null, function* () {
      return yield fetchPositionState(this.rpc, position);
    });
  }
  getMultipleConfigs(configs) {
    return __async(this, null, function* () {
      return yield getMultipleConfigs(this.rpc, configs);
    });
  }
  getMultiplePools(pools) {
    return __async(this, null, function* () {
      return yield getMultiplePools(this.rpc, pools);
    });
  }
  getMultiplePositions(positions) {
    return __async(this, null, function* () {
      return yield getMultiplePositions(this.rpc, positions);
    });
  }
  getAllConfigs() {
    return __async(this, null, function* () {
      return yield getAllConfigs(this.rpc);
    });
  }
  getStaticConfigs() {
    return __async(this, null, function* () {
      return yield getStaticConfigs(this.rpc);
    });
  }
  getAllPools() {
    return __async(this, null, function* () {
      return yield getAllPools(this.rpc);
    });
  }
  getAllPositions() {
    return __async(this, null, function* () {
      return yield getAllPositions(this.rpc);
    });
  }
  getAllPositionsByPool(pool) {
    return __async(this, null, function* () {
      return yield getAllPositionsByPool(this.rpc, pool);
    });
  }
  getPositionsByUser(user) {
    return __async(this, null, function* () {
      return yield getPositionsByUser(this.rpc, user);
    });
  }
  getUserPositionByPool(pool, user) {
    return __async(this, null, function* () {
      return yield getUserPositionByPool(this.rpc, pool, user);
    });
  }
  getAllVestingsByPosition(position) {
    return __async(this, null, function* () {
      return yield getAllVestingsByPosition(this.rpc, position);
    });
  }
  isPoolExist(pool) {
    return __async(this, null, function* () {
      return yield isPoolExist(this.rpc, pool);
    });
  }
  getQuote(params) {
    return getQuote(params);
  }
  getQuote2(params) {
    return getQuote2(params);
  }
  getDepositQuote(params) {
    return getDepositQuote(params);
  }
  getWithdrawQuote(params) {
    return getWithdrawQuote(params);
  }
  getLiquidityDelta(params) {
    return getLiquidityDelta(params);
  }
  preparePoolCreationSingleSide(params) {
    return preparePoolCreationSingleSide(params);
  }
  preparePoolCreationParams(params) {
    return preparePoolCreationParams(params);
  }
  isLockedPosition(position) {
    return isLockedPosition(position);
  }
  isPermanentLockedPosition(position) {
    return isPermanentLockedPosition(position);
  }
  canUnlockPosition(positionState, vestings, currentPoint) {
    return canUnlockPosition(positionState, vestings, currentPoint);
  }
  createCustomPool(params) {
    return __async(this, null, function* () {
      return yield createCustomPoolPlan(params);
    });
  }
  createCustomPoolWithDynamicConfig(params) {
    return __async(this, null, function* () {
      return yield createCustomPoolWithDynamicConfigPlan(params);
    });
  }
  createPool(params) {
    return __async(this, null, function* () {
      return yield createPoolPlan(params);
    });
  }
  createPosition(params) {
    return __async(this, null, function* () {
      return yield createPositionPlan(params);
    });
  }
  addLiquidity(params) {
    return __async(this, null, function* () {
      return yield addLiquidityPlan(params);
    });
  }
  createPositionAndAddLiquidity(params) {
    return __async(this, null, function* () {
      return yield createPositionAndAddLiquidityPlan(params);
    });
  }
  removeLiquidity(params) {
    return __async(this, null, function* () {
      return yield removeLiquidityPlan(params);
    });
  }
  removeAllLiquidity(params) {
    return __async(this, null, function* () {
      return yield removeAllLiquidityPlan(params);
    });
  }
  removeAllLiquidityAndClosePosition(params) {
    return __async(this, null, function* () {
      return yield removeAllLiquidityAndClosePositionPlan(params);
    });
  }
  lockPosition(params) {
    return __async(this, null, function* () {
      return yield lockPositionPlan(params);
    });
  }
  permanentLockPosition(params) {
    return __async(this, null, function* () {
      return yield permanentLockPositionPlan(params);
    });
  }
  refreshVesting(params) {
    return __async(this, null, function* () {
      return yield refreshVestingPlan(params);
    });
  }
  closePosition(params) {
    return __async(this, null, function* () {
      return yield closePositionPlan(params);
    });
  }
  mergePosition(params) {
    return __async(this, null, function* () {
      return yield mergePositionPlan(params);
    });
  }
  splitPosition(params) {
    return __async(this, null, function* () {
      return yield splitPositionPlan(params);
    });
  }
  splitPosition2(params) {
    return __async(this, null, function* () {
      return yield splitPosition2Plan(params);
    });
  }
  claimPositionFee(params) {
    return __async(this, null, function* () {
      return yield claimPositionFeePlan(params);
    });
  }
  claimPositionFee2(params) {
    return __async(this, null, function* () {
      return yield claimPositionFee2Plan(params);
    });
  }
  initializeReward(params) {
    return __async(this, null, function* () {
      return yield initializeRewardPlan(this.rpc, params);
    });
  }
  initializeAndFundReward(params) {
    return __async(this, null, function* () {
      return yield initializeAndFundRewardPlan(this.rpc, params);
    });
  }
  updateRewardDuration(params) {
    return __async(this, null, function* () {
      return yield updateRewardDurationPlan(params);
    });
  }
  updateRewardFunder(params) {
    return __async(this, null, function* () {
      return yield updateRewardFunderPlan(params);
    });
  }
  fundReward(params) {
    return __async(this, null, function* () {
      return yield fundRewardPlan(params);
    });
  }
  withdrawIneligibleReward(params) {
    return __async(this, null, function* () {
      return yield withdrawIneligibleRewardPlan(this.rpc, params);
    });
  }
  claimReward(params) {
    return __async(this, null, function* () {
      return yield claimRewardPlan(params);
    });
  }
  swap(params) {
    return __async(this, null, function* () {
      return yield swapPlan(this.rpc, params);
    });
  }
  swap2(params) {
    return __async(this, null, function* () {
      return yield swap2Plan(this.rpc, params);
    });
  }
};
export {
  ActivationType,
  BaseFeeMode,
  CONFIG_DISCRIMINATOR_OFFSET,
  CollectFeeMode,
  CpAmmKitClient,
  POOL_TOKEN_A_MINT_OFFSET,
  POSITION_POOL_OFFSET,
  SwapMode,
  VESTING_POSITION_OFFSET,
  adaptGeneratedAccountRecord,
  adaptGeneratedValue,
  addressMemcmpFilter,
  bytesMemcmpFilter,
  configDiscriminatorFilter,
  decodePodAlignedFeeMarketCapScheduler,
  decodePodAlignedFeeRateLimiter,
  decodePodAlignedFeeTimeScheduler,
  decodePoolFeeData,
  getBase64ProgramAccounts,
  getDefaultRpcSubscriptionsUrl,
  getJsonParsedTokenAccountsByOwner,
  poolByTokenAMintFilter,
  poolDiscriminatorFilter,
  positionByPoolFilter,
  positionDiscriminatorFilter,
  vestingByPositionFilter,
  vestingDiscriminatorFilter
};
//# sourceMappingURL=index.mjs.map