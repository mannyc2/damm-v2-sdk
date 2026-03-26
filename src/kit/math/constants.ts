import BN from "bn.js";

export const LIQUIDITY_SCALE = 128;
export const SCALE_OFFSET = 64;
export const BASIS_POINT_MAX = 10_000;
export const FEE_DENOMINATOR = 1_000_000_000;

export const ONE_Q64 = new BN(1).shln(SCALE_OFFSET);
export const MAX_EXPONENTIAL = new BN(0x80000);
export const MAX = new BN(2).pow(new BN(128)).sub(new BN(1));

export const MIN_FEE_BPS = 1;
export const MIN_FEE_NUMERATOR = 100_000;

export const MAX_FEE_BPS_V0 = 5000;
export const MAX_FEE_NUMERATOR_V0 = 500_000_000;

export const MAX_FEE_BPS_V1 = 9900;
export const MAX_FEE_NUMERATOR_V1 = 990_000_000;

export const MIN_SQRT_PRICE = new BN("4295048016");
export const MAX_SQRT_PRICE = new BN("79226673521066979257578248091");

export const DYNAMIC_FEE_SCALING_FACTOR = new BN(100_000_000_000);
export const DYNAMIC_FEE_ROUNDING_OFFSET = new BN(99_999_999_999);

export const U128_MAX = new BN("340282366920938463463374607431768211455");
export const U64_MAX = new BN("18446744073709551615");
export const U16_MAX = 65535;

export const DEAD_LIQUIDITY = new BN(100).shln(SCALE_OFFSET);
