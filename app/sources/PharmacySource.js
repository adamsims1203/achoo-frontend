import uuid from 'node-uuid';

const mockData = [
  {
    id: uuid.v4(),
    name: 'Walgreens',
    imageUrl: 'https://pbs.twimg.com/profile_images/467002768075395072/ya2By6bN.jpeg',
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
    imageUrl: 'https://s3.amazonaws.com/ja-assets/companylogos/897/CVS_logo_p_v_cmyk_c_redblk1__2__thumb_med.jpg',
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
    imageUrl: 'http://happycustomersreview.com/wp-content/uploads/2015/09/rite1.jpeg',
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
    imageUrl: 'http://www.radiosaturn.net/dance/wp-content/uploads/2015/06/walmart.jpg',
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
