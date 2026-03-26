# Migration Checklist

## Inventory

- Find all `CpAmm` imports and constructors.
- Find all root package imports from `@meteora-ag/cp-amm-sdk`.
- Find all `@solana/web3.js` imports used only for the DAMM client path.
- Find all code that expects a mutable `Transaction`.

## Client Migration

- Replace root client imports with `CpAmmKitClient` from `@meteora-ag/cp-amm-sdk/kit`.
- Replace constructor calls with `fromRpc`, `fromRpcUrl`, or `fromRpcAndSubscriptions`.
- Remove any new `legacyRpcUrl` usage.

## Type Migration

- Convert address-only `PublicKey` params to `Address`.
- Convert signer-bearing params to `TransactionSigner`.
- Keep non-signer addresses as `Address`; do not over-upgrade them to signers.
- Convert result handling from `tx` to `plan` where applicable.

## Write-Path Migration

- Replace `Transaction` access with `plan.instructions`.
- Replace signer arrays with `plan.signers` plus any app-owned extra signers.
- Preserve fee payer, lifetime, and send/confirm logic in the app.

## Verification

- Run the app’s typecheck.
- Run the relevant tests.
- Search for remaining `new CpAmm(` usage.
- Search for remaining root SDK imports in the migrated area.
- Search for remaining `@solana/web3.js` usage in the migrated area.

## Manual Follow-Up Triggers

If any of these remain, call them out explicitly:

- root-only helper imports
- direct `Transaction` mutation APIs
- code paths that still require `PublicKey` because they depend on root-only helpers
