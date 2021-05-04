import Router from "koa-router";
import * as controller from "./controller";
import { urls } from "../index";

// make router
const test: Router<any, {}> = new Router();

// controller. router function
test.get(urls.testUrl.userAgentTest, controller.testUserAgent);

export default test;
