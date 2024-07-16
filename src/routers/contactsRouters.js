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
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contactsValidation.js';
import { authenticate } from '../services/authenticate.js';

const contactsRouters = Router();

contactsRouters.use(authenticate);

contactsRouters.get('/', ctrlWrapper(getContactsController));

contactsRouters.get(
  '/:contactId',
  isValidId,
  ctrlWrapper(getContactByIdController),
);

contactsRouters.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

contactsRouters.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

contactsRouters.delete('/:contactId', ctrlWrapper(deleteContactController));

export default contactsRouters;
