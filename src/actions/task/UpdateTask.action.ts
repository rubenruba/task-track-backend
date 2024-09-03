import { TaskDTO } from "../../DTO/task.dto";
import { NotFound } from "../../exceptions/NotFound.exception";
import { taskMongoRepository } from "../../repositories";
import { TaskRepository } from "../../repositories/task/task.repository";

export class UpdateTask {

    constructor(
        private readonly taskRepository: TaskRepository = taskMongoRepository
    ) { }

    async run(task: TaskDTO): Promise<void> {
        const taskFind = await this.taskRepository.getById(task.id);
        if (!taskFind) throw new NotFound('Task');

        taskFind.date = new Date(task.date);
        taskFind.text = task.text;
        taskFind.completed = task.completed;
        taskFind.users = task.users;

        await this.taskRepository.update(taskFind);
    }
}