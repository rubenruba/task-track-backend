import { Router } from "express";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";
import { authMiddleware } from "../../middlewares/authMiddleware";

export function getByUserId(router: Router) {
    router.get('/user/:userId', authMiddleware, async(req, res) => {
       const userId = req.params.userId;
       if (!userId) throw new Error('Invalid request params');
       const tasks = await new TaskMongoRepository().getByUserId(userId);
       res.json(tasks.map(task => task.toDTO()));
    });
}