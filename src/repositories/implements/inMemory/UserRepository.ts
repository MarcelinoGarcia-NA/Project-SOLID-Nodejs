
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../IUsersRepository";

export class UsersRepository implements IUsersRepository {
    private users: User[];
    private static INSTANCE: UsersRepository;

    constructor() {
        this.users = [];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }
        return UsersRepository.INSTANCE;
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)!;
        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async list(): Promise<User[]> {
        return this.users;
    }
    async update(id: string, user: User): Promise<User> {
        this.users.map(
            userList => {
                if (userList.id === id) {
                    userList.email = user?.email;
                    userList.name = user?.name;
                    userList.password = user?.password;
                }
            }
        );
        const userUpdate = this.findByEmail(user.email)!;
        return userUpdate;
    }
}
