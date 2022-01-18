import { DeleteUserController } from './deleteUserController';
import { DeleteUserService } from './deleteUserService';

const deleteUserService = new DeleteUserService();

const deleteUserController = new DeleteUserController(deleteUserService);

export { deleteUserService, deleteUserController }