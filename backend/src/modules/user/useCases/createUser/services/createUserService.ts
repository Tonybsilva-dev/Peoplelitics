import { hash } from 'bcrypt';
import AppError from '../../../../../shared/http/errors/AppError';
import { prisma } from '../../../../../shared/infra/database/prisma/prismaClient';
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
            throw new AppError('Email already exists', 400, { reason: 'O email ja esta cadastrado.' })
        }

        if (nameAlredyExists){
            throw new AppError('Name already exists',  400, { reason: 'O nome do usuario ja esta cadastrado.' })
        }

        const checkPass = checkPasswordSecurity(password)

        if(!checkPass){
            throw new AppError('Your password does not meet the minimum requirements.',  400, { reason: 'A senha nao atende aos requisitos mínimos.' })
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