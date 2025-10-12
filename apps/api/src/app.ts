import { logger } from "hono/logger";
import configureOpenAPI from "@/api/lib/configure-openapi";
import { createApp } from "@/api/lib/create-app";
import { notFound, onError } from "stoker/middlewares";
import userRoute from "@/api/routes/users";

const app = createApp();
app.use(logger());
configureOpenAPI(app);

const routes = [userRoute];

for (const route of routes) {
  app.route("/", route);
}

app.notFound(notFound);
app.onError(onError);

export default app;
