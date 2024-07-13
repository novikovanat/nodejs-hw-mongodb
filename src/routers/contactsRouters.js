import { Router } from 'express';

import {
  createContactController,
  deleteContactController,
  getContactsController,
  getContactByIdController,
  updateContactController,
} from '../controllers/contactsControllers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middleware/IsValidId.js';
import { validateBody } from '../middleware/validateBody.js';
import { createContactSchema, updateContactSchema } from '../validation/contactsValidation.js';


export const router = Router();
router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.post('/', validateBody(createContactSchema), ctrlWrapper(createContactController));

router.patch('/:contactId',isValidId, validateBody(updateContactSchema), ctrlWrapper(updateContactController));

router.delete('/:contactId',ctrlWrapper(deleteContactController) );
