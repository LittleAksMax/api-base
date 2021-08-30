// types
import { ValidationChain } from 'express-validator';

// modules
import { getUsersIdQueryValidation, getUsersUsernameQueryValidation, getUsersEmailQueryValidation } from '../custom/users';
import { query } from 'express-validator';

export const getUsersQueryValidationAndSanitization: ValidationChain[] = [
  getUsersIdQueryValidation(query('id')),
  getUsersUsernameQueryValidation(query('username')),
  getUsersEmailQueryValidation(query('email'))
];
