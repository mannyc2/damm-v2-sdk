import BN from "bn.js";
import { address, createSolanaRpc, generateKeyPairSigner } from "@solana/kit";

import { CpAmmKitClient } from "../../src/kit";

const TOKEN_PROGRAM = address("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

(async () => {
  const rpc = createSolanaRpc("https://api.devnet.solana.com");
  const client = CpAmmKitClient.fromRpc(rpc);

  const payer = await generateKeyPairSigner();
  const positionNft = await generateKeyPairSigner();

  const result = await client.createPool({
    creator: payer.address,
    payer,
    config: address("11111111111111111111111111111111"),
    positionNft,
    tokenAMint: address("So11111111111111111111111111111111111111112"),
    tokenBMint: address("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    initSqrtPrice: new BN("18446744073709551616"),
    liquidityDelta: new BN("1000000"),
    tokenAAmount: new BN("1000000"),
    tokenBAmount: new BN("1000000"),
    activationPoint: null,
    tokenAProgram: TOKEN_PROGRAM,
    tokenBProgram: TOKEN_PROGRAM,
  });

  console.log(result.pool);
  console.log(result.plan.instructions.length);
})();
