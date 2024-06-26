import { initMongoDB } from './db/initMongoDB.js';
import { setupServer } from './server.js';
import dotenv from 'dotenv';

dotenv.config();

const bootstrap = async () => {
  await initMongoDB();
  setupServer();
};

bootstrap();
