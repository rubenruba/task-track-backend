import { Router } from "express";
import { ListMongoRepository } from "../../repositories/list/listMongo.repository";

export function deleteList(router: Router) {
    router.delete('/:listId', async(req, res) => {
       const listId = req.params.listId;
       if (!listId) throw new Error('Invalid request params');
       await new ListMongoRepository().delete(listId);
       res.json();
    });
}