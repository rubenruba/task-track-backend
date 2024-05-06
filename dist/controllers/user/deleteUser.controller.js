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
exports.DeleteController = void 0;
const DeleteUser_action_1 = require("../../actions/user/DeleteUser.action");
class DeleteController {
    constructor(deleteUser = new DeleteUser_action_1.DeleteUser()) {
        this.deleteUser = deleteUser;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            if (!userId)
                throw new Error('Invalid request params');
            yield this.deleteUser.run(userId);
            res.json();
        });
    }
}
exports.DeleteController = DeleteController;
