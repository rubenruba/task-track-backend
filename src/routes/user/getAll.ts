import { Router } from "express";
import { authMiddleware } from "../../middlewares/authMiddleware";
import { errorHandler } from "../../middlewares/errorHandler";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";

export function getAll(router: Router) {
    router.get('/all', authMiddleware, errorHandler(async (req, res) => {
        const users = await new UserMongoRepository().getAll();
        res.json(users.map(user => user.toFrontDTO()));
    }));
}