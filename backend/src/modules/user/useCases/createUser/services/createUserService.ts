import { hash } from 'bcrypt';
import { prisma } from '../../../../../shared/infra/database/prismaClient';


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
            throw new Error('Email already exists')
        }

        if (nameAlredyExists){
            throw new Error('Name already exists')
        }

        const hashPassword = await hash(password, 10)

        const client = await prisma.users.create({
            data: {
                name,
                email,
                password: hashPassword,
            }
        })

        return client;
    }
}