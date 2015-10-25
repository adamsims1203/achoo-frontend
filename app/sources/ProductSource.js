import uuid from 'node-uuid';

const mockData = [
  {
    id: uuid.v4(),
    name: 'Hydrocodone'
  },
  {
    id: uuid.v4(),
    name: 'Lisinopril'
  },
  {
    id: uuid.v4(),
    name: 'Medrol'
  },
  {
    id: uuid.v4(),
    name: 'Prozac'
  },
  {
    id: uuid.v4(),
    name: 'Xanax'
  },
  {
    id: uuid.v4(),
    name: 'Zoloft'
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
