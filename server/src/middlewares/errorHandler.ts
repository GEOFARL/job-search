import { Request, Response } from 'express';

const errorHandler = (err: Error, _: Request, res: Response) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
