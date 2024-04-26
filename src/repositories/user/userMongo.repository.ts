import { Document } from "mongoose";
import { User } from "../../domain/User";
import { UserDTO } from "../../DTO/user.dto";
import { UserModel } from "../../models/user";
import { UserRepository } from "./user.repository";
import { Email } from "../../VO/Email";

export class UserMongoRepository implements UserRepository {
    
    async getAll(): Promise<User[]> {
        const users = await UserModel.find({});
        return this.mongoToUsers(users);
    }

    async getById(userId: string): Promise<User | void> {
        try {
            const user = await UserModel.findOne({ id: userId });
            if(user) return this.mongoToUser(user);
        } catch (err) {
            throw new Error('Error getting user');
        }
    }

    async getByEmail(email: Email): Promise<void | User> {
        try {
            const user = await UserModel.findOne({ email: email.value });
            if(user) return this.mongoToUser(user);
        } catch (err) {
            throw new Error('Error getting user');
        }
    }
    
    async getAllEmails(): Promise<Email[]> {
        const users = await UserModel.find({});
        const emails = this.mongoToUsers(users).map(user => user.email);
        return emails;
    }

    async create(user: User): Promise<void> {
        try {
            await new UserModel(user.toDTO()).save();
        } catch (err) {
            throw new Error('Error creating user');
        }
    }

    async update(user: User): Promise<void> {
        try {
            await UserModel.updateOne({ id: user.id }, user.toDTO());
        } catch (err) {
            throw new Error('Error updating user');
        }
    }
    
    async delete(userId: string): Promise<void> {
        try {
            await UserModel.deleteOne({ id: userId });
        } catch (err) {
            throw new Error('Error deleting user');
        }
    }    

    private mongoToUser(model: UserDTO | UserDTO & Document<any, any, UserDTO>): User {
        const userDTO: UserDTO = {
            id: model.id,
            email: model.email,
            username: model.username,
            password: model.password,
            admin: model.admin
        };
        return User.fromDTO(userDTO);
    }

    private mongoToUsers(models: UserDTO[] | UserDTO[] & Document<any, any, UserDTO[]>): User[] {
        return models.map(model => this.mongoToUser(model));
    }
}