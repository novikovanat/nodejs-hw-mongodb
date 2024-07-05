import { getAllContacts, getContactById } from '../services/contactsServices.js';
import createHttpError from 'http-errors';

export const getAllContactsController= async (req, res) => {
    const contacts = await getAllContacts();

    res.status(200).json({
      status:200,
      data: contacts,
      message: "Successfully found contacts!"
    });
  };

  export const getContactByIdController = async (req, res, next) => {
    const { contactId } = req.params;
      const contact = await getContactById(contactId);

      // Відповідь, якщо контакт не знайдено
      if (!contact) {
       next(createHttpError(404, 'Contact not found'));
        return;
      }

      // Відповідь, якщо контакт знайдено
      res.status(200).json({
        status:200,
        data: contact,
        message: `Successfully found contact with id ${contactId}!`
      });
  };