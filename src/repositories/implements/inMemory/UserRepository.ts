import { User } from "../../../entities/User";
import { IUserRepository } from "../../IUsersRepository";

export class UserRepository implements IUserRepository {
    private users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
} 