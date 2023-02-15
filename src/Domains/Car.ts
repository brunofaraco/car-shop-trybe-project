import ICar from '../Interfaces/ICar';

class Car {
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  protected id?: string;

  constructor({
    model,
    year,
    color,
    status,
    buyValue,
    doorsQty,
    seatsQty,
    id,
  }: ICar) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = status;
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
    this.id = id;
  }
}

export default Car;
