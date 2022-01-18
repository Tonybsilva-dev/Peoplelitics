import { Request, Response } from 'express';
import { UploadAvatarUserService } from './uploadAvatarUserService';

export class UploadAvatarUserController {
    constructor(private uploadAvatarUseCase:UploadAvatarUserService){}

    async upload(request: Request, response: Response){

        const uploadAvatarUserService = new UploadAvatarUserService();

        const avatarFileName = request.file?.filename

        const user = uploadAvatarUserService.upload({
            userID: request.user.id,
            avatar: avatarFileName as string
        })
        
        return response.json(user);
    }
}