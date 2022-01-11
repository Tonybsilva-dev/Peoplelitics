import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prismaClient';

interface Request {
    name: string;
    description: string
}

class CreatePermissionService{

    async execute({ name, description }: Request){

            if( name.length <= 0 || description.length <= 0){
                throw new AppError("You must provide a name and description to permission.");
            }

            const checkPermissionsExists = await prisma.permissions.findFirst({
                where: {
                    name: name
                }
            });

            if (checkPermissionsExists){
                throw new AppError("Permission alredy exists");
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
