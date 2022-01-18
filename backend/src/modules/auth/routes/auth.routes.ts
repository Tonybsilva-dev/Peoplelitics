import { Request, Response, Router } from "express";
import { authUserController } from "../useCase";


const authRouter = Router();

authRouter.post('/', (request: Request, response: Response) => {
    return authUserController.handle(request, response);
});


export { authRouter };
