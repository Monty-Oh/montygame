// test controller
import Koa from "koa";

export const mobile = (ctx: Koa.Context) => {
    ctx.body = "this is mobile page";
};

export const web = (ctx: Koa.Context) => {
    ctx.body = "this is web page";
};
