import ICar from '../Interfaces/ICar';

class Car {
  protected model: string;
  protected year: number;
  protected color: string;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;
  protected id?: string;
  protected status?: boolean;

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
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
    this.id = id;
    this.status = status;
  }
}

export default Car;
