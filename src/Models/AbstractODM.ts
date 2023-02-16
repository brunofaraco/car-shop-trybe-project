import { model, Model, models, Schema } from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(modelName: string, schema: Schema) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[modelName] || model(modelName, schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    return this.model.findById({ _id: id });
  }
}

export default AbstractODM;