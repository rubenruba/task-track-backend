import { Request, Response } from "express";
import { CreateList } from "../../actions/list/CreateList.action";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { ExpressController } from "../controller";

export class CreateListController implements ExpressController {

    constructor(
        private readonly createList: CreateList = new CreateList()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const { id, title, tasks, users } = req.body;

        if (!id || !title || !tasks || !users) throw new InvalidParams();

        await this.createList.run(id, title, tasks, users);
        res.json();
    }
}