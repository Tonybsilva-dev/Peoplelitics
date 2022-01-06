import { hash } from 'bcrypt';
import AppError from '../../../../../shared/http/errors/AppError';
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
            throw new AppError('Email already exists')
        }

        if (nameAlredyExists){
            throw new AppError('Name already exists')
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