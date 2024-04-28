import { UserFrontDTO } from "../../DTO/user.dto";
import { userMongoRepository } from "../../repositories";
import { UserRepository } from "../../repositories/user/user.repository";

export class UpdateUser {

    constructor(
        private readonly userRepository: UserRepository = userMongoRepository
    ) { }

    async run(user: UserFrontDTO): Promise<void> {
        const userFind = await this.userRepository.getById(user.id);
        if(!userFind) throw new Error('User not found');

        userFind.username = user.username;
        await this.userRepository.update(userFind);
    }
}