import axios from 'axios';
import querystring from 'querystring';
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

  rateOrder: {
    remote(state, orderRate) {
      const jwt = localStorage.getItem('jwt');
      return axios.put(`http://localhost:3000/orders/${orderRate.orderId}/score?token=${jwt}`,
        querystring.stringify({
          orderId: orderRate.orderId,
          score: orderRate.rate,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
    },

    success: OrderActions.receivedOrderRate,
    error: OrderActions.orderRateFailed,
  },
};

export default OrderSource;
