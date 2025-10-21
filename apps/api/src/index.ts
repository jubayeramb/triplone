import { serve } from "@hono/node-server";
import { createDbClientSingleton } from "@triplone/db/client";
import { env } from "@triplone/env/server";
import app from "./app";

// Initialize database connection
createDbClientSingleton(env.DATABASE_URL);

serve(
  {
    fetch: app.fetch,
    port: env.PORT,
  },
  (info) => {
    console.log(`API server is running on http://localhost:${info.port}`);
  }
);
