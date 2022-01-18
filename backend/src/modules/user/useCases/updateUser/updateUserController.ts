import { Request, Response } from "express";
import { UpdateUserService } from './updateUserService'

export class UpdateUserController{
    constructor(private updateUserUseCase: UpdateUserService) {}

    async update(request: Request, response: Response){

        const userID = request.user.id

        const { name, email, city, street, suite, zipcode, doc } = request.body;

        const updateUserService = new UpdateUserService()
        
        const result = await updateUserService.update({ name, email, city, street, suite, zipcode, doc, userID})

        return response.json(result)
    }

}