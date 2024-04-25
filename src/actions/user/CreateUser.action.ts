import { nanoid } from "nanoid";
import { User } from "../../domain/User";
import { UserToken } from "../../DTO/user.dto";
import { userMongoRepository } from "../../repositories";
import { UserRepository } from "../../repositories/user/user.repository";
import { Email } from "../../VO/Email";
import { Password } from "../../VO/Password";
import jwt, { Secret } from "jsonwebtoken";

export class CreateUser {

    constructor(
        private readonly userRepository: UserRepository = userMongoRepository,
        private readonly SECRET_KEY: string | undefined = process.env.JWT_TOKEN,
        private readonly EXPIRATION: string | undefined = process.env.TOKEN_EXPIRATION
    ) { }

    async run(username: string, email: string, password: string): Promise<UserToken> {
        const generateId = nanoid();

        const userSavedId = await this.userRepository.getById(generateId);
        if (userSavedId) throw new Error('User already exists');

        const userToRegister = new User(
            generateId,
            username,
            new Email(email),
            Password.fromRaw(password),
            false // Admin boolean always false
        );

        await this.userRepository.create(userToRegister);

        // TO DO - Send welcome mail and UserToken
        
        const token = jwt.sign({ user: userToRegister.toFrontDTO() }, this.SECRET_KEY as Secret, {
            expiresIn: this.EXPIRATION
        });

        return { user: userToRegister.toFrontDTO(), token };
    }
}
