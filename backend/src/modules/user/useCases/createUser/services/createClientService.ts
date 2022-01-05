import { hash } from 'bcrypt';
import { prisma } from '../../../../../shared/infra/database/prismaClient';


interface createClient {
    name: string,
    email: string;
    password: string;
}



export class CreateUserService {
    async execute({ name , email , password }: createClient){

        const emailAlredyExists = await prisma.users.findFirst({
            where: {
                email: {
                    mode: "insensitive"
                }
            }
        });
        const nameAlredyExists = await prisma.users.findFirst({
            where: {
                name: {
                    mode: "insensitive"
                }
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