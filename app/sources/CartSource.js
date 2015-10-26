export default class CartSource {
  static checkout(products) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 250);
    });
  }
}
