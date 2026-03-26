"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }












var _chunkANN74BKIjs = require('../chunk-ANN74BKI.js');

// src/kit/client.ts



var _kit = require('@solana/kit');

// src/kit/builders/common.ts





// src/kit/generated/accounts/config.ts


























// src/kit/generated/types/baseFeeInfo.ts









function getBaseFeeInfoDecoder() {
  return _kit.getStructDecoder.call(void 0, [["data", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 32)]]);
}

// src/kit/generated/types/baseFeeParameters.ts









function getBaseFeeParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [["data", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 27)]]);
}

// src/kit/generated/types/baseFeeStruct.ts







function getBaseFeeStructDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["baseFeeInfo", getBaseFeeInfoDecoder()],
    ["padding1", _kit.getU64Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/borshFeeMarketCapScheduler.ts














// src/kit/generated/types/borshFeeRateLimiter.ts














// src/kit/generated/types/borshFeeTimeScheduler.ts












// src/kit/generated/types/dynamicFeeConfig.ts

















function getDynamicFeeConfigDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["initialized", _kit.getU8Decoder.call(void 0, )],
    ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 7)],
    ["maxVolatilityAccumulator", _kit.getU32Decoder.call(void 0, )],
    ["variableFeeControl", _kit.getU32Decoder.call(void 0, )],
    ["binStep", _kit.getU16Decoder.call(void 0, )],
    ["filterPeriod", _kit.getU16Decoder.call(void 0, )],
    ["decayPeriod", _kit.getU16Decoder.call(void 0, )],
    ["reductionFactor", _kit.getU16Decoder.call(void 0, )],
    ["padding1", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["binStepU128", _kit.getU128Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/dynamicFeeParameters.ts











function getDynamicFeeParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["binStep", _kit.getU16Encoder.call(void 0, )],
    ["binStepU128", _kit.getU128Encoder.call(void 0, )],
    ["filterPeriod", _kit.getU16Encoder.call(void 0, )],
    ["decayPeriod", _kit.getU16Encoder.call(void 0, )],
    ["reductionFactor", _kit.getU16Encoder.call(void 0, )],
    ["maxVolatilityAccumulator", _kit.getU32Encoder.call(void 0, )],
    ["variableFeeControl", _kit.getU32Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/dynamicFeeStruct.ts



















function getDynamicFeeStructDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["initialized", _kit.getU8Decoder.call(void 0, )],
    ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 7)],
    ["maxVolatilityAccumulator", _kit.getU32Decoder.call(void 0, )],
    ["variableFeeControl", _kit.getU32Decoder.call(void 0, )],
    ["binStep", _kit.getU16Decoder.call(void 0, )],
    ["filterPeriod", _kit.getU16Decoder.call(void 0, )],
    ["decayPeriod", _kit.getU16Decoder.call(void 0, )],
    ["reductionFactor", _kit.getU16Decoder.call(void 0, )],
    ["lastUpdateTimestamp", _kit.getU64Decoder.call(void 0, )],
    ["binStepU128", _kit.getU128Decoder.call(void 0, )],
    ["sqrtPriceReference", _kit.getU128Decoder.call(void 0, )],
    ["volatilityAccumulator", _kit.getU128Decoder.call(void 0, )],
    ["volatilityReference", _kit.getU128Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/evtClaimPositionFee.ts










// src/kit/generated/types/evtClaimProtocolFee.ts










// src/kit/generated/types/evtClaimReward.ts












// src/kit/generated/types/evtCloseConfig.ts








// src/kit/generated/types/evtClosePosition.ts








// src/kit/generated/types/evtCreateConfig.ts














// src/kit/generated/types/evtCreateDynamicConfig.ts










// src/kit/generated/types/evtCreatePosition.ts








// src/kit/generated/types/evtCreateTokenBadge.ts








// src/kit/generated/types/evtFundReward.ts














// src/kit/generated/types/evtInitializePool.ts














// src/kit/generated/types/evtInitializeReward.ts












// src/kit/generated/types/evtLiquidityChange.ts














// src/kit/generated/types/evtLockPosition.ts














// src/kit/generated/types/evtPermanentLockPosition.ts










// src/kit/generated/types/evtSetPoolStatus.ts










// src/kit/generated/types/evtSplitPosition2.ts










// src/kit/generated/types/evtSplitPosition3.ts










// src/kit/generated/types/evtSwap2.ts














// src/kit/generated/types/evtUpdatePoolFees.ts








// src/kit/generated/types/evtUpdateRewardDuration.ts












// src/kit/generated/types/evtUpdateRewardFunder.ts










// src/kit/generated/types/evtWithdrawIneligibleReward.ts










// src/kit/generated/types/initializeCustomizablePoolParameters.ts















function getInitializeCustomizablePoolParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["poolFees", getPoolFeeParametersEncoder()],
    ["sqrtMinPrice", _kit.getU128Encoder.call(void 0, )],
    ["sqrtMaxPrice", _kit.getU128Encoder.call(void 0, )],
    ["hasAlphaVault", _kit.getBooleanEncoder.call(void 0, )],
    ["liquidity", _kit.getU128Encoder.call(void 0, )],
    ["sqrtPrice", _kit.getU128Encoder.call(void 0, )],
    ["activationType", _kit.getU8Encoder.call(void 0, )],
    ["collectFeeMode", _kit.getU8Encoder.call(void 0, )],
    ["activationPoint", _kit.getOptionEncoder.call(void 0, _kit.getU64Encoder.call(void 0, ))]
  ]);
}

// src/kit/generated/types/innerVesting.ts















function getInnerVestingDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["cliffPoint", _kit.getU64Decoder.call(void 0, )],
    ["periodFrequency", _kit.getU64Decoder.call(void 0, )],
    ["cliffUnlockLiquidity", _kit.getU128Decoder.call(void 0, )],
    ["liquidityPerPeriod", _kit.getU128Decoder.call(void 0, )],
    ["totalReleasedLiquidity", _kit.getU128Decoder.call(void 0, )],
    ["numberOfPeriod", _kit.getU16Decoder.call(void 0, )],
    ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 14)]
  ]);
}

// src/kit/generated/types/poolFeeParameters.ts











function getPoolFeeParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["baseFee", getBaseFeeParametersEncoder()],
    ["compoundingFeeBps", _kit.getU16Encoder.call(void 0, )],
    ["padding", _kit.getU8Encoder.call(void 0, )],
    ["dynamicFee", _kit.getOptionEncoder.call(void 0, getDynamicFeeParametersEncoder())]
  ]);
}

// src/kit/generated/types/poolFeesConfig.ts

















function getPoolFeesConfigDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["baseFee", getBaseFeeInfoDecoder()],
    ["dynamicFee", getDynamicFeeConfigDecoder()],
    ["protocolFeePercent", _kit.getU8Decoder.call(void 0, )],
    ["padding0", _kit.getU8Decoder.call(void 0, )],
    ["referralFeePercent", _kit.getU8Decoder.call(void 0, )],
    ["padding1", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 3)],
    ["compoundingFeeBps", _kit.getU16Decoder.call(void 0, )],
    ["padding2", _kit.getArrayDecoder.call(void 0, _kit.getU64Decoder.call(void 0, ), { size: 5 })]
  ]);
}

// src/kit/generated/types/poolFeesStruct.ts















function getPoolFeesStructDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["baseFee", getBaseFeeStructDecoder()],
    ["protocolFeePercent", _kit.getU8Decoder.call(void 0, )],
    ["padding0", _kit.getU8Decoder.call(void 0, )],
    ["referralFeePercent", _kit.getU8Decoder.call(void 0, )],
    ["padding1", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 3)],
    ["compoundingFeeBps", _kit.getU16Decoder.call(void 0, )],
    ["dynamicFee", getDynamicFeeStructDecoder()],
    ["initSqrtPrice", _kit.getU128Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/poolMetrics.ts











function getPoolMetricsDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["totalLpAFee", _kit.getU128Decoder.call(void 0, )],
    ["totalLpBFee", _kit.getU128Decoder.call(void 0, )],
    ["totalProtocolAFee", _kit.getU64Decoder.call(void 0, )],
    ["totalProtocolBFee", _kit.getU64Decoder.call(void 0, )],
    ["padding0", _kit.getArrayDecoder.call(void 0, _kit.getU64Decoder.call(void 0, ), { size: 2 })],
    ["totalPosition", _kit.getU64Decoder.call(void 0, )],
    ["padding", _kit.getU64Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/positionMetrics.ts







function getPositionMetricsDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["totalClaimedAFee", _kit.getU64Decoder.call(void 0, )],
    ["totalClaimedBFee", _kit.getU64Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/rewardInfo.ts

















function getRewardInfoDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["initialized", _kit.getU8Decoder.call(void 0, )],
    ["rewardTokenFlag", _kit.getU8Decoder.call(void 0, )],
    ["padding0", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 6)],
    ["padding1", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["mint", _kit.getAddressDecoder.call(void 0, )],
    ["vault", _kit.getAddressDecoder.call(void 0, )],
    ["funder", _kit.getAddressDecoder.call(void 0, )],
    ["rewardDuration", _kit.getU64Decoder.call(void 0, )],
    ["rewardDurationEnd", _kit.getU64Decoder.call(void 0, )],
    ["rewardRate", _kit.getU128Decoder.call(void 0, )],
    ["rewardPerTokenStored", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 32)],
    ["lastUpdateTime", _kit.getU64Decoder.call(void 0, )],
    ["cumulativeSecondsWithEmptyLiquidityReward", _kit.getU64Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/splitAmountInfo.ts










// src/kit/generated/types/splitAmountInfo2.ts










// src/kit/generated/types/splitPositionInfo.ts










// src/kit/generated/types/splitPositionInfo2.ts










// src/kit/generated/types/splitPositionParameters2.ts








// src/kit/generated/types/splitPositionParameters3.ts








// src/kit/generated/types/swapParameters2.ts









function getSwapParameters2Encoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["amount0", _kit.getU64Encoder.call(void 0, )],
    ["amount1", _kit.getU64Encoder.call(void 0, )],
    ["swapMode", _kit.getU8Encoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/swapResult2.ts










// src/kit/generated/types/updatePoolFeesParameters.ts










// src/kit/generated/types/userRewardInfo.ts











function getUserRewardInfoDecoder() {
  return _kit.getStructDecoder.call(void 0, [
    ["rewardPerTokenCheckpoint", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 32)],
    ["rewardPendings", _kit.getU64Decoder.call(void 0, )],
    ["totalClaimedRewards", _kit.getU64Decoder.call(void 0, )]
  ]);
}

// src/kit/generated/types/vestingParameters.ts













function getVestingParametersEncoder() {
  return _kit.getStructEncoder.call(void 0, [
    ["cliffPoint", _kit.getOptionEncoder.call(void 0, _kit.getU64Encoder.call(void 0, ))],
    ["periodFrequency", _kit.getU64Encoder.call(void 0, )],
    ["cliffUnlockLiquidity", _kit.getU128Encoder.call(void 0, )],
    ["liquidityPerPeriod", _kit.getU128Encoder.call(void 0, )],
    ["numberOfPeriod", _kit.getU16Encoder.call(void 0, )]
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
  return _kit.getStructDecoder.call(void 0, [
    ["discriminator", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["vaultConfigKey", _kit.getAddressDecoder.call(void 0, )],
    ["poolCreatorAuthority", _kit.getAddressDecoder.call(void 0, )],
    ["poolFees", getPoolFeesConfigDecoder()],
    ["activationType", _kit.getU8Decoder.call(void 0, )],
    ["collectFeeMode", _kit.getU8Decoder.call(void 0, )],
    ["configType", _kit.getU8Decoder.call(void 0, )],
    ["padding0", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 5)],
    ["index", _kit.getU64Decoder.call(void 0, )],
    ["sqrtMinPrice", _kit.getU128Decoder.call(void 0, )],
    ["sqrtMaxPrice", _kit.getU128Decoder.call(void 0, )],
    ["padding1", _kit.getArrayDecoder.call(void 0, _kit.getU64Decoder.call(void 0, ), { size: 10 })]
  ]);
}
function decodeConfig(encodedAccount) {
  return _kit.decodeAccount.call(void 0, 
    encodedAccount,
    getConfigDecoder()
  );
}
function fetchConfig(rpc, address5, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccount = yield fetchMaybeConfig(rpc, address5, config);
    _kit.assertAccountExists.call(void 0, maybeAccount);
    return maybeAccount;
  });
}
function fetchMaybeConfig(rpc, address5, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccount = yield _kit.fetchEncodedAccount.call(void 0, rpc, address5, config);
    return decodeConfig(maybeAccount);
  });
}
function fetchAllConfig(rpc, addresses, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccounts = yield fetchAllMaybeConfig(rpc, addresses, config);
    _kit.assertAccountsExist.call(void 0, maybeAccounts);
    return maybeAccounts;
  });
}
function fetchAllMaybeConfig(rpc, addresses, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccounts = yield _kit.fetchEncodedAccounts.call(void 0, rpc, addresses, config);
    return maybeAccounts.map((maybeAccount) => decodeConfig(maybeAccount));
  });
}

// src/kit/generated/accounts/operator.ts























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























var POD_ALIGNED_FEE_MARKET_CAP_SCHEDULER_DISCRIMINATOR = new Uint8Array([251, 130, 208, 253, 245, 27, 145, 203]);

// src/kit/generated/accounts/podAlignedFeeRateLimiter.ts























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
  return _kit.getStructDecoder.call(void 0, [
    ["discriminator", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["poolFees", getPoolFeesStructDecoder()],
    ["tokenAMint", _kit.getAddressDecoder.call(void 0, )],
    ["tokenBMint", _kit.getAddressDecoder.call(void 0, )],
    ["tokenAVault", _kit.getAddressDecoder.call(void 0, )],
    ["tokenBVault", _kit.getAddressDecoder.call(void 0, )],
    ["whitelistedVault", _kit.getAddressDecoder.call(void 0, )],
    ["padding0", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 32)],
    ["liquidity", _kit.getU128Decoder.call(void 0, )],
    ["padding1", _kit.getU128Decoder.call(void 0, )],
    ["protocolAFee", _kit.getU64Decoder.call(void 0, )],
    ["protocolBFee", _kit.getU64Decoder.call(void 0, )],
    ["padding2", _kit.getU128Decoder.call(void 0, )],
    ["sqrtMinPrice", _kit.getU128Decoder.call(void 0, )],
    ["sqrtMaxPrice", _kit.getU128Decoder.call(void 0, )],
    ["sqrtPrice", _kit.getU128Decoder.call(void 0, )],
    ["activationPoint", _kit.getU64Decoder.call(void 0, )],
    ["activationType", _kit.getU8Decoder.call(void 0, )],
    ["poolStatus", _kit.getU8Decoder.call(void 0, )],
    ["tokenAFlag", _kit.getU8Decoder.call(void 0, )],
    ["tokenBFlag", _kit.getU8Decoder.call(void 0, )],
    ["collectFeeMode", _kit.getU8Decoder.call(void 0, )],
    ["poolType", _kit.getU8Decoder.call(void 0, )],
    ["feeVersion", _kit.getU8Decoder.call(void 0, )],
    ["padding3", _kit.getU8Decoder.call(void 0, )],
    ["feeAPerLiquidity", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 32)],
    ["feeBPerLiquidity", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 32)],
    ["permanentLockLiquidity", _kit.getU128Decoder.call(void 0, )],
    ["metrics", getPoolMetricsDecoder()],
    ["creator", _kit.getAddressDecoder.call(void 0, )],
    ["tokenAAmount", _kit.getU64Decoder.call(void 0, )],
    ["tokenBAmount", _kit.getU64Decoder.call(void 0, )],
    ["layoutVersion", _kit.getU8Decoder.call(void 0, )],
    ["padding4", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 7)],
    ["padding5", _kit.getArrayDecoder.call(void 0, _kit.getU64Decoder.call(void 0, ), { size: 3 })],
    ["rewardInfos", _kit.getArrayDecoder.call(void 0, getRewardInfoDecoder(), { size: 2 })]
  ]);
}
function decodePool(encodedAccount) {
  return _kit.decodeAccount.call(void 0, 
    encodedAccount,
    getPoolDecoder()
  );
}
function fetchPool(rpc, address5, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccount = yield fetchMaybePool(rpc, address5, config);
    _kit.assertAccountExists.call(void 0, maybeAccount);
    return maybeAccount;
  });
}
function fetchMaybePool(rpc, address5, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccount = yield _kit.fetchEncodedAccount.call(void 0, rpc, address5, config);
    return decodePool(maybeAccount);
  });
}
function fetchAllPool(rpc, addresses, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccounts = yield fetchAllMaybePool(rpc, addresses, config);
    _kit.assertAccountsExist.call(void 0, maybeAccounts);
    return maybeAccounts;
  });
}
function fetchAllMaybePool(rpc, addresses, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccounts = yield _kit.fetchEncodedAccounts.call(void 0, rpc, addresses, config);
    return maybeAccounts.map((maybeAccount) => decodePool(maybeAccount));
  });
}

// src/kit/generated/accounts/position.ts























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
  return _kit.getStructDecoder.call(void 0, [
    ["discriminator", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["pool", _kit.getAddressDecoder.call(void 0, )],
    ["nftMint", _kit.getAddressDecoder.call(void 0, )],
    ["feeAPerTokenCheckpoint", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 32)],
    ["feeBPerTokenCheckpoint", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 32)],
    ["feeAPending", _kit.getU64Decoder.call(void 0, )],
    ["feeBPending", _kit.getU64Decoder.call(void 0, )],
    ["unlockedLiquidity", _kit.getU128Decoder.call(void 0, )],
    ["vestedLiquidity", _kit.getU128Decoder.call(void 0, )],
    ["permanentLockedLiquidity", _kit.getU128Decoder.call(void 0, )],
    ["metrics", getPositionMetricsDecoder()],
    ["rewardInfos", _kit.getArrayDecoder.call(void 0, getUserRewardInfoDecoder(), { size: 2 })],
    ["innerVesting", getInnerVestingDecoder()],
    ["padding", _kit.getU128Decoder.call(void 0, )]
  ]);
}
function decodePosition(encodedAccount) {
  return _kit.decodeAccount.call(void 0, 
    encodedAccount,
    getPositionDecoder()
  );
}
function fetchPosition(rpc, address5, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccount = yield fetchMaybePosition(rpc, address5, config);
    _kit.assertAccountExists.call(void 0, maybeAccount);
    return maybeAccount;
  });
}
function fetchMaybePosition(rpc, address5, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccount = yield _kit.fetchEncodedAccount.call(void 0, rpc, address5, config);
    return decodePosition(maybeAccount);
  });
}
function fetchAllPosition(rpc, addresses, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccounts = yield fetchAllMaybePosition(rpc, addresses, config);
    _kit.assertAccountsExist.call(void 0, maybeAccounts);
    return maybeAccounts;
  });
}
function fetchAllMaybePosition(rpc, addresses, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const maybeAccounts = yield _kit.fetchEncodedAccounts.call(void 0, rpc, addresses, config);
    return maybeAccounts.map((maybeAccount) => decodePosition(maybeAccount));
  });
}

// src/kit/generated/accounts/tokenBadge.ts

















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
  return _kit.getStructDecoder.call(void 0, [
    ["discriminator", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 8)],
    ["position", _kit.getAddressDecoder.call(void 0, )],
    ["innerVesting", getInnerVestingDecoder()],
    ["padding2", _kit.getArrayDecoder.call(void 0, _kit.getU128Decoder.call(void 0, ), { size: 4 })]
  ]);
}
function decodeVesting(encodedAccount) {
  return _kit.decodeAccount.call(void 0, 
    encodedAccount,
    getVestingDecoder()
  );
}

// src/kit/generated/errors/cpAmm.ts




// src/kit/generated/programs/cpAmm.ts













var _programclientcore = require('@solana/kit/program-client-core');

// src/kit/generated/instructions/addLiquidity.ts




















// src/kit/generated/pdas/config.ts






// src/kit/generated/pdas/eventAuthority.ts




function findEventAuthorityPda() {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield _kit.getProgramDerivedAddress.call(void 0, {
      programAddress,
      seeds: [
        _kit.getBytesEncoder.call(void 0, ).encode(
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





function findOperatorPda(_0) {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield _kit.getProgramDerivedAddress.call(void 0, {
      programAddress,
      seeds: [
        _kit.getBytesEncoder.call(void 0, ).encode(
          new Uint8Array([111, 112, 101, 114, 97, 116, 111, 114])
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.whitelistedAddress)
      ]
    });
  });
}

// src/kit/generated/pdas/position.ts





function findPositionPda(_0) {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield _kit.getProgramDerivedAddress.call(void 0, {
      programAddress,
      seeds: [
        _kit.getBytesEncoder.call(void 0, ).encode(
          new Uint8Array([112, 111, 115, 105, 116, 105, 111, 110])
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.positionNftMint)
      ]
    });
  });
}

// src/kit/generated/pdas/positionNftAccount.ts





function findPositionNftAccountPda(_0) {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield _kit.getProgramDerivedAddress.call(void 0, {
      programAddress,
      seeds: [
        _kit.getBytesEncoder.call(void 0, ).encode(
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
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.positionNftMint)
      ]
    });
  });
}

// src/kit/generated/pdas/rewardVault.ts






function findRewardVaultPda(_0) {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield _kit.getProgramDerivedAddress.call(void 0, {
      programAddress,
      seeds: [
        _kit.getBytesEncoder.call(void 0, ).encode(
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
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.pool),
        _kit.getU8Encoder.call(void 0, ).encode(seeds.rewardIndex)
      ]
    });
  });
}

// src/kit/generated/pdas/tokenAVault.ts





function findTokenAVaultPda(_0) {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield _kit.getProgramDerivedAddress.call(void 0, {
      programAddress,
      seeds: [
        _kit.getBytesEncoder.call(void 0, ).encode(
          new Uint8Array([116, 111, 107, 101, 110, 95, 118, 97, 117, 108, 116])
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.tokenAMint),
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.pool)
      ]
    });
  });
}

// src/kit/generated/pdas/tokenBadge.ts





function findTokenBadgePda(_0) {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield _kit.getProgramDerivedAddress.call(void 0, {
      programAddress,
      seeds: [
        _kit.getBytesEncoder.call(void 0, ).encode(
          new Uint8Array([116, 111, 107, 101, 110, 95, 98, 97, 100, 103, 101])
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.tokenMint)
      ]
    });
  });
}

// src/kit/generated/pdas/tokenBVault.ts





function findTokenBVaultPda(_0) {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (seeds, config = {}) {
    const {
      programAddress = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG"
    } = config;
    return yield _kit.getProgramDerivedAddress.call(void 0, {
      programAddress,
      seeds: [
        _kit.getBytesEncoder.call(void 0, ).encode(
          new Uint8Array([116, 111, 107, 101, 110, 95, 118, 97, 117, 108, 116])
        ),
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.tokenBMint),
        _kit.getAddressEncoder.call(void 0, ).encode(seeds.pool)
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["liquidityDelta", _kit.getU128Encoder.call(void 0, )],
      ["tokenAAmountThreshold", _kit.getU64Encoder.call(void 0, )],
      ["tokenBAmountThreshold", _kit.getU64Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: ADD_LIQUIDITY_DISCRIMINATOR })
  );
}
function getAddLiquidityInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: CLAIM_POSITION_FEE_DISCRIMINATOR })
  );
}
function getClaimPositionFeeInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["rewardIndex", _kit.getU8Encoder.call(void 0, )],
      ["skipReward", _kit.getU8Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: CLAIM_REWARD_DISCRIMINATOR })
  );
}
function getClaimRewardInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: CLOSE_POSITION_DISCRIMINATOR })
  );
}
function getClosePositionInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: CREATE_POSITION_DISCRIMINATOR })
  );
}
function getCreatePositionInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
        positionNftMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.position.value) {
      accounts.position.value = yield findPositionPda({
        positionNftMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
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
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["rewardIndex", _kit.getU8Encoder.call(void 0, )],
      ["amount", _kit.getU64Encoder.call(void 0, )],
      ["carryForward", _kit.getBooleanEncoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: FUND_REWARD_DISCRIMINATOR })
  );
}
function getFundRewardInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getInitializeCustomizablePoolParametersEncoder()]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), {
      discriminator: INITIALIZE_CUSTOMIZABLE_POOL_DISCRIMINATOR
    })
  );
}
function getInitializeCustomizablePoolInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.positionNftAccount.value) {
      accounts.positionNftAccount.value = yield findPositionNftAccountPda({
        positionNftMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
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
        positionNftMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.tokenAVault.value) {
      accounts.tokenAVault.value = yield findTokenAVaultPda({
        tokenAMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "tokenAMint",
          accounts.tokenAMint.value
        ),
        pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.tokenBVault.value) {
      accounts.tokenBVault.value = yield findTokenBVaultPda({
        tokenBMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "tokenBMint",
          accounts.tokenBMint.value
        ),
        pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
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
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["liquidity", _kit.getU128Encoder.call(void 0, )],
      ["sqrtPrice", _kit.getU128Encoder.call(void 0, )],
      ["activationPoint", _kit.getOptionEncoder.call(void 0, _kit.getU64Encoder.call(void 0, ))]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: INITIALIZE_POOL_DISCRIMINATOR })
  );
}
function getInitializePoolInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.positionNftAccount.value) {
      accounts.positionNftAccount.value = yield findPositionNftAccountPda({
        positionNftMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
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
        positionNftMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.tokenAVault.value) {
      accounts.tokenAVault.value = yield findTokenAVaultPda({
        tokenAMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "tokenAMint",
          accounts.tokenAMint.value
        ),
        pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.tokenBVault.value) {
      accounts.tokenBVault.value = yield findTokenBVaultPda({
        tokenBMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "tokenBMint",
          accounts.tokenBMint.value
        ),
        pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
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
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
















var INITIALIZE_POOL_WITH_DYNAMIC_CONFIG_DISCRIMINATOR = new Uint8Array(
  [149, 82, 72, 197, 253, 252, 68, 15]
);
function getInitializePoolWithDynamicConfigInstructionDataEncoder() {
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getInitializeCustomizablePoolParametersEncoder()]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), {
      discriminator: INITIALIZE_POOL_WITH_DYNAMIC_CONFIG_DISCRIMINATOR
    })
  );
}
function getInitializePoolWithDynamicConfigInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.positionNftAccount.value) {
      accounts.positionNftAccount.value = yield findPositionNftAccountPda({
        positionNftMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
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
        positionNftMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "positionNftMint",
          accounts.positionNftMint.value
        )
      });
    }
    if (!accounts.tokenAVault.value) {
      accounts.tokenAVault.value = yield findTokenAVaultPda({
        tokenAMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "tokenAMint",
          accounts.tokenAMint.value
        ),
        pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "pool",
          accounts.pool.value
        )
      });
    }
    if (!accounts.tokenBVault.value) {
      accounts.tokenBVault.value = yield findTokenBVaultPda({
        tokenBMint: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "tokenBMint",
          accounts.tokenBMint.value
        ),
        pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
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
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["rewardIndex", _kit.getU8Encoder.call(void 0, )],
      ["rewardDuration", _kit.getU64Encoder.call(void 0, )],
      ["funder", _kit.getAddressEncoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: INITIALIZE_REWARD_DISCRIMINATOR })
  );
}
function getInitializeRewardInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.rewardVault.value) {
      accounts.rewardVault.value = yield findRewardVaultPda({
        pool: _programclientcore.getAddressFromResolvedInstructionAccount.call(void 0, 
          "pool",
          accounts.pool.value
        ),
        rewardIndex: _programclientcore.getNonNullResolvedInstructionInput.call(void 0, 
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
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getVestingParametersEncoder()]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: LOCK_INNER_POSITION_DISCRIMINATOR })
  );
}
function getLockInnerPositionInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getVestingParametersEncoder()]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: LOCK_POSITION_DISCRIMINATOR })
  );
}
function getLockPositionInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.systemProgram.value) {
      accounts.systemProgram.value = "11111111111111111111111111111111";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["permanentLockLiquidity", _kit.getU128Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), {
      discriminator: PERMANENT_LOCK_POSITION_DISCRIMINATOR
    })
  );
}
function getPermanentLockPositionInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)]]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: REFRESH_VESTING_DISCRIMINATOR })
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
  const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["tokenAAmountThreshold", _kit.getU64Encoder.call(void 0, )],
      ["tokenBAmountThreshold", _kit.getU64Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), {
      discriminator: REMOVE_ALL_LIQUIDITY_DISCRIMINATOR
    })
  );
}
function getRemoveAllLiquidityInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["liquidityDelta", _kit.getU128Encoder.call(void 0, )],
      ["tokenAAmountThreshold", _kit.getU64Encoder.call(void 0, )],
      ["tokenBAmountThreshold", _kit.getU64Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: REMOVE_LIQUIDITY_DISCRIMINATOR })
  );
}
function getRemoveLiquidityInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["unlockedLiquidityPercentage", _kit.getU8Encoder.call(void 0, )],
      ["permanentLockedLiquidityPercentage", _kit.getU8Encoder.call(void 0, )],
      ["feeAPercentage", _kit.getU8Encoder.call(void 0, )],
      ["feeBPercentage", _kit.getU8Encoder.call(void 0, )],
      ["reward0Percentage", _kit.getU8Encoder.call(void 0, )],
      ["reward1Percentage", _kit.getU8Encoder.call(void 0, )],
      ["innerVestingLiquidityPercentage", _kit.getU8Encoder.call(void 0, )],
      ["padding", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 15)]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: SPLIT_POSITION_DISCRIMINATOR })
  );
}
function getSplitPositionInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["numerator", _kit.getU32Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: SPLIT_POSITION2_DISCRIMINATOR })
  );
}
function getSplitPosition2InstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["amountIn", _kit.getU64Encoder.call(void 0, )],
      ["minimumAmountOut", _kit.getU64Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: SWAP_DISCRIMINATOR })
  );
}
function getSwapInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["params", getSwapParameters2Encoder()]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), { discriminator: SWAP2_DISCRIMINATOR })
  );
}
function getSwap2InstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["rewardIndex", _kit.getU8Encoder.call(void 0, )],
      ["newDuration", _kit.getU64Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), {
      discriminator: UPDATE_REWARD_DURATION_DISCRIMINATOR
    })
  );
}
function getUpdateRewardDurationInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    var _a, _b, _c, _d, _e;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      signer: { value: (_c = input.signer) != null ? _c : null, isWritable: false },
      eventAuthority: { value: (_d = input.eventAuthority) != null ? _d : null, isWritable: false },
      program: { value: (_e = input.program) != null ? _e : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["rewardIndex", _kit.getU8Encoder.call(void 0, )],
      ["newFunder", _kit.getAddressEncoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), {
      discriminator: UPDATE_REWARD_FUNDER_DISCRIMINATOR
    })
  );
}
function getUpdateRewardFunderInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    var _a, _b, _c, _d, _e;
    const programAddress = (_a = config == null ? void 0 : config.programAddress) != null ? _a : CP_AMM_PROGRAM_ADDRESS;
    const originalAccounts = {
      pool: { value: (_b = input.pool) != null ? _b : null, isWritable: true },
      signer: { value: (_c = input.signer) != null ? _c : null, isWritable: false },
      eventAuthority: { value: (_d = input.eventAuthority) != null ? _d : null, isWritable: false },
      program: { value: (_e = input.program) != null ? _e : null, isWritable: false }
    };
    const accounts = originalAccounts;
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
  return _kit.transformEncoder.call(void 0, 
    _kit.getStructEncoder.call(void 0, [
      ["discriminator", _kit.fixEncoderSize.call(void 0, _kit.getBytesEncoder.call(void 0, ), 8)],
      ["rewardIndex", _kit.getU8Encoder.call(void 0, )]
    ]),
    (value) => _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, value), {
      discriminator: WITHDRAW_INELIGIBLE_REWARD_DISCRIMINATOR
    })
  );
}
function getWithdrawIneligibleRewardInstructionAsync(input, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    const args = _chunkANN74BKIjs.__spreadValues.call(void 0, {}, input);
    if (!accounts.poolAuthority.value) {
      accounts.poolAuthority.value = "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC";
    }
    if (!accounts.tokenProgram.value) {
      accounts.tokenProgram.value = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    }
    if (!accounts.eventAuthority.value) {
      accounts.eventAuthority.value = yield findEventAuthorityPda();
    }
    const getAccountMeta = _programclientcore.getAccountMetaFactory.call(void 0, programAddress, "programId");
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
var POOL_AUTHORITY_ADDRESS = _kit.address.call(void 0, 
  "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC"
);
var SYSVAR_INSTRUCTIONS_ADDRESS = _kit.address.call(void 0, 
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
      return Object.freeze(_chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, instruction), {
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
    role: _kit.AccountRole.READONLY
  };
}
function writableAccountMeta(address5) {
  return {
    address: address5,
    role: _kit.AccountRole.WRITABLE
  };
}
function appendRemainingAccounts(instruction, remainingAccounts) {
  if (remainingAccounts.length === 0) {
    return instruction;
  }
  return Object.freeze(_chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, instruction), {
    accounts: [...instruction.accounts, ...remainingAccounts]
  }));
}
function replaceInstructionAccount(instruction, index, account) {
  return Object.freeze(_chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, instruction), {
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



var _bnjs = require('bn.js'); var _bnjs2 = _interopRequireDefault(_bnjs);

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










var podAlignedFeeTimeSchedulerDecoder = _kit.getStructDecoder.call(void 0, [
  ["cliffFeeNumerator", _kit.getU64Decoder.call(void 0, )],
  ["baseFeeMode", _kit.getU8Decoder.call(void 0, )],
  ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 5)],
  ["numberOfPeriod", _kit.getU16Decoder.call(void 0, )],
  ["periodFrequency", _kit.getU64Decoder.call(void 0, )],
  ["reductionFactor", _kit.getU64Decoder.call(void 0, )]
]);
var podAlignedFeeMarketCapSchedulerDecoder = _kit.getStructDecoder.call(void 0, [
  ["cliffFeeNumerator", _kit.getU64Decoder.call(void 0, )],
  ["baseFeeMode", _kit.getU8Decoder.call(void 0, )],
  ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 5)],
  ["numberOfPeriod", _kit.getU16Decoder.call(void 0, )],
  ["sqrtPriceStepBps", _kit.getU32Decoder.call(void 0, )],
  ["schedulerExpirationDuration", _kit.getU32Decoder.call(void 0, )],
  ["reductionFactor", _kit.getU64Decoder.call(void 0, )]
]);
var podAlignedFeeRateLimiterDecoder = _kit.getStructDecoder.call(void 0, [
  ["cliffFeeNumerator", _kit.getU64Decoder.call(void 0, )],
  ["baseFeeMode", _kit.getU8Decoder.call(void 0, )],
  ["padding", _kit.fixDecoderSize.call(void 0, _kit.getBytesDecoder.call(void 0, ), 5)],
  ["feeIncrementBps", _kit.getU16Decoder.call(void 0, )],
  ["maxLimiterDuration", _kit.getU32Decoder.call(void 0, )],
  ["maxFeeBps", _kit.getU32Decoder.call(void 0, )],
  ["referenceAmount", _kit.getU64Decoder.call(void 0, )]
]);
function toBn(value) {
  return new (0, _bnjs2.default)(value.toString());
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


// src/kit/helpers/accountFilters.ts




var CONFIG_DISCRIMINATOR_OFFSET = 0;
var POSITION_POOL_OFFSET = 8;
var VESTING_POSITION_OFFSET = 8;
var POOL_TOKEN_A_MINT_OFFSET = 168;
function encodeBase58(bytes) {
  return _kit.getBase58Decoder.call(void 0, ).decode(bytes);
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
  return bytesMemcmpFilter(offset, _kit.getAddressEncoder.call(void 0, ).encode(value));
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
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (rpc, programAddress, filters = []) {
    const response = yield rpc.getProgramAccounts(programAddress, {
      encoding: "base64",
      filters
    }).send();
    return unwrapRpcListResponse(response).map(({ pubkey, account }) => {
      const publicKey = _kit.address.call(void 0, pubkey);
      return {
        publicKey,
        encodedAccount: _kit.parseBase64RpcAccount.call(void 0, publicKey, account)
      };
    });
  });
}
function getJsonParsedTokenAccountsByOwner(rpc, owner, programId) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
      const publicKey = _kit.address.call(void 0, pubkey);
      return {
        publicKey,
        parsedAccount: _kit.parseJsonRpcAccount.call(void 0, publicKey, account)
      };
    });
  });
}

// src/kit/helpers/state.ts

function isReadonlyUint8Array(value) {
  return value instanceof Uint8Array;
}
function isPlainObject(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function adaptGeneratedValue(value) {
  if (typeof value === "bigint") {
    return new (0, _bnjs2.default)(value.toString());
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
var DEFAULT_ADDRESS = _kit.address.call(void 0, "11111111111111111111111111111111");
var TOKEN_2022_PROGRAM_ADDRESS = _kit.address.call(void 0, 
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
    return data.mint ? _kit.address.call(void 0, data.mint) : null;
  }
  return null;
}
function fetchConfigState(rpc, config) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const account = yield fetchConfig(rpc, config);
    return adaptKitValue(account.data);
  });
}
function fetchPoolState(rpc, pool) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const account = yield fetchPool(rpc, pool);
    return adaptKitValue(account.data);
  });
}
function fetchPoolStatesByTokenAMint(rpc, tokenAMint) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const poolState = yield fetchPoolState(rpc, pool);
    return decodePoolFeeData(poolState.poolFees.baseFee.baseFeeInfo.data);
  });
}
function fetchPositionState(rpc, position) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const account = yield fetchPosition(rpc, position);
    return adaptKitValue(account.data);
  });
}
function getMultipleConfigs(rpc, configs) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const accounts = yield fetchAllConfig(rpc, [...configs]);
    return accounts.map((account) => adaptKitValue(account.data));
  });
}
function getMultiplePools(rpc, pools) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const accounts = yield fetchAllPool(rpc, [...pools]);
    return accounts.map((account) => adaptKitValue(account.data));
  });
}
function getMultiplePositions(rpc, positions) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const accounts = yield fetchAllPosition(rpc, [...positions]);
    return accounts.map(
      (account) => adaptKitValue(account.data)
    );
  });
}
function getAllConfigs(rpc) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const configs = yield getAllConfigs(rpc);
    return configs.filter(
      (config) => config.account.configType === 0 && config.account.vaultConfigKey === DEFAULT_ADDRESS && config.account.poolCreatorAuthority === DEFAULT_ADDRESS
    );
  });
}
function getAllPools(rpc) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
      positionNftAccounts.map((_0) => _chunkANN74BKIjs.__async.call(void 0, null, [_0], function* ({ positionNft }) {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const positions = yield getPositionsByUser(rpc, user);
    return positions.filter((position) => position.positionState.pool === pool);
  });
}
function isPoolExist(rpc, pool) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    try {
      const maybePool = yield fetchMaybePool(rpc, pool);
      return maybePool.exists;
    } catch (e) {
      return false;
    }
  });
}

// src/kit/builders/pda.ts




var addressEncoder = _kit.getAddressEncoder.call(void 0, );
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const [firstMint, secondMint] = sortedMintSeeds(tokenAMint, tokenBMint);
    const [pool] = yield _kit.getProgramDerivedAddress.call(void 0, {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const [firstMint, secondMint] = sortedMintSeeds(tokenAMint, tokenBMint);
    const [pool] = yield _kit.getProgramDerivedAddress.call(void 0, {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const [operator] = yield findOperatorPda({ whitelistedAddress });
    return operator;
  });
}
function deriveTokenBadgeAddress(tokenMint) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const [tokenBadge] = yield findTokenBadgePda({ tokenMint });
    return tokenBadge;
  });
}

// src/kit/builders/token.ts




var _system = require('@solana-program/system');






var _token = require('@solana-program/token');
var NATIVE_MINT_ADDRESS = _kit.address.call(void 0, 
  "So11111111111111111111111111111111111111112"
);
var TOKEN_2022_PROGRAM_ADDRESS2 = _kit.address.call(void 0, 
  "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb"
);
function isNativeMint(mint) {
  return mint === NATIVE_MINT_ADDRESS;
}
function getTokenProgramAddress(flag) {
  return flag === 0 ? _token.TOKEN_PROGRAM_ADDRESS : TOKEN_2022_PROGRAM_ADDRESS2;
}
function getOrCreateAssociatedTokenInstruction(mint, owner, payer, tokenProgram) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const [ata] = yield _token.findAssociatedTokenPda.call(void 0, {
      owner,
      mint,
      tokenProgram
    });
    const instruction = yield _token.getCreateAssociatedTokenIdempotentInstructionAsync.call(void 0, {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  const transferInstruction = _system.getTransferSolInstruction.call(void 0, {
    source: sourceSigner,
    destination,
    amount
  });
  const normalizedTransferInstruction = sourceAddress === sourceSigner.address ? transferInstruction : replaceInstructionAccount(transferInstruction, 0, {
    address: sourceAddress,
    role: _kit.AccountRole.WRITABLE_SIGNER
  });
  return [
    normalizedTransferInstruction,
    _token.getSyncNativeInstruction.call(void 0, {
      account: destination
    })
  ];
}
function unwrapSolInstruction(_0, _1) {
  return _chunkANN74BKIjs.__async.call(void 0, this, arguments, function* (ownerAddress, ownerSigner, receiver = ownerAddress) {
    const [wSolAta] = yield _token.findAssociatedTokenPda.call(void 0, {
      owner: ownerAddress,
      mint: NATIVE_MINT_ADDRESS,
      tokenProgram: _token.TOKEN_PROGRAM_ADDRESS
    });
    const instruction = _token.getCloseAccountInstruction.call(void 0, {
      account: wSolAta,
      destination: receiver,
      owner: ownerSigner
    });
    return ownerAddress === ownerSigner.address ? instruction : replaceInstructionAccount(instruction, 2, {
      address: ownerAddress,
      role: _kit.AccountRole.READONLY_SIGNER
    });
  });
}

// src/kit/builders/validation.ts

var SPLIT_POSITION_DENOMINATOR = 1e9;
var NUM_REWARDS = 2;
var MIN_REWARD_DURATION = 86400;
var MAX_REWARD_DURATION = 31536e3;
function validateTokenMints(tokenAMint, tokenBMint) {
  if (tokenAMint === tokenBMint) {
    throw new (0, _chunkANN74BKIjs.SameTokenMintsError)();
  }
}
function validateCreatePoolParams(params) {
  const { tokenAMint, tokenBMint, liquidityDelta, tokenAAmount, tokenBAmount } = params;
  validateTokenMints(tokenAMint, tokenBMint);
  if (liquidityDelta.lte(new (0, _bnjs2.default)(0))) {
    throw new (0, _chunkANN74BKIjs.InvalidMinimumLiquidityError)();
  }
  if (tokenAAmount.lte(new (0, _bnjs2.default)(0)) && tokenBAmount.lte(new (0, _bnjs2.default)(0))) {
    throw new (0, _chunkANN74BKIjs.AmountIsZeroError)();
  }
}
function validateAddLiquidityParams(liquidityDelta) {
  if (liquidityDelta.lte(new (0, _bnjs2.default)(0))) {
    throw new (0, _chunkANN74BKIjs.InvalidParametersError)("liquidityDelta must be greater than 0");
  }
}
function validateRemoveLiquidityParams(liquidityDelta) {
  if (liquidityDelta.lte(new (0, _bnjs2.default)(0))) {
    throw new (0, _chunkANN74BKIjs.InvalidParametersError)("liquidityDelta must be greater than 0");
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
      throw new (0, _chunkANN74BKIjs.InvalidSplitPositionParametersError)(
        "Each percentage must be <= 100"
      );
    }
  }
  if (percentages.every((percentage) => percentage === 0)) {
    throw new (0, _chunkANN74BKIjs.InvalidSplitPositionParametersError)(
      "At least one percentage must be greater than 0"
    );
  }
}
function validateSplitPosition2Params(numerator) {
  if (numerator <= 0 || numerator > SPLIT_POSITION_DENOMINATOR) {
    throw new (0, _chunkANN74BKIjs.InvalidSplitPositionParametersError)(
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
    throw new (0, _chunkANN74BKIjs.InvalidVestingInfoError)("numberOfPeriod must be >= 0");
  }
  if (numberOfPeriod > 0 && (periodFrequency.lte(new (0, _bnjs2.default)(0)) || liquidityPerPeriod.lte(new (0, _bnjs2.default)(0)))) {
    throw new (0, _chunkANN74BKIjs.InvalidVestingInfoError)(
      "periodFrequency and liquidityPerPeriod must be greater than 0 when numberOfPeriod > 0"
    );
  }
  const totalLockAmount = cliffUnlockLiquidity.add(
    liquidityPerPeriod.muln(numberOfPeriod)
  );
  if (totalLockAmount.lte(new (0, _bnjs2.default)(0))) {
    throw new (0, _chunkANN74BKIjs.InvalidVestingInfoError)(
      "Total lock amount must be greater than 0"
    );
  }
}
function validateRewardIndex(rewardIndex) {
  if (rewardIndex < 0 || rewardIndex >= NUM_REWARDS) {
    throw new (0, _chunkANN74BKIjs.InvalidRewardIndexError)(
      `rewardIndex must be in [0, ${NUM_REWARDS})`
    );
  }
}
function validateRewardDuration(rewardDuration) {
  if (rewardDuration.lt(new (0, _bnjs2.default)(MIN_REWARD_DURATION)) || rewardDuration.gt(new (0, _bnjs2.default)(MAX_REWARD_DURATION))) {
    throw new (0, _chunkANN74BKIjs.InvalidRewardDurationError)(
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
  if (_bnjs2.default.isBN(value)) {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const currentSlot = unwrapRpcValue(
      yield rpc.getSlot().send()
    );
    if (activationType === 0 /* Slot */) {
      return new (0, _bnjs2.default)(currentSlot.toString());
    }
    const currentBlockTime = unwrapRpcValue(
      yield rpc.getBlockTime(currentSlot).send()
    );
    return new (0, _bnjs2.default)((currentBlockTime != null ? currentBlockTime : 0).toString());
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
  return currentPoint.lte(activationPoint.add(new (0, _bnjs2.default)(maxLimiterDuration)));
}
function buildPoolCreationContext(params) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
      const nativeTokenBAmount = minimumNativeTokenBAmount && tokenBAmount.lt(new (0, _bnjs2.default)(1)) ? new (0, _bnjs2.default)(1) : tokenBAmount;
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
        role: _kit.AccountRole.READONLY_SIGNER
      });
    }
    return instruction;
  });
}
function createPoolPlan(params) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
          role: _kit.AccountRole.READONLY_SIGNER
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    var _a, _b, _c, _d, _e, _f;
    const amount = "amountIn" in params ? params.amountIn : params.amountOut;
    if (amount.isZero()) {
      throw new (0, _chunkANN74BKIjs.AmountIsZeroError)("swap amount must be greater than 0");
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    var _a, _b, _c, _d, _e, _f;
    if (params.amountIn.isZero()) {
      throw new (0, _chunkANN74BKIjs.AmountIsZeroError)("amountIn must be greater than 0");
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


// src/kit/math/liquidity/compoundingLiquidity.ts


// src/kit/math/utilsMath.ts
var _decimaljs = require('decimal.js'); var _decimaljs2 = _interopRequireDefault(_decimaljs);

// src/kit/math/constants.ts

var SCALE_OFFSET = 64;
var BASIS_POINT_MAX = 1e4;
var FEE_DENOMINATOR = 1e9;
var ONE_Q64 = new (0, _bnjs2.default)(1).shln(SCALE_OFFSET);
var MAX_EXPONENTIAL = new (0, _bnjs2.default)(524288);
var MAX = new (0, _bnjs2.default)(2).pow(new (0, _bnjs2.default)(128)).sub(new (0, _bnjs2.default)(1));
var MAX_FEE_NUMERATOR_V0 = 5e8;
var MAX_FEE_NUMERATOR_V1 = 99e7;
var MIN_SQRT_PRICE = new (0, _bnjs2.default)("4295048016");
var MAX_SQRT_PRICE = new (0, _bnjs2.default)("79226673521066979257578248091");
var DYNAMIC_FEE_SCALING_FACTOR = new (0, _bnjs2.default)(1e11);
var DYNAMIC_FEE_ROUNDING_OFFSET = new (0, _bnjs2.default)(99999999999);
var U128_MAX = new (0, _bnjs2.default)("340282366920938463463374607431768211455");
var U64_MAX = new (0, _bnjs2.default)("18446744073709551615");
var U16_MAX = 65535;
var DEAD_LIQUIDITY = new (0, _bnjs2.default)(100).shln(SCALE_OFFSET);

// src/kit/math/utilsMath.ts

function mulDiv(x, y, denominator, rounding) {
  const { div, mod } = x.mul(y).divmod(denominator);
  if (rounding == 0 /* Up */ && !mod.isZero()) {
    return div.add(new (0, _bnjs2.default)(1));
  }
  return div;
}
function sqrt(value) {
  if (value.isZero()) {
    return new (0, _bnjs2.default)(0);
  }
  if (value.eq(new (0, _bnjs2.default)(1))) {
    return new (0, _bnjs2.default)(1);
  }
  let x = value;
  let y = value.add(new (0, _bnjs2.default)(1)).div(new (0, _bnjs2.default)(2));
  while (y.lt(x)) {
    x = y;
    y = x.add(value.div(x)).div(new (0, _bnjs2.default)(2));
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
    return new (0, _bnjs2.default)(0);
  }
  let squaredBase = base;
  let result = ONE_Q64;
  if (squaredBase.gte(result)) {
    squaredBase = MAX.div(squaredBase);
    invert = !invert;
  }
  if (!exp.and(new (0, _bnjs2.default)(1)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(2)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(4)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(8)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(16)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(32)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(64)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(128)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(256)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(512)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(1024)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(2048)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(4096)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(8192)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(16384)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(32768)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(65536)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(131072)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  squaredBase = squaredBase.mul(squaredBase).shrn(SCALE_OFFSET);
  if (!exp.and(new (0, _bnjs2.default)(262144)).isZero()) {
    result = result.mul(squaredBase).shrn(SCALE_OFFSET);
  }
  if (result.isZero()) {
    return new (0, _bnjs2.default)(0);
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
    amountLeft: new (0, _bnjs2.default)(0),
    outputAmount,
    nextSqrtPrice: new (0, _bnjs2.default)(0)
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
    amountLeft: new (0, _bnjs2.default)(0),
    outputAmount,
    nextSqrtPrice: new (0, _bnjs2.default)(0)
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
    nextSqrtPrice: new (0, _bnjs2.default)(0)
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
    nextSqrtPrice: new (0, _bnjs2.default)(0)
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
  const denominator = new (0, _bnjs2.default)(1).ushln(128);
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
    amountLeft: new (0, _bnjs2.default)(0)
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
    amountLeft: new (0, _bnjs2.default)(0)
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
    const denominator = new (0, _bnjs2.default)(1).ushln(shift);
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
  if (denominator.lte(new (0, _bnjs2.default)(0))) {
    throw new MathOverflowError("Denominator must be greater than zero");
  }
  const result = mulDiv(numerator1, numerator2, denominator, rounding);
  return result;
}
function getNextSqrtPriceFromInput(sqrtPrice, liquidity, amountIn, aForB) {
  if (sqrtPrice.lte(new (0, _bnjs2.default)(0))) {
    throw new InvalidInputError("sqrtPrice must be greater than 0");
  }
  if (liquidity.lte(new (0, _bnjs2.default)(0))) {
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
  if (sqrtPrice.lte(new (0, _bnjs2.default)(0))) {
    throw new InvalidInputError("sqrtPrice must be greater than 0");
  }
  if (liquidity.lte(new (0, _bnjs2.default)(0))) {
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
  if (denominator.lte(new (0, _bnjs2.default)(0))) {
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


// src/kit/math/feeMath.ts

function toNumerator(bps, feeDenominator) {
  const numerator = mulDiv(
    bps,
    feeDenominator,
    new (0, _bnjs2.default)(BASIS_POINT_MAX),
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
  let dynamicFeeNumerator = new (0, _bnjs2.default)(0);
  if (poolFees.dynamicFee.initialized !== 0) {
    dynamicFeeNumerator = getDynamicFeeNumerator(
      poolFees.dynamicFee.volatilityAccumulator,
      new (0, _bnjs2.default)(poolFees.dynamicFee.binStep),
      new (0, _bnjs2.default)(poolFees.dynamicFee.variableFeeControl)
    );
  }
  const totalFeeNumerator = dynamicFeeNumerator.add(baseFeeNumerator);
  return _bnjs2.default.min(totalFeeNumerator, maxFeeNumerator);
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
    new (0, _bnjs2.default)(poolFees.protocolFeePercent),
    new (0, _bnjs2.default)(100),
    1 /* Down */
  );
  let tradingFee = feeAmount.sub(protocolFee);
  const compoundingFeeBps = new (0, _bnjs2.default)(poolFees.compoundingFeeBps);
  let compoundingFee;
  let claimingFee;
  if (compoundingFeeBps.gt(new (0, _bnjs2.default)(0))) {
    compoundingFee = mulDiv(
      tradingFee,
      compoundingFeeBps,
      new (0, _bnjs2.default)(BASIS_POINT_MAX),
      1 /* Down */
    );
    claimingFee = tradingFee.sub(compoundingFee);
  } else {
    compoundingFee = new (0, _bnjs2.default)(0);
    claimingFee = tradingFee;
  }
  let referralFee;
  if (hasReferral) {
    referralFee = mulDiv(
      protocolFee,
      new (0, _bnjs2.default)(poolFees.referralFeePercent),
      new (0, _bnjs2.default)(100),
      1 /* Down */
    );
  } else {
    referralFee = new (0, _bnjs2.default)(0);
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
    new (0, _bnjs2.default)(FEE_DENOMINATOR),
    0 /* Up */
  );
  const excludedFeeAmount = includedFeeAmount.sub(tradingFee);
  return { excludedFeeAmount, tradingFee };
}
function getIncludedFeeAmount(tradeFeeNumerator, excludedFeeAmount) {
  const denominator = new (0, _bnjs2.default)(FEE_DENOMINATOR).sub(tradeFeeNumerator);
  if (denominator.isZero() || denominator.isNeg()) {
    throw new InvalidFeeError("Fee denominator must be positive and non-zero");
  }
  const includedFeeAmount = mulDiv(
    excludedFeeAmount,
    new (0, _bnjs2.default)(FEE_DENOMINATOR),
    denominator,
    0 /* Up */
  );
  const feeAmount = includedFeeAmount.sub(excludedFeeAmount);
  return { includedFeeAmount, feeAmount };
}
function getMaxFeeNumerator(feeVersion) {
  switch (feeVersion) {
    case 0:
      return new (0, _bnjs2.default)(MAX_FEE_NUMERATOR_V0);
    case 1:
      return new (0, _bnjs2.default)(MAX_FEE_NUMERATOR_V1);
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
    new (0, _bnjs2.default)(maxLimiterDuration)
  );
  if (currentPoint.gt(lastEffectiveRateLimiterPoint)) {
    return false;
  }
  return true;
}
function getMaxIndex(maxFeeBps, cliffFeeNumerator, feeIncrementBps) {
  const maxFeeNumerator = toNumerator(
    new (0, _bnjs2.default)(maxFeeBps),
    new (0, _bnjs2.default)(FEE_DENOMINATOR)
  );
  if (cliffFeeNumerator.gt(maxFeeNumerator)) {
    throw new InvalidInputError(
      "cliffFeeNumerator cannot be greater than maxFeeNumerator"
    );
  }
  const deltaNumerator = maxFeeNumerator.sub(cliffFeeNumerator);
  const feeIncrementNumerator = toNumerator(
    new (0, _bnjs2.default)(feeIncrementBps),
    new (0, _bnjs2.default)(FEE_DENOMINATOR)
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
      new (0, _bnjs2.default)(maxFeeBps),
      new (0, _bnjs2.default)(FEE_DENOMINATOR)
    );
    const c = cliffFeeNumerator;
    const inputMinusRef = inputAmount.sub(referenceAmount);
    const a = inputMinusRef.div(referenceAmount);
    const b = inputMinusRef.mod(referenceAmount);
    const maxIndex = getMaxIndex(maxFeeBps, cliffFeeNumerator, feeIncrementBps);
    const i = toNumerator(new (0, _bnjs2.default)(feeIncrementBps), new (0, _bnjs2.default)(FEE_DENOMINATOR));
    const x0 = referenceAmount;
    const one = new (0, _bnjs2.default)(1);
    const two = new (0, _bnjs2.default)(2);
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
    const denominator = new (0, _bnjs2.default)(FEE_DENOMINATOR);
    const tradingFee = tradingFeeNumerator.add(denominator).sub(one).div(denominator);
    const numerator = mulDiv(tradingFee, denominator, inputAmount, 0 /* Up */);
    if (numerator.gt(new (0, _bnjs2.default)(U64_MAX))) {
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
  const one = new (0, _bnjs2.default)(1);
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
    const TWO = new (0, _bnjs2.default)(2);
    const FOUR = new (0, _bnjs2.default)(4);
    const i = toNumerator(new (0, _bnjs2.default)(feeIncrementBps), new (0, _bnjs2.default)(FEE_DENOMINATOR));
    const x0 = referenceAmount;
    const d = new (0, _bnjs2.default)(FEE_DENOMINATOR);
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
      new (0, _bnjs2.default)(maxFeeBps),
      new (0, _bnjs2.default)(FEE_DENOMINATOR)
    );
    const { includedFeeAmount: includedFeeRemainingAmount } = getIncludedFeeAmount(maxFeeNumerator, excludedFeeRemainingAmount);
    includedFeeAmount = includedFeeRemainingAmount.add(
      checkedIncludedFeeAmount
    );
  }
  const tradingFee = includedFeeAmount.sub(excludedFeeAmount);
  const feeNumerator = mulDiv(
    tradingFee,
    new (0, _bnjs2.default)(FEE_DENOMINATOR),
    includedFeeAmount,
    0 /* Up */
  );
  if (feeNumerator.lt(cliffFeeNumerator)) {
    throw new InvalidInputError("feeNumerator is less than cliffFeeNumerator");
  }
  return feeNumerator;
}

// src/kit/math/poolFees/baseFee/feeTimeScheduler.ts


// src/kit/math/poolFees/baseFee/feeScheduler.ts

function getFeeNumeratorOnLinearFeeScheduler(cliffFeeNumerator, reductionFactor, period) {
  const reduction = new (0, _bnjs2.default)(period).mul(reductionFactor);
  return cliffFeeNumerator.sub(reduction);
}
function getFeeNumeratorOnExponentialFeeScheduler(cliffFeeNumerator, reductionFactor, period) {
  if (period === 0) {
    return cliffFeeNumerator;
  }
  const basisPointMax = new (0, _bnjs2.default)(BASIS_POINT_MAX);
  const bps = new (0, _bnjs2.default)(reductionFactor).shln(64).div(basisPointMax);
  const base = ONE_Q64.sub(bps);
  const result = pow(base, new (0, _bnjs2.default)(period));
  return cliffFeeNumerator.mul(result).div(ONE_Q64);
}

// src/kit/math/poolFees/baseFee/feeTimeScheduler.ts
function getFeeTimeBaseFeeNumeratorByPeriod(cliffFeeNumerator, numberOfPeriod, period, reductionFactor, feeTimeSchedulerMode) {
  const periodValue = _bnjs2.default.min(period, new (0, _bnjs2.default)(numberOfPeriod));
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
    period = new (0, _bnjs2.default)(numberOfPeriod);
  } else {
    period = currentPoint.sub(activationPoint).div(periodFrequency);
    if (period.gt(new (0, _bnjs2.default)(numberOfPeriod))) {
      period = new (0, _bnjs2.default)(numberOfPeriod);
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

function getFeeMarketCapBaseFeeNumeratorByPeriod(cliffFeeNumerator, numberOfPeriod, period, reductionFactor, feeMarketCapSchedulerMode) {
  const periodValue = _bnjs2.default.min(period, new (0, _bnjs2.default)(numberOfPeriod));
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
    new (0, _bnjs2.default)(schedulerExpirationDuration)
  );
  let period;
  if (currentPoint.gt(schedulerExpirationPoint) || currentPoint.lt(activationPoint)) {
    period = new (0, _bnjs2.default)(numberOfPeriod);
  } else {
    if (currentSqrtPrice.lte(initSqrtPrice)) {
      period = new (0, _bnjs2.default)(0);
    } else {
      const maxBps = new (0, _bnjs2.default)(BASIS_POINT_MAX);
      const stepBps = new (0, _bnjs2.default)(sqrtPriceStepBps);
      const passedPeriod = currentSqrtPrice.sub(initSqrtPrice).mul(maxBps).div(initSqrtPrice).div(stepBps);
      if (passedPeriod.gt(new (0, _bnjs2.default)(numberOfPeriod))) {
        period = new (0, _bnjs2.default)(numberOfPeriod);
      } else {
        period = passedPeriod;
      }
    }
    period = _bnjs2.default.min(period, new (0, _bnjs2.default)(numberOfPeriod));
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

function getDynamicFeeNumerator(volatilityAccumulator, binStep, variableFeeControl) {
  const squareVfaBin = volatilityAccumulator.mul(new (0, _bnjs2.default)(binStep)).pow(new (0, _bnjs2.default)(2));
  const vFee = variableFeeControl.mul(squareVfaBin);
  return vFee.add(new (0, _bnjs2.default)(DYNAMIC_FEE_ROUNDING_OFFSET)).div(new (0, _bnjs2.default)(DYNAMIC_FEE_SCALING_FACTOR));
}

// src/kit/math/swapQuote.ts


// src/kit/math/transferFees.ts






var _spltoken = require('@solana/spl-token');
function calculatePreFeeAmount(transferFee, postFeeAmount) {
  if (postFeeAmount.isZero()) {
    return new (0, _bnjs2.default)(0);
  }
  if (transferFee.transferFeeBasisPoints === 0) {
    return postFeeAmount;
  }
  const maximumFee = new (0, _bnjs2.default)(transferFee.maximumFee.toString());
  if (transferFee.transferFeeBasisPoints === _spltoken.MAX_FEE_BASIS_POINTS) {
    return postFeeAmount.add(maximumFee);
  }
  const oneInBasisPoints = new (0, _bnjs2.default)(_spltoken.MAX_FEE_BASIS_POINTS);
  const numerator = postFeeAmount.mul(oneInBasisPoints);
  const denominator = oneInBasisPoints.sub(
    new (0, _bnjs2.default)(transferFee.transferFeeBasisPoints)
  );
  const rawPreFeeAmount = numerator.add(denominator).sub(new (0, _bnjs2.default)(1)).div(denominator);
  if (rawPreFeeAmount.sub(postFeeAmount).gte(maximumFee)) {
    return postFeeAmount.add(maximumFee);
  }
  return rawPreFeeAmount;
}
function calculateInverseFee(transferFee, postFeeAmount) {
  const preFeeAmount = calculatePreFeeAmount(transferFee, postFeeAmount);
  return new (0, _bnjs2.default)(
    _spltoken.calculateFee.call(void 0, transferFee, BigInt(preFeeAmount.toString())).toString()
  );
}
function calculateTransferFeeIncludedAmount(transferFeeExcludedAmount, mint, currentEpoch) {
  if (transferFeeExcludedAmount.isZero()) {
    return {
      amount: new (0, _bnjs2.default)(0),
      transferFee: new (0, _bnjs2.default)(0)
    };
  }
  const transferFeeConfig = _spltoken.getTransferFeeConfig.call(void 0, mint);
  if (transferFeeConfig === null) {
    return {
      amount: transferFeeExcludedAmount,
      transferFee: new (0, _bnjs2.default)(0)
    };
  }
  const epochFee = _spltoken.getEpochFee.call(void 0, transferFeeConfig, BigInt(currentEpoch));
  const transferFee = epochFee.transferFeeBasisPoints === _spltoken.MAX_FEE_BASIS_POINTS ? new (0, _bnjs2.default)(epochFee.maximumFee.toString()) : calculateInverseFee(epochFee, transferFeeExcludedAmount);
  return {
    amount: transferFeeExcludedAmount.add(transferFee),
    transferFee
  };
}
function calculateTransferFeeExcludedAmount(transferFeeIncludedAmount, mint, currentEpoch) {
  const transferFeeConfig = _spltoken.getTransferFeeConfig.call(void 0, mint);
  if (transferFeeConfig === null) {
    return {
      amount: transferFeeIncludedAmount,
      transferFee: new (0, _bnjs2.default)(0)
    };
  }
  const transferFeeIncludedAmountN = BigInt(
    transferFeeIncludedAmount.toString()
  );
  const transferFee = _spltoken.calculateFee.call(void 0, 
    _spltoken.getEpochFee.call(void 0, transferFeeConfig, BigInt(currentEpoch)),
    transferFeeIncludedAmountN
  );
  return {
    amount: new (0, _bnjs2.default)((transferFeeIncludedAmountN - transferFee).toString()),
    transferFee: new (0, _bnjs2.default)(transferFee.toString())
  };
}

// src/kit/math/support.ts


function isSwapEnabled(pool, currentPoint) {
  return pool.poolStatus === 0 /* Enable */ && currentPoint.gte(pool.activationPoint);
}
function getAmountWithSlippage(amount, slippageBps, swapMode) {
  if (slippageBps <= 0) {
    return amount;
  }
  if (swapMode === 2 /* ExactOut */) {
    return amount.mul(new (0, _bnjs2.default)(BASIS_POINT_MAX + slippageBps)).div(new (0, _bnjs2.default)(BASIS_POINT_MAX));
  }
  return amount.mul(new (0, _bnjs2.default)(BASIS_POINT_MAX - slippageBps)).div(new (0, _bnjs2.default)(BASIS_POINT_MAX));
}
function getPriceFromSqrtPrice(sqrtPrice, tokenADecimal, tokenBDecimal) {
  const decimalSqrtPrice = new (0, _decimaljs2.default)(sqrtPrice.toString());
  return decimalSqrtPrice.mul(decimalSqrtPrice).mul(new (0, _decimaljs2.default)(_chunkANN74BKIjs.__pow.call(void 0, 10, tokenADecimal - tokenBDecimal))).div(_decimaljs2.default.pow(2, 128));
}
function getPriceImpact(amountIn, amountOut, currentSqrtPrice, aToB, tokenADecimal, tokenBDecimal) {
  if (amountIn.eq(new (0, _bnjs2.default)(0))) {
    return new (0, _decimaljs2.default)(0);
  }
  if (amountOut.eq(new (0, _bnjs2.default)(0))) {
    throw new Error("Amount out must be greater than 0");
  }
  const spotPrice = getPriceFromSqrtPrice(
    currentSqrtPrice,
    tokenADecimal,
    tokenBDecimal
  );
  const executionPrice = new (0, _decimaljs2.default)(amountIn.toString()).div(new (0, _decimaljs2.default)(amountOut.toString())).mul(
    _decimaljs2.default.pow(
      10,
      aToB ? tokenBDecimal - tokenADecimal : tokenADecimal - tokenBDecimal
    )
  );
  const actualExecutionPrice = aToB ? new (0, _decimaljs2.default)(1).div(executionPrice) : executionPrice;
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
  let actualProtocolFee = new (0, _bnjs2.default)(0);
  let actualClaimingFee = new (0, _bnjs2.default)(0);
  let actualCompoundingFee = new (0, _bnjs2.default)(0);
  let actualReferralFee = new (0, _bnjs2.default)(0);
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
  let actualProtocolFee = new (0, _bnjs2.default)(0);
  let actualClaimingFee = new (0, _bnjs2.default)(0);
  let actualCompoundingFee = new (0, _bnjs2.default)(0);
  let actualReferralFee = new (0, _bnjs2.default)(0);
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
  if (amountLeft.gt(new (0, _bnjs2.default)(0))) {
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
  let actualProtocolFee = new (0, _bnjs2.default)(0);
  let actualCompoundingFee = new (0, _bnjs2.default)(0);
  let actualClaimingFee = new (0, _bnjs2.default)(0);
  let actualReferralFee = new (0, _bnjs2.default)(0);
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
    amountLeft: new (0, _bnjs2.default)(0),
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
  if (amountIn.lte(new (0, _bnjs2.default)(0))) {
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
  return _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, swapResult), {
    minimumAmountOut,
    priceImpact
  });
}
function swapQuoteExactOutput(pool, currentPoint, amountOut, slippage, aToB, hasReferral, tokenADecimal, tokenBDecimal, inputTokenInfo, outputTokenInfo) {
  if (amountOut.lte(new (0, _bnjs2.default)(0))) {
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
  return _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, swapResult), {
    maximumAmountIn,
    priceImpact
  });
}
function swapQuotePartialInput(pool, currentPoint, amountIn, slippage, aToB, hasReferral, tokenADecimal, tokenBDecimal, inputTokenInfo, outputTokenInfo) {
  if (amountIn.lte(new (0, _bnjs2.default)(0))) {
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
  return _chunkANN74BKIjs.__spreadProps.call(void 0, _chunkANN74BKIjs.__spreadValues.call(void 0, {}, swapResult), {
    minimumAmountOut,
    priceImpact
  });
}

// src/kit/math/api.ts


// src/kit/math/priceMath.ts


function calculateInitSqrtPrice(tokenAAmount, tokenBAmount, minSqrtPrice, maxSqrtPrice) {
  if (tokenAAmount.isZero() || tokenBAmount.isZero()) {
    throw new AmountIsZeroError2("Amount cannot be zero");
  }
  const amountADecimal = new (0, _decimaljs2.default)(tokenAAmount.toString());
  const amountBDecimal = new (0, _decimaljs2.default)(tokenBAmount.toString());
  const minSqrtPriceDecimal = new (0, _decimaljs2.default)(minSqrtPrice.toString()).div(
    _decimaljs2.default.pow(2, 64)
  );
  const maxSqrtPriceDecimal = new (0, _decimaljs2.default)(maxSqrtPrice.toString()).div(
    _decimaljs2.default.pow(2, 64)
  );
  const x = new (0, _decimaljs2.default)(1).div(maxSqrtPriceDecimal);
  const y = amountBDecimal.div(amountADecimal);
  const xy = x.mul(y);
  const paMinusXY = minSqrtPriceDecimal.sub(xy);
  const xyMinusPa = xy.sub(minSqrtPriceDecimal);
  const fourY = new (0, _decimaljs2.default)(4).mul(y);
  const discriminant = xyMinusPa.mul(xyMinusPa).add(fourY);
  const sqrtDiscriminant = discriminant.sqrt();
  const result = paMinusXY.add(sqrtDiscriminant).div(new (0, _decimaljs2.default)(2)).mul(_decimaljs2.default.pow(2, 64));
  return new (0, _bnjs2.default)(result.floor().toFixed());
}

// src/kit/math/vestings.ts

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
    return new (0, _bnjs2.default)(0);
  }
  if (periodFrequency.isZero()) {
    return cliffUnlockLiquidity;
  }
  let passedPeriod = new (0, _bnjs2.default)(currentPoint).sub(cliffPoint).div(periodFrequency);
  passedPeriod = _bnjs2.default.min(passedPeriod, new (0, _bnjs2.default)(numberOfPeriod));
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
  return _bnjs2.default.min(liquidityDeltaFromAmountA, liquidityDeltaFromAmountB);
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
  if (params.tokenAAmount.eq(new (0, _bnjs2.default)(0)) && params.tokenBAmount.eq(new (0, _bnjs2.default)(0))) {
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
    liquidityDelta: _bnjs2.default.min(liquidityDeltaFromAmountA, liquidityDeltaFromAmountB)
  };
}
function getQuote(params) {
  var _a;
  const currentPoint = params.poolState.activationType ? new (0, _bnjs2.default)(params.currentTime) : new (0, _bnjs2.default)(params.currentSlot);
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
  const rawOutputAmount = new (0, _bnjs2.default)(rawAmount(liquidityDelta));
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    return buildTransactionPlan(
      [yield buildRefreshVestingInstruction(params)],
      []
    );
  });
}
function closePositionPlan(params) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    return buildTransactionPlan(
      [yield buildClosePositionInstruction(params)],
      [params.owner]
    );
  });
}
function removeAllLiquidityAndClosePositionPlan(params) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
        new (0, _bnjs2.default)(0)
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    const accountInfo = unwrapRpcValue2(
      yield rpc.getAccountInfo(account, { encoding: "base64" }).send()
    );
    return accountInfo !== null;
  });
}
function buildClaimPositionFeeInstruction2(params) {
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
    validateRewardIndex(params.rewardIndex);
    if (params.amount.isZero()) {
      throw new (0, _chunkANN74BKIjs.AmountIsZeroError)("fund reward amount must be greater than 0");
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
  return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
      rpc: _kit.createSolanaRpc.call(void 0, rpcUrl),
      rpcSubscriptions: _kit.createSolanaRpcSubscriptions.call(void 0, rpcSubscriptionsUrl)
    });
  }
  static fromRpcAndSubscriptions(rpc, rpcSubscriptions, options = {}) {
    return new _CpAmmKitClient({
      rpc,
      rpcSubscriptions
    });
  }
  fetchConfigState(config) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield fetchConfigState(this.rpc, config);
    });
  }
  fetchPoolState(pool) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield fetchPoolState(this.rpc, pool);
    });
  }
  fetchPoolStatesByTokenAMint(tokenAMint) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield fetchPoolStatesByTokenAMint(this.rpc, tokenAMint);
    });
  }
  fetchPoolFees(pool) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield fetchPoolFees(this.rpc, pool);
    });
  }
  fetchPositionState(position) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield fetchPositionState(this.rpc, position);
    });
  }
  getMultipleConfigs(configs) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getMultipleConfigs(this.rpc, configs);
    });
  }
  getMultiplePools(pools) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getMultiplePools(this.rpc, pools);
    });
  }
  getMultiplePositions(positions) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getMultiplePositions(this.rpc, positions);
    });
  }
  getAllConfigs() {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getAllConfigs(this.rpc);
    });
  }
  getStaticConfigs() {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getStaticConfigs(this.rpc);
    });
  }
  getAllPools() {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getAllPools(this.rpc);
    });
  }
  getAllPositions() {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getAllPositions(this.rpc);
    });
  }
  getAllPositionsByPool(pool) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getAllPositionsByPool(this.rpc, pool);
    });
  }
  getPositionsByUser(user) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getPositionsByUser(this.rpc, user);
    });
  }
  getUserPositionByPool(pool, user) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getUserPositionByPool(this.rpc, pool, user);
    });
  }
  getAllVestingsByPosition(position) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield getAllVestingsByPosition(this.rpc, position);
    });
  }
  isPoolExist(pool) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
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
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield createCustomPoolPlan(params);
    });
  }
  createCustomPoolWithDynamicConfig(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield createCustomPoolWithDynamicConfigPlan(params);
    });
  }
  createPool(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield createPoolPlan(params);
    });
  }
  createPosition(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield createPositionPlan(params);
    });
  }
  addLiquidity(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield addLiquidityPlan(params);
    });
  }
  createPositionAndAddLiquidity(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield createPositionAndAddLiquidityPlan(params);
    });
  }
  removeLiquidity(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield removeLiquidityPlan(params);
    });
  }
  removeAllLiquidity(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield removeAllLiquidityPlan(params);
    });
  }
  removeAllLiquidityAndClosePosition(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield removeAllLiquidityAndClosePositionPlan(params);
    });
  }
  lockPosition(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield lockPositionPlan(params);
    });
  }
  permanentLockPosition(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield permanentLockPositionPlan(params);
    });
  }
  refreshVesting(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield refreshVestingPlan(params);
    });
  }
  closePosition(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield closePositionPlan(params);
    });
  }
  mergePosition(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield mergePositionPlan(params);
    });
  }
  splitPosition(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield splitPositionPlan(params);
    });
  }
  splitPosition2(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield splitPosition2Plan(params);
    });
  }
  claimPositionFee(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield claimPositionFeePlan(params);
    });
  }
  claimPositionFee2(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield claimPositionFee2Plan(params);
    });
  }
  initializeReward(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield initializeRewardPlan(this.rpc, params);
    });
  }
  initializeAndFundReward(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield initializeAndFundRewardPlan(this.rpc, params);
    });
  }
  updateRewardDuration(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield updateRewardDurationPlan(params);
    });
  }
  updateRewardFunder(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield updateRewardFunderPlan(params);
    });
  }
  fundReward(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield fundRewardPlan(params);
    });
  }
  withdrawIneligibleReward(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield withdrawIneligibleRewardPlan(this.rpc, params);
    });
  }
  claimReward(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield claimRewardPlan(params);
    });
  }
  swap(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield swapPlan(this.rpc, params);
    });
  }
  swap2(params) {
    return _chunkANN74BKIjs.__async.call(void 0, this, null, function* () {
      return yield swap2Plan(this.rpc, params);
    });
  }
};




























exports.ActivationType = ActivationType; exports.BaseFeeMode = BaseFeeMode; exports.CONFIG_DISCRIMINATOR_OFFSET = CONFIG_DISCRIMINATOR_OFFSET; exports.CollectFeeMode = CollectFeeMode; exports.CpAmmKitClient = CpAmmKitClient; exports.POOL_TOKEN_A_MINT_OFFSET = POOL_TOKEN_A_MINT_OFFSET; exports.POSITION_POOL_OFFSET = POSITION_POOL_OFFSET; exports.SwapMode = SwapMode; exports.VESTING_POSITION_OFFSET = VESTING_POSITION_OFFSET; exports.adaptGeneratedAccountRecord = adaptGeneratedAccountRecord; exports.adaptGeneratedValue = adaptGeneratedValue; exports.addressMemcmpFilter = addressMemcmpFilter; exports.bytesMemcmpFilter = bytesMemcmpFilter; exports.configDiscriminatorFilter = configDiscriminatorFilter; exports.decodePodAlignedFeeMarketCapScheduler = decodePodAlignedFeeMarketCapScheduler; exports.decodePodAlignedFeeRateLimiter = decodePodAlignedFeeRateLimiter; exports.decodePodAlignedFeeTimeScheduler = decodePodAlignedFeeTimeScheduler; exports.decodePoolFeeData = decodePoolFeeData; exports.getBase64ProgramAccounts = getBase64ProgramAccounts; exports.getDefaultRpcSubscriptionsUrl = getDefaultRpcSubscriptionsUrl; exports.getJsonParsedTokenAccountsByOwner = getJsonParsedTokenAccountsByOwner; exports.poolByTokenAMintFilter = poolByTokenAMintFilter; exports.poolDiscriminatorFilter = poolDiscriminatorFilter; exports.positionByPoolFilter = positionByPoolFilter; exports.positionDiscriminatorFilter = positionDiscriminatorFilter; exports.vestingByPositionFilter = vestingByPositionFilter; exports.vestingDiscriminatorFilter = vestingDiscriminatorFilter;
//# sourceMappingURL=index.js.map