import { Router } from "express";
import { userRouter } from "./user/user.router";
import { taskRouter } from "./task/task.router";

const indexRouter = Router();

indexRouter.use('/user', userRouter);
indexRouter.use('/task', taskRouter);

export default indexRouter;