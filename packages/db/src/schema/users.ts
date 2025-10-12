import {
  boolean,
  pgTable,
  text,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { roleEnum } from "./enums";
import { timestamps } from "../helper/columns";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import * as z from "zod";

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    phone: varchar("phone", { length: 256 }),
    password: varchar("password", { length: 256 }).notNull(),
    role: roleEnum("role").default("user"),
    hasVerifiedEmail: boolean("has_verified_email").default(false),
    emailToken: text("email_token"),
    refreshToken: text("refresh_token"),
    resetPasswordToken: text("reset_password_token"),
    deleted: boolean("deleted").default(false),
    banned: boolean("banned").default(false),
    ...timestamps.schema,
  },
  (user) => [uniqueIndex("email_idx").on(user.email)]
);

export const userSelectSchema = createSelectSchema(users);
export type User = typeof users.$inferSelect;

export const userInsertSchema = createInsertSchema(users, {
  email: (schema) => schema.email(),
}).omit({
  id: true,
  role: true,
  hasVerifiedEmail: true,
  emailToken: true,
  refreshToken: true,
  resetPasswordToken: true,
  deleted: true,
  banned: true,
  ...timestamps.omit,
});

export const serUpdateSchema = createUpdateSchema(users, {
  email: (schema) => schema.email(),
}).omit({
  id: true,
});
