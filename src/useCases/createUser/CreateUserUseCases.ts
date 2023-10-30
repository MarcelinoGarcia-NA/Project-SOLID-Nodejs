import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./ICrateUserDTO";

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository){}

    async execute(data: ICreateUserDTO){
        const user = new User(data);
        await this.userRepository.save(user);
        return user;
    }

}