"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskMongoRepository = void 0;
const Task_1 = require("../../domain/Task");
const task_1 = require("../../models/task");
class TaskMongoRepository {
    getById(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const task = yield task_1.TaskModel.findOne({ id: taskId });
                if (task)
                    return this.mongoToTask(task);
            }
            catch (err) {
                throw new Error('Error getting task');
            }
        });
    }
    getByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield task_1.TaskModel.find({ users: userId });
            return this.mongoToTasks(tasks);
        });
    }
    getByUserIdAndDate(userId, date) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield task_1.TaskModel.find({ users: userId, date: { $regex: date } });
            return this.mongoToTasks(tasks);
        });
    }
    create(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new task_1.TaskModel(task.toDTO()).save();
            }
            catch (err) {
                throw new Error('Error creating task');
            }
        });
    }
    update(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield task_1.TaskModel.updateOne({ id: task.id }, task.toDTO());
            }
            catch (err) {
                throw new Error('Error updating task');
            }
        });
    }
    delete(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield task_1.TaskModel.deleteOne({ id: taskId });
            }
            catch (err) {
                throw new Error('Error deleting task');
            }
        });
    }
    mongoToTask(model) {
        const taskDTO = {
            id: model.id,
            date: model.date,
            text: model.text,
            completed: model.completed,
            users: model.users
        };
        return Task_1.Task.fromDTO(taskDTO);
    }
    mongoToTasks(models) {
        return models.map(model => this.mongoToTask(model));
    }
}
exports.TaskMongoRepository = TaskMongoRepository;
