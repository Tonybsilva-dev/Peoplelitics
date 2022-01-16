import { Request, Response } from 'express';
import { AuthUserService } from './AuthUserService';


export class CreateUserController {
  constructor(private authUserUseCase: AuthUserService) {}

  async handle(request: Request, response: Response){

    const { email, password, latitude, longitude } = request.body

    const authenticatedUserService = new AuthUserService;

    const result = await authenticatedUserService.execute({ email, password, latitude, longitude })

    return response.json(result)
}
}