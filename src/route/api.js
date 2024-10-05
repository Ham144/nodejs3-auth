import userController from "../controller/user-controller.js";
import express from "express";
import authmiddleWare from "../middleware/auth-middleware.js"

const userRouter = new express.Router()
userRouter.use(authmiddleWare)
userRouter.get("/api/users/current", userController.get)
userRouter.patch("/api/users/current", userController.update)
userRouter.delete("/api/users/logout", userController.logout)

export default userRouter