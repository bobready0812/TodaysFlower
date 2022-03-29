import express from "express";
import { main,choose } from "../controllers/globalController"; 
import { getJoin, postJoin, getLogin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", main);
globalRouter.get("/switch",choose);
globalRouter.route("/join").get(getJoin).post(postJoin); 
globalRouter.get("/login",getLogin);
//로딩 라우터는 나중에 추가

export default globalRouter;