import { Request, Response } from 'express';
import Users from '../../entities/Users';
import log from '../../config/logging';

const NAMESPACE: string = 'Users Controller';

const getUsers = async (_req: Request, res: Response) => {
  let users: Users[];
  try {
    users = await Users.find();
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
