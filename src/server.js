import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import offRouter from "./routers/offRouter";
import onRouter from "./routers/offRouter";

const PORT = 5000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views" ,process.cwd() + "/src/views");
app.use(logger);
app.use("/",globalRouter);
app.use("/off", offRouter);
app.use("/off", onRouter);



const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening)

