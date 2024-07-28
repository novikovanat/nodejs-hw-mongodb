import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from './utils/env.js';
import router from './routers/index.js';
import {
  notFoundHandler,
  serverErrorHandler,
} from './middleware/errorHandlers.js';
import cookieParser from 'cookie-parser';
import { UPLOAD_DIR } from './constants/studentConstants.js';
import { swaggerDocs } from './middleware/swaggerDocs.js';

dotenv.config();
const PORT = Number(env('PORT'));

export const startServer = () => {
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
  app.use(cookieParser());

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use('/', router); // Додаємо роутер до app як middleware
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.use('/api-docs', swaggerDocs());

  app.use('*', notFoundHandler);

  app.use(serverErrorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  
};
