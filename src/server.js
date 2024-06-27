import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from './utils/env.js';
import { getAllContacts, getContactById } from './services/contacts.js';

dotenv.config();
const PORT = Number(env('PORT'));

export const setupServer = () => {
  const app = express();
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(express.json());
  app.use(cors());

  app.get('/contacts', async (req, res) => {
    const contacts = await getAllContacts();

    res.status(200).json({
      status:200,
      data: contacts,
      message: "Successfully found contacts!"
    });
  });

  app.get('/contacts/:contactId', async (req, res, next) => {
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
  });

  app.use('*', (req, res, next) => {
    res.status(404).json({
      status: 404,
      message: 'Page not found',
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
