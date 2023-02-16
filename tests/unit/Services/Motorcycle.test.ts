import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import {
  motorcycleModelReturn, motorcycleReqBody, motorcycleFind, motorcycleFindById, updatedMotorcycle,
} from '../Mocks/MotorcycleMock';
import MotorcycleService from '../../../src/Services/Motorcycle.service';
import PersonalError from '../../../src/Utils/PersonalError';

describe('Motorcycles service tests', function () {
  const motorcycleService = new MotorcycleService();

  const VALID_ID = '6348513f34c397abcad040b2';
  const INVALID_MONGO_ID = 'Invalid mongo id';
  const INVALID_ID_STATUSCODE = 422;
  const MOTORCYCLE_NOT_FOUND_STATUSCODE = 404;
  const MOTORCYCLE_NOT_FOUND_MESSAGE = 'Motorcycle not found';

  afterEach(function () { sinon.restore(); });

  it('Insert a motorcycle sucessfully method POST in route /motorcycles', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleModelReturn);

    const result = await motorcycleService.create(motorcycleReqBody);

    expect(result).to.be.deep.equal(motorcycleModelReturn);
  });

  it(
    'Get all the motorcycles sucessfully through method GET in route /motorcycles',
    async function () {
      sinon.stub(Model, 'find').resolves(motorcycleFind);

      const result = await motorcycleService.find();

      expect(result).to.be.deep.equal(motorcycleFind);
    },
  );

  it('Get a motorcycle by ID through method GET in route /motorcycles/:id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleFindById);

    const result = await motorcycleService.findById(VALID_ID);

    expect(result).to.be.deep.equal(motorcycleFindById);
  });

  it(`Return the right error statusCode and message when the ID is not valid
  through method GET in route /motorcycles/:ID`, async function () {
    try {
      await motorcycleService.findById('');
    } catch (error) {
      expect((error as PersonalError).statusCode).to.be.deep.equal(INVALID_ID_STATUSCODE);
      expect((error as PersonalError).message).to.be.deep.equal(INVALID_MONGO_ID);
    }
  });

  it(`Return the right error statusCode and message when the MOTORCYCLE is NOT FOUND
  through method GET in route /motorcycles/:id`, async function () {
    sinon.stub(Model, 'findById').resolves();

    try {
      await motorcycleService.findById(VALID_ID);
    } catch (error) {
      expect((error as PersonalError).statusCode).to.be.deep.equal(MOTORCYCLE_NOT_FOUND_STATUSCODE);
      expect((error as PersonalError).message).to.be.deep.equal(MOTORCYCLE_NOT_FOUND_MESSAGE);
    }
  });

  it('Update a motorcycle by ID through method PUT in route /motorcycles/:id', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMotorcycle);

    const result = await motorcycleService.updateById(VALID_ID, updatedMotorcycle);

    expect(result).to.be.deep.equal(updatedMotorcycle);
  });

  it(`Return the right error statusCode and message when the ID is not valid
  through method PUT in route /motorcycles/:id`, async function () {
    try {
      await motorcycleService.updateById('', {});
    } catch (error) {
      expect((error as PersonalError).statusCode).to.be.deep.equal(INVALID_ID_STATUSCODE);
      expect((error as PersonalError).message).to.be.deep.equal(INVALID_MONGO_ID);
    }
  });

  it(`Return the right error statusCode and message when the MOTORCYCLE is NOT FOUND
  through method PUT in route /motorcycles/:id`, async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves();

    try {
      await motorcycleService.updateById(VALID_ID, updatedMotorcycle);
    } catch (error) {
      expect((error as PersonalError).statusCode).to.be.deep.equal(MOTORCYCLE_NOT_FOUND_STATUSCODE);
      expect((error as PersonalError).message).to.be.deep.equal(MOTORCYCLE_NOT_FOUND_MESSAGE);
    }
  });
});