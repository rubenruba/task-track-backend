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
exports.CreateUser = void 0;
const nanoid_1 = require("nanoid");
const User_1 = require("../../domain/User");
const repositories_1 = require("../../repositories");
const Email_1 = require("../../VO/Email");
const Password_1 = require("../../VO/Password");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class CreateUser {
    constructor(userRepository = repositories_1.userMongoRepository, SECRET_KEY = process.env.JWT_TOKEN, EXPIRATION = process.env.TOKEN_EXPIRATION) {
        this.userRepository = userRepository;
        this.SECRET_KEY = SECRET_KEY;
        this.EXPIRATION = EXPIRATION;
    }
    run(username, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const generateId = (0, nanoid_1.nanoid)();
            const userSavedId = yield this.userRepository.getById(generateId);
            if (userSavedId)
                throw new Error('User already exists');
            const userToRegister = new User_1.User(generateId, username, new Email_1.Email(email), Password_1.Password.fromRaw(password), false // Admin boolean always false
            );
            yield this.userRepository.create(userToRegister);
            // TO DO - Send welcome mail and UserToken
            const token = jsonwebtoken_1.default.sign({ user: userToRegister.toFrontDTO() }, this.SECRET_KEY, {
                expiresIn: this.EXPIRATION
            });
            return { user: userToRegister.toFrontDTO(), token };
        });
    }
}
exports.CreateUser = CreateUser;
