import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";

export function deleteTask(router: Router) {
    router.delete('/:taskId', errorHandler(async (req, res) => {
        const taskId = req.params.taskId;
        if (!taskId) throw new InvalidParams;
        await new TaskMongoRepository().delete(taskId);
        res.json();
    }));
}