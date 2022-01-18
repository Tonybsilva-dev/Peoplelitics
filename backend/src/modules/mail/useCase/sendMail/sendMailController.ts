
import { Request, Response } from "express";
import { resolve } from 'path';
import AppError from '../../../../shared/http/errors/AppError';
import { prisma } from "../../../../shared/infra/database/prisma/prismaClient";
import { SendMailService } from "./sendMailService";

class SendMailController {

  constructor(private sendMailService: SendMailService) {}

  async execute(request: Request, response: Response){
    
    const { email, mailID } = request.body

    const sendMailService = new SendMailService()

    // Verificar se o usuário existe
    const user = await prisma.users.findFirst({ 
        where: {
          email
        }
     })
    
    if(!user){
      throw new AppError('User does not exists.')
    }

    // Verificar se o email existe
    const mail = await prisma.mails.findFirst({ 
        where: {
          id: mailID
        }
     })

    if(!mail){
        throw new AppError('Email does not exists.')
    }

    const createMailPath = resolve(__dirname, "..", "..", "..", "..", "shared", "infra", "mail", "views", "createUser.hbs")
  
    const variables = {
      name: user.name,
      title: mail.title,
      description: mail.description,
      user_id: user.id,
      link: process.env.URL_MAILs
    }

    const mailUser = prisma.mailUsers.create({
        data: {
            id_user: user.id,
            id_mail: mailID
        }
    })

    // Path para o envio do email
    await sendMailService.execute(email, mail.title , variables, createMailPath)

    return response.json(mailUser)

    // Enviar email para o usuário
  }
}

export { SendMailController };
