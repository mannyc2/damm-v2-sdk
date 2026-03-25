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

export type KitVestingSnapshot = {
  account: Address;
  vestingState: unknown;
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

export type CreatePoolParams = {
  creator: Address;
  payer: TransactionSigner;
  config: Address;
  positionNft: TransactionSigner;
  tokenAMint: Address;
  tokenBMint: Address;
  initSqrtPrice: BN;
  liquidityDelta: BN;
  tokenAAmount: BN;
  tokenBAmount: BN;
  activationPoint: BN | null;
  tokenAProgram: Address;
  tokenBProgram: Address;
  isLockLiquidity?: boolean;
};

export type CreatePoolResult = CreateCustomPoolResult;

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

export type CreatePositionAndAddLiquidityParams = {
  owner: TransactionSigner;
  pool: Address;
  positionNft: TransactionSigner;
  liquidityDelta: BN;
  maxAmountTokenA: BN;
  maxAmountTokenB: BN;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
};

export type RemoveLiquidityParams = {
  owner: TransactionSigner;
  position: Address;
  pool: Address;
  positionNftAccount: Address;
  liquidityDelta: BN;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
  vestings: readonly KitVestingSnapshot[];
  currentPoint: BN;
};

export type RemoveAllLiquidityParams = Omit<
  RemoveLiquidityParams,
  "liquidityDelta"
>;

export type RemoveAllLiquidityAndClosePositionParams = {
  owner: TransactionSigner;
  position: Address;
  positionNftAccount: Address;
  poolState: unknown;
  positionState: unknown;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
  vestings: readonly KitVestingSnapshot[];
  currentPoint: BN;
};

type LockPositionSharedParams = {
  owner: TransactionSigner;
  position: Address;
  positionNftAccount: Address;
  pool: Address;
  cliffPoint: BN | null;
  periodFrequency: BN;
  cliffUnlockLiquidity: BN;
  liquidityPerPeriod: BN;
  numberOfPeriod: number;
};

export type LockPositionParams =
  | (LockPositionSharedParams & {
      payer: TransactionSigner;
      innerPosition?: false;
      vestingAccount: TransactionSigner;
    })
  | (LockPositionSharedParams & {
      payer?: never;
      innerPosition: true;
      vestingAccount?: never;
    });

export type PermanentLockPositionParams = {
  owner: TransactionSigner;
  position: Address;
  positionNftAccount: Address;
  pool: Address;
  unlockedLiquidity: BN;
};

export type RefreshVestingParams = {
  owner: Address;
  position: Address;
  positionNftAccount: Address;
  pool: Address;
  vestingAccounts: readonly Address[];
};

export type ClosePositionParams = {
  owner: TransactionSigner;
  pool: Address;
  position: Address;
  positionNftMint: Address;
  positionNftAccount: Address;
};

export type MergePositionParams = {
  owner: TransactionSigner;
  positionA: Address;
  positionB: Address;
  poolState: unknown;
  positionBNftAccount: Address;
  positionANftAccount: Address;
  positionBState: unknown;
  tokenAAmountAddLiquidityThreshold: BN;
  tokenBAmountAddLiquidityThreshold: BN;
  tokenAAmountRemoveLiquidityThreshold: BN;
  tokenBAmountRemoveLiquidityThreshold: BN;
  positionBVestings: readonly KitVestingSnapshot[];
  currentPoint: BN;
};

export type SplitPositionParams = {
  firstPositionOwner: TransactionSigner;
  secondPositionOwner: TransactionSigner;
  pool: Address;
  firstPosition: Address;
  firstPositionNftAccount: Address;
  secondPosition: Address;
  secondPositionNftAccount: Address;
  permanentLockedLiquidityPercentage: number;
  unlockedLiquidityPercentage: number;
  feeAPercentage: number;
  feeBPercentage: number;
  reward0Percentage: number;
  reward1Percentage: number;
  innerVestingLiquidityPercentage: number;
};

export type SplitPosition2Params = {
  firstPositionOwner: TransactionSigner;
  secondPositionOwner: TransactionSigner;
  pool: Address;
  firstPosition: Address;
  firstPositionNftAccount: Address;
  secondPosition: Address;
  secondPositionNftAccount: Address;
  numerator: number;
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
