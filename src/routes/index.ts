import { Router } from "express";
import { userRouter } from "./user/user.router";
import { taskRouter } from "./task/task.router";
import { listRouter } from "./list/list.router";

const indexRouter = Router();

indexRouter.use('/user', userRouter);
indexRouter.use('/task', taskRouter);
indexRouter.use('/list', listRouter);

export default indexRouter;