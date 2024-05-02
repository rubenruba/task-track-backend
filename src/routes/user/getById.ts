import { Router } from "express";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";

export function getById(router: Router) {
    router.get('/:userId', async(req, res) => {
       const userId = req.params.userId;
       
       if (!userId) throw new Error('Invalid request params');
       const user = await new UserMongoRepository().getById(userId);

       if (!user) throw new Error('No user found');
       res.json(user.toFrontDTO());
    });
}