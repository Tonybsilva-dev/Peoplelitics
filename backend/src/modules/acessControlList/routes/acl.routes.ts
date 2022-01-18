import { Request, Response, Router } from 'express';
import ensureAuthenticated from '../../../shared/http/middlewares/ensureAuthenticated';
import { createPermissionController } from '../useCases/createPermissions.ts';
import { createRoleController, createRolePermissionsController } from '../useCases/createRoles';
import { createUserAccessControlListController } from '../useCases/createUserAccessControlList';

const aclRouter = Router();

aclRouter.post('/role', ensureAuthenticated, (request: Request, response: Response) => {
    return createRoleController.store(request, response);
});

aclRouter.post('/permission', ensureAuthenticated, (request: Request, response: Response) => {
    return createPermissionController.store(request, response);
});

aclRouter.post('/role-permissions/:idRole', ensureAuthenticated, (request: Request, response: Response) => {
    return createRolePermissionsController.store(request, response);
});

aclRouter.post('/:idUser', ensureAuthenticated, (request: Request, response: Response) => {
    return createUserAccessControlListController.store(request, response);
});

export { aclRouter };
