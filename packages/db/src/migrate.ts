import { migrate } from "drizzle-orm/postgres-js/migrator";
import { createDbClientSingleton } from "./client";
import path from "path";

// for migrations
export const dbMigrate = async (connectionString: string) => {
  try {
    const migrationClient = createDbClientSingleton(connectionString);
    await migrate(migrationClient, {
      migrationsFolder: path.resolve(__dirname, "./migrations"),
    });
    console.log("Migrations ran successfully");
  } catch (err) {
    console.error(`Error running migrations\n`, err);
  }
};
