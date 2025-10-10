import { logger } from "hono/logger";
import configureOpenAPI from "./lib/configure-openapi";
import { createApp } from "./lib/create-app";
import { notFound, onError } from "stoker/middlewares";
import indexRoute from "./routes/index.route";

const app = createApp();
app.use(logger());
configureOpenAPI(app);

const routes = [indexRoute];

for (const route of routes) {
  app.route("/", route);
}

app.notFound(notFound);
app.onError(onError);

export default app;
