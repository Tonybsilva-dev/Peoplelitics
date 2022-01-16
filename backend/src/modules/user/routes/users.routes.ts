import { Request, Response, Router } from "express";
import { createUserController } from '../useCases/createUser';
import { findUsersController } from "../useCases/findManyUser";

const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) => {
    return createUserController.store(request, response);
});

usersRouter.post('/find', (request: Request, response: Response) => {
    return findUsersController.index(request, response)
})

export { usersRouter };
