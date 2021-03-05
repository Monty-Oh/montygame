import Router from "koa-router";

// get routers
import test from "./test";

export const api: Router<any, {}> = new Router();

// connect router
api.use("/test", test.routes());
