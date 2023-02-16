import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  protected id?: string;
  protected status?: boolean;

  constructor({
    model,
    year,
    color,
    status,
    buyValue,
    id,
  }: IVehicle) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.buyValue = buyValue;
    this.id = id;
    this.status = status;
  }
}

export default Vehicle;
