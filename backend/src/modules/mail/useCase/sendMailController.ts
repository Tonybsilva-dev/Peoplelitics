import { Request, Response } from "express";
import { SendMailService } from "./sendMailService";


export class SendMailController {

    constructor(private sendMailUseCase: SendMailService) {}

    async store(request: Request, response: Response) {
            const { idMail, idUser } = request.body

            const sendMailService = new SendMailService;

            // const result = await sendMailService.execute( )

            // return response.json(result)
    }

}