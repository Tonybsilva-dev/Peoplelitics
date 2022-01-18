import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import AuthConfig from '../../../config/auth';
import AppError from '../../../shared/http/errors/AppError';
import AccessUserSchema from '../../../shared/infra/database/mongoDB/models/Access';
import { prisma } from "../../../shared/infra/database/prisma/prismaClient";
import { IAuthRequest, IAuthResponse } from "./AuthUserDTO";

export class AuthUserService {
    public async execute({ email, password, latitude, longitude }: IAuthRequest): Promise<IAuthResponse>{

        let dataAtual = new Date();
        
        const user = await prisma.users.findFirst({
            where: {
                email: email.toLowerCase()
            }
        });

        if(!user){
            throw new AppError("Incorrect email/password combination.", 401);
        }

        const isPasswordValid = await compare(password, user.password);

        if(!isPasswordValid){
            throw new AppError("Incorrect email/password combination.", 401);
        }
        
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
          };

        try {
            let access = await AccessUserSchema.findOne({ user_id: user.id });

            if(!access){        
            const data = await AccessUserSchema.create({ 
                user_id: user.id,
                name: user.name,
                logged_in: dataAtual,
                logged_out: '',
                location
             });
            }

        } catch (error) {
            throw new AppError('Mondo DB Cloud AccessUserControl does not work')
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