import { CreatePermissionController } from "./createPermissionsController";
import { CreatePermissionService } from "./createPermissionService";




const createPermissionService = new CreatePermissionService()

const createPermissionController = new CreatePermissionController(
    createPermissionService
)

export { createPermissionController, createPermissionService };
