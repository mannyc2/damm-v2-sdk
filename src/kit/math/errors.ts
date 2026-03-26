export class DepositTokenNotAcceptedError extends Error {
  public readonly acceptedToken: "A" | "B";

  constructor(acceptedToken: "A" | "B") {
    const rejectedToken = acceptedToken === "A" ? "B" : "A";
    super(
      `Cannot deposit token ${rejectedToken}: pool price is at the ${rejectedToken === "A" ? "upper" : "lower"} bound. All liquidity is in token ${acceptedToken}.`,
    );
    this.name = "DepositTokenNotAcceptedError";
    this.acceptedToken = acceptedToken;
  }
}

export class InvalidFeeError extends Error {
  constructor(message?: string) {
    super(
      message ??
        "Fee numerator must be less than denominator and denominator must be non-zero",
    );
    this.name = "InvalidFeeError";
  }
}

export class InvalidCollectFeeModeError extends Error {
  constructor(message?: string) {
    super(message ?? "Invalid collect fee mode");
    this.name = "InvalidCollectFeeModeError";
  }
}

export class InvalidMinimumLiquidityError extends Error {
  constructor(message?: string) {
    super(message ?? "Invalid minimum liquidity");
    this.name = "InvalidMinimumLiquidityError";
  }
}

export class AmountIsZeroError extends Error {
  constructor(message?: string) {
    super(message ?? "Amount is zero");
    this.name = "AmountIsZeroError";
  }
}

export class InvalidBaseFeeModeError extends Error {
  constructor(message?: string) {
    super(message ?? "Invalid base fee mode");
    this.name = "InvalidBaseFeeModeError";
  }
}

export class InvalidPoolVersionError extends Error {
  constructor(message?: string) {
    super(message ?? "Invalid pool version");
    this.name = "InvalidPoolVersionError";
  }
}

export class MathOverflowError extends Error {
  constructor(message?: string) {
    super(message ?? "Math overflow");
    this.name = "MathOverflowError";
  }
}

export class InsufficientLiquidityError extends Error {
  constructor(message?: string) {
    super(message ?? "Insufficient liquidity");
    this.name = "InsufficientLiquidityError";
  }
}

export class SwapDisabledError extends Error {
  constructor(message?: string) {
    super(message ?? "Swap is disabled");
    this.name = "SwapDisabledError";
  }
}

export class InvalidInputError extends Error {
  constructor(message?: string) {
    super(message ?? "Invalid input");
    this.name = "InvalidInputError";
  }
}

export class PriceRangeViolationError extends Error {
  constructor(message?: string) {
    super(message ?? "Price range is violated");
    this.name = "PriceRangeViolationError";
  }
}
