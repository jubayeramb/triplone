import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

export const createDbClient = (connectionString: string) => {
  const client = postgres(connectionString, {
    max: 1,
  });
  const db = drizzle(client, {
    schema,
  });
  return db;
};
