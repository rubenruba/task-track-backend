"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class Password {
    constructor(raw, hash) {
        this._raw = raw;
        this._hash = hash;
    }
    static fromRaw(raw) {
        this.ensureIsValid(raw);
        const hash = bcryptjs_1.default.hashSync(raw, 10);
        return new Password(raw, hash);
    }
    static fromHash(hash) {
        return new Password(null, hash);
    }
    get hash() {
        return this._hash;
    }
    hasRawPassword() {
        return this._raw !== null;
    }
    isEqual(password) {
        if (!password.hasRawPassword() && !this.hasRawPassword()) {
            throw new Error("Passwords doesn't match");
        }
        if (this.hasRawPassword()) {
            return bcryptjs_1.default.compareSync(this._raw, password.hash);
        }
        return password.isEqual(this);
    }
    static ensureIsValid(value) {
        if (value && value.length === 0) {
            throw new Error('Password needed');
        }
    }
}
exports.Password = Password;
