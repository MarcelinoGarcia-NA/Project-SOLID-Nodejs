import { User } from "../../../entities/User";
import { IUserRepository } from "../../IUsersRepository";

export class UsersRepository implements IUserRepository {
    private users: User[] = [];
    private static INSTANCE: UsersRepository;

    constructor() {
        this.users = [];
    }

    public static getIntance(): UsersRepository {
        if(!UsersRepository.INSTANCE){
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    }
    async save(user: User): Promise<void> {
        this.users.push(user);
    }
    async list(): Promise<User[]>{
        return this.users;
    }
} 