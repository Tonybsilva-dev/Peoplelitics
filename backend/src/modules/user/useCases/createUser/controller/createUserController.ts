import { Request, Response } from 'express';
import { CreateUserService } from '../services/createUserService';




export class CreateUserController{

    async create(request: Request, response: Response){

        const { name, email, password } = request.body

        const createUserService = new CreateUserService;

        const result = await createUserService.execute({ name, email, password })

        return response.json(result)

    }
}