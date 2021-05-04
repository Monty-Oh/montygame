import Router from "koa-router";
import * as urls from "./urls";
export * as urls from "./urls";

// get api routers
import test from "./test";
export const api: Router<any, {}> = new Router();

import pages from "./pages";
export const page: Router<any, {}> = new Router();

// connect router
api.use(urls.testUrl.test, test.routes());
page.use(urls.pageUrl.page, pages.routes());
