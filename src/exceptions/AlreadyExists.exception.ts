import { EntityType } from "../middlewares/errorHandler";
import { BaseException } from "./BaseException";

export class AlreadyExists extends BaseException {

    constructor(entity: EntityType) {
        let errorCode;

        if (entity === 'User') errorCode = 1103;
        if (entity === 'Task') errorCode = 1201
        if (entity === 'List') errorCode = 1301;

        super(`${entity} Already Exists`, errorCode);
        Object.setPrototypeOf(this, AlreadyExists.prototype);
    }
}