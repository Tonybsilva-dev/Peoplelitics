import { FindManyUserController } from "./findManyUserController";
import { FindManyUserService } from "./findManyUserService";



const findUsersService = new FindManyUserService()

const findUsersController = new FindManyUserController(
    new FindManyUserService
)

export { findUsersController, findUsersService };
