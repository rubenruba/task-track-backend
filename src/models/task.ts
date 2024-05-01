import { model, Schema } from "mongoose";
import { TaskDTO } from "../DTO/task.dto";

const taskSchema = new Schema<TaskDTO>({
    id: { type: String, required: true, unique: true },
    date: { type: String, required: true },
    text: { type: String, required: true },
    users: { type: [String], required: true },
    completed: { type: Boolean }
}, {
    _id: false,
    versionKey: false
});

export const TaskModel = model<TaskDTO>('Task', taskSchema);
TaskModel.syncIndexes();