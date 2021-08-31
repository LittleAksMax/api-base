// types
import { configServerType, configCorsType, configDatabaseType, configReposType, configBcryptType } from '../util/types';

// modules
import dotenv from 'dotenv';

dotenv.config();

const cors: configCorsType = {
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
};

const database: configDatabaseType = {
  host: process.env.DATABASE_HOSTNAME || 'localhost',
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 3306,
  username: process.env.DATABASE_USERNAME || 'test',
  password: process.env.DATABASE_PASSWORD || '1234',
  dbName: process.env.DATABASE_NAME || 'Test'
};

const server: configServerType = {
  port: process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 3000,
  hostname: process.env.SERVER_HOSTNAME || 'localhost'
};

const repos: configReposType = {
  userRepository: null
};

const bcrypt: configBcryptType = {
  salt: process.env.BCRYPT_SALT ? parseInt(process.env.BCRYPT_SALT) : 10
}

export default {
  cors,
  database,
  server,
  repos,
  bcrypt
}
