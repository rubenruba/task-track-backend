import { EntityType } from "../middlewares/errorHandler";
import { BaseException } from "./BaseException";

export class NotFound extends BaseException {

    constructor(entity: EntityType) {
        let errorCode;

        if (entity === 'User') errorCode = 1100;
        if (entity === 'Task') errorCode = 1200
        if (entity === 'List') errorCode = 1300;

        super(`${entity} Not Found`, errorCode);
        Object.setPrototypeOf(this, NotFound.prototype);
    }
}