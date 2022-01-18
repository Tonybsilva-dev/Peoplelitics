import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IUpdateUserDTO } from './updateUserDTO'

export class UpdateUserService {

    public async update({ email, name, city, street, suite, zipcode, doc, userID }: IUpdateUserDTO){

        const userUpdate = await prisma.users.update({
            where: { 
                id: userID,
            },
            data:{
                name,
                email, 
                street,
                suite,
                city,
                zipcode,
                doc : doc
            }
        })

        return userUpdate;

    }

}