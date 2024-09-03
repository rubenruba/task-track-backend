import { Request, Response } from "express";
import { ConfirmEmail } from "../../actions/user/ConfirmEmail.action";
import { ExpressController } from "../controller";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";

export class ConfirmEmailController implements ExpressController {

    constructor(
        private readonly confirmEmail: ConfirmEmail = new ConfirmEmail()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const { userId, verifyToken } = req.params;

        if (!userId || !verifyToken) throw new InvalidParams();

        const token = await this.confirmEmail.run(userId, verifyToken);
        res.json(token);
    }
}