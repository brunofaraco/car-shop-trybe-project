import { isValidObjectId } from 'mongoose';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';
import ErrorMiddleware from '../Utils/PersonalError';

class MotorcycleService {
  public motorcycleODM: MotorcycleODM;
  private _createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) { return new Motorcycle(motorcycle); }
    return null;
  }

  constructor() {
    this.motorcycleODM = new MotorcycleODM();
  }

  public async create(motorcycle: IMotorcycle): Promise<Motorcycle | null> {
    const newMotorcycle = await this.motorcycleODM.create(motorcycle);

    return this._createMotorcycleDomain(newMotorcycle);
  }

  public async find(): Promise<(Motorcycle | null)[]> {
    const motorcycles = await this.motorcycleODM.find();

    return motorcycles.map((motorcycle) => this._createMotorcycleDomain(motorcycle));
  }

  public async findById(id: string): Promise<Motorcycle | null> {
    if (!isValidObjectId(id)) throw new ErrorMiddleware(422, 'Invalid mongo id');

    const car = await this.motorcycleODM.findById(id);
    if (!car) throw new ErrorMiddleware(404, 'Car not found');

    return this._createMotorcycleDomain(car);
  }

  public async updateById(id: string, updateData: Partial<Motorcycle>): Promise<Motorcycle | null> {
    if (!isValidObjectId(id)) throw new ErrorMiddleware(422, 'Invalid mongo id');

    const updatedCar = await this.motorcycleODM.updateById(id, updateData);
    if (!updatedCar) throw new ErrorMiddleware(404, 'Car not found');

    return this._createMotorcycleDomain(updatedCar);
  }
}

export default MotorcycleService;
