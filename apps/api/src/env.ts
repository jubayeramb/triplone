import * as z from "zod";
import { config as dotenvConfig } from "dotenv";

dotenvConfig();

const envSchema = z.object({
  PORT: z.coerce.number().default(5000),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export const env = envSchema.parse(process.env);
