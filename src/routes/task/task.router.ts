import { Router } from "express";
import * as TaskController from '../../controllers/task';
import { authMiddleware } from "../../middlewares/authMiddleware";
import { deleteTask } from "./delete";
import { getById } from "./getById";
import { getByUserId } from "./getByUserId";
import { getByUserIdAndDate } from "./getByUserIdAndDate";

export const taskRouter = Router();

taskRouter.post('', authMiddleware, async (req, res) => await TaskController.createTaskController.run(req, res));
taskRouter.post('/update', authMiddleware, async (req, res) => await TaskController.updateTaskController.run(req, res));

getById(taskRouter);
getByUserId(taskRouter);
getByUserIdAndDate(taskRouter);
deleteTask(taskRouter);
