import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
} from '../controllers/studentsControllers.js';

import controllerWrapper from '../utils/controllerWrapper.js';

const router = Router();

router.get('/', controllerWrapper(getStudentsController));
router.get('/:studentId', controllerWrapper(getStudentByIdController));

export default router;