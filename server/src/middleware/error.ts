import { Request, Response } from 'express';

const handleError = (_req: Request, res: Response) => {
  const error: Error = new Error('Not found');
  return res.status(404).json({
    message: error.message
  });
};

export default handleError;
