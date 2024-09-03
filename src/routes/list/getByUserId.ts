import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { ListMongoRepository } from "../../repositories/list/listMongo.repository";

export function getByUserId(router: Router) {
    router.get('/user/:userId', errorHandler(async (req, res) => {
        const userId = req.params.userId;
        if (!userId) throw new InvalidParams;
        const lists = await new ListMongoRepository().getByUserId(userId);
        res.json(lists.map(list => list.toDTO()));
    }));
}