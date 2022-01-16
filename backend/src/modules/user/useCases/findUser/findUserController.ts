import { Request, Response } from 'express';
import { FindUserService } from './findUserService';


export class FindUserController {
  constructor(private findUserservice: FindUserService) { }

  async index(request: Request, response: Response): Promise<Response> {

    const { name } = request.body

    const findUserservice = new FindUserService;

    const result = await findUserservice.execute({ name })

    return response.json(result)
  }
}