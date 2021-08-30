// types
import { Request, Response, NextFunction } from 'express';

// modules
import log from '../config/logging';

const NAMESPACE: string = 'index';     // that is where this will be used 

const logRequest = (req: Request, _res: Response, next: NextFunction) => {
  log.info(NAMESPACE, `METHOD - [${req.method}], URL  [${req.url}], IP  [${req.socket.remoteAddress}]`);

  req.on('finish', () => {
    log.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`);
  });

  next();
};

export default logRequest;
