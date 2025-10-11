import {
  boolean,
  pgTable,
  uniqueIndex,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { roleEnum } from "./enums";
import { timestamps } from "../helper/columns";

export const users = pgTable(
  "users",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    phone: varchar("phone", { length: 256 }),
    password: varchar("password", { length: 256 }).notNull(),
    role: roleEnum("role").default("user"),
    hasVerifiedEmail: boolean("has_verified_email").default(false),
    emailToken: varchar("email_token", { length: 256 }),
    refreshToken: varchar("refresh_token", { length: 256 }),
    resetPasswordToken: varchar("reset_password_token", { length: 256 }),
    deleted: boolean("deleted").default(false),
    banned: boolean("banned").default(false),
    ...timestamps,
  },
  (user) => [uniqueIndex("email_idx").on(user.email)]
);
