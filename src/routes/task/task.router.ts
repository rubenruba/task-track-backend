import { Router } from "express";
import * as TaskController from '../../controllers/task';
import { authMiddleware } from "../../middlewares/authMiddleware";
import { deleteTask } from "./delete";
import { getById } from "./getById";
import { getByUserId } from "./getByUserId";
import { getByUserIdAndDate } from "./getByUserIdAndDate";

export const taskRouter = Router();

taskRouter.use(authMiddleware);

taskRouter.post('', async (req, res) => await TaskController.createTaskController.run(req, res));
taskRouter.put('', async (req, res) => await TaskController.updateTaskController.run(req, res));

getById(taskRouter);
getByUserId(taskRouter);
getByUserIdAndDate(taskRouter);
deleteTask(taskRouter);
