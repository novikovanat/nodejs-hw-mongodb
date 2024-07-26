import { Router } from 'express';
import { upload } from '../middleware/multer.js';


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
  checkRoles(ROLES.TEACHER),
  upload.single('photo'),
  validateBody(createStudentSchema),
  controllerWrapper(createStudentController),
);
StudentsRouter.delete(
  '/:studentId',
  checkRoles(ROLES.TEACHER),
  controllerWrapper(deleteStudentController),
);
StudentsRouter.put(
  '/:studentId',
  isValidId,
  checkRoles(ROLES.TEACHER),
  upload.single('photo'),
  validateBody(updateStudentSchema),
  controllerWrapper(upsertStudentController),
);
StudentsRouter.patch(
  '/:studentId',
  isValidId,
  checkRoles(ROLES.TEACHER),
  upload.single('photo'),
  validateBody(updateStudentSchema),
  controllerWrapper(patchStudentController),
);
export default StudentsRouter;
