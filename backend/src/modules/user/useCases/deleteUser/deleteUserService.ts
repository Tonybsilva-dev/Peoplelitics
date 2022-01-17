import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { deleteUserDTO } from './deleteUserDTO';
import { checkValidEmail } from '../../../utils/checkValidEmail';
import  AppError  from '../../../../shared/http/errors/AppError';

export class DeleteUserService {

    public async delete({ email }: deleteUserDTO){

        const checkEmail = checkValidEmail(email)

        if(!checkEmail){
            throw new AppError('Your email does not match.',  400, { reason: 'Não é um email válido.' })
        }

        const emailAlredyExists = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if (!emailAlredyExists){
            throw new AppError('Email not exists', 400, { reason: 'O email solicitado não existe' })
        }

        const deleteUser = await prisma.users.delete({ 
            where:{
                email: email
        } }) 
    }
} 