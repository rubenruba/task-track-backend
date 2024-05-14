import { Router } from "express";
import { ListMongoRepository } from "../../repositories/list/listMongo.repository";

export function getById(router: Router) {
    router.get('/:listId', async(req, res) => {
       const listId = req.params.listId;
       
       if (!listId) throw new Error('Invalid request params');
       const list = await new ListMongoRepository().getById(listId);

       if (!list) throw new Error('No list found');
       res.json(list.toDTO());
    });
}