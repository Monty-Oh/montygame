import dotenv from "dotenv";
import Koa from "koa";
import path from "path";
import serve from "koa-static";

// set dotenv (process.env)
dotenv.config();

// get environment variable
const { PORT } = process.env;

// set port
export const port: number = Number(PORT) || 3000;

// create server app
const app: Koa<Koa.DefaultState, Koa.DefaultContext> = new Koa();

// set contents uploads directory
const videoUploadsDirectory = path.resolve(__dirname, "../../uploads");
app.use(serve(videoUploadsDirectory));

const imageUploadsDirectory = path.resolve(__dirname, "../../images");
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
