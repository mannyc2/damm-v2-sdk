import {
  AccountRole,
  address,
  type Address,
  type Instruction,
  type TransactionSigner,
} from "@solana/kit";
import { getTransferSolInstruction } from "@solana-program/system";
import {
  ASSOCIATED_TOKEN_PROGRAM_ADDRESS,
  TOKEN_PROGRAM_ADDRESS,
  findAssociatedTokenPda,
  getCloseAccountInstruction,
  getCreateAssociatedTokenIdempotentInstructionAsync,
  getSyncNativeInstruction,
} from "@solana-program/token";
import { replaceInstructionAccount } from "./common";

export const NATIVE_MINT_ADDRESS = address(
  "So11111111111111111111111111111111111111112",
);

export const TOKEN_2022_PROGRAM_ADDRESS = address(
  "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
);

export function isNativeMint(mint: Address): boolean {
  return mint === NATIVE_MINT_ADDRESS;
}

export function getTokenProgramAddress(flag: number): Address {
  return flag === 0 ? TOKEN_PROGRAM_ADDRESS : TOKEN_2022_PROGRAM_ADDRESS;
}

export async function getOrCreateAssociatedTokenInstruction(
  mint: Address,
  owner: Address,
  payer: TransactionSigner,
  tokenProgram: Address,
): Promise<{ ata: Address; instruction: Instruction }> {
  const [ata] = await findAssociatedTokenPda({
    owner,
    mint,
    tokenProgram,
  });

  const instruction = await getCreateAssociatedTokenIdempotentInstructionAsync({
    payer,
    ata,
    owner,
    mint,
    tokenProgram,
  });

  return { ata, instruction };
}

export async function prepareTokenAccounts(params: {
  payer: TransactionSigner;
  tokenAOwner: Address;
  tokenBOwner: Address;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
}): Promise<{
  tokenAAta: Address;
  tokenBAta: Address;
  instructions: Instruction[];
}> {
  const {
    payer,
    tokenAOwner,
    tokenBOwner,
    tokenAMint,
    tokenBMint,
    tokenAProgram,
    tokenBProgram,
  } = params;

  const [
    { ata: tokenAAta, instruction: createTokenAInstruction },
    { ata: tokenBAta, instruction: createTokenBInstruction },
  ] = await Promise.all([
    getOrCreateAssociatedTokenInstruction(
      tokenAMint,
      tokenAOwner,
      payer,
      tokenAProgram,
    ),
    getOrCreateAssociatedTokenInstruction(
      tokenBMint,
      tokenBOwner,
      payer,
      tokenBProgram,
    ),
  ]);

  return {
    tokenAAta,
    tokenBAta,
    instructions: [createTokenAInstruction, createTokenBInstruction],
  };
}

export function wrapSolInstructions(
  sourceAddress: Address,
  sourceSigner: TransactionSigner,
  destination: Address,
  amount: bigint,
): readonly Instruction[] {
  const transferInstruction = getTransferSolInstruction({
    source: sourceSigner,
    destination,
    amount,
  });

  const normalizedTransferInstruction =
    sourceAddress === sourceSigner.address
      ? transferInstruction
      : replaceInstructionAccount(transferInstruction, 0, {
          address: sourceAddress,
          role: AccountRole.WRITABLE_SIGNER,
        });

  return [
    normalizedTransferInstruction,
    getSyncNativeInstruction({
      account: destination,
    }),
  ];
}

export async function unwrapSolInstruction(
  ownerAddress: Address,
  ownerSigner: TransactionSigner,
  receiver: Address = ownerAddress,
): Promise<Instruction> {
  const [wSolAta] = await findAssociatedTokenPda({
    owner: ownerAddress,
    mint: NATIVE_MINT_ADDRESS,
    tokenProgram: TOKEN_PROGRAM_ADDRESS,
  });

  const instruction = getCloseAccountInstruction({
    account: wSolAta,
    destination: receiver,
    owner: ownerSigner,
  });

  return ownerAddress === ownerSigner.address
    ? instruction
    : replaceInstructionAccount(instruction, 2, {
        address: ownerAddress,
        role: AccountRole.READONLY_SIGNER,
      });
}
