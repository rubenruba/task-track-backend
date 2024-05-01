import { Router } from "express";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";
import { authMiddleware } from "../../middlewares/authMiddleware";

export function getByUserIdAndDate(router: Router) {
    router.get('/:userId/:date', authMiddleware, async(req, res) => {
       const { userId, date } = req.params;
       if (!userId || !date) throw new Error('Invalid request params');
       const tasks = await new TaskMongoRepository().getByUserIdAndDate(userId, date);
       res.json(tasks.map(task => task.toDTO()));
    });
}