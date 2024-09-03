import { BaseException } from "./BaseException";

export class PasswordNotMatch extends BaseException {

    constructor() {
        super("Password doesn't Match", 1105);
        Object.setPrototypeOf(this, PasswordNotMatch.prototype);
    }
}