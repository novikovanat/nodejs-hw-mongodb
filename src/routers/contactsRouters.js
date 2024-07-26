import { Router } from 'express';
import { upload } from '../middleware/multer.js';


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
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

contactsRouters.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

contactsRouters.delete('/:contactId', ctrlWrapper(deleteContactController));

export default contactsRouters;
