import uuid from 'node-uuid';

const mockData = [
  {
    id: uuid.v4(),
    name: 'Hydrocodone',
    price: 10
  },
  {
    id: uuid.v4(),
    name: 'Lisinopril',
    price: 20
  },
  {
    id: uuid.v4(),
    name: 'Medrol',
    price: 30
  },
  {
    id: uuid.v4(),
    name: 'Prozac',
    price: 40
  },
  {
    id: uuid.v4(),
    name: 'Xanax',
    price: 50
  },
  {
    id: uuid.v4(),
    name: 'Zoloft',
    price: 60
  }
];

export default class ProductSource {
  static fetch() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockData);
      }, 250);
    });
  }
}
