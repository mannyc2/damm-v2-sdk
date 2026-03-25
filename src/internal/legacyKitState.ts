import BN from "bn.js";
import { PublicKey } from "@solana/web3.js";

function tryToPublicKey(value: string): PublicKey | string {
  try {
    return new PublicKey(value);
  } catch {
    return value;
  }
}

export function toLegacyState<T>(value: T): T {
  if (value === null || value === undefined) {
    return value;
  }

  if (BN.isBN(value)) {
    return value;
  }

  if (value instanceof Uint8Array) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => toLegacyState(item)) as T;
  }

  if (typeof value === "string") {
    return tryToPublicKey(value) as T;
  }

  if (typeof value === "object") {
    const nextValue: Record<string, unknown> = {};

    for (const [key, innerValue] of Object.entries(value)) {
      nextValue[key] = toLegacyState(innerValue);
    }

    return nextValue as T;
  }

  return value;
}
