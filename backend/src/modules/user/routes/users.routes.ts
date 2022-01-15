import { Request, Response, Router } from "express";
import { UserController } from '../controller';
import { createUserController } from '../useCases/createUser';

const userController = new UserController();

const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) => {
    return createUserController.store(request, response);
});

usersRouter.post('/find', userController.index)

export { usersRouter };
