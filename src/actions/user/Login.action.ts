import jwt, { Secret } from "jsonwebtoken";
import { InvalidPassword } from "../../exceptions/InvalidPassword.excetion";
import { NotFound } from "../../exceptions/NotFound.exception";
import { PasswordNeeded } from "../../exceptions/PasswordNeeded.exception";
import { userMongoRepository } from "../../repositories";
import { UserRepository } from "../../repositories/user/user.repository";
import { Email } from "../../VO/Email";
import { Password } from "../../VO/Password";

export class Login {

    constructor(
        private readonly userRepository: UserRepository = userMongoRepository,
        private readonly SECRET_KEY: string | undefined = process.env.JWT_TOKEN,
        private readonly EXPIRATION: string | undefined = process.env.TOKEN_EXPIRATION
    ) { }

    async run(emailRaw: string, passwordRaw: string): Promise<string> {
        const email = new Email(emailRaw);
        const password = Password.fromRaw(passwordRaw);
        const user = await this.userRepository.getByEmail(email);

        if (!user) throw new NotFound('User');
        if (!password) throw new PasswordNeeded();
        if (!user.password.isEqual(password)) throw new InvalidPassword();

        const token = jwt.sign({ user: user.toFrontDTO() }, this.SECRET_KEY as Secret, {
            expiresIn: this.EXPIRATION
        });

        return token;
    }
}
