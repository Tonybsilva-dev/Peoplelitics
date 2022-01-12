import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prismaClient';

interface IUserACLRequest {
    id: string;
    roles: string[];
    permissions: string[];
  }

class CreateUserAccessControlListService {

    async execute({ id, roles, permissions }: IUserACLRequest ){

        const user = await prisma.users.findFirst({
            where: {
                id: id
            }
        });

        if (!user){
            throw new AppError("User does not exists", 404);
        }
           
        let dataPermissions : any = []
        permissions.map(permission => dataPermissions.push({id_permission: permission, id_user:id})
        )
        
        await prisma.usersPermissions.createMany({
            data: dataPermissions,
            skipDuplicates: true,
        })
        
        let dataRoles : any = []
        roles.map(role => dataRoles.push({id_role: role, id_user: id})
        )

        await prisma.usersRoles.createMany({
            data: dataRoles,
            skipDuplicates: true,
        })


        const userResponse = await prisma.users.findFirst({
            where: {
                id: id
            },
            include: {
                roles: true,
                permissions: true
            }
        });

        return userResponse;
    }

}

export { CreateUserAccessControlListService };
