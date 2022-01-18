import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IFindUserDTO } from './findUserDTO'


export class FindUserService {
    
    async execute({ email }: IFindUserDTO){

        const findUserExists = await prisma.users.findFirst({
            where: {
                email
            }
        });

        return findUserExists || [];
    }
}
