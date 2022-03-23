import express from "express";

const userRouter = express.Router();

const hadnleEditUser = (req, res) => res.send("Edit User"); 

userRouter.get("/edit", hadnleEditUser);