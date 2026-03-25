import {
  createSolanaRpc,
  createSolanaRpcSubscriptions,
  type Address,
  type Rpc,
  type RpcSubscriptions,
  type TransactionSigner,
} from "@solana/kit";

import { LegacyKitBridge } from "../internal/legacyKitBridge";
import { adaptLegacyPoolResult, adaptLegacyTransaction } from "./adapters/legacy";
import { getDefaultRpcSubscriptionsUrl } from "./helpers";
import type {
  AddLiquidityParams,
  CpAmmKitClientOptions,
  CreateCustomPoolParams,
  CreateCustomPoolResult,
  CreateCustomPoolWithDynamicConfigParams,
  CreateCustomPoolWithDynamicConfigResult,
  CreatePositionParams,
  FromRpcUrlOptions,
  KitTransactionPlan,
  Swap2Params,
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

  async createCustomPool(
    params: CreateCustomPoolParams,
  ): Promise<CreateCustomPoolResult> {
    const legacyBridge = assertLegacyBridge(
      this.legacyBridge,
      "createCustomPool",
    );

    const result = await legacyBridge.createCustomPool({
      payer: signerAddress(params.payer),
      creator: addressString(params.creator),
      positionNft: signerAddress(params.positionNft),
      tokenAMint: addressString(params.tokenAMint),
      tokenBMint: addressString(params.tokenBMint),
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount,
      sqrtMinPrice: params.sqrtMinPrice,
      sqrtMaxPrice: params.sqrtMaxPrice,
      liquidityDelta: params.liquidityDelta,
      initSqrtPrice: params.initSqrtPrice,
      poolFees: params.poolFees,
      hasAlphaVault: params.hasAlphaVault,
      activationType: params.activationType,
      collectFeeMode: params.collectFeeMode,
      activationPoint: params.activationPoint,
      tokenAProgram: addressString(params.tokenAProgram),
      tokenBProgram: addressString(params.tokenBProgram),
      isLockLiquidity: params.isLockLiquidity,
    });

    return adaptLegacyPoolResult(
      result,
      planSigners(params.payer, params.positionNft),
    );
  }

  async createCustomPoolWithDynamicConfig(
    params: CreateCustomPoolWithDynamicConfigParams,
  ): Promise<CreateCustomPoolWithDynamicConfigResult> {
    const legacyBridge = assertLegacyBridge(
      this.legacyBridge,
      "createCustomPoolWithDynamicConfig",
    );

    const result = await legacyBridge.createCustomPoolWithDynamicConfig({
      payer: signerAddress(params.payer),
      creator: signerAddress(params.creator),
      positionNft: signerAddress(params.positionNft),
      config: addressString(params.config),
      poolCreatorAuthority: addressString(params.poolCreatorAuthority),
      tokenAMint: addressString(params.tokenAMint),
      tokenBMint: addressString(params.tokenBMint),
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount,
      sqrtMinPrice: params.sqrtMinPrice,
      sqrtMaxPrice: params.sqrtMaxPrice,
      liquidityDelta: params.liquidityDelta,
      initSqrtPrice: params.initSqrtPrice,
      poolFees: params.poolFees,
      hasAlphaVault: params.hasAlphaVault,
      activationType: params.activationType,
      collectFeeMode: params.collectFeeMode,
      activationPoint: params.activationPoint,
      tokenAProgram: addressString(params.tokenAProgram),
      tokenBProgram: addressString(params.tokenBProgram),
      isLockLiquidity: params.isLockLiquidity,
    });

    return adaptLegacyPoolResult(
      result,
      planSigners(params.payer, params.positionNft, params.creator),
    );
  }

  async createPosition(params: CreatePositionParams): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "createPosition");

    const transaction = await legacyBridge.createPosition({
      owner: addressString(params.owner),
      payer: signerAddress(params.payer),
      pool: addressString(params.pool),
      positionNft: signerAddress(params.positionNft),
    });

    return adaptLegacyTransaction(
      transaction,
      planSigners(params.payer, params.positionNft),
    );
  }

  async addLiquidity(params: AddLiquidityParams): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "addLiquidity");

    const transaction = await legacyBridge.addLiquidity({
      owner: signerAddress(params.owner),
      position: addressString(params.position),
      pool: addressString(params.pool),
      positionNftAccount: addressString(params.positionNftAccount),
      liquidityDelta: params.liquidityDelta,
      maxAmountTokenA: params.maxAmountTokenA,
      maxAmountTokenB: params.maxAmountTokenB,
      tokenAAmountThreshold: params.tokenAAmountThreshold,
      tokenBAmountThreshold: params.tokenBAmountThreshold,
      tokenAMint: addressString(params.tokenAMint),
      tokenBMint: addressString(params.tokenBMint),
      tokenAVault: addressString(params.tokenAVault),
      tokenBVault: addressString(params.tokenBVault),
      tokenAProgram: addressString(params.tokenAProgram),
      tokenBProgram: addressString(params.tokenBProgram),
    });

    return adaptLegacyTransaction(transaction, planSigners(params.owner));
  }

  async swap2(params: Swap2Params): Promise<KitTransactionPlan> {
    const legacyBridge = assertLegacyBridge(this.legacyBridge, "swap2");

    const transaction = await legacyBridge.swap2({
      payer: signerAddress(params.payer),
      pool: addressString(params.pool),
      inputTokenMint: addressString(params.inputTokenMint),
      outputTokenMint: addressString(params.outputTokenMint),
      tokenAMint: addressString(params.tokenAMint),
      tokenBMint: addressString(params.tokenBMint),
      tokenAVault: addressString(params.tokenAVault),
      tokenBVault: addressString(params.tokenBVault),
      tokenAProgram: addressString(params.tokenAProgram),
      tokenBProgram: addressString(params.tokenBProgram),
      referralTokenAccount: optionalAddressString(params.referralTokenAccount) ?? null,
      receiver: optionalAddressString(params.receiver),
      poolState: params.poolState,
      ...("amountIn" in params
        ? {
            swapMode: params.swapMode,
            amountIn: params.amountIn,
            minimumAmountOut: params.minimumAmountOut,
          }
        : {
            swapMode: params.swapMode,
            amountOut: params.amountOut,
            maximumAmountIn: params.maximumAmountIn,
          }),
    });

    return adaptLegacyTransaction(transaction, planSigners(params.payer));
  }
}
