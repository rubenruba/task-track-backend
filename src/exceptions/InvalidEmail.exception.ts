import { BaseException } from "./BaseException";

export class InvalidEmail extends BaseException {

    constructor() {
        super('Invalid Email', 1106);
        Object.setPrototypeOf(this, InvalidEmail.prototype);
    }
}