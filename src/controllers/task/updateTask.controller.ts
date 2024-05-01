import { Request, Response } from "express";
import { UpdateTask } from "../../actions/task/UpdateTask.action";
import { ExpressController } from "../controller";

export class UpdateTaskController implements ExpressController {

    constructor(
        private readonly updateTask: UpdateTask = new UpdateTask()
    ) { }
    
    async run(req: Request, res: Response): Promise<void> {
        const { task } = req.body;

        if (!task) throw new Error('Invalid request params');

        await this.updateTask.run(task);
        res.json();
    }
}