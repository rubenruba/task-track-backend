import { Task } from "../../domain/Task";
import { AlreadyExists } from "../../exceptions/AlreadyExists.exception";
import { taskMongoRepository } from "../../repositories";
import { TaskRepository } from "../../repositories/task/task.repository";

export class CreateTask {

    constructor(
        private readonly taskRepository: TaskRepository = taskMongoRepository,
    ) { }

    async run(id: string, date: string, text: string, users: string[]): Promise<void> {
        const taskId = await this.taskRepository.getById(id);
        if (taskId) throw new AlreadyExists('Task');

        const taskToCreate = new Task(
            id,
            new Date(date),
            text,
            false, // When create completed always false
            users
        );

        await this.taskRepository.create(taskToCreate);
    }
}
