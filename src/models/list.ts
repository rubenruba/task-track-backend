import { model, Schema } from "mongoose";
import { ListDTO, TaskListDTO } from "../DTO/list.dto";

const taskListSchema = new Schema<TaskListDTO>({
    text: { type: String, required: true },
    completed: { type: Boolean },
}, {
    versionKey: false,
    _id: false
});

const listSchema = new Schema<ListDTO>({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    tasks: { type: [taskListSchema] },
    users: { type: [String], required: true },
}, {
    versionKey: false
});

export const ListModel = model<ListDTO>('List', listSchema);
ListModel.syncIndexes();