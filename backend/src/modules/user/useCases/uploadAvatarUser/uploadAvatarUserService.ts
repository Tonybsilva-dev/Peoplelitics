import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IUploadAvatarUserDTO } from './uploadAvatarUserDTO';
import path from 'path';
import uploadConfig from '../../../../config/uploads';
import fs from "fs";
import AppError from '../../../../shared/http/errors/AppError';

export class UploadAvatarUserService {

    public async upload({ userID, avatar }: IUploadAvatarUserDTO) {

        const user = await prisma.users.findFirst({
            where: {
                id: userID,
            }
        })
        if (!user) {
            throw new AppError('Only Authenticated users can change avatar')
        }

        if (user.avatar) {

            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar)

            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)

            if (userAvatarFileExists) {
                await fs.promises.unlink(userAvatarFilePath);
                await prisma.users.update({
                    where: {
                        id: userID
                    },
                    data: {
                        avatar: avatar
                    }
                })
            } 
        }
        await prisma.users.update({
            where: {
                id: userID
            },
            data: {
                avatar: avatar
            }
        })
        return user

    }

}