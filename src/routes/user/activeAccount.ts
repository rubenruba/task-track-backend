import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";

export function activeAccount(router: Router) {
    router.get('/active-account/:userId', errorHandler(async (req, res) => {
        const { userId } = req.params;
        if (!userId) throw new InvalidParams();

        const user = await new UserMongoRepository().getById(userId);

        if (!user) res.json(false);
        else if (!user.verifyToken) res.json(true);
        else res.json(false);
    }));
}