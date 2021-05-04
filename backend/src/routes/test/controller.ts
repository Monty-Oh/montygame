// test controller
import Koa from "koa";

// test userAgent
export const testUserAgent = (ctx: Koa.Context) => {
    const userAgent: string = ctx.get("User-Agent").toString();
    ctx.body = userAgent.indexOf("Mobi") > -1 ? "mobile!!" : "pc!!!";
    ctx.body = ctx.body + "\n" + userAgent;
};
