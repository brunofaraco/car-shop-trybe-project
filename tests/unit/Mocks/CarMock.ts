const carReqBody = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carModelReturn = {
  id: '6348513f34c397abcad040b2',
  ...carReqBody,
};

const carFind = [carModelReturn];

const carFindById = carModelReturn;

const updatedCar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 1992,
  color: 'Red',
  status: true,
  buyValue: 12.000,
  doorsQty: 2,
  seatsQty: 5,
};

export {
  carReqBody,
  carModelReturn,
  carFind,
  carFindById,
  updatedCar,
};