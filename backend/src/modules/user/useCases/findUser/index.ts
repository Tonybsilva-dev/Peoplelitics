import { FindUserController } from "./findUserController";
import { FindUserService } from "./findUserService";



const findUserService = new FindUserService()

const findUserController = new FindUserController(
    new FindUserService
)

export { findUserController, findUserService };
