import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';

interface Request {
    name: string;
    description: string
}

class CreatePermissionService{

    async execute({ name, description }: Request){

            if( name.length <= 0 || description.length <= 0){
                throw new AppError("You must provide a name and description to permission.", 400, { reason: 'O usuario nao proveu um nome ou uma descriçao para a permissão.' });
            }

            const checkPermissionsExists = await prisma.permissions.findFirst({
                where: {
                    name: name
                }
            });

            if (checkPermissionsExists){
                throw new AppError("Permission alredy exists", 400, { reason: 'A permissão ja está cadastrada.' });
            }

            const permission = await prisma.permissions.create({
                data: {
                    name: name.toUpperCase(),
                    description
                }
            })

            return permission
        }
    }

    export { CreatePermissionService };
