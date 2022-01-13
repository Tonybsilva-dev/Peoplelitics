import { Router } from 'express';
import ensureAuthenticated from '../../../../../shared/http/middlewares/ensureAuthenticated';
import { ACLController } from '../../../controller';

const aclController = new ACLController;

const aclRouter = Router();

aclRouter.post('/user/:id_user', ensureAuthenticated, aclController.createUserACL)
aclRouter.post('/role', ensureAuthenticated, aclController.createRole)
aclRouter.post('/permission', ensureAuthenticated, aclController.createPermission)
aclRouter.post('/role-permissions/:id_role', ensureAuthenticated, aclController.createPermissionsRole)

export { aclRouter };
