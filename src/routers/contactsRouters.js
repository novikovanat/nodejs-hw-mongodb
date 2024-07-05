import { Router } from 'express';

import {
  createContactController,
  getAllContactsController,
  getContactByIdController,
  updateContactController,
} from '../controllers/contactsControllers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

export const router = Router();
router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post('/', ctrlWrapper(createContactController));

router.patch('/:contactId', ctrlWrapper(updateContactController));
