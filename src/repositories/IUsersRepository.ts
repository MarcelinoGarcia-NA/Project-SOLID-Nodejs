import { uuid } from "uuidv4";
import { User } from "../entities/User";

export interface IUsersRepository{
    list():Promise<User[]>;
    findByEmail(email: string):Promise<User>;
    save(user: User):Promise<void>;
    update(id: string, user:User):Promise<User>;
}