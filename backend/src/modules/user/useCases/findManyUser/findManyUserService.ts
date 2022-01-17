import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IfindManyUserDTO } from './findManyUserDTO';

export class FindManyUserService {
    async execute({ name }: IfindManyUserDTO){
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