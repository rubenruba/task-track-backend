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
exports.CreateUserController = void 0;
const CreateUser_action_1 = require("../../actions/user/CreateUser.action");
class CreateUserController {
    constructor(createUser = new CreateUser_action_1.CreateUser()) {
        this.createUser = createUser;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = req.body;
            if (!username || !email || !password)
                throw new Error('Invalid request params');
            const userJWT = yield this.createUser.run(username, email, password);
            res.json(userJWT);
        });
    }
}
exports.CreateUserController = CreateUserController;
