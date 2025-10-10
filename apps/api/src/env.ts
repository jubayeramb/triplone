import * as z from "zod";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const EnvSchema = z.object({
  PORT: z.coerce.number().default(5000),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  API_VERSION: z.string().default("v1"),
});

export type Env = z.infer<typeof EnvSchema>;

let env: Env;

try {
  env = EnvSchema.parse(process.env);
} catch (er) {
  const error = er as z.ZodError;
  console.error("❌ Invalid env:");
  console.error(JSON.stringify(z.flattenError(error).fieldErrors, null, 2));
  process.exit(1);
}

export { env };
