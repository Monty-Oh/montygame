import Router from "koa-router";
import Koa from "koa";

// make router
const test: Router<any, {}> = new Router();

// ctrl. router function
test.get("/", (ctx: Koa.Context) => {
    const userAgent: string = ctx.get("User-Agent").toString();
    ctx.body = "test success\n";
    ctx.body = ctx.body + userAgent;
});

export default test;
