import express from 'express';
import errorHandler from './Middlewares/Error.middleware';
import CarRoute from './Routes/Car.routes';

const app = express();

app.use(express.json());

app.use('/cars', CarRoute);

app.use(errorHandler);

export default app;
