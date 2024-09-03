import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { NotFound } from "../../exceptions/NotFound.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";

export function getById(router: Router) {
    router.get('/:userId', errorHandler(async (req, res) => {
        const userId = req.params.userId;

        if (!userId) throw new InvalidParams();
        const user = await new UserMongoRepository().getById(userId);

        if (!user) throw new NotFound('User');
        res.json(user.toFrontDTO());
    }));
}