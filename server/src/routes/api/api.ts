// types
import { Router } from 'express';

// modules
import express from 'express';
import usersRouter from './users/users';
import authRouter from './auth/auth';

const apiRouter: Router = express.Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/auth', authRouter);

export default apiRouter;
