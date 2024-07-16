import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContact,
} from '../services/contactsServices.js';
import createHttpError from 'http-errors';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getContactsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortOrder, sortBy } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const {_id: userId} = req.user;
  const contacts = await getAllContacts(userId,
    page,
    perPage,
    sortOrder,
    sortBy,
    filter,
  );

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactByIdController = async (req, res, next) => {
  const {_id: userId} = req.user;
  const { contactId } = req.params;
  const contact = await getContactById(userId, contactId);

  // Відповідь, якщо контакт не знайдено
  if (!contact) {
    next(createHttpError(404, 'That contact not in your list'));
    return;
  }

  // Відповідь, якщо контакт знайдено
  res.status(200).json({
    status: 200,
    contact,
    message: `Successfully found contact with id ${contactId}!`,
  });
};

export const createContactController = async (req, res) => {
  const {_id: userId} = req.user;
  const data = await createContact(req.body , userId);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a contact!',
    data,
  });
};

export const updateContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const {_id: userId} = req.user;

  const result = await updateContact(contactId, req.body);

  if (!result) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  const status = result.isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully patched a contact!',
    result,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { contactId } = req.params;
  const {_id: userId} = req.user;
  const contact = await deleteContact(contactId);
  
  if (!contact) {
    next(createHttpError(404, 'Contact not found'));
    return;
  }

  res.status(204).send();
};
