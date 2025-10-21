import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
import type { z } from "zod";
import { findWorkspaceRoot } from "./env-root";

// Type-safe global cache
interface EnvCache {
  __env_server_instance__?: any;
  __env_server_initialized__?: boolean;
  __env_client_instance__?: any;
  __env_client_initialized__?: boolean;
}

declare global {
  var __env_server_instance__: any;
  var __env_server_initialized__: boolean | undefined;
  var __env_client_instance__: any;
  var __env_client_initialized__: boolean | undefined;
}

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
  const cacheKey = `__env_${envType}_instance__` as keyof EnvCache;
  const initKey = `__env_${envType}_initialized__` as keyof EnvCache;

  // Check if already initialized
  if (globalThis[initKey] && globalThis[cacheKey]) {
    return globalThis[cacheKey] as z.infer<T>;
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
    globalThis[cacheKey] = envInstance;
    globalThis[initKey] = true;

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
