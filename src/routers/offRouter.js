import express from "express";
import { link } from "../controllers/offController";
import { showFlower, write } from "../controllers/offController";

const offRouter = express.Router();
offRouter.get("/", link);
offRouter.get("/:FB_id", showFlower);
offRouter.get("/:FB_id/write", write);

export default offRouter;