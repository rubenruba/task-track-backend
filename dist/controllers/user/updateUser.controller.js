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
exports.UpdateUserController = void 0;
const UpdateUser_action_1 = require("../../actions/user/UpdateUser.action");
class UpdateUserController {
    constructor(updateUser = new UpdateUser_action_1.UpdateUser()) {
        this.updateUser = updateUser;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { user } = req.body;
            if (!user)
                throw new Error('Invalid request params');
            yield this.updateUser.run(user);
            res.json();
        });
    }
}
exports.UpdateUserController = UpdateUserController;
