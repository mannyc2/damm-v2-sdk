import { address, type TransactionSigner } from "@solana/kit";

import type {
  LegacyKitPlanSeed,
  LegacyKitPoolResultSeed,
} from "../../internal/legacyKitBridge";
import type { CreateCustomPoolResult, KitTransactionPlan } from "../types";

function deduplicatePlanSigners(
  signers: readonly TransactionSigner[],
): readonly TransactionSigner[] {
  const deduplicated = new Map<string, TransactionSigner>();
  for (const signer of signers) {
    deduplicated.set(signer.address, signer);
  }

  return Array.from(deduplicated.values());
}

function buildKitTransactionPlan(
  transaction: LegacyKitPlanSeed,
  signers: readonly TransactionSigner[],
): KitTransactionPlan {
  return {
    instructions: transaction.instructions,
    signers: deduplicatePlanSigners(signers),
  };
}

export function adaptLegacyTransaction(
  transaction: LegacyKitPlanSeed,
  signers: readonly TransactionSigner[],
): KitTransactionPlan {
  return buildKitTransactionPlan(transaction, signers);
}

export function adaptLegacyPoolResult(
  result: LegacyKitPoolResultSeed,
  signers: readonly TransactionSigner[],
): CreateCustomPoolResult {
  return {
    plan: buildKitTransactionPlan(result, signers),
    pool: address(result.pool),
    position: address(result.position),
  };
}
