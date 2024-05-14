import { List } from "../../domain/List";

export interface ListRepository {
    getById(listId: string): Promise<List | void>;
    getByUserId(userId: string): Promise<List[]>;
    create(list: List): Promise<void>;
    update(list: List): Promise<void>;
    delete(listId: string): Promise<void>; 
}