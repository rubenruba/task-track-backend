import { Request, Response } from "express";
import { ExpressController } from "../controller";
import { UpdateUser } from "../../actions/user/UpdateUser.action";

export class UpdateUserController implements ExpressController {

    constructor(
        private readonly updateUser: UpdateUser = new UpdateUser()
    ) {}
    
    async run(req: Request, res: Response): Promise<void> {
        const { user } = req.body;

        if(!user) throw new Error('Invalid request params');

        await this.updateUser.run(user);
        res.json();
    }
}