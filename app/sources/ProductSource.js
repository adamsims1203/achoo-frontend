import PharmacySource from './PharmacySource';

export default class ProductSource {
  static fetch() {
    return new Promise((resolve, reject) => {
      PharmacySource.fetch()
        .then((pharmacies) => {
          const products = pharmacies
            .map((pharmacy) => pharmacy.products)
            .reduce((a, b) => a.concat(b));

          resolve(products);
        })
        .catch((errorMessage) => {
          reject(errorMessage);
        });
    });
  }
}
