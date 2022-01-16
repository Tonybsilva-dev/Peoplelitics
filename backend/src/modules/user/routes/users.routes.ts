import { Request, Response, Router } from "express";
import { createUserController } from '../useCases/createUser';
import { findManyUserController } from "../useCases/findManyUser";
import { findUserController } from "../useCases/findUser";

const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) => {
    return createUserController.store(request, response);
});

usersRouter.post('/find', (request: Request, response: Response) => {
    return findManyUserController.index(request, response)
})

usersRouter.post('/find/:email', (request: Request, response: Response) => {
    return findUserController.indexOne(request, response)
})

export { usersRouter };
