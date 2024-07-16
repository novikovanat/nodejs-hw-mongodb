import { Router } from 'express';
import authRouter from './authRouters.js';
import contactsRouters from "./contactsRouters.js";

const router = Router();


router.use('/auth', authRouter );
router.use('/students',  contactsRouters);

export default router;