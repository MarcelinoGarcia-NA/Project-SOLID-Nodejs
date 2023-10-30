import { User } from "../../entities/User";
import { UsersRepository } from "../../repositories/implements/inMemory/UserRepository";

export class ListUsersUseCases{

    constructor(private userRepository: UsersRepository){}
    
    async execute(): Promise<User[]>{
        const users = await this.userRepository.list();
        return users;
    }
}