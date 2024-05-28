import jwt, { Secret } from "jsonwebtoken";
import { userMongoRepository } from "../../repositories";
import { UserRepository } from "../../repositories/user/user.repository";
import { Mailer } from "../../services/mail/Mailer";

export class ConfirmEmail {

    constructor(
        private readonly userRepository: UserRepository = userMongoRepository,
        private readonly SECRET_KEY: string | undefined = process.env.JWT_TOKEN,
        private readonly EXPIRATION: string | undefined = process.env.TOKEN_EXPIRATION,
    ) { }

    async run(userId: string, verifyToken: string): Promise<string> {
        const user = await this.userRepository.getById(userId);

        if (!user) throw new Error('No existing user');
        if (user.verifyToken !== verifyToken) throw new Error('Verify Token Error');

        await this.userRepository.setActiveAccount(userId);
        await new Mailer(user.email.value).sendWelcome(user.username);

        const token = jwt.sign({ user: user.toFrontDTO() }, this.SECRET_KEY as Secret, {
            expiresIn: this.EXPIRATION
        });

        return token;
    }
}
