import { UsersRepository } from "../../repositories/implements/inMemory/UserRepository";
import { CreateUserControllers } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCases";

const userRepository = UsersRepository.getInstance();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserControllers(createUserUseCase);

export { createUserController };