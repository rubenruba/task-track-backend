import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";

export function getById(router: Router) {
    router.get('/:taskId', authMiddleware, async(req, res) => {
       const taskId = req.params.taskId;
       
       if (!taskId) throw new Error('Invalid request params');
       const task = await new TaskMongoRepository().getById(taskId);

       if (!task) throw new Error('No task found');
       res.json(task.toDTO());
    });
}