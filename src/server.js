import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 5000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

app.use("/",globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
 


const handleListening = () => console.log(`Server listening on port ${PORT}`);

app.listen(PORT, handleListening)

