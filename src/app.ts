import express from 'express';
import errorHandler from './Middlewares/Error.middleware';
import CarRoute from './Routes/Car.routes';
import MotorcycleRoute from './Routes/Motorcycle.routes';

const app = express();

app.use(express.json());

app.use('/cars', CarRoute);
app.use('/motorcycles', MotorcycleRoute);

app.use(errorHandler);

export default app;
