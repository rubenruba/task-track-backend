"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authMiddleware(req, res, next) {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
        const SECRET_KEY = process.env.JWT_TOKEN;
        if (!token)
            throw new Error('No permissions');
        const decodedUser = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.body.decodedUser = decodedUser.user;
        next();
    }
    catch (err) {
        res.status(401).send('Unauthorized');
    }
}
exports.authMiddleware = authMiddleware;
