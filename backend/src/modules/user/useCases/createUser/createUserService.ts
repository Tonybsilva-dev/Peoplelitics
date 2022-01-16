import { hash } from 'bcrypt';
import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { checkPasswordSecurity } from '../../../utils/checkPasswordSecurity';
import { ICreateUserDTO } from './createUserDTO';

export class CreateUserService {
    async execute({ name , email , password }: ICreateUserDTO){

        const emailAlredyExists = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if (emailAlredyExists){
            throw new AppError('Email already exists')
        }
        
        const nameAlredyExists = await prisma.users.findFirst({
            where: {
                name: name
            }
        });

        if (nameAlredyExists){
            throw new AppError('Name already exists')
        }

        const checkPass = checkPasswordSecurity(password)

        if(!checkPass){
            throw new AppError('Your password does not meet the minimum requirements.')
        }

        const hashPassword = await hash(password, 10)

        const user = await prisma.users.create({
            data: {
                name: name.toUpperCase(),
                email: email.toLowerCase(),
                password: hashPassword,
            }
        })

        return user;
    }
}