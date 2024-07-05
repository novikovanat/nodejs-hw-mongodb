import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from './utils/env.js';
import { router } from './routers/contactsRouters.js';
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js';

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
  app.use('/contacts', router);


  app.use('*', notFoundHandler );

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
