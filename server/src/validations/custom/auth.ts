// types
import { ValidationChain } from 'express-validator';

// modules
import { emailValidationMessage, usernameValidationMessage, passwordValidationMessage } from '../messages/auth';

export const usernameValidationAndSanitization = (validationChain: ValidationChain) => validationChain.notEmpty().isLength({ min: 3, max: 12}).trim().escape().withMessage(usernameValidationMessage);

export const emailValidationAndSanitization = (validationChain: ValidationChain) => validationChain.notEmpty().isEmail().normalizeEmail().withMessage(emailValidationMessage);

export const passwordValidationAndSanitization = (validationChain: ValidationChain) => validationChain.notEmpty().isLength({ min: 3, max: 12 }).trim().escape().withMessage(passwordValidationMessage);
