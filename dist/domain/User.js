"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Email_1 = require("../VO/Email");
const Password_1 = require("../VO/Password");
class User {
    constructor(_id, _username, _email, _password, _admin) {
        this._id = _id;
        this._username = _username;
        this._email = _email;
        this._password = _password;
        this._admin = _admin;
    }
    get id() {
        return this._id;
    }
    get email() {
        return this._email;
    }
    get username() {
        return this._username;
    }
    get password() {
        return this._password;
    }
    // Setter to update the user in action
    set username(value) {
        this._username = value;
    }
    static fromDTO(dto) {
        return new User(dto.id, dto.username, new Email_1.Email(dto.email), Password_1.Password.fromHash(dto.password), dto.admin);
    }
    toDTO() {
        return {
            id: this._id,
            username: this._username,
            email: this._email.value,
            password: this._password.hash,
            admin: this._admin,
        };
    }
    toFrontDTO() {
        return {
            id: this._id,
            username: this._username,
            email: this._email.value,
            admin: this._admin,
        };
    }
}
exports.User = User;
