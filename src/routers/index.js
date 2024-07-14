import { Router } from 'express';
import authRouter from './authRouters.js';
import studentsRouter from "./studentsRouters.js";

const router = Router();


router.use('/auth', authRouter );
router.use('/students',  studentsRouter);

export default router;