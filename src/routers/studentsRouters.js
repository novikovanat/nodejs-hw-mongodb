import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
  createStudentController,
  deleteStudentController,
} from '../controllers/studentsControllers.js';

import controllerWrapper from '../utils/controllerWrapper.js';

const router = Router();

router.get('/', controllerWrapper(getStudentsController));
router.get('/:studentId', controllerWrapper(getStudentByIdController));
router.post('/', controllerWrapper(createStudentController));
router.delete('/:studentId', controllerWrapper(deleteStudentController));

export default router;
