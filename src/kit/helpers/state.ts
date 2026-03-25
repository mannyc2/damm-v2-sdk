import BN from "bn.js";
import type { Address, ReadonlyUint8Array } from "@solana/kit";

import type { KitAccountRecord } from "../types";

function isReadonlyUint8Array(value: unknown): value is ReadonlyUint8Array {
  return value instanceof Uint8Array;
}

function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function adaptGeneratedValue<T>(value: T): T {
  if (typeof value === "bigint") {
    return new BN(value.toString()) as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => adaptGeneratedValue(item)) as T;
  }

  if (isReadonlyUint8Array(value)) {
    return value;
  }

  if (isPlainObject(value)) {
    const nextValue: Record<string, unknown> = {};

    for (const [key, innerValue] of Object.entries(value)) {
      if (key === "discriminator") {
        continue;
      }

      nextValue[key] = adaptGeneratedValue(innerValue);
    }

    return nextValue as T;
  }

  return value;
}

export function adaptGeneratedAccountRecord<T>(
  publicKey: Address,
  account: T,
): KitAccountRecord<T> {
  return {
    publicKey,
    account: adaptGeneratedValue(account),
  };
}
