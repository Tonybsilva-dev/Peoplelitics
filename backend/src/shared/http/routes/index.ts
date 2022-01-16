import { Router } from 'express';
import { aclRouter } from '../../../modules/acessControlList/infra/http/routes/acl.routes';
import { authRouter } from '../../../modules/auth/routes/auth.routes';
import { usersRouter } from '../../../modules/user/routes/users.routes';
import '../../infra/database/mongoDB/scripts/EraserHead';



const routes = Router();

routes.use('/users', usersRouter);
routes.use('/auth', authRouter)
routes.use('/acl', aclRouter)

export default routes;