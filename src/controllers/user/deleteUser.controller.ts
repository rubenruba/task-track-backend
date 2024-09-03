import { Request, Response } from "express";
import { DeleteUser } from "../../actions/user/DeleteUser.action";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { ExpressController } from "../controller";

export class DeleteController implements ExpressController {

    constructor(
        private readonly deleteUser: DeleteUser = new DeleteUser()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const userId = req.params.userId;
        if (!userId) throw new InvalidParams();

        await this.deleteUser.run(userId);
        res.json();
    }
}