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
exports.DeleteUser = void 0;
const repositories_1 = require("../../repositories");
class DeleteUser {
    constructor(userRepository = repositories_1.userMongoRepository) {
        this.userRepository = userRepository;
    }
    run(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRemoved = yield this.userRepository.getById(userId);
            if (!userRemoved)
                throw new Error('No user found');
            yield this.userRepository.delete(userId);
        });
    }
}
exports.DeleteUser = DeleteUser;
