// types
import { Router } from 'express';

// modules
import express from 'express';
import usersRouter from './users/users';

const apiRouter: Router = express.Router();

apiRouter.use('/users', usersRouter);

export default apiRouter;
