import { Router } from 'express';
import controllerWrapper from '../utils/controllerWrapper.js';
import {
  loginUserSchema,
  registerUserSchema,
} from '../validation/authValidation.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
} from '../controllers/authCtrl.js';
import { validateBody } from '../middleware/validateBody.js';
const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserSchema),
  controllerWrapper(registerUserController),
);
authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  controllerWrapper(loginUserController),
);

authRouter.post('/logout', controllerWrapper(logoutUserController));

authRouter.post('/refresh', controllerWrapper(refreshUserSessionController));

export default authRouter;
