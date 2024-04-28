import { Router } from "express";
import * as UserController from "../../controllers/user";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { getAll } from "./getAll";
import { getAllEmails } from "./getAllEmails";
import { getByEmail } from "./getByEmail";
import { getById } from "./getById";

export const userRouter = Router();

userRouter.post('/register', async (req, res) => await UserController.createUserController.run(req, res));
userRouter.post('/login', async (req, res) => await UserController.loginController.run(req, res));
userRouter.put('/edit', authMiddleware, async (req, res) => await UserController.updateUserController.run(req, res));
userRouter.delete('/delete/:userId', authMiddleware, async (req, res) => await UserController.deleteController.run(req, res));

getAll(userRouter);
getAllEmails(userRouter);
getByEmail(userRouter);
getById(userRouter);
