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
  createContactSchema,
  updateStudentSchema,
} from '../validation/contactsValidation.js';
import { isValidId } from '../middleware/IsValidId.js';

const router = Router();

router.get('/', controllerWrapper(getStudentsController));
router.get(
  '/:studentId',
   isValidId,
  controllerWrapper(getStudentByIdController),
);
router.post(
  '/',
  validateBody(createContactSchema),
  controllerWrapper(createStudentController),
);
router.delete('/:studentId', controllerWrapper(deleteStudentController));
router.put(
  '/:studentId',
  validateBody(updateStudentSchema),
  isValidId,
  controllerWrapper(upsertStudentController),
);
router.patch(
  '/:studentId',
  validateBody(updateStudentSchema),
  isValidId,
  controllerWrapper(patchStudentController),
);
export default router;
