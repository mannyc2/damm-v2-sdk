import {
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  type Address,
  type Rpc,
  type RpcSubscriptions,
  type TransactionSigner,
} from "@solana/kit";
import type BN from "bn.js";

import { LegacyKitBridge } from "../internal/legacyKitBridge";
import * as legacyKitMath from "../internal/legacyKitMath";
import { adaptLegacyPoolResult, adaptLegacyTransaction } from "./adapters/legacy";
import {
  addLiquidityPlan,
  closePositionPlan,
  createPositionAndAddLiquidityPlan,
  createCustomPoolPlan,
  createCustomPoolWithDynamicConfigPlan,
  createPoolPlan,
  createPositionPlan,
  lockPositionPlan,
  mergePositionPlan,
  permanentLockPositionPlan,
  refreshVestingPlan,
  removeAllLiquidityAndClosePositionPlan,
  removeAllLiquidityPlan,
  removeLiquidityPlan,
  splitPosition2Plan,
  splitPositionPlan,
  swap2Plan,
} from "./builders";
import { getDefaultRpcSubscriptionsUrl } from "./helpers";
import * as readServices from "./services";
import type {
  AddLiquidityParams,
  ClaimPositionFee2Params,
  ClaimPositionFeeParams,
  ClaimRewardParams,
  ClosePositionParams,
  CpAmmKitClientOptions,
  CreatePoolParams,
  CreatePoolResult,
  CreateCustomPoolParams,
  CreateCustomPoolResult,
  CreateCustomPoolWithDynamicConfigParams,
  CreateCustomPoolWithDynamicConfigResult,
  FundRewardParams,
  InitializeAndFundRewardParams,
  InitializeRewardParams,
  LockPositionParams,
  MergePositionParams,
  PermanentLockPositionParams,
  RefreshVestingParams,
  RemoveAllLiquidityAndClosePositionParams,
  CreatePositionAndAddLiquidityParams,
  CreatePositionParams,
  FromRpcUrlOptions,
  KitAccountRecord,
  KitConfigState,
  KitDecodedPoolFees,
  KitDepositQuote,
  KitGetDepositQuoteParams,
  KitGetQuote2Params,
  KitGetQuoteParams,
  KitGetWithdrawQuoteParams,
  KitLiquidityDeltaParams,
  KitPoolState,
  KitPositionState,
  KitQuote,
  KitQuote2Result,
  KitTransactionPlan,
  KitUserPositionRecord,
  KitVestingSnapshot,
  KitWithdrawQuote,
  RemoveAllLiquidityParams,
  RemoveLiquidityParams,
  SplitPosition2Params,
  SplitPositionParams,
  Swap2Params,
  UpdateRewardDurationParams,
  UpdateRewardFunderParams,
  WithdrawIneligibleRewardParams,
} from "./types";

type OptionalSigner = TransactionSigner | null | undefined;
type OptionalAddress = Address | null | undefined;

function signerAddress(signer: TransactionSigner): string {
  return signer.address;
}

function addressString(value: Address): string {
  return value;
}

function optionalSignerAddress(signer: OptionalSigner): string | undefined {
  return signer ? signerAddress(signer) : undefined;
}

function optionalAddressString(
  value: OptionalAddress,
): string | null | undefined {
  if (value === null) {
    return null;
  }

  return value ? addressString(value) : undefined;
}

function assertLegacyBridge(
  bridge: LegacyKitBridge | undefined,
  methodName: string,
): LegacyKitBridge {
  if (bridge) {
    return bridge;
  }

  throw new Error(
    `${methodName} requires a legacy bridge. Use CpAmmKitClient.fromRpcUrl(...) or provide legacyRpcUrl when constructing from an existing RPC client.`,
  );
}

function planSigners(...signers: readonly OptionalSigner[]): readonly TransactionSigner[] {
  return signers.filter(
    (signer): signer is TransactionSigner => signer !== undefined && signer !== null,
  );
}

export class CpAmmKitClient {
  readonly rpc: Rpc<any>;
  readonly rpcSubscriptions?: RpcSubscriptions<any>;

  private constructor(
    private readonly options: CpAmmKitClientOptions,
    private readonly legacyBridge?: LegacyKitBridge,
  ) {
    this.rpc = options.rpc;
    this.rpcSubscriptions = options.rpcSubscriptions;
  }

  static fromRpc(
    rpc: Rpc<any>,
    options: Omit<CpAmmKitClientOptions, "rpc"> = {},
  ): CpAmmKitClient {
    const legacyBridge = options.legacyRpcUrl
      ? new LegacyKitBridge(options.legacyRpcUrl)
      : undefined;

    return new CpAmmKitClient(
      {
        rpc,
        rpcSubscriptions: options.rpcSubscriptions,
        legacyRpcUrl: options.legacyRpcUrl,
      },
      legacyBridge,
    );
  }

  static fromRpcUrl(
    rpcUrl: string,
    options: FromRpcUrlOptions = {},
  ): CpAmmKitClient {
    const rpcSubscriptionsUrl =
      options.rpcSubscriptionsUrl ?? getDefaultRpcSubscriptionsUrl(rpcUrl);

    return new CpAmmKitClient(
      {
        rpc: createSolanaRpc(rpcUrl),
        rpcSubscriptions: createSolanaRpcSubscriptions(rpcSubscriptionsUrl),
        legacyRpcUrl: rpcUrl,
      },
      new LegacyKitBridge(rpcUrl),
    );
  }

  static fromRpcAndSubscriptions(
    rpc: Rpc<any>,
    rpcSubscriptions: RpcSubscriptions<any>,
    options: Omit<CpAmmKitClientOptions, "rpc" | "rpcSubscriptions"> = {},
  ): CpAmmKitClient {
    const legacyBridge = options.legacyRpcUrl
      ? new LegacyKitBridge(options.legacyRpcUrl)
      : undefined;

    return new CpAmmKitClient(
      {
        rpc,
        rpcSubscriptions,
        legacyRpcUrl: options.legacyRpcUrl,
      },
      legacyBridge,
    );
  }

  async fetchConfigState(config: Address): Promise<KitConfigState> {
    return await readServices.fetchConfigState(this.rpc, config);
  }

  async fetchPoolState(pool: Address): Promise<KitPoolState> {
    return await readServices.fetchPoolState(this.rpc, pool);
  }

  async fetchPoolStatesByTokenAMint(
    tokenAMint: Address,
  ): Promise<Array<KitAccountRecord<KitPoolState>>> {
    return await readServices.fetchPoolStatesByTokenAMint(this.rpc, tokenAMint);
  }

  async fetchPoolFees(pool: Address): Promise<KitDecodedPoolFees> {
    return await readServices.fetchPoolFees(this.rpc, pool);
  }

  async fetchPositionState(position: Address): Promise<KitPositionState> {
    return await readServices.fetchPositionState(this.rpc, position);
  }

  async getMultipleConfigs(
    configs: readonly Address[],
  ): Promise<KitConfigState[]> {
    return await readServices.getMultipleConfigs(this.rpc, configs);
  }

  async getMultiplePools(pools: readonly Address[]): Promise<KitPoolState[]> {
    return await readServices.getMultiplePools(this.rpc, pools);
  }

  async getMultiplePositions(
    positions: readonly Address[],
  ): Promise<KitPositionState[]> {
    return await readServices.getMultiplePositions(this.rpc, positions);
  }

  async getAllConfigs(): Promise<Array<KitAccountRecord<KitConfigState>>> {
    return await readServices.getAllConfigs(this.rpc);
  }

  async getStaticConfigs(): Promise<Array<KitAccountRecord<KitConfigState>>> {
    return await readServices.getStaticConfigs(this.rpc);
  }

  async getAllPools(): Promise<Array<KitAccountRecord<KitPoolState>>> {
    return await readServices.getAllPools(this.rpc);
  }

  async getAllPositions(): Promise<Array<KitAccountRecord<KitPositionState>>> {
    return await readServices.getAllPositions(this.rpc);
  }

  async getAllPositionsByPool(
    pool: Address,
  ): Promise<Array<KitAccountRecord<KitPositionState>>> {
    return await readServices.getAllPositionsByPool(this.rpc, pool);
  }

  async getPositionsByUser(user: Address): Promise<KitUserPositionRecord[]> {
    return await readServices.getPositionsByUser(this.rpc, user);
  }

  async getUserPositionByPool(
    pool: Address,
    user: Address,
  ): Promise<KitUserPositionRecord[]> {
    return await readServices.getUserPositionByPool(this.rpc, pool, user);
  }

  async getAllVestingsByPosition(
    position: Address,
  ): Promise<readonly KitVestingSnapshot[]> {
    return await readServices.getAllVestingsByPosition(this.rpc, position);
  }

  async isPoolExist(pool: Address): Promise<boolean> {
    return await readServices.isPoolExist(this.rpc, pool);
  }

  getQuote(params: KitGetQuoteParams): KitQuote {
    return legacyKitMath.getQuote(params);
  }

  getQuote2(params: KitGetQuote2Params): KitQuote2Result {
    return legacyKitMath.getQuote2(params);
  }

  getDepositQuote(params: KitGetDepositQuoteParams): KitDepositQuote {
    return legacyKitMath.getDepositQuote(params);
  }

  getWithdrawQuote(params: KitGetWithdrawQuoteParams): KitWithdrawQuote {
    return legacyKitMath.getWithdrawQuote(params);
  }

  getLiquidityDelta(params: KitLiquidityDeltaParams): BN {
    return legacyKitMath.getLiquidityDelta(params);
  }

  isLockedPosition(position: KitPositionState): boolean {
    return legacyKitMath.isLockedPosition(position);
  }

  isPermanentLockedPosition(position: KitPositionState): boolean {
    return legacyKitMath.isPermanentLockedPosition(position);
  }

  canUnlockPosition(
    positionState: KitPositionState,
    vestings: readonly KitVestingSnapshot[],
    currentPoint: BN,
  ): { canUnlock: boolean; reason?: string } {
    return legacyKitMath.canUnlockPosition(positionState, vestings, currentPoint);
  }

  async createCustomPool(
    params: CreateCustomPoolParams,
  ): Promise<CreateCustomPoolResult> {
    return await createCustomPoolPlan(params);
  }

  async createCustomPoolWithDynamicConfig(
    params: CreateCustomPoolWithDynamicConfigParams,
  ): Promise<CreateCustomPoolWithDynamicConfigResult> {
    return await createCustomPoolWithDynamicConfigPlan(params);
  }

  async createPool(params: CreatePoolParams): Promise<CreatePoolResult> {
    return await createPoolPlan(params);
  }

  async createPosition(params: CreatePositionParams): Promise<KitTransactionPlan> {
    return await createPositionPlan(params);
  }

  async addLiquidity(params: AddLiquidityParams): Promise<KitTransactionPlan> {
    return await addLiquidityPlan(params);
  }

  async createPositionAndAddLiquidity(
    params: CreatePositionAndAddLiquidityParams,
  ): Promise<KitTransactionPlan> {
    return await createPositionAndAddLiquidityPlan(params);
  }

  async removeLiquidity(
    params: RemoveLiquidityParams,
  ): Promise<KitTransactionPlan> {
    return await removeLiquidityPlan(params);
  }

  async removeAllLiquidity(
    params: RemoveAllLiquidityParams,
  ): Promise<KitTransactionPlan> {
    return await removeAllLiquidityPlan(params);
  }

  async removeAllLiquidityAndClosePosition(
    params: RemoveAllLiquidityAndClosePositionParams,
  ): Promise<KitTransactionPlan> {
    return await removeAllLiquidityAndClosePositionPlan(params);
  }

  async lockPosition(params: LockPositionParams): Promise<KitTransactionPlan> {
    return await lockPositionPlan(params);
  }

  async permanentLockPosition(
    params: PermanentLockPositionParams,
  ): Promise<KitTransactionPlan> {
    return await permanentLockPositionPlan(params);
  }

  async refreshVesting(
    params: RefreshVestingParams,
  ): Promise<KitTransactionPlan> {
    return await refreshVestingPlan(params);
  }

  async closePosition(params: ClosePositionParams): Promise<KitTransactionPlan> {
    return await closePositionPlan(params);
  }

  async mergePosition(params: MergePositionParams): Promise<KitTransactionPlan> {
    return await mergePositionPlan(params);
  }

  async splitPosition(params: SplitPositionParams): Promise<KitTransactionPlan> {
    return await splitPositionPlan(params);
  }

  async splitPosition2(params: SplitPosition2Params): Promise<KitTransactionPlan> {
    return await splitPosition2Plan(params);
  }

  async claimPositionFee(
    params: ClaimPositionFeeParams,
  ): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "claimPositionFee");

    const transaction = await legacyBridge.claimPositionFee({
      owner: signerAddress(params.owner),
      position: addressString(params.position),
      pool: addressString(params.pool),
      positionNftAccount: addressString(params.positionNftAccount),
      tokenAMint: addressString(params.tokenAMint),
      tokenBMint: addressString(params.tokenBMint),
      tokenAVault: addressString(params.tokenAVault),
      tokenBVault: addressString(params.tokenBVault),
      tokenAProgram: addressString(params.tokenAProgram),
      tokenBProgram: addressString(params.tokenBProgram),
      receiver: optionalAddressString(params.receiver),
      feePayer: optionalSignerAddress(params.feePayer),
      tempWSolAccount: optionalSignerAddress(params.tempWSolAccount),
    });

    return adaptLegacyTransaction(
      transaction,
      planSigners(params.owner, params.feePayer, params.tempWSolAccount),
    );
  }

  async claimPositionFee2(
    params: ClaimPositionFee2Params,
  ): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "claimPositionFee2");

    const transaction = await legacyBridge.claimPositionFee2({
      owner: signerAddress(params.owner),
      position: addressString(params.position),
      pool: addressString(params.pool),
      positionNftAccount: addressString(params.positionNftAccount),
      tokenAMint: addressString(params.tokenAMint),
      tokenBMint: addressString(params.tokenBMint),
      tokenAVault: addressString(params.tokenAVault),
      tokenBVault: addressString(params.tokenBVault),
      tokenAProgram: addressString(params.tokenAProgram),
      tokenBProgram: addressString(params.tokenBProgram),
      receiver: addressString(params.receiver),
      feePayer: optionalSignerAddress(params.feePayer),
    });

    return adaptLegacyTransaction(
      transaction,
      planSigners(params.owner, params.feePayer),
    );
  }

  async initializeReward(
    params: InitializeRewardParams,
  ): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "initializeReward");

    const transaction = await legacyBridge.initializeReward({
      rewardIndex: params.rewardIndex,
      rewardDuration: params.rewardDuration,
      pool: addressString(params.pool),
      rewardMint: addressString(params.rewardMint),
      funder: addressString(params.funder),
      payer: signerAddress(params.payer),
      creator: signerAddress(params.creator),
      rewardMintProgram: addressString(params.rewardMintProgram),
    });

    return adaptLegacyTransaction(
      transaction,
      planSigners(params.creator, params.payer),
    );
  }

  async initializeAndFundReward(
    params: InitializeAndFundRewardParams,
  ): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(
      this.legacyBridge,
      "initializeAndFundReward",
    );

    const transaction = await legacyBridge.initializeAndFundReward({
      rewardIndex: params.rewardIndex,
      rewardDuration: params.rewardDuration,
      pool: addressString(params.pool),
      creator: signerAddress(params.creator),
      payer: signerAddress(params.payer),
      rewardMint: addressString(params.rewardMint),
      carryForward: params.carryForward,
      amount: params.amount,
      rewardMintProgram: addressString(params.rewardMintProgram),
    });

    return adaptLegacyTransaction(
      transaction,
      planSigners(params.creator, params.payer),
    );
  }

  async updateRewardDuration(
    params: UpdateRewardDurationParams,
  ): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(
      this.legacyBridge,
      "updateRewardDuration",
    );

    const transaction = await legacyBridge.updateRewardDuration({
      pool: addressString(params.pool),
      signer: signerAddress(params.signer),
      rewardIndex: params.rewardIndex,
      newDuration: params.newDuration,
    });

    return adaptLegacyTransaction(transaction, planSigners(params.signer));
  }

  async updateRewardFunder(
    params: UpdateRewardFunderParams,
  ): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "updateRewardFunder");

    const transaction = await legacyBridge.updateRewardFunder({
      pool: addressString(params.pool),
      signer: signerAddress(params.signer),
      rewardIndex: params.rewardIndex,
      newFunder: addressString(params.newFunder),
    });

    return adaptLegacyTransaction(transaction, planSigners(params.signer));
  }

  async fundReward(params: FundRewardParams): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "fundReward");

    const transaction = await legacyBridge.fundReward({
      funder: signerAddress(params.funder),
      rewardIndex: params.rewardIndex,
      pool: addressString(params.pool),
      carryForward: params.carryForward,
      amount: params.amount,
      rewardMint: addressString(params.rewardMint),
      rewardVault: addressString(params.rewardVault),
      rewardMintProgram: addressString(params.rewardMintProgram),
    });

    return adaptLegacyTransaction(transaction, planSigners(params.funder));
  }

  async withdrawIneligibleReward(
    params: WithdrawIneligibleRewardParams,
  ): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(
      this.legacyBridge,
      "withdrawIneligibleReward",
    );

    const transaction = await legacyBridge.withdrawIneligibleReward({
      rewardIndex: params.rewardIndex,
      pool: addressString(params.pool),
      funder: signerAddress(params.funder),
    });

    return adaptLegacyTransaction(transaction, planSigners(params.funder));
  }

  async claimReward(params: ClaimRewardParams): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "claimReward");

    const transaction = await legacyBridge.claimReward({
      user: signerAddress(params.user),
      position: addressString(params.position),
      poolState: params.poolState,
      positionState: params.positionState,
      positionNftAccount: addressString(params.positionNftAccount),
      rewardIndex: params.rewardIndex,
      isSkipReward: params.isSkipReward,
      feePayer: optionalSignerAddress(params.feePayer),
    });

    return adaptLegacyTransaction(
      transaction,
      planSigners(params.user, params.feePayer),
    );
  }

  async swap2(params: Swap2Params): Promise<KitTransactionPlan> {
    return await swap2Plan(this.rpc, params);
  }
}
