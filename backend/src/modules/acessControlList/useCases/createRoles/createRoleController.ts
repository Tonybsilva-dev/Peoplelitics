import { Request, Response } from 'express';
import { CreateRoleService } from './createRoleService';




export class CreateRoleController {
    constructor(private createRoleService: CreateRoleService) { }

    async store(request: Request, response: Response) {

        const { name, description } = request.body

        const createRoleService = new CreateRoleService;

        const result = await createRoleService.execute({ name, description })

        return response.json(result)
    }
}