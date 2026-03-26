"use strict";Object.defineProperty(exports, "__esModule", {value: true});var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/errors.ts
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
var ExceedMaxFeeBpsError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Fee exceeds maximum allowed basis points");
    this.name = "ExceedMaxFeeBpsError";
  }
};
var InvalidActivationTypeError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid activation type");
    this.name = "InvalidActivationTypeError";
  }
};
var InvalidPriceRangeError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid price range");
    this.name = "InvalidPriceRangeError";
  }
};
var InvalidCollectFeeModeError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid collect fee mode");
    this.name = "InvalidCollectFeeModeError";
  }
};
var InvalidCompoundingFeeBpsError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid compounding fee bps");
    this.name = "InvalidCompoundingFeeBpsError";
  }
};
var InvalidFeeTimeSchedulerError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid fee time scheduler");
    this.name = "InvalidFeeTimeSchedulerError";
  }
};
var InvalidFeeMarketCapSchedulerError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid fee market cap scheduler");
    this.name = "InvalidFeeMarketCapSchedulerError";
  }
};
var InvalidFeeRateLimiterError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid fee rate limiter");
    this.name = "InvalidFeeRateLimiterError";
  }
};
var InvalidDynamicFeeParametersError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid dynamic fee parameters");
    this.name = "InvalidDynamicFeeParametersError";
  }
};
var InvalidMinimumLiquidityError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid minimum liquidity");
    this.name = "InvalidMinimumLiquidityError";
  }
};
var AmountIsZeroError = class extends Error {
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
var SameTokenMintsError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Token A and Token B mints must be different");
    this.name = "SameTokenMintsError";
  }
};
var InvalidParametersError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid parameters");
    this.name = "InvalidParametersError";
  }
};
var InvalidSplitPositionParametersError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid split position parameters");
    this.name = "InvalidSplitPositionParametersError";
  }
};
var InvalidVestingInfoError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid vesting info");
    this.name = "InvalidVestingInfoError";
  }
};
var InvalidRewardIndexError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid reward index");
    this.name = "InvalidRewardIndexError";
  }
};
var InvalidRewardDurationError = class extends Error {
  constructor(message) {
    super(message != null ? message : "Invalid reward duration");
    this.name = "InvalidRewardDurationError";
  }
};
































exports.__pow = __pow; exports.__spreadValues = __spreadValues; exports.__spreadProps = __spreadProps; exports.__async = __async; exports.DepositTokenNotAcceptedError = DepositTokenNotAcceptedError; exports.InvalidFeeError = InvalidFeeError; exports.ExceedMaxFeeBpsError = ExceedMaxFeeBpsError; exports.InvalidActivationTypeError = InvalidActivationTypeError; exports.InvalidPriceRangeError = InvalidPriceRangeError; exports.InvalidCollectFeeModeError = InvalidCollectFeeModeError; exports.InvalidCompoundingFeeBpsError = InvalidCompoundingFeeBpsError; exports.InvalidFeeTimeSchedulerError = InvalidFeeTimeSchedulerError; exports.InvalidFeeMarketCapSchedulerError = InvalidFeeMarketCapSchedulerError; exports.InvalidFeeRateLimiterError = InvalidFeeRateLimiterError; exports.InvalidDynamicFeeParametersError = InvalidDynamicFeeParametersError; exports.InvalidMinimumLiquidityError = InvalidMinimumLiquidityError; exports.AmountIsZeroError = AmountIsZeroError; exports.InvalidBaseFeeModeError = InvalidBaseFeeModeError; exports.InvalidPoolVersionError = InvalidPoolVersionError; exports.MathOverflowError = MathOverflowError; exports.InsufficientLiquidityError = InsufficientLiquidityError; exports.SwapDisabledError = SwapDisabledError; exports.InvalidInputError = InvalidInputError; exports.PriceRangeViolationError = PriceRangeViolationError; exports.SameTokenMintsError = SameTokenMintsError; exports.InvalidParametersError = InvalidParametersError; exports.InvalidSplitPositionParametersError = InvalidSplitPositionParametersError; exports.InvalidVestingInfoError = InvalidVestingInfoError; exports.InvalidRewardIndexError = InvalidRewardIndexError; exports.InvalidRewardDurationError = InvalidRewardDurationError;
//# sourceMappingURL=chunk-ANN74BKI.js.map