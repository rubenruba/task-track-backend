import { nanoid } from "nanoid";
import { User } from "../../domain/User";
import { userMongoRepository } from "../../repositories";
import { UserRepository } from "../../repositories/user/user.repository";
import { Mailer } from "../../services/mail/Mailer";
import { Email } from "../../VO/Email";
import { Password } from "../../VO/Password";

export class CreateUser {

    constructor(
        private readonly userRepository: UserRepository = userMongoRepository,
    ) { }

    async run(username: string, email: string, password: string): Promise<void> {
        const generateId = nanoid();
        const verifyToken = nanoid(32);

        const userSavedId = await this.userRepository.getById(generateId);
        if (userSavedId) throw new Error('User already exists');

        const userToRegister = new User(
            generateId,
            username,
            new Email(email),
            Password.fromRaw(password),
            false, // Admin boolean always false
            verifyToken,
        );

        await this.userRepository.create(userToRegister);

        new Mailer(new Email(email).value).verifyEmail(verifyToken, generateId);
    }
}
