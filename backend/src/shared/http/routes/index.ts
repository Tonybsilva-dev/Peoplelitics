import { Router } from 'express';
import { usersRouter } from '../../../modules/user/infra/http/routes/users.routes';



const routes = Router();

routes.use('/users', usersRouter);

export default routes;