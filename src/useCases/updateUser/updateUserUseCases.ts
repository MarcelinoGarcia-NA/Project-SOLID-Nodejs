import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implements/inMemory/UserRepository"
import { IUpdateUserDTO } from "./IUpdateUserDTO";


export class UpdateUserUseCases {

    constructor(private userRepository: UsersRepository) { }

    async execute(id: string, data: IUpdateUserDTO): Promise<User> {
        const user = new User(data);
        const userUpdate = await this.userRepository.update(id, user);
        return userUpdate;
    }

}