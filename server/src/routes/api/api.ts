import express, { Router } from 'express';
import usersRouter from './users/users';

const apiRouter: Router = express.Router();

apiRouter.use('/', usersRouter);

export default apiRouter;
