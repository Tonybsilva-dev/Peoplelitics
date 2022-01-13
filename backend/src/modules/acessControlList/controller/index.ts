import { Request, Response } from 'express';
import { CreatePermissionService } from '../../acessControlList/useCases/createPermissions.ts/createPermissionService';
import { CreateRoleService } from '../../acessControlList/useCases/createRoles/createRoleService';
import { CreatePermissionsRoleService } from '../useCases/createRoles/createRolesPermissionsService';
import { CreateUserAccessControlListService } from '../useCases/createUserAccessControlList/createUserACLService';



export class ACLController{

    async createUserACL(request: Request, response: Response) {
        const createUserAccessControlListService = new CreateUserAccessControlListService;
    
        const { id_user } = request.params;

        const { roles, permissions} = request.body;

        const result = await createUserAccessControlListService.execute({ id: id_user, roles ,permissions })

        return response.json(result)
    }

    async createRole(request: Request, response: Response) {
        const createRoleService = new CreateRoleService;

        const { name, description } = request.body;

        const result = await createRoleService.execute({ name, description })

        return response.json(result)
    }

    async createPermission(request: Request, response: Response) {
        const createPermissionService = new CreatePermissionService;

        const { name, description } = request.body;

        const result = await createPermissionService.execute({ name, description })

        return response.json(result)
    }

    async createPermissionsRole(request: Request, response: Response) {
        const createPermissionsRole = new CreatePermissionsRoleService

        const { id_role } = request.params;

        const { permissions} = request.body;

        const result = await createPermissionsRole.execute({ idRole: id_role, permissions })

        return response.json(result)
    }
}