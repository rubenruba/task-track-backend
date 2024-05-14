import { Request, Response } from "express";
import { CreateList } from "../../actions/list/CreateList.action";
import { ExpressController } from "../controller";

export class CreateListController implements ExpressController {

    constructor(
        private readonly createList: CreateList = new CreateList()
    ) { }
    
    async run(req: Request, res: Response): Promise<void> {
        const { id, title, tasks, users, color } = req.body;

        if (!id || !title || !tasks || !users || !color) throw new Error('Invalid request params');

        await this.createList.run(id, title, tasks, users, color);
        res.json();
    }
}