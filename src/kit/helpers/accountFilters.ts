import {
  getAddressEncoder,
  getBase58Decoder,
  type Address,
  type ReadonlyUint8Array,
} from "@solana/kit";

import {
  CONFIG_DISCRIMINATOR,
  POOL_DISCRIMINATOR,
  POSITION_DISCRIMINATOR,
  VESTING_DISCRIMINATOR,
} from "../generated/accounts";

export const CONFIG_DISCRIMINATOR_OFFSET = 0;
export const POSITION_POOL_OFFSET = 8;
export const VESTING_POSITION_OFFSET = 8;
export const POOL_TOKEN_A_MINT_OFFSET = 168;

export type RpcFilter = {
  memcmp?: {
    offset: number;
    bytes: string;
  };
};

function encodeBase58(bytes: ReadonlyUint8Array): string {
  return getBase58Decoder().decode(bytes);
}

export function bytesMemcmpFilter(
  offset: number,
  bytes: ReadonlyUint8Array,
): RpcFilter {
  return {
    memcmp: {
      offset,
      bytes: encodeBase58(bytes),
    },
  };
}

export function addressMemcmpFilter(offset: number, value: Address): RpcFilter {
  return bytesMemcmpFilter(offset, getAddressEncoder().encode(value));
}

export function configDiscriminatorFilter(): RpcFilter {
  return bytesMemcmpFilter(CONFIG_DISCRIMINATOR_OFFSET, CONFIG_DISCRIMINATOR);
}

export function poolDiscriminatorFilter(): RpcFilter {
  return bytesMemcmpFilter(CONFIG_DISCRIMINATOR_OFFSET, POOL_DISCRIMINATOR);
}

export function positionDiscriminatorFilter(): RpcFilter {
  return bytesMemcmpFilter(CONFIG_DISCRIMINATOR_OFFSET, POSITION_DISCRIMINATOR);
}

export function vestingDiscriminatorFilter(): RpcFilter {
  return bytesMemcmpFilter(CONFIG_DISCRIMINATOR_OFFSET, VESTING_DISCRIMINATOR);
}

export function positionByPoolFilter(pool: Address): RpcFilter {
  return addressMemcmpFilter(POSITION_POOL_OFFSET, pool);
}

export function vestingByPositionFilter(position: Address): RpcFilter {
  return addressMemcmpFilter(VESTING_POSITION_OFFSET, position);
}

export function poolByTokenAMintFilter(tokenAMint: Address): RpcFilter {
  return addressMemcmpFilter(POOL_TOKEN_A_MINT_OFFSET, tokenAMint);
}
