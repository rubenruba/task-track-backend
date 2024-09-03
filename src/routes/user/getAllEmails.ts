import { Router } from "express";
import { errorHandler } from "../../middlewares/errorHandler";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";

export function getAllEmails(router: Router) {
    router.get('/emails', errorHandler(async (req, res) => {
        const emails = await new UserMongoRepository().getAllEmails();
        res.json(emails);
    }));
}