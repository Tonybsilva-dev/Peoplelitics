import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IfindUserDTO } from './findUserDTO';

export class FindUserService {
    async execute({ name }: IfindUserDTO){
        const findUserExists = await prisma.users.findMany({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive",
                }
            }
        });
        return findUserExists;
    }
}