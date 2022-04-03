import express from "express";
import { getlink } from "../controllers/offController";
import { showFlower, write } from "../controllers/offController";

const offRouter = express.Router();
offRouter.get("/", getlink);
offRouter.get("/:FB_id2", showFlower);
offRouter.get("/:FB_id2/write", write);

export default offRouter;