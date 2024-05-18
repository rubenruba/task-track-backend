import { Request, Response } from "express";
import { ConfirmEmail } from "../../actions/user/ConfirmEmail.action";
import { ExpressController } from "../controller";

export class ConfirmEmailController implements ExpressController {

    constructor(
        private readonly confirmEmail: ConfirmEmail = new ConfirmEmail()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const { userId, verifyToken } = req.params;

        if (!userId || !verifyToken) throw new Error('Invalid request params');

        const userJWT = await this.confirmEmail.run(userId, verifyToken);
        res.json(userJWT);
    }
}