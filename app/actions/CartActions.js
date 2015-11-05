import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';

@createActions(alt)
export default class CartActions {
  constructor() {
    this.generateActions(
      'addToCart',
      'removeFromCart',
      'checkout',
      'finishCheckout',
      'checkoutFailed',
    );
  }
}
