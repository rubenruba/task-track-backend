import { Router } from "express";
import * as UserController from "../../controllers/user";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { activeAccount } from "./activeAccount";
import { getAll } from "./getAll";
import { getAllEmails } from "./getAllEmails";
import { getByEmail } from "./getByEmail";
import { getById } from "./getById";
import { errorHandler } from "../../middlewares/errorHandler";

export const userRouter = Router();

userRouter.get('/verify/:userId/:verifyToken', errorHandler(async (req, res) => await UserController.confirmEmailController.run(req, res)));

userRouter.post('/register', errorHandler(async (req, res) => await UserController.createUserController.run(req, res)));

userRouter.post('/login', errorHandler(async (req, res) => await UserController.loginController.run(req, res)));

userRouter.post('/reset-password', errorHandler(async (req, res) => await UserController.resetPasswordController.run(req, res)));

userRouter.put('', authMiddleware, errorHandler(async (req, res) => await UserController.updateUserController.run(req, res)));

userRouter.delete('/:userId', authMiddleware, errorHandler(async (req, res) => await UserController.deleteController.run(req, res)));

getByEmail(userRouter);
getAll(userRouter);
getAllEmails(userRouter);
activeAccount(userRouter);
getById(userRouter);
