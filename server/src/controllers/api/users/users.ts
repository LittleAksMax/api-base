// types
import { Request, Response } from 'express';
import { Result, ValidationError } from 'express-validator';
import User from '../../../entities/User';

// modules
import log from '../../../config/logging';
import { INTERNAL_SERVER_ERROR, OK, /* REQUEST_BODY_EMPTY */ } from '../../../config/status-messages';
import { validationResult } from 'express-validator';
import config from '../../../config/config';

const NAMESPACE: string = 'Users Controller';

const getUsers = async (req: Request, res: Response) => {
  /* error validation */
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  let users: User[];
  try {
    const { id, username, email } = req.query;

    // @ts-ignore: Object is possibly 'null'.
    users = await config.repos.userRepository.find({
      ...(id && { id }),
      ...(username && { username }),
      ...(email && { email }),
    });
  } catch (e) {
    log.error(NAMESPACE, e);
    return res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }
  return res.status(404).json({
    data: users,
    message: OK
  });
};

export default {
  getUsers
}
