import dotenv from 'dotenv';
import { configServerType, configCorsType } from '../util/types';

dotenv.config();

const cors: configCorsType = {
  origin: process.env.CORS_ORIGIN || '*'
};

const server: configServerType = {
  port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
  hostname: process.env.SERVER_HOSTNAME || 'localhost'
};

export default {
  cors,
  server
}
