import { mkdtemp, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

import { afterAll, describe, expect, it } from "vitest";

const repoRoot = path.resolve(__dirname, "..");
const tempDirectories: string[] = [];

function run(command: string, args: string[], cwd: string) {
  execFileSync(command, args, {
    cwd,
    stdio: "pipe",
    env: {
      ...process.env,
      COREPACK_ENABLE_DOWNLOAD_PROMPT: "0",
    },
  });
}

async function createTempDir(prefix: string) {
  const directory = await mkdtemp(path.join(tmpdir(), prefix));
  tempDirectories.push(directory);
  return directory;
}

async function ensureBuildOutput() {
  run("pnpm", ["build"], repoRoot);
}

describe("packaged kit consumer smoke test", () => {
  afterAll(async () => {
    await Promise.all(
      tempDirectories.map(async (directory) => {
        await rm(directory, { recursive: true, force: true });
      }),
    );
  });

  it(
    "packs and imports @meteora-ag/cp-amm-sdk/kit in a temp consumer",
    async () => {
      await ensureBuildOutput();

      const packDirectory = await createTempDir("cp-amm-kit-pack-");
      run("pnpm", ["pack", "--pack-destination", packDirectory], repoRoot);

      const tarballs = (await readdir(packDirectory)).filter((file) =>
        file.endsWith(".tgz"),
      );
      expect(tarballs).toHaveLength(1);

      const consumerDirectory = await createTempDir("cp-amm-kit-consumer-");
      const tarballPath = path.join(packDirectory, tarballs[0]!);

      await writeFile(
        path.join(consumerDirectory, "package.json"),
        JSON.stringify(
          {
            name: "cp-amm-kit-consumer-smoke",
            private: true,
            type: "module",
            dependencies: {
              "@meteora-ag/cp-amm-sdk": tarballPath,
            },
          },
          null,
          2,
        ),
      );
      await writeFile(
        path.join(consumerDirectory, "consumer.ts"),
        [
          'import { CpAmmKitClient, type KitTransactionPlan } from "@meteora-ag/cp-amm-sdk/kit";',
          "",
          "const exportedClient = CpAmmKitClient;",
          "void exportedClient;",
          "type _Plan = KitTransactionPlan;",
        ].join("\n"),
      );
      await writeFile(
        path.join(consumerDirectory, "tsconfig.json"),
        JSON.stringify(
          {
            compilerOptions: {
              target: "ES2022",
              module: "NodeNext",
              moduleResolution: "NodeNext",
              strict: true,
              noEmit: true,
            },
            include: ["consumer.ts"],
          },
          null,
          2,
        ),
      );

      run("pnpm", ["install", "--ignore-scripts"], consumerDirectory);
      run(
        "pnpm",
        ["exec", "tsc", "--noEmit", "-p", path.join(consumerDirectory, "tsconfig.json")],
        repoRoot,
      );
      run(
        "node",
        [
          "--input-type=module",
          "-e",
          [
            'import("@meteora-ag/cp-amm-sdk/kit").then((module) => {',
            '  if (typeof module.CpAmmKitClient !== "function") {',
            '    throw new Error("CpAmmKitClient export is missing");',
            "  }",
            "});",
          ].join("\n"),
        ],
        consumerDirectory,
      );
    },
    120_000,
  );
});
