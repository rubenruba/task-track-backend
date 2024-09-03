import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { NotFound } from "../../exceptions/NotFound.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";

export function getById(router: Router) {
    router.get('/:taskId', errorHandler(async (req, res) => {
        const taskId = req.params.taskId;

        if (!taskId) throw new InvalidParams();
        const task = await new TaskMongoRepository().getById(taskId);

        if (!task) throw new NotFound('Task')
        res.json(task.toDTO());
    }));
}