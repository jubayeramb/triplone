import { createRoute, z } from "@hono/zod-openapi";
import { createApp } from "@/api/lib/create-app";
import * as routes from "./routes";

const app = createApp();

const router = app
  .openapi(routes.create, () => {})
  .openapi(routes.getAll, () => {})
  .openapi(routes.getById, () => {});

export default router;
