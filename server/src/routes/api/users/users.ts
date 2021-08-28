import express, { Router } from 'express';
import usersController from '../../../controllers/api/users';

const usersRouter: Router = express.Router();

usersRouter.get('/users', usersController.getUsers);

export default usersRouter;
