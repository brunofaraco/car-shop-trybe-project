import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/Car.ODM';

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
}

export default CarService;
