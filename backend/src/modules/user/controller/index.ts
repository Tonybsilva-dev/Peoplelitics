import { Request, Response } from 'express';
import { FindUserService } from '../useCases/findUser/service/findUserService';

export class UserController{

    async index(request: Request, response: Response){

        const { name } = request.body

        const findUserservice = new FindUserService;

        const result = await findUserservice.execute({ name })

        return response.json(result)
    }
}