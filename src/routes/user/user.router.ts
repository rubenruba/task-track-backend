import { Router } from "express";
import * as UserController from "../../controllers/user";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { getAll } from "./getAll";
import { getAllEmails } from "./getAllEmails";
import { getByEmail } from "./getByEmail";
import { getById } from "./getById";
import { resetPassword } from "./resetPassword";

export const userRouter = Router();

userRouter.get('/verify', async (req, res) => await UserController.confirmEmailController.run(req, res))
userRouter.post('/register', async (req, res) => await UserController.createUserController.run(req, res));
userRouter.post('/login', async (req, res) => await UserController.loginController.run(req, res));
userRouter.put('', authMiddleware, async (req, res) => await UserController.updateUserController.run(req, res));
userRouter.delete('/:userId', authMiddleware, async (req, res) => await UserController.deleteController.run(req, res));

getByEmail(userRouter);
getAll(userRouter);
getAllEmails(userRouter);
getById(userRouter);
resetPassword(userRouter);
