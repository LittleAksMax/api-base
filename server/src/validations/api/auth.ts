// types
import { ValidationChain } from 'express-validator';

// modules
import { body } from 'express-validator';
import { usernameValidationAndSanitization, 
  emailValidationAndSanitization, 
  passwordValidationAndSanitization 
} from '../custom/credentials';
import { emailValidationMessage, 
  usernameValidationMessage, 
  passwordValidationMessage 
} from '../messages/auth';

export const registerValidationsAndSanitization: ValidationChain[] = [
  usernameValidationAndSanitization(body('username').exists()).withMessage(usernameValidationMessage),
  emailValidationAndSanitization(body('email').exists()).withMessage(emailValidationMessage),
  passwordValidationAndSanitization(body('password').exists()).withMessage(passwordValidationMessage)
];
