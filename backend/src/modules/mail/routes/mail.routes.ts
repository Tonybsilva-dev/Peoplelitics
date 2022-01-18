import { Request, Response, Router } from "express";
import { createMailController } from "../useCase/createMail";
import { sendMailController } from "../useCase/sendMail";


const mailRouter = Router();

mailRouter.post('/', (request: Request, response: Response) => {
    return createMailController.store(request, response);
});

mailRouter.post('/send', (request: Request, response: Response) => {
    return sendMailController.execute(request, response);
});


export { mailRouter };
