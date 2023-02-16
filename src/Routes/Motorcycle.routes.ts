import { Router } from 'express';
import MotorcycleController from '../Controllers/Motorcycle.controller';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).findById(),
);

routes.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).find(),
);

routes.put(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).updateById(),
);

export default routes;