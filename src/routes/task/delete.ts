import { Router } from "express";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";

export function deleteTask(router: Router) {
    router.delete('/:taskId', async(req, res) => {
       const taskId = req.params.taskId;
       if (!taskId) throw new Error('Invalid request params');
       await new TaskMongoRepository().delete(taskId);
       res.json();
    });
}