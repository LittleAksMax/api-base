// types
import { Router } from 'express';

// modules
import express from 'express';
import { registerValidationsAndSanitization } from '../../../validations/api/auth';
import authController from '../../../controllers/api/auth/auth';

const authRouter: Router = express.Router();

authRouter.post('/register', registerValidationsAndSanitization, authController.register);

export default authRouter;
