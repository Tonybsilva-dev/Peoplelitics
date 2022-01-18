import { UpdateUserPasswordController } from "./updateUserPasswordController";
import { UpdateUserPasswordUserService } from "./updateUserPasswordUserService";



const updateUserPasswordUserService = new UpdateUserPasswordUserService();

const updateUserPasswordController = new UpdateUserPasswordController(updateUserPasswordUserService);

export { updateUserPasswordUserService, updateUserPasswordController }