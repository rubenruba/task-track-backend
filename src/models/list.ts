import { model, Schema } from "mongoose";
import { ListDTO } from "../DTO/list.dto";

const listSchema = new Schema<ListDTO>({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    tasks: { type: [String], required: true },
    users: { type: [String], required: true },
    color: { type: String }
}, {
    versionKey: false
});

export const ListModel = model<ListDTO>('List', listSchema);
ListModel.syncIndexes();