import { Router } from 'express';
import { CreateUserController } from '../../../useCases/createUser/controller/createUserController';
import { FindUserController } from '../../../useCases/findUser/controller/findUserController';



const createClientController = new CreateUserController();
const findUserController = new FindUserController();

const usersRouter = Router();

usersRouter.post('/', createClientController.create)
usersRouter.post('/find', findUserController.index)

export { usersRouter };
