import { FindUserController } from './findUserController';
import { FindUserService } from './findUserService';


const findUserService = new FindUserService();

const findUserController = new FindUserController(findUserService);

export { findUserService, findUserController }