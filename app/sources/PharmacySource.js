import uuid from 'node-uuid';

const mockData = [
  {
    id: uuid.v4(),
    name: 'Walgreens',
    imageUrl: 'https://pbs.twimg.com/profile_images/467002768075395072/ya2By6bN.jpeg'
  },
  {
    id: uuid.v4(),
    name: 'CVS Health',
    imageUrl: 'https://s3.amazonaws.com/ja-assets/companylogos/897/CVS_logo_p_v_cmyk_c_redblk1__2__thumb_med.jpg'
  },
  {
    id: uuid.v4(),
    name: 'Rite Aid',
    imageUrl: 'http://happycustomersreview.com/wp-content/uploads/2015/09/rite1.jpeg'
  },
  {
    id: uuid.v4(),
    name: 'Walmart',
    imageUrl: 'http://www.radiosaturn.net/dance/wp-content/uploads/2015/06/walmart.jpg'
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
