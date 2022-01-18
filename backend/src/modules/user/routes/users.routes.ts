import { Request, Response, Router } from "express";
import ensureAuthenticated from "../../../shared/http/middlewares/ensureAuthenticated";
import { createUserController } from '../useCases/createUser';
import { deleteUserController } from "../useCases/deleteUser";
import { findManyUserController } from "../useCases/findManyUser";
import { findUserController } from "../useCases/findUser";
import { updateUserController} from "../useCases/updateUser";
import { uploadAvatarUserController } from "../useCases/uploadAvatarUser";

import multer from 'multer';
import UploadConfig from '../../../config/uploads';


const uploadAvatar = multer(UploadConfig);


const usersRouter = Router();

usersRouter.post('/', (request: Request, response: Response) => {
    return createUserController.store(request, response);
});

usersRouter.post('/find', (request: Request, response: Response) => {
    return findManyUserController.index(request, response);
})

usersRouter.post('/find/:email', (request: Request, response: Response) => {
    return findUserController.index(request, response);
})

usersRouter.delete('/:email', (request: Request, response: Response) => {
    return deleteUserController.delete(request, response);
})

usersRouter.put('/', ensureAuthenticated, (request: Request, response: Response) => {
    return updateUserController.update(request, response);
})

usersRouter.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), (request: Request, response: Response) => {
    return uploadAvatarUserController.upload(request, response);
})

export { usersRouter };
