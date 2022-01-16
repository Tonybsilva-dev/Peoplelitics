import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { findUserDTO } from './findUserDTO'


export class FindUserService {
    
    async execute({ email }: findUserDTO){

        const findUserExists = await prisma.users.findFirst({
            where: {
                email
            }
        });

        return findUserExists || [];
    }
}
