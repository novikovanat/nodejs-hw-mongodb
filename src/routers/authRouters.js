import { Router } from 'express';
import {ctrlWrapper} from '../utils/ctrlWrapper.js';
import {
  loginUserSchema,
  registerUserSchema,
  requestResetEmailSchema as requestResetPasswordByEmailSchema,
  resetPasswordSchema,
} from '../validation/authValidation.js';
import {
  loginUserController,
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
  ctrlWrapper(registerUserController),
);
authRouter.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

authRouter.post('/logout', ctrlWrapper(logoutUserController));

authRouter.post('/refresh', ctrlWrapper(refreshUserSessionController));

authRouter.post(
  '/send-reset-email',
  validateBody(requestResetPasswordByEmailSchema),
  ctrlWrapper(requestResetPasswordByEmailController),
);

authRouter.post(
  '/reset-password',
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);
export default authRouter;
