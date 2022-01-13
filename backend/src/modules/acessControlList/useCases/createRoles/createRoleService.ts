import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';

interface Request {
    name: string;
    description: string
}

class CreateRoleService{

    async execute({ name, description }: Request){

            if( name.length <= 0 || description.length <= 0){
                throw new AppError("You must provide a name and description to role.", 400, { reason: 'O usuario nao proveu um nome ou uma descriçao para a função.' });
            }

            const checkRoleExists = await prisma.roles.findFirst({
                where: {
                    name: name.toUpperCase()
                }
            });

            if (checkRoleExists){
                throw new AppError("Role alredy exists", 400, { reason: 'A função ja está cadastrada.' });
            }

            const role = await prisma.roles.create({
                data: {
                    name: name.toUpperCase(),
                    description
                }
            })

            return role
        }
    }

    export { CreateRoleService };
