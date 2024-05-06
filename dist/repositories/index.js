"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskMongoRepository = exports.userMongoRepository = void 0;
const taskMongo_repository_1 = require("./task/taskMongo.repository");
const userMongo_repository_1 = require("./user/userMongo.repository");
exports.userMongoRepository = new userMongo_repository_1.UserMongoRepository();
exports.taskMongoRepository = new taskMongo_repository_1.TaskMongoRepository();
