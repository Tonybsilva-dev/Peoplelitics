import { CreateUserController } from "./createUserController";
import { CreateUserService } from "./createUserService";


const createUserService = new CreateUserService();

const createUserController = new CreateUserController(createUserService);

export { createUserController, createUserService };
