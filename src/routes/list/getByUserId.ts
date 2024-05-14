import { Router } from "express";
import { ListMongoRepository } from "../../repositories/list/listMongo.repository";

export function getByUserId(router: Router) {
    router.get('/user/:userId', async(req, res) => {
       const userId = req.params.userId;
       if (!userId) throw new Error('Invalid request params');
       const lists = await new ListMongoRepository().getByUserId(userId);
       res.json(lists.map(list => list.toDTO()));
    });
}