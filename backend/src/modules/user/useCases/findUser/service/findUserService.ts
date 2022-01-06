import { prisma } from '../../../../../shared/infra/database/prismaClient';


interface findUser {
    name: string,
}

export class FindUserService {
    async execute({ name }: findUser){

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