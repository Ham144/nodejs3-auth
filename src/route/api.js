import userController from "../controller/user-controller.js";
import express from "express";

const userRouter = express.Router()
userRouter.post("/api/users/current", userController.get)
userRouter.patch("/api/users/current", userController.update)

export default userRouter