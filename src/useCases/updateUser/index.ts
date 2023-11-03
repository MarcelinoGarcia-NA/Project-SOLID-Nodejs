import { UsersRepository } from "../../repositories/implements/inMemory/UserRepository";
import { UpdateUserControllers } from "./UpdateUserControllers";
import { UpdateUserUseCases } from "./updateUserUseCases";


const userRepository = UsersRepository.getInstance();
const updateUserUseCases = new UpdateUserUseCases(userRepository);
const updateUserControllers = new UpdateUserControllers(updateUserUseCases);

export { updateUserControllers }