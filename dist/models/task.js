"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    date: { type: String, required: true },
    text: { type: String, required: true },
    users: { type: [String], required: true },
    completed: { type: Boolean }
}, {
    versionKey: false
});
exports.TaskModel = (0, mongoose_1.model)('Task', taskSchema);
exports.TaskModel.syncIndexes();
