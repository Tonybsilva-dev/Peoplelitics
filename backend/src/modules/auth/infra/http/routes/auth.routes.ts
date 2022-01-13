import { Router } from 'express';
import { AuthController } from '../../../controller';

const authController = new AuthController();

const authRouter = Router();

authRouter.post('/', authController.auth)


export { authRouter };
