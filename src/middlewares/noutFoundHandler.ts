import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../errors';

export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  next(new NotFoundError('Route not found'));
}
