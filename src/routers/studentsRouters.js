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

const StudentsRouter = Router();

StudentsRouter.get('/', controllerWrapper(getStudentsController));
StudentsRouter.get(
  '/:studentId',
   isValidId,
  controllerWrapper(getStudentByIdController),
);
StudentsRouter.post(
  '/',
  validateBody(createStudentSchema),
  controllerWrapper(createStudentController),
);
StudentsRouter.delete('/:studentId', controllerWrapper(deleteStudentController));
StudentsRouter.put(
  '/:studentId',
  validateBody(updateStudentSchema),
  isValidId,
  controllerWrapper(upsertStudentController),
);
StudentsRouter.patch(
  '/:studentId',
  validateBody(updateStudentSchema),
  isValidId,
  controllerWrapper(patchStudentController),
);
export default StudentsRouter;
