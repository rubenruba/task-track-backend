export class BaseException extends Error {

    constructor(
        protected _message: string,
        protected _errorCode: number | undefined,
    ) {
        super();
        Object.setPrototypeOf(this, BaseException.prototype);
    }

    get message(): string {
        return this._message;
    }

    get errorCode(): number | undefined {
        return this._errorCode;
    }
}