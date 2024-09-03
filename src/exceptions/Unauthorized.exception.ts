import { BaseException } from "./BaseException";

export class Unauthorized extends BaseException {

    constructor() {
        super('Unauthorized', 1005);
        Object.setPrototypeOf(this, Unauthorized.prototype);
    }
}