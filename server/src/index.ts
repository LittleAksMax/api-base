import express, { Application } from 'express';
import http, { Server } from 'http';
import apiRouter from './routes/api/api';
import log from './config/logging';
import config from './config/config';

import cors from './middleware/cors'
import logRequest from './middleware/logging';
import handleError from './middleware/error';

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

const httpServer: Server = http.createServer(app);

httpServer.listen(config.server.port, () => {
  log.info(NAMESPACE, `Server running on http://${config.server.hostname}:${config.server.port}`);
})

