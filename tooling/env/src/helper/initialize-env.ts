import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
import type { z } from "zod";
import { findWorkspaceRoot } from "./env-root";

/**
 * Initialize environment variables with validation
 * @param envFileName - Name of the env file (e.g., ".env.server", ".env.client")
 * @param schema - Zod schema for validation
 * @param envType - Type of environment ("server" or "client") for logging
 * @returns Validated environment object
 */
export function initializeEnvironment<T extends z.ZodTypeAny>(
  envFileName: string,
  schema: T,
  envType: "server" | "client"
): z.infer<T> {
  // Singleton pattern - only initialize once per env type
  const cacheKey = `__env_${envType}_instance__` as const;
  const initKey = `__env_${envType}_initialized__` as const;

  // Check if already initialized
  if ((globalThis as any)[initKey] && (globalThis as any)[cacheKey]) {
    return (globalThis as any)[cacheKey];
  }

  // Get the workspace root
  const workspaceRoot = findWorkspaceRoot(process.cwd());
  const envPath = resolve(workspaceRoot, envFileName);

  // Only log in development
  if (process.env.NODE_ENV !== "production") {
    console.log(`🔧 [env:${envType}] loading from:`, envPath);
  }

  // Load env file
  dotenvConfig({
    path: envPath,
  });

  // Validate and parse
  try {
    const envInstance = schema.parse(process.env);

    // Cache the instance
    (globalThis as any)[cacheKey] = envInstance;
    (globalThis as any)[initKey] = true;

    // Only log in development
    if (process.env.NODE_ENV !== "production") {
      console.log(`✅ [env:${envType}] environment loaded successfully`);
    }

    return envInstance;
  } catch (er) {
    const error = er as z.ZodError;
    console.error(`❌ Invalid ${envType} environment variables:`);
    console.error(JSON.stringify(error.flatten().fieldErrors, null, 2));
    process.exit(1);
  }
}
