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
exports.UserMongoRepository = void 0;
const User_1 = require("../../domain/User");
const user_1 = require("../../models/user");
class UserMongoRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.UserModel.find({});
            return this.mongoToUsers(users);
        });
    }
    getById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.UserModel.findOne({ id: userId });
                if (user)
                    return this.mongoToUser(user);
            }
            catch (err) {
                throw new Error('Error getting user');
            }
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield user_1.UserModel.findOne({ email: email.value });
                if (user)
                    return this.mongoToUser(user);
            }
            catch (err) {
                throw new Error('Error getting user');
            }
        });
    }
    getAllEmails() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_1.UserModel.find({});
            const emails = this.mongoToUsers(users).map(user => user.email);
            return emails;
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield new user_1.UserModel(user.toDTO()).save();
            }
            catch (err) {
                throw new Error('Error creating user');
            }
        });
    }
    update(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_1.UserModel.updateOne({ id: user.id }, user.toDTO());
            }
            catch (err) {
                throw new Error('Error updating user');
            }
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_1.UserModel.deleteOne({ id: userId });
            }
            catch (err) {
                throw new Error('Error deleting user');
            }
        });
    }
    mongoToUser(model) {
        const userDTO = {
            id: model.id,
            email: model.email,
            username: model.username,
            password: model.password,
            admin: model.admin
        };
        return User_1.User.fromDTO(userDTO);
    }
    mongoToUsers(models) {
        return models.map(model => this.mongoToUser(model));
    }
}
exports.UserMongoRepository = UserMongoRepository;
