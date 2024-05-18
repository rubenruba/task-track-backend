import { Request, Response } from "express";
import { ResetPassword } from "../../actions/user/ResetPassword.action";
import { ExpressController } from "../controller";

export class ResetPasswordController implements ExpressController {

    constructor(
        private readonly resetPassword: ResetPassword = new ResetPassword()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const { email } = req.body;

        if (!email) throw new Error('Invalid request params');

        await this.resetPassword.run(email);
        res.json();
    }
}