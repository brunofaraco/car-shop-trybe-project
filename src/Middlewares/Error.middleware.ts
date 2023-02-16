import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import PersonalError from '../Utils/PersonalError';

const errorHandler: ErrorRequestHandler = (
  error: Error & Partial<PersonalError>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (error instanceof PersonalError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  return res.status(500).json({ message: 'Bro, something is not right!' });
};

export default errorHandler;
