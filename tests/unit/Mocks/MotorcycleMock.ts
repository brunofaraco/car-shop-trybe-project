const motorcycleReqBody = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const motorcycleModelReturn = {
  id: '6348513f34c397abcad040b2',
  ...motorcycleReqBody,
};

const motorcycleFind = [motorcycleModelReturn];

const motorcycleFindById = motorcycleModelReturn;

const updatedMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

export {
  motorcycleReqBody,
  motorcycleModelReturn,
  motorcycleFind,
  motorcycleFindById,
  updatedMotorcycle,
};