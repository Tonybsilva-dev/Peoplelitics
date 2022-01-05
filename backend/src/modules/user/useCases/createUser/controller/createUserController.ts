import { Request, Response } from 'express';
import { CreateUserService } from '../services/createClientService';




export class CreateUserController{

    async create(request: Request, response: Response){

        const { name, email, password } = request.body

        const createClientUseCase = new CreateUserService;

        const result = await createClientUseCase.execute({ name, email, password })

        return response.json(result)

    }
}