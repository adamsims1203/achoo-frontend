import axios from 'axios';
import OrderActions from '../actions/OrderActions';

const OrderSource = {
  fetch: {
    remote() {
      return axios.get('http://localhost:3000/orders');
    },

    loading: OrderActions.loadingOrders,
    success: OrderActions.receivedOrders,
    error: OrderActions.fetchingOrdersFailed,
  },
};

export default OrderSource;
