"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(_value) {
        this._value = _value;
        this.validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.ensureIsValid(_value);
    }
    get value() {
        return this._value;
    }
    ensureIsValid(value) {
        if (!this.validEmailRegex.test(value)) {
            throw new Error('Invalid email');
        }
    }
}
exports.Email = Email;
