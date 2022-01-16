import { Request, Response } from 'express';
import { AuthUserService } from '../useCase/AuthUserService';



export class AuthController{
    
    async auth(request: Request, response: Response){

        const { email, password, latitude, longitude } = request.body

        const authenticatedUserService = new AuthUserService;

        const result = await authenticatedUserService.execute({ email, password, latitude, longitude })

        return response.json(result)
    }
}