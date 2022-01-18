import { compare, hash } from 'bcrypt';
import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IUpdateUserPassword } from './updateUserPasswordDTO';
import { checkPasswordSecurity } from '../../../utils/checkPasswordSecurity';

export class UpdateUserPasswordUserService {

    public async update({ newPassword, currentlyPassword, userID }: IUpdateUserPassword) {

        const user = await prisma.users.findFirst({
            where: {
                id: userID,
            }
        });

        if (!user) {
            throw new AppError('User not exists.')
        };

        if (currentlyPassword && !newPassword || !currentlyPassword && newPassword) {
            throw new AppError('You need to inform both passwords to change it.')
        }

        const checkPass = checkPasswordSecurity(newPassword);

        if (!checkPass) {
            throw new AppError('Your password does not meet the minimum requirements.')
        };

        const checkOldPassword = await compare(currentlyPassword, user.password)


        if (newPassword && user.password) {

            if (!checkOldPassword) {
                throw new AppError('Old password does not match.')
            }

            if (newPassword == currentlyPassword) {
                throw new AppError('Enter a password different from the previous one.')
            }
            const hashPassword = await hash(newPassword, 10);

            const result = await prisma.users.update({
                where:{
                    id: userID
                },
                data:{
                    password: hashPassword
                }
            })

            return result
        }
    }
}