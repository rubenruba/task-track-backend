import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";

export function getByUserId(router: Router) {
    router.get('/user/:userId', errorHandler(async (req, res) => {
        const userId = req.params.userId;
        if (!userId) throw new InvalidParams();
        const tasks = await new TaskMongoRepository().getByUserId(userId);
        res.json(tasks.map(task => task.toDTO()));
    }));
}