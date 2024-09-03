import bcrypt from 'bcryptjs';
import { PasswordNeeded } from '../exceptions/PasswordNeeded.exception';
import { PasswordNotMatch } from '../exceptions/PasswordNotMatch.exception';

export class Password {

    private _hash: string;
    private _raw: string | null;

    private constructor(
        raw: string | null,
        hash: string,
    ) {
        this._raw = raw;
        this._hash = hash;
    }

    public static fromRaw(raw: string): Password {
        this.ensureIsValid(raw)
        const hash = bcrypt.hashSync(raw, 10);

        return new Password(raw, hash);
    }

    public static fromHash(hash: string): Password {
        return new Password(null, hash);
    }

    public get hash(): string {
        return this._hash;
    }

    public hasRawPassword(): boolean {
        return this._raw !== null;
    }

    public isEqual(password: Password): boolean {
        if (!password.hasRawPassword() && !this.hasRawPassword()) {
            throw new PasswordNotMatch();
        }

        if (this.hasRawPassword()) {
            return bcrypt.compareSync(this._raw!, password.hash);
        }

        return password.isEqual(this);
    }

    private static ensureIsValid(value: string): void {
        if (value && value.length === 0) {
            throw new PasswordNeeded();
        }
    }
}