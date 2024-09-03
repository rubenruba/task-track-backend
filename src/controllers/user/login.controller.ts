import { Request, Response } from "express";
import { Login } from "../../actions/user/Login.action";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { ExpressController } from "../controller";

export class LoginController implements ExpressController {

    constructor(
        private readonly login: Login = new Login()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        if (!email || !password) throw new InvalidParams();

        const userJWT = await this.login.run(email, password);
        res.json(userJWT);
    }
}