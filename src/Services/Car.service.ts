import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

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
    const car = await this.carODM.findById(id);

    return this._createCarDomain(car);
  }
}

export default CarService;
