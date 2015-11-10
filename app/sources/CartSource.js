import axios from 'axios';
import CartActions from '../actions/CartActions';

const CartSource = {
  checkout: {
    remote(state, pharmacyId) {
      const orderLines = Object.keys(state.products).map((productId) => {
        return {
          productId: state.products[productId].id,
          quantity: state.products[productId].quantity,
        };
      });

      const jwt = localStorage.getItem('jwt');
      return axios.post(`http://localhost:3000/orders?token=${jwt}`, {
        orderLines,
        order: { pharmacyId },
      });
    },

    success: CartActions.finishCheckout,
    error: CartActions.checkoutFailed,
  },
};

export default CartSource;
