// types
import { Router } from 'express';

// modules
import express from 'express';
import usersController from '../../../controllers/api/users';
import { getUsersQueryValidationAndSanitization, 
  // updateUserBodyValidationAndSanitization, 
  // deleteUserBodyValidationAndSanitization,
  insertUserBodyValidationAndSanitization
} from '../../../validations/api/users';

const usersRouter: Router = express.Router();

usersRouter.get('/', getUsersQueryValidationAndSanitization, usersController.getUsers);

usersRouter.post('/add-user', insertUserBodyValidationAndSanitization, usersController.insertUser);

// usersRouter.put('/update-user', updateUserBodyValidationAndSanitization, usersController.updateUser);

// usersRouter.delete('/delete-user', deleteUserBodyValidationAndSanitization, usersController.deleteUser);

export default usersRouter;
