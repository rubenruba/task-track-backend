import { Document } from "mongoose";
import { Task } from "../../domain/Task";
import { TaskDTO } from "../../DTO/task.dto";
import { TaskModel } from "../../models/task";
import { TaskRepository } from "./task.repository";

export class TaskMongoRepository implements TaskRepository {

    async getById(taskId: string): Promise<Task | void> {
        try {
            const task = await TaskModel.findOne({ id: taskId });
            if(task) return this.mongoToTask(task);
        } catch (err) {
            throw new Error('Error getting task');
        }
    }
    
    async getByUserId(userId: string): Promise<Task[]> {
        const tasks = await TaskModel.find({ users: userId });
        return this.mongoToTasks(tasks);
    }

    async getByUserIdAndDate(userId: string, date: string): Promise<Task[]> {
        const tasks = await TaskModel.find({ users: userId, date: { $regex: date } });
        return this.mongoToTasks(tasks);
    }

    async create(task: Task): Promise<void> {
        try {
            await new TaskModel(task.toDTO()).save();
        } catch (err) {
            throw new Error('Error creating task');
        }
    }

    async update(task: Task): Promise<void> {
        try {
            await TaskModel.updateOne({ id: task.id }, task.toDTO());
        } catch (err) {
            throw new Error('Error updating task');
        }
    }

    async delete(taskId: string): Promise<void> {
        try {
            await TaskModel.deleteOne({ id: taskId });
        } catch (err) {
            throw new Error('Error deleting task');
        }
    }

    private mongoToTask(model: TaskDTO | TaskDTO & Document<any, any, TaskDTO>): Task {
        const taskDTO: TaskDTO = {
            id: model.id,
            date: model.date,
            text: model.text,
            completed: model.completed,
            users: model.users
        };
        return Task.fromDTO(taskDTO);
    }

    private mongoToTasks(models: TaskDTO[] | TaskDTO[] & Document<any, any, TaskDTO[]>): Task[] {
        return models.map(model => this.mongoToTask(model));
    }
}