// types
import { ValidationChain } from 'express-validator';

// modules
import { usernameValidationAndSanitization,
  emailValidationAndSanitization,
  passwordValidationAndSanitization,
  idValidationAndSanitization
} from '../custom/credentials';
import { emailQueryValidationMessage, 
  idQueryValidationMessage, 
  usernameQueryValidationMessage 
} from '../messages/users';
import { // idValidationMessage,
  emailValidationMessage, 
  usernameValidationMessage, 
  passwordValidationMessage 
} from '../messages/auth';
import { query, body } from 'express-validator';

// cannot query with password
export const getUsersQueryValidationAndSanitization: ValidationChain[] = [
  idValidationAndSanitization(query('id').optional()).withMessage(idQueryValidationMessage),
  usernameValidationAndSanitization(query('username').optional()).withMessage(usernameQueryValidationMessage),  
  emailValidationAndSanitization(query('email').optional()).withMessage(emailQueryValidationMessage)
];

export const insertUserBodyValidationAndSanitization: ValidationChain[] = [
  usernameValidationAndSanitization(body('username').exists()).withMessage(usernameValidationMessage),
  emailValidationAndSanitization(body('email').exists()).withMessage(emailValidationMessage),
  passwordValidationAndSanitization(body('password').exists()).withMessage(passwordValidationMessage)
]

// export const updateUserBodyValidationAndSanitization: ValidationChain[] = [  
//   idValidationAndSanitization(body('id').exists()).withMessage(idValidationMessage),
//   usernameValidationAndSanitization(body('username').exists()).withMessage(usernameValidationMessage),
//   emailValidationAndSanitization(body('email').exists()).withMessage(emailValidationMessage),
//   passwordValidationAndSanitization(body('password').exists()).withMessage(passwordValidationMessage)
// ];

// export const deleteUserBodyValidationAndSanitization: ValidationChain[] = [
//   idValidationAndSanitization(body('id').exists()).withMessage(idValidationMessage),
//   usernameValidationAndSanitization(body('username').exists()).withMessage(usernameValidationMessage),
//   emailValidationAndSanitization(body('email').exists()).withMessage(emailValidationMessage),
//   passwordValidationAndSanitization(body('password').exists()).withMessage(passwordValidationMessage)
// ];
