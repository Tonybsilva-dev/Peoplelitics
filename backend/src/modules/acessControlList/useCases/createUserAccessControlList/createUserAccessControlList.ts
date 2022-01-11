import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prismaClient';

interface IUserACLRequest {
    id: string;
    roles: string[];
    permissions: string[];
  }

class CreateUserAccessControlList {

    async execute({ id, roles, permissions }: IUserACLRequest ){

        const user = await prisma.users.findFirst({
            where: {
                id: id
            }
        });

        if (!user){
            throw new AppError("User does not exists", 404);
        }

        const roleExists = await prisma.roles.findFirst({
            where: {
                id
            }
        });

        const permissionExists = await prisma.permissions.findFirst({
            where: {
                id
            }
        });

        // user.permissions = permissionExists;
        // user.roles = roleExists;


        // const acl = await prisma.users.create({
        //     data: {
        //         name: name.toUpperCase(),
        //         description
        //     }
        // })

        // return acl

    }

}

export { CreateUserAccessControlList };
