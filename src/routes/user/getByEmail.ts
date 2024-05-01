import { Router } from "express";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";
import { Email } from "../../VO/Email";

export function getByEmail(router: Router) {
    router.get('/email/:email', async(req, res) => {
       const email = new Email(req.params.email);
       
       if (!email) throw new Error('Invalid request params');
       const user = await new UserMongoRepository().getByEmail(email);

       if (!user) throw new Error('No user found');
       res.json(user.toFrontDTO());
    });
}