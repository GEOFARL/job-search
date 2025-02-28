import jwt from 'jsonwebtoken';
import { Response } from 'express';

const generateToken = (res: Response, userId: string): void => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: '7d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;
