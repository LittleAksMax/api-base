// types
import { ValidationChain } from 'express-validator';

// modules
import { emailQueryValidationMessage, idQueryValidationMessage, usernameQueryValidationMessage } from '../messages/users';

export const getUsersIdQueryValidation = (validationChain: ValidationChain) => validationChain.optional().notEmpty().isInt().withMessage(idQueryValidationMessage);
export const getUsersUsernameQueryValidation = (validationChain: ValidationChain) => validationChain.optional().notEmpty().isLength({ min: 3, max: 12}).trim().escape().withMessage(usernameQueryValidationMessage);
export const getUsersEmailQueryValidation = (validationChain: ValidationChain) => validationChain.optional().notEmpty().isEmail().normalizeEmail().withMessage(emailQueryValidationMessage);
