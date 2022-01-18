import { Request, Response } from 'express';
import { CreateUserAccessControlListService } from './createUserACLService';

export class CreateUserAccessControlListController {
    constructor(private createPermissionService: CreateUserAccessControlListService) { }

    async store(request: Request, response: Response) {
        const createUserAccessControlListService = new CreateUserAccessControlListService;

        const { idUser } = request.params;

        const { roles, permissions } = request.body;

        const result = await createUserAccessControlListService.execute({ id: idUser, roles, permissions })

        return response.json(result)
    }
}