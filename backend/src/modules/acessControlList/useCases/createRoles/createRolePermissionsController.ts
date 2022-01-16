import { Request, Response } from 'express';
import { CreatePermissionsRoleService } from './createRolesPermissionsService';




export class CreateRolePermissionsController {
    constructor(private createPermissionsRoleService: CreatePermissionsRoleService) { }

    async store(request: Request, response: Response) {

        const { idRole } = request.params;
        const { permissions } = request.body

        const createPermissionsRoleService = new CreatePermissionsRoleService;

        const result = await createPermissionsRoleService.execute({ idRole, permissions })

        return response.json(result)
    }
}
