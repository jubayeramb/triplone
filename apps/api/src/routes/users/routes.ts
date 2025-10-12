import { createRoute, z } from "@hono/zod-openapi";
import * as HttpStatusCodes from "stoker/http-status-codes";
import { jsonContent, jsonContentRequired } from "stoker/openapi/helpers";
import { createErrorSchema, IdUUIDParamsSchema } from "stoker/openapi/schemas";
import { userInsertSchema, userSelectSchema } from "@triplone/db/schema/users";
import { notFoundSchema, uuidParamsSchema } from "@/api/lib/constants";

const tags = ["Users"];

export const getAll = createRoute({
  tags,
  method: "get",
  path: "/users",
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(userSelectSchema),
      "Users retrieved successfully"
    ),
  },
});

export type GetAllRoute = typeof getAll;

export const create = createRoute({
  tags,
  method: "post",
  path: "/users",
  requests: {
    body: jsonContentRequired(userInsertSchema, "User data to create"),
  },
  responses: {
    [HttpStatusCodes.CREATED]: jsonContent(
      userSelectSchema,
      "User created successfully"
    ),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      createErrorSchema(userInsertSchema),
      "Invalid user data"
    ),
  },
});

export type CreateRoute = typeof create;

export const getById = createRoute({
  tags,
  method: "get",
  path: "/users/{id}",
  params: uuidParamsSchema,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      userSelectSchema,
      "User retrieved successfully"
    ),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, "User not found"),
    [HttpStatusCodes.BAD_REQUEST]: jsonContent(
      createErrorSchema(uuidParamsSchema),
      "Invalid user ID"
    ),
  },
});

export type GetByIdRoute = typeof getById;
