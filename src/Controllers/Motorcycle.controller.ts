import { NextFunction, Request, Response } from 'express';

import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/Motorcycle.service';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const {
      model, year, color, status = false, buyValue, category, engineCapacity,
    } = this.req.body;

    const Motorcycle: IMotorcycle = {
      model, year, status, color, buyValue, category, engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(Motorcycle);

      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    try {
      const Motorcycles = await this.service.find(); 

      return this.res.status(200).json(Motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async findById() {
    try {
      const { id } = this.req.params;
      const Motorcycle = await this.service.findById(id);

      return this.res.status(200).json(Motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateById() {
    try {
      const { id } = this.req.params;
      
      const updatedMotorcycle = await this.service.updateById(id, this.req.body);

      return this.res.status(200).json(updatedMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;