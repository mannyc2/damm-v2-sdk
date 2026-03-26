---
name: cpamm-to-kit-client-migration
description: Migrate downstream TypeScript apps from the legacy `CpAmm` root client to `CpAmmKitClient` from `@meteora-ag/cp-amm-sdk/kit`. Use when requests mention replacing `new CpAmm(connection)`, moving from `@solana/web3.js`/`PublicKey`/`Transaction` usage to `@solana/kit`/`Address`/`KitTransactionPlan`, rewriting DAMM V2 read or write flows to the `./kit` entrypoint, or auditing a codebase for remaining root-client dependencies.
---

# CpAmm To Kit Client Migration

Use this skill to migrate app code that consumes this SDK from the root `CpAmm` client to the Kit-native `CpAmmKitClient`.

## Workflow

1. Inventory root SDK usage before editing.
   Search for `CpAmm`, `@meteora-ag/cp-amm-sdk`, `@solana/web3.js`, `PublicKey`, `Transaction`, `Keypair`, `Connection`, and any helper imports such as `derivePoolAddress`, `derivePositionAddress`, `getTokenProgram`, or `getBaseFeeParams`.
2. Replace constructor and import setup first.
   Move client imports to `@meteora-ag/cp-amm-sdk/kit`. Replace `new CpAmm(connection)` with one of:
   - `CpAmmKitClient.fromRpc(rpc)`
   - `CpAmmKitClient.fromRpcUrl(rpcUrl)`
   - `CpAmmKitClient.fromRpcAndSubscriptions(rpc, rpcSubscriptions)`
3. Convert call sites by category.
   - Read methods stay method-for-method on the Kit client.
   - Quote/helper methods stay method-for-method on the Kit client.
   - Write methods return `KitTransactionPlan` instead of a legacy `Transaction`.
4. Convert value and signer types at the boundary.
   - Address-only fields become `Address`.
   - Signer-bearing fields become `TransactionSigner`.
   - Do not blindly replace every `PublicKey` with `TransactionSigner`; only fields that actually sign should change.
5. Rewrite transaction execution.
   Replace any code that expects `.tx`, `.instructions` on a `Transaction`, `partialSign`, or `sendTransaction(transaction, signers)` with plan-based message assembly using `plan.instructions` and `plan.signers`.
6. Stop and report root-only helper usage.
   If the app depends on root exports that are not public on `./kit`, flag them as manual follow-up instead of inventing an unsafe replacement. See [references/api-mappings.md](references/api-mappings.md).
7. Validate after migration.
   Run the app’s typecheck and tests, then verify there are no remaining root-client imports or direct `@solana/web3.js` requirements in the migrated path.

## Constructor And Type Rules

- Prefer `fromRpc(...)` when the app already constructs `Rpc` clients.
- Prefer `fromRpcUrl(...)` for simple one-URL apps.
- Prefer `fromRpcAndSubscriptions(...)` when subscriptions are already wired.
- Treat `legacyRpcUrl` as compatibility-only. Do not add it to new code.
- Use `address(publicKey.toBase58())` or an equivalent existing conversion when migrating address values.
- Replace signer-bearing `Keypair` usage with `TransactionSigner` creation that matches the app’s signer model.

## Write-Path Rules

- `createPool`, `createCustomPool`, and `createCustomPoolWithDynamicConfig` return `{ plan, pool, position }`.
- Other write methods return `KitTransactionPlan`.
- Preserve signer order from the public params; do not rebuild signer sets from the old `Transaction`.
- If the old code only inspected `tx.instructions`, replace that with `plan.instructions`.
- If the old code sent unsigned `Transaction` builders, rewrite it to create a transaction message from `plan.instructions`, then sign with `plan.signers`.

## Unsupported Or Manual Cases

Treat these as migration blockers that require an explicit note in the output:

- Root helper imports that are not part of `@meteora-ag/cp-amm-sdk/kit`, especially:
  - `derivePoolAddress`
  - `derivePositionAddress`
  - `getTokenProgram`
  - `getBaseFeeParams`
- App code that depends on concrete `Transaction` instances or web3-specific mutation APIs rather than instruction lists and signers.

When these appear, explain the blocker, keep the migration otherwise complete, and point to [references/api-mappings.md](references/api-mappings.md) plus [references/checklist.md](references/checklist.md).

## References

- Read [references/api-mappings.md](references/api-mappings.md) when converting imports, constructors, methods, and transaction handling.
- Read [references/checklist.md](references/checklist.md) before finalizing changes to ensure the migration is complete and validated.
