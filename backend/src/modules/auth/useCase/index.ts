
import { AuthUserController } from "./AuthUserController";
import { AuthUserService } from "./AuthUserService";


const authUserService = new AuthUserService()

const authUserController = new AuthUserController(
    authUserService
)

export { authUserController, authUserService };
