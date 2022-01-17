import {UpdateUserController} from './updateUserController';
import {UpdateUserService} from './updateUserService';

const updateUserService= new UpdateUserService();

const updateUserController = new UpdateUserController(updateUserService);


export { updateUserService, updateUserController };