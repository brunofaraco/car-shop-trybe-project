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
  id: '',
  ...carReqBody,
};

export {
  carReqBody,
  carModelReturn,
};