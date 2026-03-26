import { readFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(__dirname, "..");
const files = [
  path.join(repoRoot, "dist", "kit", "index.js"),
  path.join(repoRoot, "dist", "kit", "index.mjs"),
  path.join(repoRoot, "dist", "kit", "index.d.ts"),
  path.join(repoRoot, "dist", "kit", "index.d.mts"),
];

const forbiddenSnippets = ["@solana/web3.js", "@coral-xyz/anchor"];

async function main() {
  for (const file of files) {
    const contents = await readFile(file, "utf8");

    for (const forbiddenSnippet of forbiddenSnippets) {
      if (contents.includes(forbiddenSnippet)) {
        throw new Error(
          `Forbidden snippet "${forbiddenSnippet}" found in ${path.relative(repoRoot, file)}`,
        );
      }
    }
  }

  console.log(`Checked ${files.length} Kit build outputs for forbidden web3/anchor references.`);
}

void main();
