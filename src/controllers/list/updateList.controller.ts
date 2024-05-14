import { Request, Response } from "express";
import { UpdateList } from "../../actions/list/UpdateList.action";
import { ExpressController } from "../controller";

export class UpdateListController implements ExpressController {

    constructor(
        private readonly updateList: UpdateList = new UpdateList()
    ) { }
    
    async run(req: Request, res: Response): Promise<void> {
        const list = req.body;

        if (!list) throw new Error('Invalid request params');

        await this.updateList.run(list);
        res.json();
    }
}