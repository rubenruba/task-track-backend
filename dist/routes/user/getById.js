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
exports.getById = void 0;
const userMongo_repository_1 = require("../../repositories/user/userMongo.repository");
function getById(router) {
    router.get('/:userId', (req, res) => __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.userId;
        if (!userId)
            throw new Error('Invalid request params');
        const user = yield new userMongo_repository_1.UserMongoRepository().getById(userId);
        if (!user)
            throw new Error('No user found');
        res.json(user.toFrontDTO());
    }));
}
exports.getById = getById;
