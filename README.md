# Meteora Constant Product AMM SDK (DAMM V2 SDK)

A TypeScript SDK for interacting with the DAMM V2 on Meteora

## Overview

This SDK provides a set of tools and methods to interact with the [Meteora DAMM-V2](https://github.com/MeteoraAg/damm-v2). It simplifies common operations like creating pools, managing positions, adding/removing liquidity, swapping tokens, and claiming rewards.

For detailed technical documentation, please refer to the [DAMM-V2 SDK Documentation](https://github.com/MeteoraAg/damm-v2-sdk/blob/main/docs.md).

## Installation

```bash
pnpm install @meteora-ag/cp-amm-sdk
# or
yarn add @meteora-ag/cp-amm-sdk
```

## Kit Quickstart

```typescript
import { address, createSolanaRpc, generateKeyPairSigner } from "@solana/kit";
import { CpAmmKitClient } from "@meteora-ag/cp-amm-sdk/kit";

const rpc = createSolanaRpc("https://api.mainnet-beta.solana.com");
const cpAmm = CpAmmKitClient.fromRpc(rpc);

const pool = await cpAmm.fetchPoolState(
  address("AfSNTGm4nGoQz5ZiDoZRwdYkFZMUr9nudMST8cTQL8Vb"),
);

const payer = await generateKeyPairSigner();
const positionNft = await generateKeyPairSigner();
const plan = await cpAmm.createPosition({
  owner: payer.address,
  payer,
  pool: address("AfSNTGm4nGoQz5ZiDoZRwdYkFZMUr9nudMST8cTQL8Vb"),
  positionNft,
});

console.log(pool.sqrtPrice.toString());
console.log(plan.instructions.length);
```

`./kit` is the Kit-native surface. Read methods work directly from `fromRpc(...)` or `fromRpcAndSubscriptions(...)`, and write methods return `KitTransactionPlan` objects with ordered instructions plus explicit signers.

The Kit client now covers the same public read, quote, helper, and write surface as the root client, including `preparePoolCreationSingleSide`, `preparePoolCreationParams`, `swap`, and `swap2`.

Kit-only examples live under [examples/kit](/Users/cjpher/Documents/projects-2026/damm-v2-sdk/examples/kit).

## Migrating From `CpAmm`

This repo includes a Codex skill for migrating downstream app code from `CpAmm` to `CpAmmKitClient`:

- [.codex/skills/cpamm-to-kit-client-migration/SKILL.md](/Users/cjpher/Documents/projects-2026/damm-v2-sdk/.codex/skills/cpamm-to-kit-client-migration/SKILL.md)

Use it when a project needs to:

- replace `new CpAmm(connection)` with `CpAmmKitClient`
- move from `PublicKey` and `Transaction` flows to `Address` and `KitTransactionPlan`
- audit a codebase for remaining root-client or `@solana/web3.js` usage

The skill is repo-local for contributors and agents. It includes API mappings and a migration checklist under [.codex/skills/cpamm-to-kit-client-migration/references](/Users/cjpher/Documents/projects-2026/damm-v2-sdk/.codex/skills/cpamm-to-kit-client-migration/references).

## Legacy Root SDK

```typescript
import { Connection } from "@solana/web3.js";
import { CpAmm } from "@meteora-ag/cp-amm-sdk";

const connection = new Connection("https://api.mainnet-beta.solana.com");
const cpAmm = new CpAmm(connection);
```

The root entrypoint remains the legacy Anchor/web3-based SDK.

## Test

```
pnpm install
pnpm test:all
```

## Deployments

- Mainnet-beta: cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG
- Devnet: cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG

## Faucets

https://faucet.raccoons.dev/
