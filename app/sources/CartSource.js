import axios from 'axios';
import CartActions from '../actions/CartActions';

const CartSource = {
  checkout: {
    remote() {
      return axios.post('http://localhost:3000/orders', { });
    },

    success: CartActions.finishCheckout,
    error: CartActions.checkoutFailed,
  },
};

export default CartSource;
