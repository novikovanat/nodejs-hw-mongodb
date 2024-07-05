import { getAllContacts, getContactById } from '../services/contactsServices.js';

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
    try {
      const contact = await getContactById(contactId);

      // Відповідь, якщо контакт не знайдено
      if (!contact) {
        res.status(404).json({
          status: 404,
          message: 'Contact not found',
        });
        return;
      }

      // Відповідь, якщо контакт знайдено
      res.status(200).json({
        status:200,
        data: contact,
        message: `Successfully found contact with id ${contactId}!`
      });
    } catch (error) {
      if (error.message.includes('Cast to ObjectId')) {
        error.status = 404;
      }
      const { status = 500 } = error;
      res.status(status).json({
        status: status,
        message: error.message,
      });
    }
  };