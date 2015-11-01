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
        imageUrl: 'http://nikka88.galeon.com/prozac.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Xanax',
        price: 48,
        imageUrl: 'http://www.uksleepingtablets.org/image/cache/data/xanax-500x500.jpg',
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
        imageUrl: 'http://store.mcguff.com/Images/Images550/005262%20Hydrocodone%20with%20Apap%20%5BC-III%5D,%2010%20per%20%20500,%20100%20Tablets%20per%20Bottle%20McGuffMedical.com.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Lisinopril',
        price: 23,
        imageUrl: 'https://www.healthexpress.co.uk/images/product/lisinopril-l.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Medrol',
        price: 32,
        imageUrl: 'http://northern-express.com/uploads/product/128.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Prozac',
        price: 43,
        imageUrl: 'http://nikka88.galeon.com/prozac.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Xanax',
        price: 53,
        imageUrl: 'http://www.uksleepingtablets.org/image/cache/data/xanax-500x500.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Zoloft',
        price: 61,
        imageUrl: 'http://www.abis-pharma.de/images/500/2198064_b.jpg',
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
        imageUrl: 'https://www.healthexpress.co.uk/images/product/lisinopril-l.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Medrol',
        price: 30,
        imageUrl: 'http://northern-express.com/uploads/product/128.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Prozac',
        price: 41,
        imageUrl: 'http://nikka88.galeon.com/prozac.jpg',
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
        imageUrl: 'http://store.mcguff.com/Images/Images550/005262%20Hydrocodone%20with%20Apap%20%5BC-III%5D,%2010%20per%20%20500,%20100%20Tablets%20per%20Bottle%20McGuffMedical.com.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Prozac',
        price: 39,
        imageUrl: 'http://nikka88.galeon.com/prozac.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Xanax',
        price: 50,
        imageUrl: 'http://www.uksleepingtablets.org/image/cache/data/xanax-500x500.jpg',
      },
      {
        id: uuid.v4(),
        name: 'Zoloft',
        price: 60,
        imageUrl: 'http://www.abis-pharma.de/images/500/2198064_b.jpg',
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
