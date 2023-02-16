import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import { carModelReturn, carReqBody, carFind, carFindById } from '../Mocks/CarMock';
import CarService from '../../../src/Services/Car.service';

describe('Cars service tests', function () {
  const carService = new CarService();

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

  it('Get a car by id through method GET in route /cars/:ID', async function () {
    sinon.stub(Model, 'findById').resolves(carFindById);

    const result = await carService.findById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(carFindById);
  });

  // it(`Return the right error statusCode and message when the car is not find
  // through method GET in route /cars/:id`, async function () {

  //   expect().to.be.deep.equal();
  // });

  // it(`Return the right error statusCode and message when the ID is not valid
  // through method GET in route /cars/:ID`, async function () {
    
  //   expect().to.be.deep.equal();
  // });
});