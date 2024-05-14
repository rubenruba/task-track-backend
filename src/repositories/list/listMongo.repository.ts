import { Document } from "mongoose";
import { List } from "../../domain/List";
import { ListDTO } from "../../DTO/list.dto";
import { ListModel } from "../../models/list";
import { ListRepository } from "./list.repository";

export class ListMongoRepository implements ListRepository {

    async getById(listId: string): Promise<List | void> {
        try {
            const list = await ListModel.findOne({ id: listId });
            if(list) return this.mongoToList(list);
        } catch (err) {
            throw new Error('Error getting list');
        }
    }
    
    async getByUserId(userId: string): Promise<List[]> {
        const lists = await ListModel.find({ users: userId });
        return this.mongoToLists(lists);
    }

    async create(list: List): Promise<void> {
        try {
            await new ListModel(list.toDTO()).save();
        } catch (err) {
            throw new Error('Error creating list');
        }
    }

    async update(list: List): Promise<void> {
        try {
            await ListModel.updateOne({ id: list.id }, list.toDTO());
        } catch (err) {
            throw new Error('Error updating list');
        }
    }

    async delete(listId: string): Promise<void> {
        try {
            await ListModel.deleteOne({ id: listId });
        } catch (err) {
            throw new Error('Error deleting list');
        }
    }

    private mongoToList(model: ListDTO | ListDTO & Document<any, any, ListDTO>): List {
        const listDTO: ListDTO = {
            id: model.id,
            title: model.title,
            tasks: model.tasks,
            users: model.users,
            color: model.color,
        };
        return List.fromDTO(listDTO);
    }

    private mongoToLists(models: ListDTO[] | ListDTO[] & Document<any, any, ListDTO[]>): List[] {
        return models.map(model => this.mongoToList(model));
    }
}