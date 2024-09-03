import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { NotFound } from "../../exceptions/NotFound.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { ListMongoRepository } from "../../repositories/list/listMongo.repository";

export function getById(router: Router) {
    router.get('/:listId', errorHandler(async (req, res) => {
        const listId = req.params.listId;

        if (!listId) throw new InvalidParams();
        const list = await new ListMongoRepository().getById(listId);

        if (!list) throw new NotFound('List');
        res.json(list.toDTO());
    }));
}