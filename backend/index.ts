import app, { port } from "./src/app";

// deploying
app.listen(port, () => {
    console.log(`PORT : ${port} LISTENING...`);
});
