import { AuthController } from "../controller";
import { AuthUserService } from "./AuthUserService";


const authUserService = new AuthUserService()

const authUserController = new AuthController()

export { authUserController, authUserService };
