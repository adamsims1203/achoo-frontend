import uuid from 'node-uuid';

const mockData = [
  {
    id: uuid.v4(),
    name: 'Walgreens',
  },
  {
    id: uuid.v4(),
    name: 'CVS Health',
  },
  {
    id: uuid.v4(),
    name: 'Rite Aid',
  },
  {
    id: uuid.v4(),
    name: 'Walmart',
  },
];

export default class PharmacySource {
  static fetch() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData);
      }, 250);
    });
  }
}
