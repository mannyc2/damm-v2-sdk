import { address, type Address, type Rpc } from "@solana/kit";

import {
  decodeConfig,
  decodePool,
  decodePosition,
  decodeVesting,
  fetchAllConfig,
  fetchAllMaybePosition,
  fetchAllPool,
  fetchAllPosition,
  fetchConfig,
  fetchMaybePool,
  fetchPool,
  fetchPosition,
  findPositionPda,
  CP_AMM_PROGRAM_ADDRESS,
} from "../generated";
import {
  configDiscriminatorFilter,
  poolByTokenAMintFilter,
  poolDiscriminatorFilter,
  positionByPoolFilter,
  positionDiscriminatorFilter,
  vestingByPositionFilter,
  vestingDiscriminatorFilter,
} from "../helpers/accountFilters";
import { decodePoolFeeData } from "../helpers/feeCodec";
import {
  getBase64ProgramAccounts,
  getJsonParsedTokenAccountsByOwner,
} from "../helpers/programAccounts";
import {
  adaptGeneratedAccountRecord,
  adaptGeneratedValue,
} from "../helpers/state";
import type {
  KitAccountRecord,
  KitConfigState,
  KitDecodedPoolFees,
  KitPoolState,
  KitPositionState,
  KitUserPositionRecord,
  KitVestingSnapshot,
} from "../types";

const DEFAULT_ADDRESS = address("11111111111111111111111111111111");
const TOKEN_2022_PROGRAM_ADDRESS = address(
  "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
);

function adaptKitValue<T>(value: unknown): T {
  return adaptGeneratedValue(value) as unknown as T;
}

function adaptKitRecord<T>(publicKey: Address, account: unknown): KitAccountRecord<T> {
  return adaptGeneratedAccountRecord(
    publicKey,
    account,
  ) as unknown as KitAccountRecord<T>;
}

function totalPositionLiquidity(position: KitPositionState) {
  return position.vestedLiquidity
    .add(position.permanentLockedLiquidity)
    .add(position.unlockedLiquidity);
}

function parsedTokenAmount(account: unknown): string | null {
  if (
    typeof account === "object" &&
    account !== null &&
    "data" in account &&
    typeof (account as { data?: unknown }).data === "object"
  ) {
    const data = (account as { data: { tokenAmount?: { amount?: string } } }).data;
    return data.tokenAmount?.amount ?? null;
  }

  return null;
}

function parsedTokenMint(account: unknown): Address | null {
  if (
    typeof account === "object" &&
    account !== null &&
    "data" in account &&
    typeof (account as { data?: unknown }).data === "object"
  ) {
    const data = (account as { data: { mint?: string } }).data;
    return data.mint ? address(data.mint) : null;
  }

  return null;
}

export async function fetchConfigState(
  rpc: Rpc<any>,
  config: Address,
): Promise<KitConfigState> {
  const account = await fetchConfig(rpc, config);
  return adaptKitValue<KitConfigState>(account.data);
}

export async function fetchPoolState(
  rpc: Rpc<any>,
  pool: Address,
): Promise<KitPoolState> {
  const account = await fetchPool(rpc, pool);
  return adaptKitValue<KitPoolState>(account.data);
}

export async function fetchPoolStatesByTokenAMint(
  rpc: Rpc<any>,
  tokenAMint: Address,
): Promise<Array<KitAccountRecord<KitPoolState>>> {
  const accounts = await getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
    poolDiscriminatorFilter(),
    poolByTokenAMintFilter(tokenAMint),
  ]);

  return accounts.map(({ publicKey, encodedAccount }) => {
    const decodedAccount = decodePool(encodedAccount);
    return adaptKitRecord<KitPoolState>(publicKey, decodedAccount.data);
  });
}

export async function fetchPoolFees(
  rpc: Rpc<any>,
  pool: Address,
): Promise<KitDecodedPoolFees> {
  const poolState = await fetchPoolState(rpc, pool);
  return decodePoolFeeData(poolState.poolFees.baseFee.baseFeeInfo.data);
}

export async function fetchPositionState(
  rpc: Rpc<any>,
  position: Address,
): Promise<KitPositionState> {
  const account = await fetchPosition(rpc, position);
  return adaptKitValue<KitPositionState>(account.data);
}

export async function getMultipleConfigs(
  rpc: Rpc<any>,
  configs: readonly Address[],
): Promise<KitConfigState[]> {
  const accounts = await fetchAllConfig(rpc, [...configs]);
  return accounts.map((account) => adaptKitValue<KitConfigState>(account.data));
}

export async function getMultiplePools(
  rpc: Rpc<any>,
  pools: readonly Address[],
): Promise<KitPoolState[]> {
  const accounts = await fetchAllPool(rpc, [...pools]);
  return accounts.map((account) => adaptKitValue<KitPoolState>(account.data));
}

export async function getMultiplePositions(
  rpc: Rpc<any>,
  positions: readonly Address[],
): Promise<KitPositionState[]> {
  const accounts = await fetchAllPosition(rpc, [...positions]);
  return accounts.map((account) =>
    adaptKitValue<KitPositionState>(account.data),
  );
}

export async function getAllConfigs(
  rpc: Rpc<any>,
): Promise<Array<KitAccountRecord<KitConfigState>>> {
  const accounts = await getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
    configDiscriminatorFilter(),
  ]);

  return accounts.map(({ publicKey, encodedAccount }) => {
    const decodedAccount = decodeConfig(encodedAccount);
    return adaptKitRecord<KitConfigState>(publicKey, decodedAccount.data);
  });
}

export async function getStaticConfigs(
  rpc: Rpc<any>,
): Promise<Array<KitAccountRecord<KitConfigState>>> {
  const configs = await getAllConfigs(rpc);
  return configs.filter(
    (config) =>
      config.account.configType === 0 &&
      config.account.vaultConfigKey === DEFAULT_ADDRESS &&
      config.account.poolCreatorAuthority === DEFAULT_ADDRESS,
  );
}

export async function getAllPools(
  rpc: Rpc<any>,
): Promise<Array<KitAccountRecord<KitPoolState>>> {
  const accounts = await getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
    poolDiscriminatorFilter(),
  ]);

  return accounts.map(({ publicKey, encodedAccount }) => {
    const decodedAccount = decodePool(encodedAccount);
    return adaptKitRecord<KitPoolState>(publicKey, decodedAccount.data);
  });
}

export async function getAllPositions(
  rpc: Rpc<any>,
): Promise<Array<KitAccountRecord<KitPositionState>>> {
  const accounts = await getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
    positionDiscriminatorFilter(),
  ]);

  return accounts.map(({ publicKey, encodedAccount }) => {
    const decodedAccount = decodePosition(encodedAccount);
    return adaptKitRecord<KitPositionState>(publicKey, decodedAccount.data);
  });
}

export async function getAllPositionsByPool(
  rpc: Rpc<any>,
  pool: Address,
): Promise<Array<KitAccountRecord<KitPositionState>>> {
  const accounts = await getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
    positionDiscriminatorFilter(),
    positionByPoolFilter(pool),
  ]);

  return accounts.map(({ publicKey, encodedAccount }) => {
    const decodedAccount = decodePosition(encodedAccount);
    return adaptKitRecord<KitPositionState>(publicKey, decodedAccount.data);
  });
}

export async function getAllVestingsByPosition(
  rpc: Rpc<any>,
  position: Address,
): Promise<readonly KitVestingSnapshot[]> {
  const accounts = await getBase64ProgramAccounts(rpc, CP_AMM_PROGRAM_ADDRESS, [
    vestingDiscriminatorFilter(),
    vestingByPositionFilter(position),
  ]);

  return accounts.map(({ publicKey, encodedAccount }) => {
    const decodedAccount = decodeVesting(encodedAccount);

    return {
      account: publicKey,
      vestingState: adaptKitValue<KitVestingSnapshot["vestingState"]>(
        decodedAccount.data,
      ),
    };
  });
}

export async function getPositionsByUser(
  rpc: Rpc<any>,
  user: Address,
): Promise<KitUserPositionRecord[]> {
  const userTokenAccounts = await getJsonParsedTokenAccountsByOwner(
    rpc,
    user,
    TOKEN_2022_PROGRAM_ADDRESS,
  );

  const positionNftAccounts = userTokenAccounts
    .map(({ publicKey, parsedAccount }) => {
      const amount = parsedTokenAmount(parsedAccount);
      const mint = parsedTokenMint(parsedAccount);

      if (amount !== "1" || !mint) {
        return null;
      }

      return {
        positionNftAccount: publicKey,
        positionNft: mint,
      };
    })
    .filter((value): value is { positionNftAccount: Address; positionNft: Address } => value !== null);

  if (positionNftAccounts.length === 0) {
    return [];
  }

  const positionAddresses = await Promise.all(
    positionNftAccounts.map(async ({ positionNft }) => {
      const [position] = await findPositionPda({ positionNftMint: positionNft });
      return position;
    }),
  );

  const maybePositions = await fetchAllMaybePosition(rpc, positionAddresses);
  const results = positionNftAccounts
    .map((positionNftAccount, index) => {
      const maybePosition = maybePositions[index];
      if (!maybePosition.exists) {
        return null;
      }

      return {
        positionNftAccount: positionNftAccount.positionNftAccount,
        position: positionAddresses[index],
        positionState: adaptKitValue<KitPositionState>(maybePosition.data),
      };
    })
    .filter((value): value is KitUserPositionRecord => value !== null);

  results.sort((a, b) =>
    totalPositionLiquidity(b.positionState).cmp(
      totalPositionLiquidity(a.positionState),
    ),
  );

  return results;
}

export async function getUserPositionByPool(
  rpc: Rpc<any>,
  pool: Address,
  user: Address,
): Promise<KitUserPositionRecord[]> {
  const positions = await getPositionsByUser(rpc, user);
  return positions.filter((position) => position.positionState.pool === pool);
}

export async function isPoolExist(
  rpc: Rpc<any>,
  pool: Address,
): Promise<boolean> {
  try {
    const maybePool = await fetchMaybePool(rpc, pool);
    return maybePool.exists;
  } catch {
    return false;
  }
}
