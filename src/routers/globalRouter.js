import express from "express";
import { main,choose } from "../controllers/globalController"; 

const globalRouter = express.Router();

globalRouter.get("/", main);
globalRouter.get("/switch",choose);
globalRouter.get("/join", join);
globalRouter.post("/join", postJoin);
globalRouter.get("/login",login);
//로딩 라우터는 나중에 추가

export default globalRouter;