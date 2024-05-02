import { Router } from "express";
import { TaskMongoRepository } from "../../repositories/task/taskMongo.repository";

export function getByUserId(router: Router) {
    router.get('/user/:userId', async(req, res) => {
       const userId = req.params.userId;
       if (!userId) throw new Error('Invalid request params');
       const tasks = await new TaskMongoRepository().getByUserId(userId);
       res.json(tasks.map(task => task.toDTO()));
    });
}