import type { OpenAPIHono } from "@hono/zod-openapi";
import packageJSON from "../../package.json" with { type: "json" };
import { swaggerUI } from "@hono/swagger-ui";

export default function configureOpenAPI(app: OpenAPIHono) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJSON.version,
      title: "Triplone API",
    },
  });

  app.get(
    "/reference",
    swaggerUI({
      url: "/doc",
    })
  );
}
