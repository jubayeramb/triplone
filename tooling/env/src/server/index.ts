import * as z from "zod";
import { initializeEnvironment } from "../helper/initialize-env";

/**
 * Server-side environment variable schema
 * Includes all environment variables needed for server-side code
 */
const EnvSchema = z.object({
  // Database
  DATABASE_URL: z.url(),

  // API Configuration
  PORT: z.coerce.number().default(5000),
  API_VERSION: z.string().default("v1"),

  // Auth
  AUTH_SECRET: z.string().min(32),

  // OAuth (optional)
  GOOGLE_CLIENT_ID: z.string().optional(),
  GOOGLE_CLIENT_SECRET: z.string().optional(),

  // App Configuration
  API_BASE_URL: z.url().default("http://localhost:5000"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export type Env = z.infer<typeof EnvSchema>;

// Initialize and export environment variables
export const env = initializeEnvironment(".env.server", EnvSchema, "server");

// Export schema for testing/validation purposes
export { EnvSchema };
