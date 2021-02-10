import 'dotenv/config';
import express, { Application, Request, Response } from 'express';
import { registerRoutes } from './routes';
import { notFoundHandler, errorHandler } from './middlewares';

const app: Application = express();
const PORT: string = process.env.PORT || '5000';

registerRoutes(app);

app.use(notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
