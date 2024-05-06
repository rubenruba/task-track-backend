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
exports.CreateTask = void 0;
const Task_1 = require("../../domain/Task");
const repositories_1 = require("../../repositories");
class CreateTask {
    constructor(taskRepository = repositories_1.taskMongoRepository) {
        this.taskRepository = taskRepository;
    }
    run(id, date, text, users) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskId = yield this.taskRepository.getById(id);
            if (taskId)
                throw new Error('Task already exists');
            const taskToCreate = new Task_1.Task(id, new Date(date), text, false, // When create completed always false
            users);
            yield this.taskRepository.create(taskToCreate);
        });
    }
}
exports.CreateTask = CreateTask;
