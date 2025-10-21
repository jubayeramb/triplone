import * as z from "zod";
import { initializeEnvironment } from "../helper/initialize-env";

/**
 * Client-side environment variable schema
 * Only includes environment variables safe to expose to the browser
 */
const EnvSchema = z.object({
  API_BASE_URL: z.url().default("http://localhost:5000"),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export type Env = z.infer<typeof EnvSchema>;

// Initialize and export environment variables
export const env = initializeEnvironment(".env.client", EnvSchema, "client");

// Export schema for testing/validation purposes
export { EnvSchema };
