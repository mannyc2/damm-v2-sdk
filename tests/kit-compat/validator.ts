import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import net from "node:net";
import os from "node:os";
import path from "node:path";

import { Connection } from "@solana/web3.js";

import { CP_AMM_PROGRAM_ID } from "../../src";

const VALIDATOR_START_TIMEOUT_MS = 20_000;

type LocalValidator = {
  rpcUrl: string;
  wsUrl: string;
  connection: Connection;
  stop: () => Promise<void>;
};

function getValidatorBinary(): string {
  return process.env.SOLANA_TEST_VALIDATOR_BIN ?? "solana-test-validator";
}

async function getAvailablePort(): Promise<number> {
  return await new Promise((resolve, reject) => {
    const server = net.createServer();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Unable to allocate a TCP port"));
        return;
      }

      const { port } = address;
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(port);
      });
    });
  });
}

function waitForExit(
  child: ChildProcessWithoutNullStreams,
): Promise<{ code: number | null; signal: NodeJS.Signals | null }> {
  return new Promise((resolve) => {
    child.once("exit", (code, signal) => resolve({ code, signal }));
  });
}

async function waitForRpc(connection: Connection): Promise<void> {
  const startedAt = Date.now();

  while (Date.now() - startedAt < VALIDATOR_START_TIMEOUT_MS) {
    try {
      await connection.getLatestBlockhash("confirmed");
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }

  throw new Error("Timed out waiting for solana-test-validator RPC readiness");
}

export async function startLocalValidator(): Promise<LocalValidator> {
  const ledgerDir = await mkdtemp(
    path.join(os.tmpdir(), "cp-amm-kit-validator-"),
  );
  const rpcPort = await getAvailablePort();
  const faucetPort = await getAvailablePort();
  const rpcUrl = `http://127.0.0.1:${rpcPort}`;
  const wsUrl = `ws://127.0.0.1:${rpcPort + 1}`;
  const connection = new Connection(rpcUrl, {
    commitment: "confirmed",
    wsEndpoint: wsUrl,
  });
  const logChunks: string[] = [];
  const fixturePath = path.resolve(process.cwd(), "tests/fixtures/cp_amm.so");

  const child = spawn(
    getValidatorBinary(),
    [
      "--ledger",
      ledgerDir,
      "--reset",
      "--bind-address",
      "127.0.0.1",
      "--rpc-port",
      String(rpcPort),
      "--faucet-port",
      String(faucetPort),
      "--bpf-program",
      CP_AMM_PROGRAM_ID.toBase58(),
      fixturePath,
    ],
    {
      cwd: process.cwd(),
      stdio: "pipe",
    },
  );

  const captureOutput = (chunk: Buffer) => {
    logChunks.push(chunk.toString("utf8"));
  };

  child.stdout.on("data", captureOutput);
  child.stderr.on("data", captureOutput);

  try {
    await waitForRpc(connection);
  } catch (error) {
    child.kill("SIGINT");
    await waitForExit(child);
    await rm(ledgerDir, { recursive: true, force: true });

    const logs = logChunks.join("");
    throw new Error(
      `Failed to start solana-test-validator: ${
        error instanceof Error ? error.message : String(error)
      }\n${logs}`,
    );
  }

  return {
    rpcUrl,
    wsUrl,
    connection,
    async stop() {
      child.kill("SIGINT");
      await waitForExit(child);
      await rm(ledgerDir, { recursive: true, force: true });
    },
  };
}
