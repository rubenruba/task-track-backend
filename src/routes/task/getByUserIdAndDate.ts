import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";

export function getByUserIdAndDate(router: Router) {
    router.get('/:userId/:date', errorHandler(async (req, res) => {
        const { userId, date } = req.params;
        if (!userId || !date) throw new InvalidParams();
        const tasks = await new TaskMongoRepository().getByUserIdAndDate(userId, date);
        res.json(tasks.map(task => task.toDTO()));
    }));
}