import { Request, Response } from "express";
import { ExpressController } from "../controller";
import { CreateUser } from "../../actions/user/CreateUser.action";

export class CreateUserController implements ExpressController {

    constructor(
        private readonly createUser: CreateUser = new CreateUser()
    ) { }
    
    async run(req: Request, res: Response): Promise<void> {
        const { username, email, password } = req.body;

        if (!username || !email || !password) throw new Error('Invalid request params');

        const userJWT = await this.createUser.run(username, email, password);
        res.json(userJWT);
    }
}