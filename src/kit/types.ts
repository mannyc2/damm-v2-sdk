import type {
  Address,
  Instruction,
  Rpc,
  RpcSubscriptions,
  TransactionSigner,
} from "@solana/kit";
import BN from "bn.js";

export type KitInstruction = Instruction;

export type KitTransactionPlan = {
  instructions: readonly KitInstruction[];
  signers: readonly TransactionSigner[];
};

export enum CollectFeeMode {
  BothToken,
  OnlyB,
  Compounding,
}

export enum ActivationType {
  Slot,
  Timestamp,
}

export enum SwapMode {
  ExactIn,
  PartialFill,
  ExactOut,
}

export type KitBaseFee = {
  data: number[];
};

export type KitDynamicFee = Record<string, unknown>;

export type KitPoolFeesParams = {
  baseFee: KitBaseFee;
  compoundingFeeBps: number;
  padding: number;
  dynamicFee: KitDynamicFee | null;
};

export type CpAmmKitClientOptions = {
  rpc: Rpc<any>;
  rpcSubscriptions?: RpcSubscriptions<any>;
  legacyRpcUrl?: string;
};

export type FromRpcUrlOptions = {
  rpcSubscriptionsUrl?: string;
};

export type CreateCustomPoolParams = {
  payer: TransactionSigner;
  creator: Address;
  positionNft: TransactionSigner;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAAmount: BN;
  tokenBAmount: BN;
  sqrtMinPrice: BN;
  sqrtMaxPrice: BN;
  liquidityDelta: BN;
  initSqrtPrice: BN;
  poolFees: KitPoolFeesParams;
  hasAlphaVault: boolean;
  activationType: ActivationType;
  collectFeeMode: CollectFeeMode;
  activationPoint: BN | null;
  tokenAProgram: Address;
  tokenBProgram: Address;
  isLockLiquidity?: boolean;
};

export type CreateCustomPoolResult = {
  plan: KitTransactionPlan;
  pool: Address;
  position: Address;
};

export type CreateCustomPoolWithDynamicConfigParams =
  Omit<CreateCustomPoolParams, "creator"> & {
    config: Address;
    creator: TransactionSigner;
    poolCreatorAuthority: Address;
  };

export type CreateCustomPoolWithDynamicConfigResult = CreateCustomPoolResult;

export type CreatePositionParams = {
  owner: Address;
  payer: TransactionSigner;
  pool: Address;
  positionNft: TransactionSigner;
};

export type AddLiquidityParams = {
  owner: TransactionSigner;
  position: Address;
  pool: Address;
  positionNftAccount: Address;
  liquidityDelta: BN;
  maxAmountTokenA: BN;
  maxAmountTokenB: BN;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
};

export type Swap2Params = {
  payer: TransactionSigner;
  pool: Address;
  inputTokenMint: Address;
  outputTokenMint: Address;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
  referralTokenAccount: Address | null;
  receiver?: Address;
  poolState?: unknown;
} & (
  | {
      swapMode: SwapMode.ExactIn;
      amountIn: BN;
      minimumAmountOut: BN;
    }
  | {
      swapMode: SwapMode.PartialFill;
      amountIn: BN;
      minimumAmountOut: BN;
    }
  | {
      swapMode: SwapMode.ExactOut;
      amountOut: BN;
      maximumAmountIn: BN;
    }
);
