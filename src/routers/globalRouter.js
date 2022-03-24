import express from "express";
import { main } from "../controllers/globalController"; 
import { join,login,choose } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", main);
globalRouter.get("/switch",choose);
globalRouter.get("/join", join);
globalRouter.get("/login",login);
//로딩 라우터는 나중에 추가

export default globalRouter;