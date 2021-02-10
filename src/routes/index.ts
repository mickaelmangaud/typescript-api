import { Application } from 'express';
import usersRouter from './users';

export function registerRoutes(app: Application): void {
  app.use('/users', usersRouter);
}
