import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';
import CartSource from '../sources/CartSource';

@createActions(alt)
export default class CartActions {
  constructor() {
    this.generateActions(
      'addToCart',
      'removeFromCart',
      'finishCheckout',
      'cartFailed'
    );
  }

  checkout(products) {
    this.dispatch();

    CartSource.checkout(products)
      .then(() => {
        this.actions.finishCheckout(products);
      })
      .catch((errorMessage) => {
        this.actions.cartFailed(errorMessage);
      });
  }
}
