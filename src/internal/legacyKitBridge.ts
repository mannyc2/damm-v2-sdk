import { fromLegacyTransactionInstruction } from "@solana/compat";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
import BN from "bn.js";

import { CpAmm } from "../CpAmm";
import { derivePoolAddress, derivePositionAddress } from "../pda";
import type { KitInstruction } from "../kit/types";
import type {
  AddLiquidityParams,
  ClaimPositionFeeParams,
  ClaimPositionFeeParams2,
  ClaimRewardParams,
  ClosePositionParams,
  CreatePoolParams,
  CreatePositionAndAddLiquidity,
  CreatePositionParams,
  FundRewardParams,
  InitializeCustomizeablePoolParams,
  InitializeCustomizeablePoolWithDynamicConfigParams,
  InitializeAndFundReward,
  InitializeRewardParams,
  LockPositionParams,
  MergePositionParams,
  PermanentLockParams,
  RefreshVestingParams,
  RemoveAllLiquidityAndClosePositionParams,
  RemoveAllLiquidityParams,
  RemoveLiquidityParams,
  SplitPosition2Params,
  SplitPositionParams,
  Swap2Params,
  UpdateRewardDurationParams,
  UpdateRewardFunderParams,
  WithdrawIneligibleRewardParams,
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

type LegacyCreatePoolParams = {
  creator: AddressLike;
  payer: AddressLike;
  config: AddressLike;
  positionNft: AddressLike;
  tokenAMint: AddressLike;
  tokenBMint: AddressLike;
  initSqrtPrice: BN;
  liquidityDelta: BN;
  tokenAAmount: BN;
  tokenBAmount: BN;
  activationPoint: BN | null;
  tokenAProgram: AddressLike;
  tokenBProgram: AddressLike;
  isLockLiquidity?: boolean;
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

type LegacyCreatePositionAndAddLiquidityParams = {
  owner: AddressLike;
  pool: AddressLike;
  positionNft: AddressLike;
  liquidityDelta: BN;
  maxAmountTokenA: BN;
  maxAmountTokenB: BN;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
  tokenAMint: AddressLike;
  tokenBMint: AddressLike;
  tokenAProgram: AddressLike;
  tokenBProgram: AddressLike;
};

type LegacyKitVestingSnapshot = {
  account: AddressLike;
  vestingState: unknown;
};

type LegacyRemoveLiquidityParams = {
  owner: AddressLike;
  position: AddressLike;
  pool: AddressLike;
  positionNftAccount: AddressLike;
  liquidityDelta: BN;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
  tokenAMint: AddressLike;
  tokenBMint: AddressLike;
  tokenAVault: AddressLike;
  tokenBVault: AddressLike;
  tokenAProgram: AddressLike;
  tokenBProgram: AddressLike;
  vestings: readonly LegacyKitVestingSnapshot[];
  currentPoint: BN;
};

type LegacyRemoveAllLiquidityParams = Omit<
  LegacyRemoveLiquidityParams,
  "liquidityDelta"
>;

type LegacyRemoveAllLiquidityAndClosePositionParams = {
  owner: AddressLike;
  position: AddressLike;
  positionNftAccount: AddressLike;
  poolState: unknown;
  positionState: unknown;
  tokenAAmountThreshold: BN;
  tokenBAmountThreshold: BN;
  vestings: readonly LegacyKitVestingSnapshot[];
  currentPoint: BN;
};

type LegacyLockPositionParams =
  | {
      owner: AddressLike;
      payer: AddressLike;
      position: AddressLike;
      positionNftAccount: AddressLike;
      pool: AddressLike;
      cliffPoint: BN | null;
      periodFrequency: BN;
      cliffUnlockLiquidity: BN;
      liquidityPerPeriod: BN;
      numberOfPeriod: number;
      innerPosition?: false;
      vestingAccount: AddressLike;
    }
  | {
      owner: AddressLike;
      position: AddressLike;
      positionNftAccount: AddressLike;
      pool: AddressLike;
      cliffPoint: BN | null;
      periodFrequency: BN;
      cliffUnlockLiquidity: BN;
      liquidityPerPeriod: BN;
      numberOfPeriod: number;
      innerPosition: true;
      payer?: never;
      vestingAccount?: never;
    };

type LegacyPermanentLockPositionParams = {
  owner: AddressLike;
  position: AddressLike;
  positionNftAccount: AddressLike;
  pool: AddressLike;
  unlockedLiquidity: BN;
};

type LegacyRefreshVestingParams = {
  owner: AddressLike;
  position: AddressLike;
  positionNftAccount: AddressLike;
  pool: AddressLike;
  vestingAccounts: readonly AddressLike[];
};

type LegacyClosePositionParams = {
  owner: AddressLike;
  pool: AddressLike;
  position: AddressLike;
  positionNftMint: AddressLike;
  positionNftAccount: AddressLike;
};

type LegacyMergePositionParams = {
  owner: AddressLike;
  positionA: AddressLike;
  positionB: AddressLike;
  poolState: unknown;
  positionBNftAccount: AddressLike;
  positionANftAccount: AddressLike;
  positionBState: unknown;
  tokenAAmountAddLiquidityThreshold: BN;
  tokenBAmountAddLiquidityThreshold: BN;
  tokenAAmountRemoveLiquidityThreshold: BN;
  tokenBAmountRemoveLiquidityThreshold: BN;
  positionBVestings: readonly LegacyKitVestingSnapshot[];
  currentPoint: BN;
};

type LegacySplitPositionParams = {
  firstPositionOwner: AddressLike;
  secondPositionOwner: AddressLike;
  pool: AddressLike;
  firstPosition: AddressLike;
  firstPositionNftAccount: AddressLike;
  secondPosition: AddressLike;
  secondPositionNftAccount: AddressLike;
  permanentLockedLiquidityPercentage: number;
  unlockedLiquidityPercentage: number;
  feeAPercentage: number;
  feeBPercentage: number;
  reward0Percentage: number;
  reward1Percentage: number;
  innerVestingLiquidityPercentage: number;
};

type LegacySplitPosition2Params = {
  firstPositionOwner: AddressLike;
  secondPositionOwner: AddressLike;
  pool: AddressLike;
  firstPosition: AddressLike;
  firstPositionNftAccount: AddressLike;
  secondPosition: AddressLike;
  secondPositionNftAccount: AddressLike;
  numerator: number;
};

type LegacyClaimPositionFeeParams = {
  owner: AddressLike;
  position: AddressLike;
  pool: AddressLike;
  positionNftAccount: AddressLike;
  tokenAMint: AddressLike;
  tokenBMint: AddressLike;
  tokenAVault: AddressLike;
  tokenBVault: AddressLike;
  tokenAProgram: AddressLike;
  tokenBProgram: AddressLike;
  receiver?: AddressLike;
  feePayer?: AddressLike;
  tempWSolAccount?: AddressLike;
};

type LegacyClaimPositionFee2Params = Omit<
  LegacyClaimPositionFeeParams,
  "receiver" | "tempWSolAccount"
> & {
  receiver: AddressLike;
};

type LegacyInitializeRewardParams = {
  rewardIndex: number;
  rewardDuration: BN;
  pool: AddressLike;
  rewardMint: AddressLike;
  funder: AddressLike;
  payer: AddressLike;
  creator: AddressLike;
  rewardMintProgram: AddressLike;
};

type LegacyInitializeAndFundRewardParams = {
  rewardIndex: number;
  rewardDuration: BN;
  pool: AddressLike;
  creator: AddressLike;
  payer: AddressLike;
  rewardMint: AddressLike;
  carryForward: boolean;
  amount: BN;
  rewardMintProgram: AddressLike;
};

type LegacyUpdateRewardDurationParams = {
  pool: AddressLike;
  signer: AddressLike;
  rewardIndex: number;
  newDuration: BN;
};

type LegacyUpdateRewardFunderParams = {
  pool: AddressLike;
  signer: AddressLike;
  rewardIndex: number;
  newFunder: AddressLike;
};

type LegacyFundRewardParams = {
  funder: AddressLike;
  rewardIndex: number;
  pool: AddressLike;
  carryForward: boolean;
  amount: BN;
  rewardMint: AddressLike;
  rewardVault: AddressLike;
  rewardMintProgram: AddressLike;
};

type LegacyWithdrawIneligibleRewardParams = {
  rewardIndex: number;
  pool: AddressLike;
  funder: AddressLike;
};

type LegacyClaimRewardParams = {
  user: AddressLike;
  position: AddressLike;
  poolState: unknown;
  positionState: unknown;
  positionNftAccount: AddressLike;
  rewardIndex: number;
  isSkipReward: boolean;
  feePayer?: AddressLike;
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

function toPublicKeyOrUndefined(address: AddressLike | undefined): PublicKey | undefined {
  return address ? toPublicKey(address) : undefined;
}

function toPublicKeyOrNull(address: AddressLike | null): PublicKey | null {
  return address ? toPublicKey(address) : null;
}

function toKitInstructions(transaction: Transaction): readonly KitInstruction[] {
  return transaction.instructions.map(fromLegacyTransactionInstruction);
}

function toLegacyVestings(
  vestings: readonly LegacyKitVestingSnapshot[],
): RemoveLiquidityParams["vestings"] {
  return vestings.map(({ account, vestingState }) => ({
    account: toPublicKey(account),
    vestingState:
      vestingState as RemoveLiquidityParams["vestings"][number]["vestingState"],
  }));
}

function toLegacyVestingAccounts(
  vestingAccounts: readonly AddressLike[],
): RefreshVestingParams["vestingAccounts"] {
  return vestingAccounts.map(toPublicKey);
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

  async createPool(params: LegacyCreatePoolParams): Promise<LegacyKitPoolResultSeed> {
    const createPoolParams: CreatePoolParams = {
      creator: toPublicKey(params.creator),
      payer: toPublicKey(params.payer),
      config: toPublicKey(params.config),
      positionNft: toPublicKey(params.positionNft),
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      initSqrtPrice: params.initSqrtPrice,
      liquidityDelta: params.liquidityDelta,
      tokenAAmount: params.tokenAAmount,
      tokenBAmount: params.tokenBAmount,
      activationPoint: params.activationPoint,
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
      isLockLiquidity: params.isLockLiquidity,
    };

    return {
      instructions: toKitInstructions(await this.client.createPool(createPoolParams)),
      pool: derivePoolAddress(
        createPoolParams.config,
        createPoolParams.tokenAMint,
        createPoolParams.tokenBMint,
      ).toBase58(),
      position: derivePositionAddress(createPoolParams.positionNft).toBase58(),
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

  async createPositionAndAddLiquidity(
    params: LegacyCreatePositionAndAddLiquidityParams,
  ): Promise<LegacyKitPlanSeed> {
    const createPositionAndAddLiquidityParams: CreatePositionAndAddLiquidity = {
      owner: toPublicKey(params.owner),
      pool: toPublicKey(params.pool),
      positionNft: toPublicKey(params.positionNft),
      liquidityDelta: params.liquidityDelta,
      maxAmountTokenA: params.maxAmountTokenA,
      maxAmountTokenB: params.maxAmountTokenB,
      tokenAAmountThreshold: params.tokenAAmountThreshold,
      tokenBAmountThreshold: params.tokenBAmountThreshold,
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
    };

    return {
      instructions: toKitInstructions(
        await this.client.createPositionAndAddLiquidity(
          createPositionAndAddLiquidityParams,
        ),
      ),
    };
  }

  async removeLiquidity(
    params: LegacyRemoveLiquidityParams,
  ): Promise<LegacyKitPlanSeed> {
    const removeLiquidityParams: RemoveLiquidityParams = {
      owner: toPublicKey(params.owner),
      position: toPublicKey(params.position),
      pool: toPublicKey(params.pool),
      positionNftAccount: toPublicKey(params.positionNftAccount),
      liquidityDelta: params.liquidityDelta,
      tokenAAmountThreshold: params.tokenAAmountThreshold,
      tokenBAmountThreshold: params.tokenBAmountThreshold,
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAVault: toPublicKey(params.tokenAVault),
      tokenBVault: toPublicKey(params.tokenBVault),
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
      vestings: toLegacyVestings(params.vestings),
      currentPoint: params.currentPoint,
    };

    return {
      instructions: toKitInstructions(
        await this.client.removeLiquidity(removeLiquidityParams),
      ),
    };
  }

  async removeAllLiquidity(
    params: LegacyRemoveAllLiquidityParams,
  ): Promise<LegacyKitPlanSeed> {
    const removeAllLiquidityParams: RemoveAllLiquidityParams = {
      owner: toPublicKey(params.owner),
      position: toPublicKey(params.position),
      pool: toPublicKey(params.pool),
      positionNftAccount: toPublicKey(params.positionNftAccount),
      tokenAAmountThreshold: params.tokenAAmountThreshold,
      tokenBAmountThreshold: params.tokenBAmountThreshold,
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAVault: toPublicKey(params.tokenAVault),
      tokenBVault: toPublicKey(params.tokenBVault),
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
      vestings: toLegacyVestings(params.vestings),
      currentPoint: params.currentPoint,
    };

    return {
      instructions: toKitInstructions(
        await this.client.removeAllLiquidity(removeAllLiquidityParams),
      ),
    };
  }

  async removeAllLiquidityAndClosePosition(
    params: LegacyRemoveAllLiquidityAndClosePositionParams,
  ): Promise<LegacyKitPlanSeed> {
    const removeAllLiquidityAndClosePositionParams: RemoveAllLiquidityAndClosePositionParams =
      {
        owner: toPublicKey(params.owner),
        position: toPublicKey(params.position),
        positionNftAccount: toPublicKey(params.positionNftAccount),
        poolState:
          params.poolState as RemoveAllLiquidityAndClosePositionParams["poolState"],
        positionState:
          params.positionState as RemoveAllLiquidityAndClosePositionParams["positionState"],
        tokenAAmountThreshold: params.tokenAAmountThreshold,
        tokenBAmountThreshold: params.tokenBAmountThreshold,
        vestings: toLegacyVestings(params.vestings),
        currentPoint: params.currentPoint,
      };

    return {
      instructions: toKitInstructions(
        await this.client.removeAllLiquidityAndClosePosition(
          removeAllLiquidityAndClosePositionParams,
        ),
      ),
    };
  }

  async lockPosition(params: LegacyLockPositionParams): Promise<LegacyKitPlanSeed> {
    const lockPositionParams: LockPositionParams =
      "innerPosition" in params && params.innerPosition
        ? {
            owner: toPublicKey(params.owner),
            payer: toPublicKey(params.owner),
            position: toPublicKey(params.position),
            positionNftAccount: toPublicKey(params.positionNftAccount),
            pool: toPublicKey(params.pool),
            cliffPoint: params.cliffPoint,
            periodFrequency: params.periodFrequency,
            cliffUnlockLiquidity: params.cliffUnlockLiquidity,
            liquidityPerPeriod: params.liquidityPerPeriod,
            numberOfPeriod: params.numberOfPeriod,
            innerPosition: true,
          }
        : {
            owner: toPublicKey(params.owner),
            payer: toPublicKey(params.payer),
            position: toPublicKey(params.position),
            positionNftAccount: toPublicKey(params.positionNftAccount),
            pool: toPublicKey(params.pool),
            cliffPoint: params.cliffPoint,
            periodFrequency: params.periodFrequency,
            cliffUnlockLiquidity: params.cliffUnlockLiquidity,
            liquidityPerPeriod: params.liquidityPerPeriod,
            numberOfPeriod: params.numberOfPeriod,
            innerPosition: false,
            vestingAccount: toPublicKey(params.vestingAccount),
          };

    return {
      instructions: toKitInstructions(await this.client.lockPosition(lockPositionParams)),
    };
  }

  async permanentLockPosition(
    params: LegacyPermanentLockPositionParams,
  ): Promise<LegacyKitPlanSeed> {
    const permanentLockPositionParams: PermanentLockParams = {
      owner: toPublicKey(params.owner),
      position: toPublicKey(params.position),
      positionNftAccount: toPublicKey(params.positionNftAccount),
      pool: toPublicKey(params.pool),
      unlockedLiquidity: params.unlockedLiquidity,
    };

    return {
      instructions: toKitInstructions(
        await this.client.permanentLockPosition(permanentLockPositionParams),
      ),
    };
  }

  async refreshVesting(
    params: LegacyRefreshVestingParams,
  ): Promise<LegacyKitPlanSeed> {
    const refreshVestingParams: RefreshVestingParams = {
      owner: toPublicKey(params.owner),
      position: toPublicKey(params.position),
      positionNftAccount: toPublicKey(params.positionNftAccount),
      pool: toPublicKey(params.pool),
      vestingAccounts: toLegacyVestingAccounts(params.vestingAccounts),
    };

    return {
      instructions: toKitInstructions(
        await this.client.refreshVesting(refreshVestingParams),
      ),
    };
  }

  async closePosition(
    params: LegacyClosePositionParams,
  ): Promise<LegacyKitPlanSeed> {
    const closePositionParams: ClosePositionParams = {
      owner: toPublicKey(params.owner),
      pool: toPublicKey(params.pool),
      position: toPublicKey(params.position),
      positionNftMint: toPublicKey(params.positionNftMint),
      positionNftAccount: toPublicKey(params.positionNftAccount),
    };

    return {
      instructions: toKitInstructions(
        await this.client.closePosition(closePositionParams),
      ),
    };
  }

  async mergePosition(params: LegacyMergePositionParams): Promise<LegacyKitPlanSeed> {
    const mergePositionParams: MergePositionParams = {
      owner: toPublicKey(params.owner),
      positionA: toPublicKey(params.positionA),
      positionB: toPublicKey(params.positionB),
      poolState: params.poolState as MergePositionParams["poolState"],
      positionBNftAccount: toPublicKey(params.positionBNftAccount),
      positionANftAccount: toPublicKey(params.positionANftAccount),
      positionBState: params.positionBState as MergePositionParams["positionBState"],
      tokenAAmountAddLiquidityThreshold: params.tokenAAmountAddLiquidityThreshold,
      tokenBAmountAddLiquidityThreshold: params.tokenBAmountAddLiquidityThreshold,
      tokenAAmountRemoveLiquidityThreshold:
        params.tokenAAmountRemoveLiquidityThreshold,
      tokenBAmountRemoveLiquidityThreshold:
        params.tokenBAmountRemoveLiquidityThreshold,
      positionBVestings: toLegacyVestings(params.positionBVestings),
      currentPoint: params.currentPoint,
    };

    return {
      instructions: toKitInstructions(
        await this.client.mergePosition(mergePositionParams),
      ),
    };
  }

  async splitPosition(params: LegacySplitPositionParams): Promise<LegacyKitPlanSeed> {
    const splitPositionParams: SplitPositionParams = {
      firstPositionOwner: toPublicKey(params.firstPositionOwner),
      secondPositionOwner: toPublicKey(params.secondPositionOwner),
      pool: toPublicKey(params.pool),
      firstPosition: toPublicKey(params.firstPosition),
      firstPositionNftAccount: toPublicKey(params.firstPositionNftAccount),
      secondPosition: toPublicKey(params.secondPosition),
      secondPositionNftAccount: toPublicKey(params.secondPositionNftAccount),
      permanentLockedLiquidityPercentage:
        params.permanentLockedLiquidityPercentage,
      unlockedLiquidityPercentage: params.unlockedLiquidityPercentage,
      feeAPercentage: params.feeAPercentage,
      feeBPercentage: params.feeBPercentage,
      reward0Percentage: params.reward0Percentage,
      reward1Percentage: params.reward1Percentage,
      innerVestingLiquidityPercentage: params.innerVestingLiquidityPercentage,
    };

    return {
      instructions: toKitInstructions(
        await this.client.splitPosition(splitPositionParams),
      ),
    };
  }

  async splitPosition2(
    params: LegacySplitPosition2Params,
  ): Promise<LegacyKitPlanSeed> {
    const splitPosition2Params: SplitPosition2Params = {
      firstPositionOwner: toPublicKey(params.firstPositionOwner),
      secondPositionOwner: toPublicKey(params.secondPositionOwner),
      pool: toPublicKey(params.pool),
      firstPosition: toPublicKey(params.firstPosition),
      firstPositionNftAccount: toPublicKey(params.firstPositionNftAccount),
      secondPosition: toPublicKey(params.secondPosition),
      secondPositionNftAccount: toPublicKey(params.secondPositionNftAccount),
      numerator: params.numerator,
    };

    return {
      instructions: toKitInstructions(
        await this.client.splitPosition2(splitPosition2Params),
      ),
    };
  }

  async claimPositionFee(
    params: LegacyClaimPositionFeeParams,
  ): Promise<LegacyKitPlanSeed> {
    const claimPositionFeeParams: ClaimPositionFeeParams = {
      owner: toPublicKey(params.owner),
      position: toPublicKey(params.position),
      pool: toPublicKey(params.pool),
      positionNftAccount: toPublicKey(params.positionNftAccount),
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAVault: toPublicKey(params.tokenAVault),
      tokenBVault: toPublicKey(params.tokenBVault),
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
      receiver: toPublicKeyOrUndefined(params.receiver),
      feePayer: toPublicKeyOrUndefined(params.feePayer),
      tempWSolAccount: toPublicKeyOrUndefined(params.tempWSolAccount),
    };

    return {
      instructions: toKitInstructions(
        await this.client.claimPositionFee(claimPositionFeeParams),
      ),
    };
  }

  async claimPositionFee2(
    params: LegacyClaimPositionFee2Params,
  ): Promise<LegacyKitPlanSeed> {
    const claimPositionFee2Params: ClaimPositionFeeParams2 = {
      owner: toPublicKey(params.owner),
      position: toPublicKey(params.position),
      pool: toPublicKey(params.pool),
      positionNftAccount: toPublicKey(params.positionNftAccount),
      tokenAMint: toPublicKey(params.tokenAMint),
      tokenBMint: toPublicKey(params.tokenBMint),
      tokenAVault: toPublicKey(params.tokenAVault),
      tokenBVault: toPublicKey(params.tokenBVault),
      tokenAProgram: toPublicKey(params.tokenAProgram),
      tokenBProgram: toPublicKey(params.tokenBProgram),
      receiver: toPublicKey(params.receiver),
      feePayer: toPublicKeyOrUndefined(params.feePayer),
    };

    return {
      instructions: toKitInstructions(
        await this.client.claimPositionFee2(claimPositionFee2Params),
      ),
    };
  }

  async initializeReward(
    params: LegacyInitializeRewardParams,
  ): Promise<LegacyKitPlanSeed> {
    const initializeRewardParams: InitializeRewardParams = {
      rewardIndex: params.rewardIndex,
      rewardDuration: params.rewardDuration,
      pool: toPublicKey(params.pool),
      rewardMint: toPublicKey(params.rewardMint),
      funder: toPublicKey(params.funder),
      payer: toPublicKey(params.payer),
      creator: toPublicKey(params.creator),
      rewardMintProgram: toPublicKey(params.rewardMintProgram),
    };

    return {
      instructions: toKitInstructions(
        await this.client.initializeReward(initializeRewardParams),
      ),
    };
  }

  async initializeAndFundReward(
    params: LegacyInitializeAndFundRewardParams,
  ): Promise<LegacyKitPlanSeed> {
    const initializeAndFundRewardParams: InitializeAndFundReward = {
      rewardIndex: params.rewardIndex,
      rewardDuration: params.rewardDuration,
      pool: toPublicKey(params.pool),
      creator: toPublicKey(params.creator),
      payer: toPublicKey(params.payer),
      rewardMint: toPublicKey(params.rewardMint),
      carryForward: params.carryForward,
      amount: params.amount,
      rewardMintProgram: toPublicKey(params.rewardMintProgram),
    };

    return {
      instructions: toKitInstructions(
        await this.client.initializeAndFundReward(initializeAndFundRewardParams),
      ),
    };
  }

  async updateRewardDuration(
    params: LegacyUpdateRewardDurationParams,
  ): Promise<LegacyKitPlanSeed> {
    const updateRewardDurationParams: UpdateRewardDurationParams = {
      pool: toPublicKey(params.pool),
      signer: toPublicKey(params.signer),
      rewardIndex: params.rewardIndex,
      newDuration: params.newDuration,
    };

    return {
      instructions: toKitInstructions(
        await this.client.updateRewardDuration(updateRewardDurationParams),
      ),
    };
  }

  async updateRewardFunder(
    params: LegacyUpdateRewardFunderParams,
  ): Promise<LegacyKitPlanSeed> {
    const updateRewardFunderParams: UpdateRewardFunderParams = {
      pool: toPublicKey(params.pool),
      signer: toPublicKey(params.signer),
      rewardIndex: params.rewardIndex,
      newFunder: toPublicKey(params.newFunder),
    };

    return {
      instructions: toKitInstructions(
        await this.client.updateRewardFunder(updateRewardFunderParams),
      ),
    };
  }

  async fundReward(params: LegacyFundRewardParams): Promise<LegacyKitPlanSeed> {
    const fundRewardParams: FundRewardParams = {
      funder: toPublicKey(params.funder),
      rewardIndex: params.rewardIndex,
      pool: toPublicKey(params.pool),
      carryForward: params.carryForward,
      amount: params.amount,
      rewardMint: toPublicKey(params.rewardMint),
      rewardVault: toPublicKey(params.rewardVault),
      rewardMintProgram: toPublicKey(params.rewardMintProgram),
    };

    return {
      instructions: toKitInstructions(await this.client.fundReward(fundRewardParams)),
    };
  }

  async withdrawIneligibleReward(
    params: LegacyWithdrawIneligibleRewardParams,
  ): Promise<LegacyKitPlanSeed> {
    const withdrawIneligibleRewardParams: WithdrawIneligibleRewardParams = {
      rewardIndex: params.rewardIndex,
      pool: toPublicKey(params.pool),
      funder: toPublicKey(params.funder),
    };

    return {
      instructions: toKitInstructions(
        await this.client.withdrawIneligibleReward(
          withdrawIneligibleRewardParams,
        ),
      ),
    };
  }

  async claimReward(params: LegacyClaimRewardParams): Promise<LegacyKitPlanSeed> {
    const claimRewardParams: ClaimRewardParams = {
      user: toPublicKey(params.user),
      position: toPublicKey(params.position),
      poolState: params.poolState as ClaimRewardParams["poolState"],
      positionState: params.positionState as ClaimRewardParams["positionState"],
      positionNftAccount: toPublicKey(params.positionNftAccount),
      rewardIndex: params.rewardIndex,
      isSkipReward: params.isSkipReward,
      feePayer: toPublicKeyOrUndefined(params.feePayer),
    };

    return {
      instructions: toKitInstructions(
        await this.client.claimReward(claimRewardParams),
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
