import { Request, Response } from "express";
import { UpdateUser } from "../../actions/user/UpdateUser.action";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { ExpressController } from "../controller";

export class UpdateUserController implements ExpressController {

    constructor(
        private readonly updateUser: UpdateUser = new UpdateUser()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const { user } = req.body;

        if (!user) throw new InvalidParams();

        await this.updateUser.run(user);
        res.json();
    }
}