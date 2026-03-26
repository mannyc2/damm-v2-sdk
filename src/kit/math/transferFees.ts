import BN from "bn.js";
import {
  calculateFee,
  getEpochFee,
  getTransferFeeConfig,
  MAX_FEE_BASIS_POINTS,
  type Mint,
  type TransferFee,
} from "@solana/spl-token";

interface TransferFeeIncludedAmount {
  amount: BN;
  transferFee: BN;
}

function calculatePreFeeAmount(transferFee: TransferFee, postFeeAmount: BN): BN {
  if (postFeeAmount.isZero()) {
    return new BN(0);
  }

  if (transferFee.transferFeeBasisPoints === 0) {
    return postFeeAmount;
  }

  const maximumFee = new BN(transferFee.maximumFee.toString());

  if (transferFee.transferFeeBasisPoints === MAX_FEE_BASIS_POINTS) {
    return postFeeAmount.add(maximumFee);
  }

  const oneInBasisPoints = new BN(MAX_FEE_BASIS_POINTS);
  const numerator = postFeeAmount.mul(oneInBasisPoints);
  const denominator = oneInBasisPoints.sub(
    new BN(transferFee.transferFeeBasisPoints),
  );

  const rawPreFeeAmount = numerator
    .add(denominator)
    .sub(new BN(1))
    .div(denominator);

  if (rawPreFeeAmount.sub(postFeeAmount).gte(maximumFee)) {
    return postFeeAmount.add(maximumFee);
  }

  return rawPreFeeAmount;
}

function calculateInverseFee(transferFee: TransferFee, postFeeAmount: BN): BN {
  const preFeeAmount = calculatePreFeeAmount(transferFee, postFeeAmount);
  return new BN(
    calculateFee(transferFee, BigInt(preFeeAmount.toString())).toString(),
  );
}

export function calculateTransferFeeIncludedAmount(
  transferFeeExcludedAmount: BN,
  mint: Mint,
  currentEpoch: number,
): TransferFeeIncludedAmount {
  if (transferFeeExcludedAmount.isZero()) {
    return {
      amount: new BN(0),
      transferFee: new BN(0),
    };
  }

  const transferFeeConfig = getTransferFeeConfig(mint);
  if (transferFeeConfig === null) {
    return {
      amount: transferFeeExcludedAmount,
      transferFee: new BN(0),
    };
  }

  const epochFee = getEpochFee(transferFeeConfig, BigInt(currentEpoch));
  const transferFee =
    epochFee.transferFeeBasisPoints === MAX_FEE_BASIS_POINTS
      ? new BN(epochFee.maximumFee.toString())
      : calculateInverseFee(epochFee, transferFeeExcludedAmount);

  return {
    amount: transferFeeExcludedAmount.add(transferFee),
    transferFee,
  };
}

interface TransferFeeExcludedAmount {
  amount: BN;
  transferFee: BN;
}

export function calculateTransferFeeExcludedAmount(
  transferFeeIncludedAmount: BN,
  mint: Mint,
  currentEpoch: number,
): TransferFeeExcludedAmount {
  const transferFeeConfig = getTransferFeeConfig(mint);
  if (transferFeeConfig === null) {
    return {
      amount: transferFeeIncludedAmount,
      transferFee: new BN(0),
    };
  }

  const transferFeeIncludedAmountN = BigInt(
    transferFeeIncludedAmount.toString(),
  );
  const transferFee = calculateFee(
    getEpochFee(transferFeeConfig, BigInt(currentEpoch)),
    transferFeeIncludedAmountN,
  );

  return {
    amount: new BN((transferFeeIncludedAmountN - transferFee).toString()),
    transferFee: new BN(transferFee.toString()),
  };
}
