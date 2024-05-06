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
exports.UpdateTask = void 0;
const repositories_1 = require("../../repositories");
class UpdateTask {
    constructor(taskRepository = repositories_1.taskMongoRepository) {
        this.taskRepository = taskRepository;
    }
    run(task) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskFind = yield this.taskRepository.getById(task.id);
            if (!taskFind)
                throw new Error('User not found');
            taskFind.date = new Date(task.date);
            taskFind.text = task.text;
            taskFind.completed = task.completed;
            taskFind.users = task.users;
            yield this.taskRepository.update(taskFind);
        });
    }
}
exports.UpdateTask = UpdateTask;
