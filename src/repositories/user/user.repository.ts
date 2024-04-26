import { User } from "../../domain/User";
import { Email } from "../../VO/Email";

export interface UserRepository {
    getAll(): Promise<User[]>;
    getById(userId: string): Promise<User | void>;
    getByEmail(email: Email): Promise<User | void>;
    getAllEmails(): Promise<Email[]>;
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(userId: string): Promise<void>;
}