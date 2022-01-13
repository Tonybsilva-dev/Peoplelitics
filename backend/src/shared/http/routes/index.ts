import { Router } from 'express';
import { aclRouter } from '../../../modules/acessControlList/infra/http/routes/acl.routes';
import { authRouter } from '../../../modules/auth/infra/http/routes/auth.routes';
import { usersRouter } from '../../../modules/user/infra/http/routes/users.routes';



const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter)
routes.use('/acl', aclRouter)

export default routes;