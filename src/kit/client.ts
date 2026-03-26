import {
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  type Address,
  type Rpc,
  type RpcSubscriptions,
} from "@solana/kit";
import type BN from "bn.js";

import {
  addLiquidityPlan,
  closePositionPlan,
  claimPositionFee2Plan,
  claimPositionFeePlan,
  claimRewardPlan,
  createPositionAndAddLiquidityPlan,
  createCustomPoolPlan,
  createCustomPoolWithDynamicConfigPlan,
  createPoolPlan,
  createPositionPlan,
  fundRewardPlan,
  initializeAndFundRewardPlan,
  initializeRewardPlan,
  lockPositionPlan,
  mergePositionPlan,
  permanentLockPositionPlan,
  refreshVestingPlan,
  removeAllLiquidityAndClosePositionPlan,
  removeAllLiquidityPlan,
  removeLiquidityPlan,
  splitPosition2Plan,
  splitPositionPlan,
  swapPlan,
  swap2Plan,
  updateRewardDurationPlan,
  updateRewardFunderPlan,
  withdrawIneligibleRewardPlan,
} from "./builders";
import { getDefaultRpcSubscriptionsUrl } from "./helpers";
import * as kitMath from "./math";
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
  KitPreparedPoolCreation,
  KitPreparePoolCreationParams,
  KitPreparePoolCreationSingleSideParams,
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
  SwapParams,
  Swap2Params,
  UpdateRewardDurationParams,
  UpdateRewardFunderParams,
  WithdrawIneligibleRewardParams,
} from "./types";

export class CpAmmKitClient {
  readonly rpc: Rpc<any>;
  readonly rpcSubscriptions?: RpcSubscriptions<any>;

  private constructor(options: Pick<CpAmmKitClientOptions, "rpc" | "rpcSubscriptions">) {
    this.rpc = options.rpc;
    this.rpcSubscriptions = options.rpcSubscriptions;
  }

  static fromRpc(
    rpc: Rpc<any>,
    options: Omit<CpAmmKitClientOptions, "rpc"> = {},
  ): CpAmmKitClient {
    return new CpAmmKitClient({
      rpc,
      rpcSubscriptions: options.rpcSubscriptions,
    });
  }

  static fromRpcUrl(
    rpcUrl: string,
    options: FromRpcUrlOptions = {},
  ): CpAmmKitClient {
    const rpcSubscriptionsUrl =
      options.rpcSubscriptionsUrl ?? getDefaultRpcSubscriptionsUrl(rpcUrl);

    return new CpAmmKitClient({
      rpc: createSolanaRpc(rpcUrl),
      rpcSubscriptions: createSolanaRpcSubscriptions(rpcSubscriptionsUrl),
    });
  }

  static fromRpcAndSubscriptions(
    rpc: Rpc<any>,
    rpcSubscriptions: RpcSubscriptions<any>,
    options: Omit<CpAmmKitClientOptions, "rpc" | "rpcSubscriptions"> = {},
  ): CpAmmKitClient {
    return new CpAmmKitClient({
      rpc,
      rpcSubscriptions,
    });
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
    return kitMath.getQuote(params);
  }

  getQuote2(params: KitGetQuote2Params): KitQuote2Result {
    return kitMath.getQuote2(params);
  }

  getDepositQuote(params: KitGetDepositQuoteParams): KitDepositQuote {
    return kitMath.getDepositQuote(params);
  }

  getWithdrawQuote(params: KitGetWithdrawQuoteParams): KitWithdrawQuote {
    return kitMath.getWithdrawQuote(params);
  }

  getLiquidityDelta(params: KitLiquidityDeltaParams): BN {
    return kitMath.getLiquidityDelta(params);
  }

  preparePoolCreationSingleSide(
    params: KitPreparePoolCreationSingleSideParams,
  ): BN {
    return kitMath.preparePoolCreationSingleSide(params);
  }

  preparePoolCreationParams(
    params: KitPreparePoolCreationParams,
  ): KitPreparedPoolCreation {
    return kitMath.preparePoolCreationParams(params);
  }

  isLockedPosition(position: KitPositionState): boolean {
    return kitMath.isLockedPosition(position);
  }

  isPermanentLockedPosition(position: KitPositionState): boolean {
    return kitMath.isPermanentLockedPosition(position);
  }

  canUnlockPosition(
    positionState: KitPositionState,
    vestings: readonly KitVestingSnapshot[],
    currentPoint: BN,
  ): { canUnlock: boolean; reason?: string } {
    return kitMath.canUnlockPosition(positionState, vestings, currentPoint);
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
    return await claimPositionFeePlan(params);
  }

  async claimPositionFee2(
    params: ClaimPositionFee2Params,
  ): Promise<KitTransactionPlan> {
    return await claimPositionFee2Plan(params);
  }

  async initializeReward(
    params: InitializeRewardParams,
  ): Promise<KitTransactionPlan> {
    return await initializeRewardPlan(this.rpc, params);
  }

  async initializeAndFundReward(
    params: InitializeAndFundRewardParams,
  ): Promise<KitTransactionPlan> {
    return await initializeAndFundRewardPlan(this.rpc, params);
  }

  async updateRewardDuration(
    params: UpdateRewardDurationParams,
  ): Promise<KitTransactionPlan> {
    return await updateRewardDurationPlan(params);
  }

  async updateRewardFunder(
    params: UpdateRewardFunderParams,
  ): Promise<KitTransactionPlan> {
    return await updateRewardFunderPlan(params);
  }

  async fundReward(params: FundRewardParams): Promise<KitTransactionPlan> {
    return await fundRewardPlan(params);
  }

  async withdrawIneligibleReward(
    params: WithdrawIneligibleRewardParams,
  ): Promise<KitTransactionPlan> {
    return await withdrawIneligibleRewardPlan(this.rpc, params);
  }

  async claimReward(params: ClaimRewardParams): Promise<KitTransactionPlan> {
    return await claimRewardPlan(params);
  }

  async swap(params: SwapParams): Promise<KitTransactionPlan> {
    return await swapPlan(this.rpc, params);
  }

  async swap2(params: Swap2Params): Promise<KitTransactionPlan> {
    return await swap2Plan(this.rpc, params);
  }
}
