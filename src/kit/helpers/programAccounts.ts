import {
  address,
  parseBase64RpcAccount,
  parseJsonRpcAccount,
  type Address,
  type Rpc,
} from "@solana/kit";

import type { RpcFilter } from "./accountFilters";

type RpcAccountInfo = {
  pubkey: string;
  account: unknown;
};

function unwrapRpcListResponse(response: unknown): RpcAccountInfo[] {
  if (Array.isArray(response)) {
    return response as RpcAccountInfo[];
  }

  if (
    typeof response === "object" &&
    response !== null &&
    "value" in response &&
    Array.isArray((response as { value: unknown }).value)
  ) {
    return (response as { value: RpcAccountInfo[] }).value;
  }

  return [];
}

export async function getBase64ProgramAccounts(
  rpc: Rpc<any>,
  programAddress: Address,
  filters: readonly RpcFilter[] = [],
) {
  const response = await (rpc as any)
    .getProgramAccounts(programAddress, {
      encoding: "base64",
      filters,
    })
    .send();

  return unwrapRpcListResponse(response).map(({ pubkey, account }) => {
    const publicKey = address(pubkey);

    return {
      publicKey,
      encodedAccount: parseBase64RpcAccount(publicKey, account as any),
    };
  });
}

export async function getJsonParsedTokenAccountsByOwner(
  rpc: Rpc<any>,
  owner: Address,
  programId: Address,
) {
  const response = await (rpc as any)
    .getTokenAccountsByOwner(
      owner,
      {
        programId,
      },
      {
        encoding: "jsonParsed",
      },
    )
    .send();

  return unwrapRpcListResponse(response).map(({ pubkey, account }) => {
    const publicKey = address(pubkey);

    return {
      publicKey,
      parsedAccount: parseJsonRpcAccount(publicKey, account as any),
    };
  });
}
