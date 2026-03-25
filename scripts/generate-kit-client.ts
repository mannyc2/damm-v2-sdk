import { access } from "node:fs/promises";
import path from "node:path";

async function main() {
  const repoRoot = path.resolve(__dirname, "..");
  const idlPath = path.join(repoRoot, "src", "idl", "cp_amm.json");

  await access(idlPath);

  console.log(
    [
      "Kit code generation scaffold is wired.",
      `Source IDL: ${idlPath}`,
      "Phase 3 should replace this placeholder with Codama-backed generation into src/kit/generated.",
    ].join("\n"),
  );
}

void main();
