import { Router } from 'express';
import { CreateUserController } from '../../../useCases/createUser/controller/createUserController';



const createClientController = new CreateUserController();

const usersRouter = Router();

usersRouter.post('/', createClientController.create)

export { usersRouter };
