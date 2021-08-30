// types
import { Router } from 'express';

// modules
import express from 'express';
import usersController from '../../../controllers/api/users';
import { getUsersQueryValidationAndSanitization, 
  updateUserBodyValidationAndSanitization, 
  deleteUserBodyValidationAndSanitization
} from '../../../validations/api/users';

const usersRouter: Router = express.Router();

usersRouter.get('/users', getUsersQueryValidationAndSanitization, usersController.getUsers);

usersRouter.put('/users/update-user', updateUserBodyValidationAndSanitization, usersController.updateUser);

usersRouter.delete('/users/delete-user', deleteUserBodyValidationAndSanitization, usersController.deleteUser);

export default usersRouter;
