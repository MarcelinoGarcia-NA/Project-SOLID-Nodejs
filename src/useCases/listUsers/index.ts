import { UsersRepository } from "../../repositories/implements/inMemory/UserRepository";
import { ListUserController } from "./ListUsersControllers";
import { ListUsersUseCases } from "./ListUsersUseCases";


const userRepository = UsersRepository.getIntance();
const listUsersUseCases = new ListUsersUseCases(userRepository);
const listUserController = new ListUserController(listUsersUseCases);

export { listUserController };