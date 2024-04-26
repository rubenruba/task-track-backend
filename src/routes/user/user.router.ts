import { Router } from "express";
import * as UserController from "../../controllers/user";
import { authMiddleware } from "../../middlewares/authMiddleware";

export const userRouter = Router();

userRouter.post('/register', async (req, res) => await UserController.createUserController.run(req, res));
userRouter.post('/login', async (req, res) => await UserController.loginController.run(req, res));
userRouter.delete('/delete/:userId', authMiddleware, async (req, res) => await UserController.deleteController.run(req, res));
