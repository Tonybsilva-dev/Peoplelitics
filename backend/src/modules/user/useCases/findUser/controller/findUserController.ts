import { Request, Response } from 'express';
import { FindUserService } from '../service/findUserService';





export class FindUserController{

    async index(request: Request, response: Response){

        const { name } = request.body

        const findUserservice = new FindUserService;

        const result = await findUserservice.execute({ name })

        return response.json(result)

    }
}