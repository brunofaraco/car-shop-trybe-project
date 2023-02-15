import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import { carModelReturn, carReqBody } from '../Mocks/CarMock';
import CarService from '../../../src/Services/CarService';

describe('Cars service tests', function () {
  it('Insert a car sucessfully in DB', async function () {
    sinon.stub(Model, 'create').resolves(carModelReturn);

    const carService = new CarService();
    const result = await carService.create(carReqBody);

    expect(result).to.be.deep.equal(carModelReturn);
  });
});