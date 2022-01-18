import { Request, Response } from 'express';
import { CreatePermissionService } from './createPermissionService';



export class CreatePermissionController {
    constructor(private createPermissionService: CreatePermissionService) { }

    async store(request: Request, response: Response) {

        const { name, description } = request.body

        const createPermissionService = new CreatePermissionService;

        const result = await createPermissionService.execute({ name, description })

        return response.json(result)
    }
}