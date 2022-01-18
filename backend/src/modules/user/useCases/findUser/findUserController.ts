import { Request, Response } from 'express';
import { FindUserService } from './findUserService'

export class FindUserController {
    constructor (private findUserUseCase: FindUserService){}

    async indexOne(request: Request, response: Response){

        const { email } = request.params;

        const findUserService = new FindUserService;

        const result = await findUserService.execute({ email });

        return response.json(result);
    }
}