import { ListDTO } from "../../DTO/list.dto";
import { listMongoRepository } from "../../repositories";
import { ListRepository } from "../../repositories/list/list.repository";

export class UpdateList {

    constructor(
        private readonly listRepository: ListRepository = listMongoRepository
    ) { }

    async run(list: ListDTO): Promise<void> {
        const listFind = await this.listRepository.getById(list.id);
        if(!listFind) throw new Error('List not found');

        listFind.title = list.title;
        listFind.users = list.users;
        listFind.tasks = list.tasks;
        
        await this.listRepository.update(listFind);
    }
}