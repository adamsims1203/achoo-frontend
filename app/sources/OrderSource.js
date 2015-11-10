import axios from 'axios';
import OrderActions from '../actions/OrderActions';

const OrderSource = {
  fetch: {
    remote() {
      const jwt = localStorage.getItem('jwt');
      return axios.get(`http://localhost:3000/orders?token=${jwt}`);
    },

    loading: OrderActions.loadingOrders,
    success: OrderActions.receivedOrders,
    error: OrderActions.fetchingOrdersFailed,
  },
};

export default OrderSource;
