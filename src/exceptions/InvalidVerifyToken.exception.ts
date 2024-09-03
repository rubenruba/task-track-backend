import { BaseException } from "./BaseException";

export class InvalidVerifyToken extends BaseException {

    constructor() {
        super('Invalid Verify Token', 1104);
        Object.setPrototypeOf(this, InvalidVerifyToken.prototype);
    }
}