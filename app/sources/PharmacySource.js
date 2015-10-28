import uuid from 'node-uuid';

const mockData = [
  {
    id: uuid.v4(),
    name: 'Walgreens',
    products: [
      {
        id: uuid.v4(),
        name: 'Prozac',
        price: 41,
      },
      {
        id: uuid.v4(),
        name: 'Xanax',
        price: 48,
      },
    ],
  },
  {
    id: uuid.v4(),
    name: 'CVS Health',
    products: [
      {
        id: uuid.v4(),
        name: 'Hydrocodone',
        price: 12,
      },
      {
        id: uuid.v4(),
        name: 'Lisinopril',
        price: 23,
      },
      {
        id: uuid.v4(),
        name: 'Medrol',
        price: 32,
      },
      {
        id: uuid.v4(),
        name: 'Prozac',
        price: 43,
      },
      {
        id: uuid.v4(),
        name: 'Xanax',
        price: 53,
      },
      {
        id: uuid.v4(),
        name: 'Zoloft',
        price: 61,
      },
    ],
  },
  {
    id: uuid.v4(),
    name: 'Rite Aid',
    products: [
      {
        id: uuid.v4(),
        name: 'Lisinopril',
        price: 21,
      },
      {
        id: uuid.v4(),
        name: 'Medrol',
        price: 30,
      },
      {
        id: uuid.v4(),
        name: 'Prozac',
        price: 41,
      },
    ],
  },
  {
    id: uuid.v4(),
    name: 'Walmart',
    products: [
      {
        id: uuid.v4(),
        name: 'Hydrocodone',
        price: 9,
      },
      {
        id: uuid.v4(),
        name: 'Prozac',
        price: 39,
      },
      {
        id: uuid.v4(),
        name: 'Xanax',
        price: 50,
      },
      {
        id: uuid.v4(),
        name: 'Zoloft',
        price: 60,
      },
    ],
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

  static search(query) {
    return new Promise((resolve, reject) => {
      let pharmacies = mockData;

      if (query !== '') {
        pharmacies = pharmacies.filter((pharmacy) => pharmacy.products.some((product) => product.name.toLowerCase().includes(query.toLowerCase())));
      }

      resolve(pharmacies.map((pharmacy) => pharmacy.id));
    });
  }
}
