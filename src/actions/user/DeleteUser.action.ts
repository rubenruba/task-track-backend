import { NotFound } from "../../exceptions/NotFound.exception";
import { userMongoRepository } from "../../repositories";
import { UserRepository } from "../../repositories/user/user.repository";

export class DeleteUser {

    constructor(
        private readonly userRepository: UserRepository = userMongoRepository,
    ) { }

    async run(userId: string): Promise<void> {
        const userRemoved = await this.userRepository.getById(userId);
        if (!userRemoved) throw new NotFound('User');
        await this.userRepository.delete(userId);
    }
}