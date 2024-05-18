import { User } from "../../domain/User";
import { UserEmail } from "../../DTO/user.dto";
import { Email } from "../../VO/Email";

export interface UserRepository {
    getAll(): Promise<User[]>;
    getById(userId: string): Promise<User | void>;
    getByEmail(email: Email): Promise<User | void>;
    getAllEmails(): Promise<UserEmail[]>;
    create(user: User): Promise<void>;
    update(user: User): Promise<void>;
    delete(userId: string): Promise<void>;
    setActiveAccount(userId: string): Promise<void>;
}