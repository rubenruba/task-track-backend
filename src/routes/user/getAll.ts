import { Router } from "express";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";
import { authMiddleware } from "../../middlewares/authMiddleware";

export function getAll(router: Router) {
    router.get('/all', authMiddleware, async(req, res) => {
       const users = await new UserMongoRepository().getAll();
       res.json(users.map(user => user.toFrontDTO()));
    });
}