import { type PostgresJsDatabase, drizzle } from "drizzle-orm/postgres-js";
import postgres, { type Sql } from "postgres";
import * as schema from "./schema";

class DbClient {
  private static instance: PostgresJsDatabase<typeof schema> | null = null;
  private static client: Sql | null = null;

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(
    connectionString?: string
  ): PostgresJsDatabase<typeof schema> {
    if (!DbClient.instance) {
      if (!connectionString) {
        throw new Error(
          "Connection string is required for first initialization"
        );
      }

      DbClient.client = postgres(connectionString, { max: 1 });
      DbClient.instance = drizzle(DbClient.client, { schema });
    }

    return DbClient.instance;
  }

  public static async close(): Promise<void> {
    if (DbClient.client) {
      await DbClient.client.end();
      DbClient.client = null;
      DbClient.instance = null;
    }
  }
}

export const createDbClientSingleton = (connectionString: string) => {
  return DbClient.getInstance(connectionString);
};

export const getDbClient = () => {
  return DbClient.getInstance();
};

export const closeDbClient = async () => {
  await DbClient.close();
};
