import dotenv from "dotenv";
import Koa from "koa";
import Router from "koa-router";
import path from "path";
import serve from "koa-static";
// import UserAgents from "user-agents";

// get modules
import { api } from "./routes";

// set dotenv (process.env)
dotenv.config();

// get environment variable
const { PORT } = process.env;

// set port
export const port: number = Number(PORT) || 3000;

// create server app
const app: Koa<Koa.DefaultState, Koa.DefaultContext> = new Koa();

// userAgent
// const userAgents: UserAgents = new UserAgents({ deviceCategory: "mobile" });
// console.log(userAgents.toString());

// create router & setup
const router: Router<any, {}> = new Router();
router.use("/api", api.routes());

// set app middlewares
app.use(router.routes()).use(router.allowedMethods());

// set contents uploads directory
const videoUploadsDirectory: string = path.resolve(__dirname, "../../uploads");
app.use(serve(videoUploadsDirectory));

const imageUploadsDirectory: string = path.resolve(__dirname, "../../images");
app.use(serve(imageUploadsDirectory));

// 404 handler
app.use(async (ctx: Koa.Context) => {
    if (ctx.status === 404) {
        if (ctx.path.indexOf("/uploads") === 0) {
            // you have to write code
        }

        //page 404
        else if (ctx.path.indexOf("/api") !== 0) {
            // you have to write code
        }
    }
});

export default app;
