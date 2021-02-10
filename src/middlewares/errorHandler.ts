import { BaseError } from './../errors/baseError';
import { StatusCodes } from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

export const errorHandler = (error: BaseError, req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('error', error);
  }

  if (!res.headersSent && error) {
    res.contentType('application/problem+json');

    if (error.name === 'TokenExpiredError' || error.name === 'JsonWebTokenError') {
      error.status = StatusCodes.UNAUTHORIZED;
    }

    // error = {
    //   name: error.name,
    //   status: error.status,
    //   code: error.code,
    //   message: error.message,
    //   detailedMessages: error.detailedMessages,
    // };

    res.status(error.status || StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
