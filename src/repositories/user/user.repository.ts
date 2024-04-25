import { User } from "../../domain/User";

export interface UserRepository {
    getAll(): Promise<User[]>;
    getById(userId: string): Promise<User | void>;
    getAllEmails(): Promise<string[]>;
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(userId: string): Promise<void>;
}