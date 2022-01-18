import { Request, Response } from 'express';
import { DeleteUserService } from './deleteUserService';


export class DeleteUserController{
    constructor (private deleteUserUseCase: DeleteUserService) { }

    async delete(request: Request, response: Response): Promise <Response> {

        const { email } = request.params;

        const deleteUserService = new DeleteUserService();

        await deleteUserService.delete({ email });

        return response.json({message:'User has been Deleted'});
    }
}
