import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IDeleteUserDTO } from './deleteUserDTO';
import { checkValidEmail } from '../../../utils/checkValidEmail';
import  AppError  from '../../../../shared/http/errors/AppError';

export class DeleteUserService {

    public async delete({ email }: IDeleteUserDTO){

        const checkEmail = checkValidEmail(email);

        if(!checkEmail){
            throw new AppError('Your email does not match.')
        };

        const emailAlredyExists = await prisma.users.findFirst({
            where: {
                email,
            }
        });

        if (!emailAlredyExists){
            throw new AppError('Email not exists')
        };

        await prisma.users.delete({ 
            where:{
                email,
        } });
    }
} 