import { NotFound } from "../../exceptions/NotFound.exception";
import { userMongoRepository } from "../../repositories";
import { UserRepository } from "../../repositories/user/user.repository";
import { Mailer } from "../../services/mail/Mailer";
import { Email } from "../../VO/Email";
import { Password } from "../../VO/Password";

export class ResetPassword {

    constructor(
        private readonly userRepository: UserRepository = userMongoRepository
    ) { }

    async run(email: string): Promise<void> {
        const newEmail = new Email(email);
        const user = await this.userRepository.getByEmail(newEmail);

        if (!user) throw new NotFound('User');
        const randomPassword = Math.random().toString(36).substring(2, 8);
        const newPassword = Password.fromRaw(randomPassword);

        await new Mailer(new Email(email).value).resetPassword(randomPassword);
        user.password = newPassword;
        await this.userRepository.update(user);
    }
}