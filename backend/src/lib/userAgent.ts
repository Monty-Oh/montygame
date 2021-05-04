import Koa from "koa";
import path from "path";

export function selectWebOrMobile(ctx: Koa.Context): string {
    const userAgent = ctx.get("User-Agent").toString();
    const BuildDir =
        userAgent.indexOf("Mobi") > -1
            ? path.resolve(__dirname, "../../mobile/build")
            : path.resolve(__dirname, "../../web/build");
    return BuildDir;
}
