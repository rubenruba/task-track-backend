import { BaseException } from "./BaseException";

export class InvalidPassword extends BaseException {

    constructor() {
        super('Invalid Password', 1102);
        Object.setPrototypeOf(this, InvalidPassword.prototype);
    }
}