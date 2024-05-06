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
exports.UpdateTaskController = void 0;
const UpdateTask_action_1 = require("../../actions/task/UpdateTask.action");
class UpdateTaskController {
    constructor(updateTask = new UpdateTask_action_1.UpdateTask()) {
        this.updateTask = updateTask;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { task } = req.body;
            if (!task)
                throw new Error('Invalid request params');
            yield this.updateTask.run(task);
            res.json();
        });
    }
}
exports.UpdateTaskController = UpdateTaskController;
