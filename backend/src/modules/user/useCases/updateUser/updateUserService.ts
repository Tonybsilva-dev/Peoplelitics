import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IUpdateUserDTO } from './updateUserDTO'

export class UpdateUserService {

    public async update({ email, name, userID }: IUpdateUserDTO){

        const userUpdate = await prisma.users.update({
            where: { 
                id: userID,
            },
            data:{
                email, 
                name
            }
        })

        return userUpdate;

    }

}