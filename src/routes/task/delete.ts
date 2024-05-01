import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";

export function deleteTask(router: Router) {
    router.delete('/:taskId', authMiddleware, async(req, res) => {
       const taskId = req.params.taskId;
       if (!taskId) throw new Error('Invalid request params');
       await new TaskMongoRepository().delete(taskId);
       res.json();
    });
}