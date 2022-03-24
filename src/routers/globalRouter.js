import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/switch",choose);
globalRouter.get("/join", join);
globalRouter.get("/login",)