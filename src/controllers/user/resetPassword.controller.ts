import { Request, Response } from "express";
import { ResetPassword } from "../../actions/user/ResetPassword.action";
import { ExpressController } from "../controller";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";

export class ResetPasswordController implements ExpressController {

    constructor(
        private readonly resetPassword: ResetPassword = new ResetPassword()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const { email } = req.body;

        if (!email) throw new InvalidParams();

        await this.resetPassword.run(email);
        res.json();
    }
}