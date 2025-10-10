import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  platform: "node",
  outDir: "dist",
  clean: true,
  splitting: false,
  sourcemap: false, // Disable for production (or use 'inline' for debugging)
  minify: true, // Minify code for production
  treeshake: true, // Remove unused code
  target: "node18", // Target Node.js 18+ (LTS)
  bundle: true, // Bundle dependencies (but respect 'noExternal')
  noExternal: [], // Don't bundle anything from node_modules
  skipNodeModulesBundle: true, // Don't bundle node_modules (keep as imports)
});
