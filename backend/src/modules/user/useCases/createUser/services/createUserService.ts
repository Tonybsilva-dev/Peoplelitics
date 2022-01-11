import { hash } from 'bcrypt';
import AppError from '../../../../../shared/http/errors/AppError';
import { prisma } from '../../../../../shared/infra/database/prismaClient';
import { checkPasswordSecurity } from '../../../functions/checkPasswordSecurity';

interface createUser {
    name: string,
    email: string;
    password: string;
}

export class CreateUserService {
    async execute({ name , email , password }: createUser){

        const emailAlredyExists = await prisma.users.findFirst({
            where: {
                email: email
            }
        });
        
        const nameAlredyExists = await prisma.users.findFirst({
            where: {
                name: name
            }
        });

        if (emailAlredyExists){
            throw new AppError('Email already exists')
        }

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
                name,
                email,
                password: hashPassword,
            }
        })

        return user;
    }
}