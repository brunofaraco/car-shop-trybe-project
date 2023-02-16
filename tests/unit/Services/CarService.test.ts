import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import { carModelReturn, carReqBody, carFind, carFindById, updatedCar } from '../Mocks/CarMock';
import CarService from '../../../src/Services/Car.service';
import PersonalError from '../../../src/Utils/PersonalError';

describe('Cars service tests', function () {
  const carService = new CarService();

  const VALID_ID = '6348513f34c397abcad040b2';
  const INVALID_MONGO_ID = 'Invalid mongo id';
  const INVALID_ID_STATUSCODE = 422;
  const CAR_NOT_FOUND_STATUSCODE = 404;
  const CAR_NOT_FOUND_MESSAGE = 'Car not found';

  afterEach(function () { sinon.restore(); });

  it('Insert a car sucessfully method POST in route /cars', async function () {
    sinon.stub(Model, 'create').resolves(carModelReturn);

    const result = await carService.create(carReqBody);

    expect(result).to.be.deep.equal(carModelReturn);
  });

  it('Get all the cars sucessfully through method GET in route /cars', async function () {
    sinon.stub(Model, 'find').resolves(carFind);

    const result = await carService.find();
    
    expect(result).to.be.deep.equal(carFind);
  });

  it('Get a car by ID through method GET in route /cars/:id', async function () {
    sinon.stub(Model, 'findById').resolves(carFindById);

    const result = await carService.findById(VALID_ID);

    expect(result).to.be.deep.equal(carFindById);
  });

  it(`Return the right error statusCode and message when the ID is not valid
  through method GET in route /cars/:ID`, async function () {
    try {
      await carService.findById('');
    } catch (error) {
      expect((error as PersonalError).statusCode).to.be.deep.equal(INVALID_ID_STATUSCODE);
      expect((error as PersonalError).message).to.be.deep.equal(INVALID_MONGO_ID);
    }
  });

  it(`Return the right error statusCode and message when the CAR is NOT FOUND
  through method GET in route /cars/:id`, async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      await carService.findById(VALID_ID);
    } catch (error) {
      expect((error as PersonalError).statusCode).to.be.deep.equal(CAR_NOT_FOUND_STATUSCODE);
      expect((error as PersonalError).message).to.be.deep.equal(CAR_NOT_FOUND_MESSAGE);
    }
  });

  it('Update a car by ID through method PUT in route /cars/:id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);

    const result = await carService.findByIdAndUpdate('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(updatedCar);
  });
});