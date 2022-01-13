import { Request, Response } from 'express';
import { AuthenticatedUserService } from '../../auth/service/AuthenticatedUserService';



export class AuthController{
    
    async auth(request: Request, response: Response){

        const { email, password, latitude, longitude } = request.body

        const authenticatedUserService = new AuthenticatedUserService;

        const result = await authenticatedUserService.execute({ email, password, latitude, longitude })

        return response.json(result)
    }
}