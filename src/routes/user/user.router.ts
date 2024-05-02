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
userRouter.put('', authMiddleware, async (req, res) => await UserController.updateUserController.run(req, res));
userRouter.delete('/:userId', authMiddleware, async (req, res) => await UserController.deleteController.run(req, res));

getByEmail(userRouter);
getAll(userRouter);
getAllEmails(userRouter);
getById(userRouter);
