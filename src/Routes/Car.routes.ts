import { Router } from 'express';
import CarController from '../Controllers/Car.controller';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);

routes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).find(),
);

routes.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).updateById(),
);

export default routes;