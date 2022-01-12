import { Router } from 'express';
import { UserController } from '../../../controller';

const userController = new UserController();

const usersRouter = Router();

usersRouter.post('/', userController.store)
usersRouter.post('/find', userController.index)
usersRouter.post('/auth', userController.auth)
usersRouter.post('/control/:id_user', userController.createUserAccessControlList)
usersRouter.post('/roles', userController.createRole)
usersRouter.post('/permissions', userController.createPermission)
usersRouter.post('/roles/:id_role', userController.createRolesPermissions)

export { usersRouter };