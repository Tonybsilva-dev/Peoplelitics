import { prisma } from '../../../../shared/infra/database/prisma/prismaClient';
import { IcreateMailDTO } from './CreateMailDTO';



class CreateMailService {

    async execute({ title, description }: IcreateMailDTO) {

        // const mailExists = prisma.mails.findFirst({
        //     where: {
        //         title
        //     }
        // })

        // if (mailExists) {
        //     throw new AppError('A mail with this title alread exists!')
        // }

        const mail = await prisma.mails.create({
            data: {
                title: title.toUpperCase(),
                description
            }
        })

        return mail
    }
}

export { CreateMailService };
