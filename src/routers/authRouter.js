import { Router } from 'express';
import  controllerWrapper   from '../utils/controllerWrapper.js';
import { registerUserSchema } from '../validation/authValidation.js';
import { registerUserController } from '../controllers/auth.js';
import { validateBody } from '../middleware/validateBody.js';

const authRouter = Router();

authRouter.post(
  '/',
  validateBody(registerUserSchema),
  controllerWrapper(registerUserController),
);

export default authRouter;
