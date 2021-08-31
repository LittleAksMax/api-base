// types
import { Request, Response } from 'express';
import { Result, ValidationError } from 'express-validator';
import User from '../../entities/User';

// modules
import log from '../../config/logging';
import { INTERNAL_SERVER_ERROR, ITEM_ALREADY_IN_DATABASE, OK, /* REQUEST_BODY_EMPTY */ } from '../../config/status-messages';
import { validationResult } from 'express-validator';
import config from '../../config/config';
import bcrypt from 'bcrypt';

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

const insertUser = async (req: Request, res: Response) => {
  /* error validation */  
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() }); 
  
  try {
    // @ts-ignore: Object is possibly 'null'.
    const foundUser: User = await config.repos.userRepository.findOne({ email: req.body.email, username: req.body.username });
    if (foundUser)
      return res.status(409).json({ message: ITEM_ALREADY_IN_DATABASE });
  } catch (e) { 
    log.error(NAMESPACE, e.message);
    return res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }

  const hashedPassword: string = await bcrypt.hash(req.body.password, config.bcrypt.salt);
  // insert into database
  try {
    // @ts-ignore: Object is possibly 'null'
    await config.repos.userRepository.save({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    });
  } catch (e) {
    log.error(NAMESPACE, e.message);
    return res.status(500).json({ message: INTERNAL_SERVER_ERROR });
  }

  return res.status(200).json({
    message: OK
  });
};

// const updateUser = async (req: Request, res: Response) => {
//   /* error validation */  
//   const errors: Result<ValidationError> = validationResult(req);
//   if (!errors.isEmpty())
//     return res.status(400).json({ errors: errors.array() });   
// };

// const deleteUser = async (req: Request, res: Response) => {
//   /* error validation */
//   const errors: Result<ValidationError> = validationResult(req);
//   if (!errors.isEmpty())
//     return res.status(400).json({ errors: errors.array() });
// };

export default {
  getUsers,
  insertUser,
  // updateUser,
  // deleteUser
}
