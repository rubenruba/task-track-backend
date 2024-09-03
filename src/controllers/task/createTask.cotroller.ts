import { Request, Response } from "express";
import { CreateTask } from "../../actions/task/CreateTask.action";
import { InvalidParams } from "../../exceptions/InvalidParams.exception";
import { ExpressController } from "../controller";

export class CreateTaskController implements ExpressController {

    constructor(
        private readonly createTask: CreateTask = new CreateTask()
    ) { }

    async run(req: Request, res: Response): Promise<void> {
        const { id, date, text, users } = req.body;

        if (!id || !date || !text || !users) throw new InvalidParams();

        await this.createTask.run(id, date, text, users);
        res.json();
    }
}