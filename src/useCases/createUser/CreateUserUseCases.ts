import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
    constructor(private userRepository: IUsersRepository){}

    async execute(data: ICreateUserDTO){
        const userReadyExists = await this.userRepository.findByEmail(data.email);

        if (userReadyExists) {
            throw new Error("User already exists!");
        }

        const user = new User(data);
        await this.userRepository.save(user);
        return user;
    }

}