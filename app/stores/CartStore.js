import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import history from '../libs/history';
import CartActions from '../actions/CartActions';
import CartSource from '../sources/CartSource';

@createStore(alt)
@datasource(CartSource)
export default class CartStore {
  state = {
    products: {},
    errorMessage: null,
  };

  @bind(CartActions.addToCart)
  onAddToCart(product) {
    const id = product.id;
    product.quantity = id in this.state.products ? this.state.products[id].quantity + 1 : 1;
    this.state.products[id] = Object.assign({}, product);
  }

  @bind(CartActions.removeFromCart)
  onRemoveFromCart(product) {
    const id = product.id;
    delete this.state.products[id];
  }

  @bind(CartActions.checkout)
  onCheckout(pharmacyId) {
    setImmediate(() => this.getInstance().checkout(pharmacyId));
  }

  @bind(CartActions.finishCheckout)
  onFinishCheckout(products) {
    this.state.products = {};
    history.replaceState(null, '/orders');
  }

  @bind(CartActions.checkoutFailed)
  onCheckoutFailed() {

  }

  static getAddedProducts() {
    const { products } = this.getState();
    return Object.keys(products).map((id) => products[id]);
  }

  static getTotal() {
    const total = this.getAddedProducts().reduce((sum, product) => {
      return sum + product.unitaryPrice * product.quantity;
    }, 0);
    return total.toFixed(2);
  }
}
