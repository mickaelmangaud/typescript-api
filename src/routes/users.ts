import { IRoute, NextFunction, Request, Response, Router } from 'express';
import { usersController } from '../controllers';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  usersController
    .getAll()
    .then((payload) => res.send(payload))
    .catch(next);
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  usersController
    .getById(id)
    .then((payload) => res.send(payload))
    .catch(next);
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  usersController
    .update(id, {})
    .then((payload) => res.send(payload))
    .catch(next);
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  usersController
    .remove(id)
    .then((payload) => res.send(payload))
    .catch(next);
});

export default router;
