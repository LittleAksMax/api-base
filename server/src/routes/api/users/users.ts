// types
import { Router } from 'express';

// modules
import express from 'express';
import usersController from '../../../controllers/api/users/users';
import { getUsersQueryValidationAndSanitization } from '../../../validations/api/users';

const usersRouter: Router = express.Router();

usersRouter.get('/', getUsersQueryValidationAndSanitization, usersController.getUsers);

export default usersRouter;
