import { existsSync } from "fs";
import { dirname, join } from "path";

// Find workspace root by looking for pnpm-workspace.yaml
export function findWorkspaceRoot(startDir: string): string {
  let currentDir = startDir;
  // Keep going up until we find pnpm-workspace.yaml or reach root
  while (dirname(currentDir) !== currentDir) {
    if (existsSync(join(currentDir, "pnpm-workspace.yaml"))) {
      return currentDir;
    }
    currentDir = dirname(currentDir);
  }
  // Fallback to cwd if not found (for non-monorepo setups)
  return process.cwd();
}
