import { readFile } from "node:fs/promises";
import path from "node:path";
import { createFromRoot } from "codama";
import { rootNodeFromAnchor, type AnchorIdl } from "@codama/nodes-from-anchor";
import renderVisitor from "@codama/renderers-js";

async function main() {
  const repoRoot = path.resolve(__dirname, "..");
  const idlPath = path.join(repoRoot, "src", "idl", "cp_amm.json");
  const generatedFolder = path.join("src", "kit", "generated");

  const anchorIdl = JSON.parse(
    await readFile(idlPath, "utf8"),
  ) as AnchorIdl;
  const codama = createFromRoot(rootNodeFromAnchor(anchorIdl));

  await codama.accept(
    renderVisitor(repoRoot, {
      deleteFolderBeforeRendering: true,
      formatCode: true,
      generatedFolder,
      kitImportStrategy: "rootOnly",
      syncPackageJson: false,
    }),
  );

  console.log(`Generated Kit client into ${generatedFolder} from ${idlPath}`);
}

void main();
