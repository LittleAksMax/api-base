// types
import { Request, Response } from 'express';
import { Result, ValidationError } from 'express-validator';
import Users from '../../entities/Users';

// modules
import log from '../../config/logging';
import { validationResult } from 'express-validator';
// import { customIdSanitizer } from '../../validations/custom/users';

const NAMESPACE: string = 'Users Controller';

const getUsers = async (req: Request, res: Response) => {
  /* error validation */
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ request: req.body, errors: errors.array() });

  let users: Users[];
  try {
    users = await Users.find(req.query);
  } catch (e) {
    log.error(NAMESPACE, e);
    return res.status(500).end();
  }
  return res.status(404).json({
    data: users,
    message: 'OK'
  });
};

export default {
  getUsers
}
