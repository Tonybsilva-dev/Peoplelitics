import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import AuthConfig from '../../../config/auth';
import AppError from '../../../shared/http/errors/AppError';
import AccessUserSchema from '../../../shared/infra/database/mongoDB/models/Acess';
import { prisma } from "../../../shared/infra/database/prisma/prismaClient";


interface Request {
    email: string;
    password: string;
    latitude: number, 
    longitude: number
}

interface Response {
    user: Object,
    token: string
}

export class AuthenticatedUserService {
    public async execute({ email, password, latitude, longitude }: Request): Promise<Response>{

        let dataAtual = new Date();
        
        const user = await prisma.users.findFirst({
            where: {
                email: email.toLowerCase()
            }
        });

        if(!user){
            throw new AppError("Incorrect email/password combination.", 401, { reason: 'O usuario nao existe.' });
        }

        const isPasswordValid = await compare(password, user.password);

        if(!isPasswordValid){
            throw new AppError("Incorrect email/password combination.", 401, { reason: 'A senha do usuário está incorreta.' });
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