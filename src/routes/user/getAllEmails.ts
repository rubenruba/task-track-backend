import { Router } from "express";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";

export function getAllEmails(router: Router) {
    router.get('/emails', async(req, res) => {       
       const emails = await new UserMongoRepository().getAllEmails();
       res.json(emails);
    });
}