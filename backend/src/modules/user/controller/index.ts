import { Request, Response } from 'express';
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
}