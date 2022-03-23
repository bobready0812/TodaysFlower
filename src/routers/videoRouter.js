import express from "express";

const videoRouter = express.Router();

const handleWatchVideo = (req,res) => res.send("Watch Video")

globalRouter.get("/", handleWatchVideo);

export default videoRouter;
