import { Request, Response } from "express";
import { UpdateUserPasswordUserService } from './updateUserPasswordUserService'

export class UpdateUserPasswordController{
    constructor(private updateUserPasswordUseCase: UpdateUserPasswordUserService) {}

    async update(request: Request, response: Response){

        const userID = request.user.id

        const { currentlyPassword, newPassword } = request.body;

        const updateUserService = new UpdateUserPasswordUserService()
        
        const result = await updateUserService.update({ currentlyPassword, newPassword, userID })

        return response.json(result)
    }

}