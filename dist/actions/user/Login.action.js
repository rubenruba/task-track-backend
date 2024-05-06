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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const repositories_1 = require("../../repositories");
const Email_1 = require("../../VO/Email");
const Password_1 = require("../../VO/Password");
class Login {
    constructor(userRepository = repositories_1.userMongoRepository, SECRET_KEY = process.env.JWT_TOKEN, EXPIRATION = process.env.TOKEN_EXPIRATION) {
        this.userRepository = userRepository;
        this.SECRET_KEY = SECRET_KEY;
        this.EXPIRATION = EXPIRATION;
    }
    run(emailRaw, passwordRaw) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = new Email_1.Email(emailRaw);
            const password = Password_1.Password.fromRaw(passwordRaw);
            const user = yield this.userRepository.getByEmail(email);
            if (!user)
                throw new Error('User not found');
            if (!password)
                throw new Error('Password needed');
            if (!user.password.isEqual(password))
                throw new Error('Incorrect password');
            const token = jsonwebtoken_1.default.sign({ user: user.toFrontDTO() }, this.SECRET_KEY, {
                expiresIn: this.EXPIRATION
            });
            return { user: user.toFrontDTO(), token };
        });
    }
}
exports.Login = Login;
