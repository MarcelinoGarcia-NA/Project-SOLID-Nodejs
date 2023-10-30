import { User } from "../entities/User";

export interface IUserRepository{
    save(user: User):Promise<void>;
    list():Promise<User[]>;
}