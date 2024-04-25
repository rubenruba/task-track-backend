import { Task } from "../../domain/Task";

export interface TaskRepository {
    getById(taskId: string): Promise<Task | void>;
    getByDate(date: number): Promise<Task[]>;
    create(task: Task): Promise<void>;
    update(task: Task): Promise<void>;
    delete(taskId: string): Promise<void>; 
}