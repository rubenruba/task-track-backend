import { List } from "../../domain/List";
import { listMongoRepository } from "../../repositories";
import { ListRepository } from "../../repositories/list/list.repository";

export class CreateList {

    constructor(
        private readonly listRepository: ListRepository = listMongoRepository,
    ) { }

    async run(id: string, title: string, tasks: string[], users: string[], color: string): Promise<void> {
        const listId = await this.listRepository.getById(id);
        if (listId) throw new Error('List already exists');

        const newList = new List(
            id,
            title,
            tasks,
            users,
            color,
        );

        await this.listRepository.create(newList);
    }
}
