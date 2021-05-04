import dotenv from "dotenv";
import Koa from "koa";
import Router from "koa-router";
import path from "path";
import serve from "koa-static";
import send from "koa-send";

// get modules
import { api, page, urls } from "./routes";

// set dotenv (process.env)
dotenv.config();

// get environment variable
const { PORT } = process.env;

// set port
export const port: number = Number(PORT) || 3000;

// create server app
const app: Koa<Koa.DefaultState, Koa.DefaultContext> = new Koa();

// create router & setup
const router: Router<any, {}> = new Router();
router.use(urls.apiUrl.api, api.routes());
router.use(urls.rootUrl.empty, page.routes());

// set app middlewares
app.use(router.routes()).use(router.allowedMethods());

// set contents uploads directory
const videoUploadsDirectory: string = path.resolve(__dirname, "../../uploads");
app.use(serve(videoUploadsDirectory));

const imageUploadsDirectory: string = path.resolve(__dirname, "../../images");
app.use(serve(imageUploadsDirectory));

// build Directory web or mobile
// app.use((ctx: Koa.Context) => serve(selectWebOrMobile(ctx)));

// const mobileBuildDirectory: string = path.resolve(
//     __dirname,
//     "../../mobile/build"
// );
// const webBuildDirectory: string = path.resolve(__dirname, "../../web/build");
// app.use(serve(webBuildDirectory));

// 404 handler
app.use(async (ctx: Koa.Context) => {
    if (ctx.status === 404) {
        if (ctx.path.indexOf("/uploads") === 0) {
            // you have to write code
        }

        //page 404
        else if (ctx.path.indexOf("/api") !== 0) {
            // User-Agent 헤더에 Mobi이 포함되면 모바일환경, 미포함이면 pc환경임
            // ctx.get("User-Agent").toString().indexOf("Mobi") > -1
            //     ? await send(ctx, "index.html", { root: mobileBuildDirectory })
            //     : await send(ctx, "index.html", { root: webBuildDirectory });
        }
    }
});

export default app;
