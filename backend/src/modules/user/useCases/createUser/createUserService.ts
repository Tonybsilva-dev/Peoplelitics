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
        };
        
        const nameAlredyExists = await prisma.users.findFirst({
            where: {
                name: name
            }
        });

        if (nameAlredyExists){
            throw new AppError('Name already exists')
        };

        const checkPass = checkPasswordSecurity(password);

        if(!checkPass){
            throw new AppError('Your password does not meet the minimum requirements.')
        };

        const hashPassword = await hash(password, 10);

        const user = await prisma.users.create({
            data: {
                name: name.toUpperCase(),
                email: email.toLowerCase(),
                password: hashPassword,
            }
        });

    //     app.post('/mail/send', () => (req, res) => {
    //        res.send({
    //         email: email,
    //         mailID: "b926246e-9b7c-430c-9554-a03438fb5696"
    //     })
    //    })

        return user;
    }
}