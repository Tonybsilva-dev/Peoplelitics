import { FindManyUserController } from "./findManyUserController";
import { FindManyUserService } from "./findManyUserService";



const findManyUserService = new FindManyUserService()

const findManyUserController = new FindManyUserController(
    new FindManyUserService
)

export { findManyUserController, findManyUserService };
