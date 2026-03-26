# API Mappings

## Imports

Legacy:

```ts
import { CpAmm } from "@meteora-ag/cp-amm-sdk";
import { Connection, PublicKey, Transaction } from "@solana/web3.js";
```

Kit target:

```ts
import { address, createSolanaRpc } from "@solana/kit";
import { CpAmmKitClient } from "@meteora-ag/cp-amm-sdk/kit";
```

## Client Construction

| Legacy | Kit |
| --- | --- |
| `new CpAmm(connection)` | `CpAmmKitClient.fromRpc(rpc)` |
| `new CpAmm(new Connection(url))` | `CpAmmKitClient.fromRpcUrl(url)` |
| mixed RPC + subscription wiring | `CpAmmKitClient.fromRpcAndSubscriptions(rpc, rpcSubscriptions)` |

Do not add `legacyRpcUrl` to new code.

## Type Conversion

| Legacy type | Kit type | Notes |
| --- | --- | --- |
| `PublicKey` | `Address` | Use for address-only params and returned addresses. |
| `Keypair` signer params | `TransactionSigner` | Only for params that actually sign. |
| `Transaction` | `KitTransactionPlan` | Write methods return plans, not mutable transactions. |
| `tx.instructions` | `plan.instructions` | Instruction lists remain ordered. |
| implicit signer arrays | `plan.signers` | The SDK already deduplicates and orders signers. |

## Method Mapping

### Read and quote methods

These stay method-for-method on `CpAmmKitClient`:

- `fetchConfigState`
- `fetchPoolState`
- `fetchPoolStatesByTokenAMint`
- `fetchPoolFees`
- `fetchPositionState`
- `getMultipleConfigs`
- `getMultiplePools`
- `getMultiplePositions`
- `getAllConfigs`
- `getStaticConfigs`
- `getAllPools`
- `getAllPositions`
- `getAllPositionsByPool`
- `getPositionsByUser`
- `getUserPositionByPool`
- `getAllVestingsByPosition`
- `isPoolExist`
- `getQuote`
- `getQuote2`
- `getDepositQuote`
- `getWithdrawQuote`
- `getLiquidityDelta`
- `isLockedPosition`
- `isPermanentLockedPosition`
- `canUnlockPosition`
- `preparePoolCreationSingleSide`
- `preparePoolCreationParams`

### Write methods

These exist on `CpAmmKitClient` and return `KitTransactionPlan` unless noted:

- `createCustomPool` returns `{ plan, pool, position }`
- `createCustomPoolWithDynamicConfig` returns `{ plan, pool, position }`
- `createPool` returns `{ plan, pool, position }`
- `createPosition`
- `addLiquidity`
- `createPositionAndAddLiquidity`
- `removeLiquidity`
- `removeAllLiquidity`
- `removeAllLiquidityAndClosePosition`
- `lockPosition`
- `permanentLockPosition`
- `refreshVesting`
- `closePosition`
- `mergePosition`
- `splitPosition`
- `splitPosition2`
- `claimPositionFee`
- `claimPositionFee2`
- `initializeReward`
- `initializeAndFundReward`
- `updateRewardDuration`
- `updateRewardFunder`
- `fundReward`
- `withdrawIneligibleReward`
- `claimReward`
- `swap`
- `swap2`

## Transaction Handling

Legacy code often assumes this pattern:

```ts
const tx = await cpAmm.createPosition(...);
await connection.sendTransaction(tx, [payer, positionNft]);
```

Kit migrations should use this shape instead:

```ts
const plan = await cpAmm.createPosition(...);
// build a transaction message from plan.instructions
// sign with plan.signers plus any external signers the app adds
```

The exact message assembly depends on the app, but the migration must preserve:

- instruction order
- `plan.signers`
- the app’s existing fee payer and blockhash/lifetime handling

## Root-Only Helper Exports

These root exports are not part of the public `./kit` surface and should be treated as manual follow-up if the app imports them:

- `derivePoolAddress`
- `derivePositionAddress`
- `getTokenProgram`
- `getBaseFeeParams`

When they appear:

1. migrate the client usage anyway
2. keep the helper issue explicit in the output
3. do not invent a replacement API that this repo does not actually export
