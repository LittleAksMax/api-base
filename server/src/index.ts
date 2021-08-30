// types
import { Application } from 'express';
import { Server } from 'http';
import Users from './entities/Users';

// modules
import express from 'express';
import http from 'http';
import apiRouter from './routes/api/api';
import log from './config/logging';
import config from './config/config';
import { createConnection } from 'typeorm';
import path from 'path';

// middleware
import cors from './middleware/cors'
import logRequest from './middleware/logging';
import handleError from './middleware/error';

const main = async (): Promise<void> => {
  const app: Application = express();
  const NAMESPACE: string = 'index';

  /* Logging the request */

  app.use(logRequest);

  /* Parse the request */

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json({ limit: '1mb' }));

  /* Rules of our API */

  app.use(cors);

  /* Routes */

  app.use('/api', apiRouter);

  /* Error handling */

  app.use(handleError);

  /* create server */
  try {
    await createConnection({
      type: "mysql",
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.dbName,
      logging: false,
      synchronize: true,
      migrations: [path.join(__dirname, "./migrations/*")],
      entities: [Users],
    });
  } catch (e) {
    log.error(NAMESPACE, e.message);
    return;
  }

  const httpServer: Server = http.createServer(app);

  httpServer.listen(config.server.port, (): void => {
    log.info(NAMESPACE, `Server running on http://${config.server.hostname}:${config.server.port}`);
  });
};

main().catch((err: Error) => { log.error('', err.message); });
