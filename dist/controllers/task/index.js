"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskController = exports.createTaskController = void 0;
const createTask_cotroller_1 = require("./createTask.cotroller");
const updateTask_controller_1 = require("./updateTask.controller");
exports.createTaskController = new createTask_cotroller_1.CreateTaskController();
exports.updateTaskController = new updateTask_controller_1.UpdateTaskController();
