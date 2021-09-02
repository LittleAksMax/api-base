// types
import { ValidationChain } from 'express-validator';

// modules
import { usernameValidationAndSanitization,
  emailValidationAndSanitization,
  idValidationAndSanitization
} from '../custom/credentials';
import { emailQueryValidationMessage, 
  idQueryValidationMessage, 
  usernameQueryValidationMessage 
} from '../messages/users';
import { query } from 'express-validator';

// cannot query with password
export const getUsersQueryValidationAndSanitization: ValidationChain[] = [
  idValidationAndSanitization(query('id').optional()).withMessage(idQueryValidationMessage),
  usernameValidationAndSanitization(query('username').optional()).withMessage(usernameQueryValidationMessage),  
  emailValidationAndSanitization(query('email').optional()).withMessage(emailQueryValidationMessage)
];
