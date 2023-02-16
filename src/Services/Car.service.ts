import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import ErrorMiddleware from '../Utils/PersonalError';

class CarService {
  public carODM: CarODM;
  private _createCarDomain(car: ICar | null): Car | null {
    if (car) { return new Car(car); }
    return null;
  }

  constructor() {
    this.carODM = new CarODM();
  }

  public async create(car: ICar): Promise<Car | null> {
    const newCar = await this.carODM.create(car);

    return this._createCarDomain(newCar);
  }

  public async find(): Promise<(Car | null)[]> {
    const cars = await this.carODM.find();

    return cars.map((car) => this._createCarDomain(car));
  }

  public async findById(id: string): Promise<Car | null> {
    if (!isValidObjectId(id)) throw new ErrorMiddleware(422, 'Invalid mongo id');

    const car = await this.carODM.findById(id);
    if (!car) throw new ErrorMiddleware(404, 'Car not found');

    return this._createCarDomain(car);
  }

  public async updateById(id: string, updateData: Partial<Car>): Promise<Car | null> {
    if (!isValidObjectId(id)) throw new ErrorMiddleware(422, 'Invalid mongo id');

    const updatedCar = await this.carODM.updateById(id, updateData);
    if (!updatedCar) throw new ErrorMiddleware(404, 'Car not found');

    return this._createCarDomain(updatedCar);
  }
}

export default CarService;
