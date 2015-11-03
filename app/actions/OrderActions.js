import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';
import OrderSource from '../sources/OrderSource';

@createActions(alt)
export default class OrderActions {
  constructor() {
    this.generateActions(
      'updateOrders',
      'ordersFailed'
    );
  }

  fetchOrders() {
    this.dispatch();

    OrderSource.fetch()
      .then((orders) => {
        this.actions.updateOrders(orders);
      })
      .catch((errorMessage) => {
        this.actions.ordersFailed(errorMessage);
      });
  }
}
