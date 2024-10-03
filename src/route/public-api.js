
import express from "express";
import userController from "../controller/user-controller.js";

const publicRouter = new express.Router()

publicRouter.post("/api/users", userController.register)
publicRouter.post("/api/users/auth", userController.login)

export default publicRouter;