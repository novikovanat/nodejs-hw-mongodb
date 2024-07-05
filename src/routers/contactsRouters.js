import { Router } from 'express';

import {
  getAllContactsController,
  getContactByIdController,
} from '../controllers/contactsControllers.js';

export const router = Router();
router.get('/', getAllContactsController);

router.get('/:contactId', getContactByIdController);
