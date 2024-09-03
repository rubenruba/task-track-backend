import { InvalidEmail } from "../exceptions/InvalidEmail.exception";

export class Email {

    private readonly validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    constructor(
        private _value: string
    ) {
        this.ensureIsValid(_value);
    }

    get value(): string {
        return this._value;
    }

    private ensureIsValid(value: string): void {
        if (!this.validEmailRegex.test(value)) {
            throw new InvalidEmail();
        }
    }
}