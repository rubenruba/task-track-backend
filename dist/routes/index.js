"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("./user/user.router");
const task_router_1 = require("./task/task.router");
const indexRouter = (0, express_1.Router)();
indexRouter.use('/user', user_router_1.userRouter);
indexRouter.use('/task', task_router_1.taskRouter);
exports.default = indexRouter;
