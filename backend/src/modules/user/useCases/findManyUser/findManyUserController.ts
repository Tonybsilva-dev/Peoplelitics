import { Request, Response } from 'express';
import { FindManyUserService } from './findManyUserService';


export class FindManyUserController {
  constructor(private FindManyUserService: FindManyUserService) { }

  async index(request: Request, response: Response): Promise<Response> {

    const { name } = request.body

    const findManyUserService = new FindManyUserService;

    const result = await findManyUserService.execute({ name })

    return response.json(result)
  }
}