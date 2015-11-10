import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import OrderActions from '../actions/OrderActions';
import OrderSource from '../sources/OrderSource';

@createStore(alt)
@datasource(OrderSource)
export default class OrderStore {
  state = {
    orders: [],
    errorMessage: null,
  };

  @bind(OrderActions.fetchOrders)
  onFetchOrders() {
    if (!this.getInstance().isLoading()) {
      setImmediate(() => this.getInstance().fetch());
    }
  }

  @bind(OrderActions.receivedOrders)
  onReceivedOrders(response) {
    this.state.orders = response.data;
    this.state.errorMessage = null;
  }

  @bind(OrderActions.fetchingOrdersFailed)
  onFetchingOrdersFailed() {

  }
}
