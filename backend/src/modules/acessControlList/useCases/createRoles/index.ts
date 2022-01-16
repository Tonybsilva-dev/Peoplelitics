import { CreateRoleController } from "./createRoleController";
import { CreateRolePermissionsController } from "./createRolePermissionsController";
import { CreateRoleService } from "./createRoleService";
import { CreatePermissionsRoleService } from "./createRolesPermissionsService";

const createRoleService = new CreateRoleService()

const createRoleController = new CreateRoleController(
    createRoleService
)

const createRolePermissionsService = new CreatePermissionsRoleService()

const createRolePermissionsController = new CreateRolePermissionsController(
    createRolePermissionsService
)

export { createRoleController, createRoleService, createRolePermissionsService, createRolePermissionsController };

