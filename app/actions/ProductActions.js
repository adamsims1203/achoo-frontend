import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';
import ProductSource from '../sources/ProductSource';

@createActions(alt)
export default class ProductActions {
  constructor() {
    this.generateActions(
      'updateProducts',
      'productsFailed'
    );
  }

  fetchProducts() {
    this.dispatch();

    ProductSource.fetch()
      .then((products) => {
        this.actions.updateProducts(products);
      })
      .catch((errorMessage) => {
        this.actions.productsFailed(errorMessage);
      });
  }
}
