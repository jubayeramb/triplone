import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDbClient } from "@triplone/db/client";
import * as schema from "@triplone/db/schema";
import { env } from "@triplone/env/server";

const db = getDbClient();

export const auth = betterAuth({
  secret: env.AUTH_SECRET,
  baseURL: env.API_BASE_URL,
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: env.NODE_ENV === "production",
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      enabled: Boolean(env.GOOGLE_CLIENT_ID),
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
});
