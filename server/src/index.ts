// types
import { Application } from 'express';
import { Server } from 'http';
import User from './entities/User';

// modules
import express from 'express';
import http from 'http';
import apiRouter from './routes/api/api';
import log from './config/logging';
import config from './config/config';
import { createConnection, Connection } from 'typeorm';
import path from 'path';

// middleware
import cors from './middleware/cors'
import logRequest from './middleware/logging';
import handleError from './middleware/error';

const NAMESPACE: string = 'index';

const main = async (): Promise<void> => {
  const app: Application = express();

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
    const dbConnection: Connection = await createConnection({
      type: "mysql",
      host: config.database.host,
      port: config.database.port,
      username: config.database.username,
      password: config.database.password,
      database: config.database.dbName,
      logging: true,
      synchronize: true,
      migrations: [path.join(__dirname, "./migrations/*")],
      entities: [User],
    });
    config.repos.userRepository = dbConnection.getRepository(User);
  } catch (e) {
    log.error(NAMESPACE, e.message);
    return;
  }

  /* check if repositories work */
  if (!config.repos.userRepository) {
    log.error(NAMESPACE, `Cannot create repository userRepository`, config.repos);
    return;
  }
  // @ts-ignore: Object is possibly 'null'.
  // the above is used every now and then so that the error doesn't show up, 
  // since it's already checked in the code above these comments if any repositories are null, 
  // and returns if they are

  const httpServer: Server = http.createServer(app);

  httpServer.listen(config.server.port, (): void => {
    log.info(NAMESPACE, `Server running on http://${config.server.hostname}:${config.server.port}`);
  });
};

main().catch((err: Error) => { log.error(NAMESPACE, err.message); });
