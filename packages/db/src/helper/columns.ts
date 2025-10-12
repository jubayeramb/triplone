import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  schema: {
    updated_at: timestamp(),
    created_at: timestamp().defaultNow().notNull(),
    deleted_at: timestamp(),
  },
  omit: { created_at: true, updated_at: true, deleted_at: true },
} as const;
