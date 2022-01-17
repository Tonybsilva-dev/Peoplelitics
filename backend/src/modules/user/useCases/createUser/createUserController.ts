import { Request, Response } from "express";
import { IMailProvider } from "../../../../shared/infra/mail/providers/IMailProvider";
import { CreateUserService } from "./createUserService";


export class CreateUserController {

    constructor(private createUserUseCase: CreateUserService, private mailProvider: IMailProvider) {}

    async store(request: Request, response: Response) {
            const { name, email, password } = request.body

            const createUserService = new CreateUserService;

            const result = await createUserService.execute({ name, email, password })

            return response.json(result)
    }

}