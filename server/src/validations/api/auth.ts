// types
import { ValidationChain } from 'express-validator';

// modules
import { body } from 'express-validator';
import { usernameValidationAndSanitization, emailValidationAndSanitization, passwordValidationAndSanitization } from '../custom/auth';

export const registerValidations: ValidationChain[] = [
  usernameValidationAndSanitization(body('username').exists()),
  emailValidationAndSanitization(body('email').exists()),
  passwordValidationAndSanitization(body('password').exists())
];

export const loginValidations: ValidationChain[] = [
  usernameValidationAndSanitization(body('username')),
  emailValidationAndSanitization(body('email')),
  passwordValidationAndSanitization(body('password'))
];