import { Request, Response } from "express";
import { CreateMailService } from "./createMailService";



export class CreateMailController {

    constructor(private createMailUseCase: CreateMailService) {}

    async store(request: Request, response: Response) {
        
            const { title, description } = request.body;

            const createMailService = new CreateMailService;

            const result = await createMailService.execute({ title, description });

            return response.json(result);
    }

}