import { pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", [
  "user",
  "guest",
  "moderator",
  "super_admin",
  "agency_owner",
  "agency_staff",
]);

export type UserRole = (typeof roleEnum.enumValues)[number];
