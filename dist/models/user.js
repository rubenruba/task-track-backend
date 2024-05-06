"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean }
}, {
    versionKey: false
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
exports.UserModel.syncIndexes();
