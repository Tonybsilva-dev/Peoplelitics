import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IFindManyUserDTO } from './findManyUserDTO';

export class FindManyUserService {
    async execute({ name }: IFindManyUserDTO){
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