import { Router } from 'express';
import { UserController } from '../../../controller';




const userController = new UserController();

const usersRouter = Router();

usersRouter.post('/', userController.store)
usersRouter.post('/find', userController.index)
usersRouter.post('/auth', userController.auth)

export { usersRouter };
