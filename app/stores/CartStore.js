import { createStore } from 'alt/utils/decorators';
import alt from '../libs/alt';
import CartActions from '../actions/CartActions';

@createStore(alt)
export default class CartStore {
  constructor() {
    this.bindActions(CartActions);

    this.products = {};
  }

  onAddToCart(product) {
    const id = product.id;
    product.quantity = id in this.products ? this.products[id].quantity + 1 : 1;
    this.products[id] = Object.assign({}, product);
  }

  onCheckout() {
    this.products = {};
  }

  onFinishCheckout(products) {
    console.log('You bought:', products); // eslint-disable-line no-console
  }

  static getAddedProducts() {
    const { products } = this.getState();
    return Object.keys(products).map((id) => products[id]);
  }

  static getTotal() {
    const total = this.getAddedProducts().reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);
    return total.toFixed(2);
  }
}
