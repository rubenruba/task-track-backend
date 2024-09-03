import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { ListMongoRepository } from "../../repositories/list/listMongo.repository";

export function deleteList(router: Router) {
    router.delete('/:listId', errorHandler(async (req, res) => {
        const listId = req.params.listId;
        if (!listId) throw new InvalidParams;
        await new ListMongoRepository().delete(listId);
        res.json();
    }));
}