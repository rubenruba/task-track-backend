import { Router } from "express";
import { createUserController } from "../../controllers/user";

export const userRouter = Router();

userRouter.post('/register', async (req, res) => await createUserController.run(req, res));
