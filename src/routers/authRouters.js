import { Router } from 'express';
import controllerWrapper from '../utils/controllerWrapper.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema as requestResetPasswordByEmailSchema,
} from '../validation/authValidation.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetPasswordByEmailController as requestResetPasswordByEmailController,
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

authRouter.post(
  '/request-reset-password',
  validateBody(requestResetPasswordByEmailSchema),
  controllerWrapper(requestResetPasswordByEmailController),
);

export default authRouter;
