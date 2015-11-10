import axios from 'axios';
import OrderActions from '../actions/OrderActions';

const OrderSource = {
  fetch: {
    remote() {
      return axios.get('http://localhost:3000/orders', {
        transformRequest: axios.defaults.transformRequest.concat((data, headers) => {
          headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
        }),
      });
    },

    loading: OrderActions.loadingOrders,
    success: OrderActions.receivedOrders,
    error: OrderActions.fetchingOrdersFailed,
  },
};

export default OrderSource;
