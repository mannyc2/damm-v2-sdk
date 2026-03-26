import {
  getAddressEncoder,
  getProgramDerivedAddress,
  type Address,
} from "@solana/kit";

import { findOperatorPda, findTokenBadgePda } from "../generated";
import { cpAmmProgramAddress } from "./common";

const addressEncoder = getAddressEncoder();
const textEncoder = new TextEncoder();

function compareBytes(
  left: ArrayLike<number>,
  right: ArrayLike<number>,
): number {
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

function sortedMintSeeds(
  tokenAMint: Address,
  tokenBMint: Address,
): readonly [Address, Address] {
  const encodedA = addressEncoder.encode(tokenAMint);
  const encodedB = addressEncoder.encode(tokenBMint);

  return compareBytes(encodedA, encodedB) >= 0
    ? [tokenAMint, tokenBMint]
    : [tokenBMint, tokenAMint];
}

export async function derivePoolAddress(
  config: Address,
  tokenAMint: Address,
  tokenBMint: Address,
): Promise<Address> {
  const [firstMint, secondMint] = sortedMintSeeds(tokenAMint, tokenBMint);
  const [pool] = await getProgramDerivedAddress({
    programAddress: cpAmmProgramAddress(),
    seeds: [
      textEncoder.encode("pool"),
      addressEncoder.encode(config),
      addressEncoder.encode(firstMint),
      addressEncoder.encode(secondMint),
    ],
  });

  return pool;
}

export async function deriveCustomizablePoolAddress(
  tokenAMint: Address,
  tokenBMint: Address,
): Promise<Address> {
  const [firstMint, secondMint] = sortedMintSeeds(tokenAMint, tokenBMint);
  const [pool] = await getProgramDerivedAddress({
    programAddress: cpAmmProgramAddress(),
    seeds: [
      textEncoder.encode("cpool"),
      addressEncoder.encode(firstMint),
      addressEncoder.encode(secondMint),
    ],
  });

  return pool;
}

export async function deriveClaimFeeOperatorAddress(
  operator: Address,
): Promise<Address> {
  const [claimFeeOperator] = await getProgramDerivedAddress({
    programAddress: cpAmmProgramAddress(),
    seeds: [textEncoder.encode("cf_operator"), addressEncoder.encode(operator)],
  });

  return claimFeeOperator;
}

export async function deriveOperatorAddress(
  whitelistedAddress: Address,
): Promise<Address> {
  const [operator] = await findOperatorPda({ whitelistedAddress });
  return operator;
}

export async function deriveTokenBadgeAddress(tokenMint: Address): Promise<Address> {
  const [tokenBadge] = await findTokenBadgePda({ tokenMint });
  return tokenBadge;
}
