import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prismaClient';

interface Request {
    name: string;
    description: string
}

class CreateRoleService{

    async execute({ name, description }: Request){

            if( name.length <= 0 || description.length <= 0){
                throw new AppError("You must provide a name and description to role.");
            }

            const checkRoleExists = await prisma.roles.findFirst({
                where: {
                    name: name.toUpperCase()
                }
            });

            if (checkRoleExists){
                throw new AppError("Role alredy exists");
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
