import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
  upsertStudentController,
  patchStudentController,
} from '../controllers/studentsControllers.js';

import controllerWrapper from '../utils/controllerWrapper.js';
import { validateBody } from '../middleware/validateBody.js';
import {
  createStudentSchema,
  updateStudentSchema,
} from '../validation/studentsValidation.js';
import { isValidId } from '../middleware/IsValidId.js';
import { authenticate } from '../services/authenticate.js';
import { checkRoles } from '../middleware/checkRoles.js';
import { ROLES } from '../constants/studentConstants.js';

const StudentsRouter = Router();

StudentsRouter.use(authenticate);
StudentsRouter.get(
  '/',
  checkRoles(ROLES.TEACHER),
  controllerWrapper(getStudentsController),
);
StudentsRouter.get(
  '/:studentId',
  checkRoles(ROLES.TEACHER, ROLES.PARENT),
  isValidId,
  controllerWrapper(getStudentByIdController),
);
StudentsRouter.post(
  '/',
  validateBody(createStudentSchema),
  checkRoles(ROLES.TEACHER),
  controllerWrapper(createStudentController),
);
StudentsRouter.delete(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  controllerWrapper(deleteStudentController),
);
StudentsRouter.put(
  '/:studentId',
  validateBody(updateStudentSchema),
  isValidId,
  checkRoles(ROLES.TEACHER),
  controllerWrapper(upsertStudentController),
);
StudentsRouter.patch(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  validateBody(updateStudentSchema),
  isValidId,
  controllerWrapper(patchStudentController),
);
export default StudentsRouter;
