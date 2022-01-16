import { CreateRoleController } from "./createRoleController";
import { CreateRoleService } from "./createRoleService";

const createRoleService = new CreateRoleService()

const createRoleController = new CreateRoleController(
    createRoleService
)

export { createRoleController, createRoleService };
