import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import AuthConfig from '../../../../../config/auth';
import { prisma } from "../../../../../shared/infra/database/prismaClient";

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: Object,
    token: string
}

export class AuthenticatedUserService {
    public async execute({ email, password }: Request): Promise<Response>{
        
        const user = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        if(!user){
            throw new Error("Incorrect email/password combination.");
        }

        const isPasswordValid = await compare(password, user.password);

        if(!isPasswordValid){
            throw new Error("Incorrect email/password combination.");
        }

        const { secret, expiresIn } = AuthConfig.jwt;

        const token = sign({}, secret, {
            subject: user.id,
      
            expiresIn: expiresIn,
          });
      
          return {
            user,
            token
          }
        
    }
}