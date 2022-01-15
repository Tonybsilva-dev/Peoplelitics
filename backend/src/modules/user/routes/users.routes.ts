import { Request, Response, Router } from "express";
import { createUserController } from '../useCases/createUser';
import { findUserController } from "../useCases/findUser";

const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) => {
    return createUserController.store(request, response);
});

usersRouter.post('/find', (request: Request, response: Response) => {
    return findUserController.index(request, response)
})

export { usersRouter };
