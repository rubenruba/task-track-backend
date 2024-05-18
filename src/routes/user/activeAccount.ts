import { Router } from "express";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";

export function activeAccount(router: Router) {
    router.get('/active-account/:userId', async (req, res) => {
        const { userId } = req.params;
        if (!userId) throw new Error('Invalid request params');

        const user = await new UserMongoRepository().getById(userId);

        if (!user) res.json(false);
        else if (!user.verifyToken) res.json(true);
        else res.json(false);
    });
}