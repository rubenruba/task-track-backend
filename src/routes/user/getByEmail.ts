import { Router } from "express";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { NotFound } from "../../exceptions/NotFound.exception";
import { errorHandler } from "../../middlewares/errorHandler";
import { UserMongoRepository } from "../../repositories/user/userMongo.repository";
import { Email } from "../../VO/Email";

export function getByEmail(router: Router) {
    router.get('/email/:email', errorHandler(async (req, res) => {
        const email = new Email(req.params.email);

        if (!email) throw new InvalidParams();
        const user = await new UserMongoRepository().getByEmail(email);

        if (!user) throw new NotFound('User');
        res.json(user.toFrontDTO());
    }));
}