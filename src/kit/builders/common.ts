import {
  AccountRole,
  address,
  type AccountMeta,
  type Address,
  type Instruction,
  type TransactionSigner,
} from "@solana/kit";
import BN from "bn.js";

import { CP_AMM_PROGRAM_ADDRESS } from "../generated";
import type { KitTransactionPlan } from "../types";

type OptionalSigner = TransactionSigner | null | undefined;

export const POOL_AUTHORITY_ADDRESS = address(
  "HLnpSz9h2S4hiLQ43rnSD9XkcUThA7B8hQMKmDaiTLcC",
);

export const SYSVAR_INSTRUCTIONS_ADDRESS = address(
  "Sysvar1nstructions1111111111111111111111111",
);

export function deduplicateSigners(
  signers: readonly OptionalSigner[],
): readonly TransactionSigner[] {
  const deduplicated = new Map<string, TransactionSigner>();
  for (const signer of signers) {
    if (signer && !deduplicated.has(signer.address)) {
      deduplicated.set(signer.address, signer);
    }
  }

  return Array.from(deduplicated.values());
}

export function buildTransactionPlan(
  instructions: readonly Instruction[],
  signers: readonly OptionalSigner[],
): KitTransactionPlan {
  return {
    instructions: instructions.map((instruction) => {
      return Object.freeze({
        ...instruction,
        accounts: instruction.accounts.map(({ address, role }) => ({
          address,
          role,
        })),
      }) as Instruction;
    }),
    signers: deduplicateSigners(signers),
  };
}

export function readonlyAccountMeta(address: Address): AccountMeta<Address> {
  return {
    address,
    role: AccountRole.READONLY,
  };
}

export function writableAccountMeta(address: Address): AccountMeta<Address> {
  return {
    address,
    role: AccountRole.WRITABLE,
  };
}

export function appendRemainingAccounts<TInstruction extends Instruction>(
  instruction: TInstruction,
  remainingAccounts: readonly AccountMeta<Address>[],
): TInstruction {
  if (remainingAccounts.length === 0) {
    return instruction;
  }

  return Object.freeze({
    ...instruction,
    accounts: [...instruction.accounts, ...remainingAccounts],
  }) as TInstruction;
}

export function replaceInstructionAccount<TInstruction extends Instruction>(
  instruction: TInstruction,
  index: number,
  account: AccountMeta<Address>,
): TInstruction {
  return Object.freeze({
    ...instruction,
    accounts: instruction.accounts.map((currentAccount, currentIndex) =>
      currentIndex === index ? account : currentAccount,
    ),
  }) as TInstruction;
}

export function bnToBigInt(value: BN): bigint {
  return BigInt(value.toString());
}

export function optionalBnToBigInt(value: BN | null | undefined) {
  if (value === null) {
    return null;
  }

  return value === undefined ? undefined : bnToBigInt(value);
}

export function cpAmmProgramAddress() {
  return CP_AMM_PROGRAM_ADDRESS;
}
