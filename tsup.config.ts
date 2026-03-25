import type { Options } from "tsup";

const config: Options = {
  entry: {
    index: "src/index.ts",
    "kit/index": "src/kit/index.ts",
  },
  format: ["esm", "cjs"],
  splitting: true,
  sourcemap: true,
  minify: false,
  clean: true,
  skipNodeModulesBundle: true,
  dts: true,
  external: ["node_modules"],
};

export default config;
