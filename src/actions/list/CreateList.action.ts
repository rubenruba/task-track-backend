import { List } from "../../domain/List";
import { TaskListDTO } from "../../DTO/list.dto";
import { AlreadyExists } from "../../exceptions/AlreadyExists.exception";
import { listMongoRepository } from "../../repositories";
import { ListRepository } from "../../repositories/list/list.repository";

export class CreateList {

    constructor(
        private readonly listRepository: ListRepository = listMongoRepository,
    ) { }

    async run(id: string, title: string, tasks: TaskListDTO[], users: string[]): Promise<void> {
        const listId = await this.listRepository.getById(id);
        if (listId) throw new AlreadyExists('List');

        const newList = new List(
            id,
            title,
            tasks,
            users,
        );

        await this.listRepository.create(newList);
    }
}
