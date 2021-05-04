import Router from "koa-router";
import * as controller from "./controller";
import { urls } from "../index";

// make router
const page: Router<any, {}> = new Router();

// controller. router function
page.get(urls.pageUrl.mobile, controller.mobile);
page.get(urls.pageUrl.web, controller.web);

export default page;
