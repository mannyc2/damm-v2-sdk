import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(__dirname, "..");
const kitRoot = path.join(repoRoot, "src", "kit");

const forbiddenPackageImports = [
  "@solana/web3.js",
  "@coral-xyz/anchor",
];

const forbiddenRootImports = [
  path.join(repoRoot, "src", "CpAmm"),
  path.join(repoRoot, "src", "types"),
  path.join(repoRoot, "src", "pda"),
  path.join(repoRoot, "src", "constants"),
  path.join(repoRoot, "src", "helpers"),
  path.join(repoRoot, "src", "index"),
  path.join(repoRoot, "src", "internal"),
];

const importSpecifierPattern =
  /(?:import|export)\s+(?:type\s+)?(?:[\s\w{},*]+?\s+from\s+)?["']([^"']+)["']/g;

function normalizeImportTarget(file: string, specifier: string): string {
  if (!specifier.startsWith(".")) {
    return specifier;
  }

  return path.normalize(path.resolve(path.dirname(file), specifier));
}

function isForbiddenRootImport(target: string): boolean {
  return forbiddenRootImports.some((rootImport) => {
    return target === rootImport || target.startsWith(`${rootImport}${path.sep}`);
  });
}

async function walk(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return walk(entryPath);
      }

      return entryPath.endsWith(".ts") ? [entryPath] : [];
    }),
  );

  return files.flat();
}

async function main() {
  const kitFiles = await walk(kitRoot);
  const violations: Array<{ file: string; snippet: string }> = [];

  await Promise.all(
    kitFiles.map(async (file) => {
      const contents = await readFile(file, "utf8");
      const specifiers = Array.from(contents.matchAll(importSpecifierPattern)).map(
        ([, specifier]) => specifier,
      );

      for (const specifier of specifiers) {
        if (forbiddenPackageImports.includes(specifier)) {
          violations.push({
            file: path.relative(repoRoot, file),
            snippet: specifier,
          });
          continue;
        }

        const normalizedTarget = normalizeImportTarget(file, specifier);
        if (isForbiddenRootImport(normalizedTarget)) {
          violations.push({
            file: path.relative(repoRoot, file),
            snippet: specifier,
          });
        }
      }
    }),
  );

  if (violations.length > 0) {
    const message = violations
      .sort((a, b) => a.file.localeCompare(b.file))
      .map(
        ({ file, snippet }) => `Forbidden import snippet "${snippet}" found in ${file}`,
      )
      .join("\n");
    throw new Error(message);
  }

  console.log(`Checked ${kitFiles.length} Kit source files for forbidden imports.`);
}

void main();
