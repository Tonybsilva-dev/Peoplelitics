import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';


class CreatePermissionsRoleService {

    async execute({ idRole, permissions }: IUserACLRequestDTO) {

        const role = await prisma.roles.findFirst({
            where: {
                id: idRole
            }
        });

        if (!role) {
            throw new AppError("Role does not exists", 404, { reason: 'A função não existe.' });
        }

        let dataRolePermissions: any = []
        permissions.map(permission => dataRolePermissions.push({ id_permission: permission, id_role: idRole })
        )

        await prisma.permissionsRoles.createMany({
            data: dataRolePermissions,
            skipDuplicates: true,
        })


        const roleResponse = await prisma.roles.findFirst({
            where: {
                id: idRole
            },
            include: {
                permissions: {
                    include: {
                        permission: true
                    }
                }
            }
        });

        return roleResponse;
    }

}

export { CreatePermissionsRoleService };
