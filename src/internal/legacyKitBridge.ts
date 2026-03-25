import { fromLegacyTransactionInstruction } from "@solana/compat";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import BN from "bn.js";

import { CpAmm } from "../CpAmm";
import type { KitInstruction } from "../kit/types";
import type {
  AddLiquidityParams,
  CreatePositionParams,
  InitializeCustomizeablePoolParams,
  InitializeCustomizeablePoolWithDynamicConfigParams,
  Swap2Params,
} from "../types";

type AddressLike = string;

export type LegacyKitPlanSeed = {
  instructions: readonly KitInstruction[];
};

export type LegacyKitPoolResultSeed = LegacyKitPlanSeed & {
  pool: string;
  position: string;
};

type LegacyCreateCustomPoolParams = {
  payer: AddressLike;
  creator: AddressLike;
  positionNft: AddressLike;
  tokenAMint: AddressLike;
  tokenBMint: AddressLike;
  tokenAAmount: BN;
  tokenBAmount: BN;
  sqrtMinPrice: BN;
  sqrtMaxPrice: BN;
  liquidityDelta: BN;
  initSqrtPrice: BN;
  poolFees: {
    baseFee: {
      data: number[];
    };
    compoundingFeeBps: number;
    padding: number;
    dynamicFee: Record<string, unknown> | null;
  };
  hasAlphaVault: boolean;
  activationType: number;
  collectFeeMode: number;
  activationPoint: BN | null;
  tokenAProgram: AddressLike;
  tokenBProgram: AddressLike;
  isLockLiquidity?: boolean;
};

type LegacyCreateCustomPoolWithDynamicConfigParams =
  LegacyCreateCustomPoolParams & {
    config: AddressLike;
    poolCreatorAuthority: AddressLike;
  };

type LegacyCreatePositionParams = {
  owner: AddressLike;
  payer: AddressLike;
  pool: AddressLike;
  positionNft: AddressLike;
};

type LegacyAddLiquidityParams = {
  owner: AddressLike;
  position: AddressLike;
  pool: AddressLike;
  positionNftAccount: AddressLike;
  liquidityDelta: BN;
  maxAmountTokenA: BN;
  maxAmountTokenB: BN;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
  tokenAMint: AddressLike;
  tokenBMint: AddressLike;
  tokenAVault: AddressLike;
  tokenBVault: AddressLike;
  tokenAProgram: AddressLike;
  tokenBProgram: AddressLike;
};

type LegacySwap2Params = {
  payer: AddressLike;
  pool: AddressLike;
  inputTokenMint: AddressLike;
  outputTokenMint: AddressLike;
  tokenAMint: AddressLike;
  tokenBMint: AddressLike;
  tokenAVault: AddressLike;
  tokenBVault: AddressLike;
  tokenAProgram: AddressLike;
  tokenBProgram: AddressLike;
  referralTokenAccount: AddressLike | null;
  receiver?: AddressLike;
  poolState?: unknown;
} & (
  | {
      swapMode: number;
      amountIn: BN;
      minimumAmountOut: BN;
    }
  | {
      swapMode: number;
      amountOut: BN;
      maximumAmountIn: BN;
    }
);

function toPublicKey(address: AddressLike): PublicKey {
  return new PublicKey(address);
}

function toPublicKeyOrNull(address: AddressLike | null): PublicKey | null {
  return address ? toPublicKey(address) : null;
}

function toKitInstructions(transaction: Transaction): readonly KitInstruction[] {
  return transaction.instructions.map(fromLegacyTransactionInstruction);
}

export class LegacyKitBridge {
  private readonly client: CpAmm;

  constructor(rpcUrl: string) {
    this.client = new CpAmm(new Connection(rpcUrl));
  }

  async createCustomPool(
    params: LegacyCreateCustomPoolParams,
  ): Promise<LegacyKitPoolResultSeed> {
    const result = await this.client.createCustomPool({
      payer: toPublicKey(params.payer),
      creator: toPublicKey(params.creator),
      positionNft: toPublicKey(params.positionNft),
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount,
      sqrtMinPrice: params.sqrtMinPrice,
      sqrtMaxPrice: params.sqrtMaxPrice,
      liquidityDelta: params.liquidityDelta,
      initSqrtPrice: params.initSqrtPrice,
      poolFees: params.poolFees as InitializeCustomizeablePoolParams["poolFees"],
      hasAlphaVault: params.hasAlphaVault,
      activationType: params.activationType,
      collectFeeMode: params.collectFeeMode,
      activationPoint: params.activationPoint,
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
      isLockLiquidity: params.isLockLiquidity,
    });

    return {
      instructions: toKitInstructions(result.tx),
      pool: result.pool.toBase58(),
      position: result.position.toBase58(),
    };
  }

  async createCustomPoolWithDynamicConfig(
    params: LegacyCreateCustomPoolWithDynamicConfigParams,
  ): Promise<LegacyKitPoolResultSeed> {
    const result = await this.client.createCustomPoolWithDynamicConfig({
      payer: toPublicKey(params.payer),
      creator: toPublicKey(params.creator),
      positionNft: toPublicKey(params.positionNft),
      config: toPublicKey(params.config),
      poolCreatorAuthority: toPublicKey(params.poolCreatorAuthority),
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount,
      sqrtMinPrice: params.sqrtMinPrice,
      sqrtMaxPrice: params.sqrtMaxPrice,
      liquidityDelta: params.liquidityDelta,
      initSqrtPrice: params.initSqrtPrice,
      poolFees:
        params.poolFees as InitializeCustomizeablePoolWithDynamicConfigParams["poolFees"],
      hasAlphaVault: params.hasAlphaVault,
      activationType: params.activationType,
      collectFeeMode: params.collectFeeMode,
      activationPoint: params.activationPoint,
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
      isLockLiquidity: params.isLockLiquidity,
    });

    return {
      instructions: toKitInstructions(result.tx),
      pool: result.pool.toBase58(),
      position: result.position.toBase58(),
    };
  }

  async createPosition(
    params: LegacyCreatePositionParams,
  ): Promise<LegacyKitPlanSeed> {
    const createPositionParams: CreatePositionParams = {
      owner: toPublicKey(params.owner),
      payer: toPublicKey(params.payer),
      pool: toPublicKey(params.pool),
      positionNft: toPublicKey(params.positionNft),
    };

    return {
      instructions: toKitInstructions(
        await this.client.createPosition(createPositionParams),
      ),
    };
  }

  async addLiquidity(params: LegacyAddLiquidityParams): Promise<LegacyKitPlanSeed> {
    const addLiquidityParams: AddLiquidityParams = {
      owner: toPublicKey(params.owner),
      position: toPublicKey(params.position),
      pool: toPublicKey(params.pool),
      positionNftAccount: toPublicKey(params.positionNftAccount),
      liquidityDelta: params.liquidityDelta,
      maxAmountTokenA: params.maxAmountTokenA,
      maxAmountTokenB: params.maxAmountTokenB,
      tokenAAmountThreshold: params.tokenAAmountThreshold,
      tokenBAmountThreshold: params.tokenBAmountThreshold,
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAVault: toPublicKey(params.tokenAVault),
      tokenBVault: toPublicKey(params.tokenBVault),
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
    };

    return {
      instructions: toKitInstructions(
        await this.client.addLiquidity(addLiquidityParams),
      ),
    };
  }

  async swap2(params: LegacySwap2Params): Promise<LegacyKitPlanSeed> {
    const swap2Params: Swap2Params = {
      payer: toPublicKey(params.payer),
      pool: toPublicKey(params.pool),
      inputTokenMint: toPublicKey(params.inputTokenMint),
      outputTokenMint: toPublicKey(params.outputTokenMint),
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAVault: toPublicKey(params.tokenAVault),
      tokenBVault: toPublicKey(params.tokenBVault),
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
      referralTokenAccount: toPublicKeyOrNull(params.referralTokenAccount),
      receiver: params.receiver ? toPublicKey(params.receiver) : undefined,
      poolState: params.poolState as Swap2Params["poolState"],
      swapMode: params.swapMode,
      ...("amountIn" in params
        ? {
            amountIn: params.amountIn,
            minimumAmountOut: params.minimumAmountOut,
          }
        : {
            amountOut: params.amountOut,
            maximumAmountIn: params.maximumAmountIn,
          }),
    };

    return {
      instructions: toKitInstructions(await this.client.swap2(swap2Params)),
    };
  }
}
