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
exports.getAll = void 0;
const userMongo_repository_1 = require("../../repositories/user/userMongo.repository");
const authMiddleware_1 = require("../../middlewares/authMiddleware");
function getAll(router) {
    router.get('/all', authMiddleware_1.authMiddleware, (req, res) => __awaiter(this, void 0, void 0, function* () {
        const users = yield new userMongo_repository_1.UserMongoRepository().getAll();
        res.json(users.map(user => user.toFrontDTO()));
    }));
}
exports.getAll = getAll;
