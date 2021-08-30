// types
import { ValidationChain } from 'express-validator';

// modules

export const idValidationAndSanitization = (validationChain: ValidationChain) => 
  validationChain.notEmpty().isInt().toInt();

export const usernameValidationAndSanitization = (validationChain: ValidationChain) =>
  validationChain.notEmpty().isLength({ min: 3, max: 12}).trim().escape();

export const emailValidationAndSanitization = (validationChain: ValidationChain) => 
  validationChain.notEmpty().isEmail().normalizeEmail();

export const passwordValidationAndSanitization = (validationChain: ValidationChain) => 
  validationChain.notEmpty().isLength({ min: 3, max: 12 }).trim().escape();
