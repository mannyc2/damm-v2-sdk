import type {
  Address,
  Instruction,
  ReadonlyUint8Array,
  Rpc,
  RpcSubscriptions,
  TransactionSigner,
} from "@solana/kit";
import BN from "bn.js";
import type Decimal from "decimal.js";
import type { Mint } from "@solana/spl-token";
import type {
  Config as GeneratedConfig,
  PodAlignedFeeMarketCapScheduler as GeneratedPodAlignedFeeMarketCapScheduler,
  PodAlignedFeeRateLimiter as GeneratedPodAlignedFeeRateLimiter,
  PodAlignedFeeTimeScheduler as GeneratedPodAlignedFeeTimeScheduler,
  Pool as GeneratedPool,
  Position as GeneratedPosition,
  SwapResult2 as GeneratedSwapResult2,
  TokenBadge as GeneratedTokenBadge,
  Vesting as GeneratedVesting,
} from "./generated";

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

export enum BaseFeeMode {
  FeeTimeSchedulerLinear,
  FeeTimeSchedulerExponential,
  RateLimiter,
  FeeMarketCapSchedulerLinear,
  FeeMarketCapSchedulerExponential,
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

type StripDiscriminator<T> = T extends { discriminator: unknown }
  ? Omit<T, "discriminator">
  : T;

type KitifyState<T> = T extends bigint
  ? BN
  : T extends ReadonlyUint8Array
    ? ReadonlyUint8Array
    : T extends readonly (infer U)[]
      ? Array<KitifyState<U>>
      : T extends object
        ? {
            [K in keyof T]: KitifyState<T[K]>;
          }
        : T;

type Simplify<T> = { [K in keyof T]: T[K] } & {};

export type KitAccountRecord<T> = {
  publicKey: Address;
  account: T;
};

export type KitConfigState = Simplify<KitifyState<StripDiscriminator<GeneratedConfig>>>;
export type KitPoolState = Simplify<KitifyState<StripDiscriminator<GeneratedPool>>>;
export type KitPositionState = Simplify<
  KitifyState<StripDiscriminator<GeneratedPosition>>
>;
export type KitVestingState = Simplify<
  KitifyState<StripDiscriminator<GeneratedVesting>>
>;
export type KitTokenBadgeState = Simplify<
  KitifyState<StripDiscriminator<GeneratedTokenBadge>>
>;

export type KitDecodedPoolFees =
  | Simplify<
      KitifyState<StripDiscriminator<GeneratedPodAlignedFeeTimeScheduler>>
    >
  | Simplify<
      KitifyState<StripDiscriminator<GeneratedPodAlignedFeeRateLimiter>>
    >
  | Simplify<
      KitifyState<StripDiscriminator<GeneratedPodAlignedFeeMarketCapScheduler>>
    >;

export type KitTransferFeeMintInfo = {
  mint: Mint;
  currentEpoch: number;
};

export type KitQuote = {
  swapInAmount: BN;
  consumedInAmount: BN;
  swapOutAmount: BN;
  minSwapOutAmount: BN;
  totalFee: BN;
  priceImpact: Decimal;
};

type KitSwapResult2Base = Simplify<KitifyState<GeneratedSwapResult2>>;

export interface KitQuote2Result extends KitSwapResult2Base {
  priceImpact: Decimal;
  minimumAmountOut?: BN;
  maximumAmountIn?: BN;
}

export type KitDepositQuote = {
  actualInputAmount: BN;
  consumedInputAmount: BN;
  outputAmount: BN;
  liquidityDelta: BN;
};

export type KitWithdrawQuote = {
  liquidityDelta: BN;
  outAmountA: BN;
  outAmountB: BN;
};

export type KitLiquidityDeltaParams = {
  maxAmountTokenA: BN;
  maxAmountTokenB: BN;
  sqrtPrice: BN;
  sqrtMinPrice: BN;
  sqrtMaxPrice: BN;
  tokenAInfo?: KitTransferFeeMintInfo;
  tokenBInfo?: KitTransferFeeMintInfo;
  collectFeeMode: CollectFeeMode;
  tokenAAmount?: BN;
  tokenBAmount?: BN;
  liquidity?: BN;
};

export type KitGetQuoteParams = {
  inAmount: BN;
  inputTokenMint: Address;
  slippage: number;
  poolState: KitPoolState;
  currentTime: number;
  currentSlot: number;
  inputTokenInfo?: KitTransferFeeMintInfo;
  outputTokenInfo?: KitTransferFeeMintInfo;
  tokenADecimal: number;
  tokenBDecimal: number;
  hasReferral?: boolean;
};

export type KitGetQuote2Params = {
  inputTokenMint: Address;
  slippage: number;
  currentPoint: BN;
  poolState: KitPoolState;
  inputTokenInfo?: KitTransferFeeMintInfo;
  outputTokenInfo?: KitTransferFeeMintInfo;
  tokenADecimal: number;
  tokenBDecimal: number;
  hasReferral: boolean;
} & (
  | {
      swapMode: SwapMode.ExactIn;
      amountIn: BN;
    }
  | {
      swapMode: SwapMode.PartialFill;
      amountIn: BN;
    }
  | {
      swapMode: SwapMode.ExactOut;
      amountOut: BN;
    }
);

export type KitGetDepositQuoteParams = {
  inAmount: BN;
  isTokenA: boolean;
  minSqrtPrice: BN;
  maxSqrtPrice: BN;
  sqrtPrice: BN;
  inputTokenInfo?: KitTransferFeeMintInfo;
  outputTokenInfo?: KitTransferFeeMintInfo;
  collectFeeMode: CollectFeeMode;
  tokenAAmount: BN;
  tokenBAmount: BN;
  liquidity: BN;
};

export type KitGetWithdrawQuoteParams = {
  liquidityDelta: BN;
  minSqrtPrice: BN;
  maxSqrtPrice: BN;
  sqrtPrice: BN;
  tokenATokenInfo?: KitTransferFeeMintInfo;
  tokenBTokenInfo?: KitTransferFeeMintInfo;
  collectFeeMode: CollectFeeMode;
  tokenAAmount: BN;
  tokenBAmount: BN;
  liquidity: BN;
};

export type KitPreparePoolCreationParams = {
  tokenAAmount: BN;
  tokenBAmount: BN;
  minSqrtPrice: BN;
  maxSqrtPrice: BN;
  tokenAInfo?: KitTransferFeeMintInfo;
  tokenBInfo?: KitTransferFeeMintInfo;
  collectFeeMode: CollectFeeMode;
};

export type KitPreparedPoolCreation = {
  initSqrtPrice: BN;
  liquidityDelta: BN;
};

export type KitPreparePoolCreationSingleSideParams = {
  tokenAAmount: BN;
  minSqrtPrice: BN;
  maxSqrtPrice: BN;
  initSqrtPrice: BN;
  tokenAInfo?: KitTransferFeeMintInfo;
  collectFeeMode: CollectFeeMode;
};

export type CpAmmKitClientOptions = {
  rpc: Rpc<any>;
  rpcSubscriptions?: RpcSubscriptions<any>;
  legacyRpcUrl?: string;
};

export type FromRpcUrlOptions = {
  rpcSubscriptionsUrl?: string;
};

export type KitUserPositionRecord = {
  positionNftAccount: Address;
  position: Address;
  positionState: KitPositionState;
};

export type KitVestingSnapshot = {
  account: Address;
  vestingState: KitVestingState;
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
  poolState: KitPoolState;
  positionState: KitPositionState;
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
  poolState: KitPoolState;
  positionBNftAccount: Address;
  positionANftAccount: Address;
  positionBState: KitPositionState;
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

export type ClaimPositionFeeParams = {
  owner: TransactionSigner;
  position: Address;
  pool: Address;
  positionNftAccount: Address;
  tokenAMint: Address;
  tokenBMint: Address;
  tokenAVault: Address;
  tokenBVault: Address;
  tokenAProgram: Address;
  tokenBProgram: Address;
  receiver?: Address;
  feePayer?: TransactionSigner;
  tempWSolAccount?: TransactionSigner;
};

export type ClaimPositionFee2Params = Omit<
  ClaimPositionFeeParams,
  "receiver" | "tempWSolAccount"
> & {
  receiver: Address;
};

export type InitializeRewardParams = {
  rewardIndex: number;
  rewardDuration: BN;
  pool: Address;
  rewardMint: Address;
  funder: Address;
  payer: TransactionSigner;
  creator: TransactionSigner;
  rewardMintProgram: Address;
};

export type InitializeAndFundRewardParams = {
  rewardIndex: number;
  rewardDuration: BN;
  pool: Address;
  creator: TransactionSigner;
  payer: TransactionSigner;
  rewardMint: Address;
  carryForward: boolean;
  amount: BN;
  rewardMintProgram: Address;
};

export type UpdateRewardDurationParams = {
  pool: Address;
  signer: TransactionSigner;
  rewardIndex: number;
  newDuration: BN;
};

export type UpdateRewardFunderParams = {
  pool: Address;
  signer: TransactionSigner;
  rewardIndex: number;
  newFunder: Address;
};

export type FundRewardParams = {
  funder: TransactionSigner;
  rewardIndex: number;
  pool: Address;
  carryForward: boolean;
  amount: BN;
  rewardMint: Address;
  rewardVault: Address;
  rewardMintProgram: Address;
};

export type WithdrawIneligibleRewardParams = {
  rewardIndex: number;
  pool: Address;
  funder: TransactionSigner;
};

export type ClaimRewardParams = {
  user: TransactionSigner;
  position: Address;
  poolState: KitPoolState;
  positionState: KitPositionState;
  positionNftAccount: Address;
  rewardIndex: number;
  isSkipReward: boolean;
  feePayer?: TransactionSigner;
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
  poolState?: KitPoolState;
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
