import { BaseException } from "./BaseException";

export class InvalidParams extends BaseException {

    constructor() {
        super('Invalid Request Params', 1000);
        Object.setPrototypeOf(this, InvalidParams.prototype);
    }
}