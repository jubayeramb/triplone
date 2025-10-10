import { OpenAPIHono } from "@hono/zod-openapi";
import { defaultHook } from "stoker/openapi";

export const createApp = () => new OpenAPIHono({ strict: false, defaultHook });
