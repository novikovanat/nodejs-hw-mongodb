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


export const router = Router();
router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

router.post('/', ctrlWrapper(createContactController));

router.patch('/:contactId',isValidId, ctrlWrapper(updateContactController));

router.delete('/:contactId',ctrlWrapper(deleteContactController) );
