import { Request, Response } from 'express';
import { FindManyUserService } from './findManyUserService';


export class FindManyUserController {
  constructor(private findUserservice: FindManyUserService) { }

  async index(request: Request, response: Response): Promise<Response> {

    const { name } = request.body

    const findUserservice = new FindManyUserService;

    const result = await findUserservice.execute({ name })

    return response.json(result)
  }
}