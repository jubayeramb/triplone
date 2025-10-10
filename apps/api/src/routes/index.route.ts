import { createRoute, z } from "@hono/zod-openapi";
import { createApp } from "../lib/create-app";

const app = createApp();

const route = app.openapi(
  createRoute({
    method: "post",
    path: "/users",
    request: {
      body: {
        content: {
          "application/json": {
            schema: z.object({
              name: z.string(),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Success message",
      },
    },
  }),
  async (c) => {
    const { name } = await c.req.valid("json");
    return c.json({ message: `User named "${name}" created.` });
  }
);

export default route;
