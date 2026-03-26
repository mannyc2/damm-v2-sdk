import { address, createSolanaRpc, generateKeyPairSigner } from "@solana/kit";

import { CpAmmKitClient } from "../../src/kit";

const TOKEN_PROGRAM = address("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");

(async () => {
  const rpc = createSolanaRpc("https://api.devnet.solana.com");
  const client = CpAmmKitClient.fromRpc(rpc);

  const owner = await generateKeyPairSigner();

  const plan = await client.claimPositionFee2({
    owner,
    receiver: owner.address,
    position: address("7kYbZ1S4qYxVY7mQDBxX3sBs8LojRxurx8WcN6iYG3Pa"),
    pool: address("AfSNTGm4nGoQz5ZiDoZRwdYkFZMUr9nudMST8cTQL8Vb"),
    positionNftAccount: address("2Yk3u6cT14f1nqgdo3gGN28AL5soNqd7qV671CyMfCVx"),
    tokenAMint: address("So11111111111111111111111111111111111111112"),
    tokenBMint: address("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
    tokenAVault: address("4Nd1mY9zc3rroWAt4EvsCzorBpvyEukgqS8bkkCm1cWg"),
    tokenBVault: address("9xQeWvG816bUx9EPfCkzq6Digw1VE3DybMTDfjQX5nGo"),
    tokenAProgram: TOKEN_PROGRAM,
    tokenBProgram: TOKEN_PROGRAM,
  });

  console.log(plan.instructions.length);
})();
