import { Request, Response } from 'express';
import { CreatePermissionService } from '../../acessControlList/useCases/createPermissions.ts/createPermissionService';
import { CreateRoleService } from '../../acessControlList/useCases/createRoles/createRoleService';
import { CreateRolesPermissionsService } from '../../acessControlList/useCases/createRoles/createRolesPermissionsService';
import { CreateUserAccessControlListService } from '../../acessControlList/useCases/createUserAccessControlList/createUserAccessControlListService';
import { AuthenticatedUserService } from '../useCases/auth/service/AuthenticatedUserService';
import { CreateUserService } from '../useCases/createUser/services/createUserService';
import { FindUserService } from '../useCases/findUser/service/findUserService';


export class UserController{

    async create(request: Request, response: Response){

        const { name, email, password } = request.body

        const createUserService = new CreateUserService;

        const result = await createUserService.execute({ name, email, password })

        return response.json(result)
    }

    async index(request: Request, response: Response){

        const { name } = request.body

        const findUserservice = new FindUserService;

        const result = await findUserservice.execute({ name })

        return response.json(result)
    }

    async auth(request: Request, response: Response){

        const { email, password } = request.body

        const authenticatedUserService = new AuthenticatedUserService;

        const result = await authenticatedUserService.execute({ email, password })

        return response.json(result)
    }

    async createUserAccessControlList(request: Request, response: Response) {
        const createUserAccessControlListService = new CreateUserAccessControlListService;
    
        const { id_user } = request.params;

        const { roles, permissions} = request.body;

        const result = await createUserAccessControlListService.execute({id: id_user, roles ,permissions})

        return response.json(result)
    }

    async createRole(request: Request, response: Response) {
        const createRoleService = new CreateRoleService;

        const { name, description } = request.body;

        const result = await createRoleService.execute({name, description})

        return response.json(result)
    }

    async createPermission(request: Request, response: Response) {
        const createPermissionService = new CreatePermissionService;

        const { name, description } = request.body;

        const result = await createPermissionService.execute({name, description})

        return response.json(result)
    }

    async createRolesPermissions(request: Request, response: Response) {
        const createRolesPermissions = new CreateRolesPermissionsService;

        const { id_role } = request.params;

        const { permissions} = request.body;

        const result = await createRolesPermissions.execute({idRole: id_role, permissions })

        return response.json(result)
    }
}