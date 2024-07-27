import { Router } from 'express';
import controllerWrapper from '../utils/controllerWrapper.js';
import {
  loginUserSchema,
  loginWithGoogleOAuthSchema,
  registerUserSchema,
  requestResetEmailSchema as requestResetPasswordByEmailSchema,
  resetPasswordSchema,
} from '../validation/authValidation.js';
import {
  getGoogleOAuthUrlController,
  loginUserController,
  loginWithGoogleController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetPasswordByEmailController as requestResetPasswordByEmailController,
  resetPasswordController,
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
authRouter.get('/get-oauth-url', controllerWrapper(getGoogleOAuthUrlController));

authRouter.post(
  '/confirm-oauth',
  validateBody(loginWithGoogleOAuthSchema),
  controllerWrapper(loginWithGoogleController),
);

authRouter.post('/logout', controllerWrapper(logoutUserController));

authRouter.post('/refresh', controllerWrapper(refreshUserSessionController));

authRouter.post(
  '/request-reset-password',
  validateBody(requestResetPasswordByEmailSchema),
  controllerWrapper(requestResetPasswordByEmailController),
);

authRouter.post(
  '/reset-password',
  validateBody(resetPasswordSchema),
  controllerWrapper(resetPasswordController),
);
export default authRouter;
