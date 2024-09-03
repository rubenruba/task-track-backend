import { BaseException } from "./BaseException";

export class PasswordNeeded extends BaseException {

    constructor() {
        super('Password Needed', 1101);
        Object.setPrototypeOf(this, PasswordNeeded.prototype);
    }
}