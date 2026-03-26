import BN from "bn.js";
import { address, createSolanaRpc, generateKeyPairSigner } from "@solana/kit";

import { CpAmmKitClient } from "../../src/kit";

const TOKEN_PROGRAM = address("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

(async () => {
  const rpc = createSolanaRpc("https://api.devnet.solana.com");
  const client = CpAmmKitClient.fromRpc(rpc);

  const owner = await generateKeyPairSigner();
  const positionNft = await generateKeyPairSigner();

  const plan = await client.createPositionAndAddLiquidity({
    owner,
    pool: address("AfSNTGm4nGoQz5ZiDoZRwdYkFZMUr9nudMST8cTQL8Vb"),
    positionNft,
    liquidityDelta: new BN("1000000"),
    maxAmountTokenA: new BN("1000000"),
    maxAmountTokenB: new BN("1000000"),
    tokenAAmountThreshold: new BN("1000000"),
    tokenBAmountThreshold: new BN("1000000"),
    tokenAMint: address("So11111111111111111111111111111111111111112"),
    tokenBMint: address("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    tokenAProgram: TOKEN_PROGRAM,
    tokenBProgram: TOKEN_PROGRAM,
  });

  console.log(plan.signers.map((signer) => signer.address));
})();
