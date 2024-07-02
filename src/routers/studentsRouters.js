import { Router } from 'express';

import {
  getStudentsController,
  getStudentByIdController,
} from '../controllers/studentsControllers.js';

const router = Router();

router.get('/', getStudentsController);
router.get('/:studentId', getStudentByIdController);

export default router;