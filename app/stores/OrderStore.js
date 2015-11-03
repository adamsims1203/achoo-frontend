import { createStore } from 'alt/utils/decorators';
import alt from '../libs/alt';
import OrderActions from '../actions/OrderActions';

@createStore(alt)
export default class OrderStore {
  constructor() {
    this.bindActions(OrderActions);

    this.orders = [];
    this.errorMessage = null;
  }

  onUpdateOrders(orders) {
    this.orders = orders;
    this.errorMessage = null;
  }

  onFetchOrders() {
    this.orders = [];
  }

  onOrdersFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  findOrder(id) {
    const orders = this.orders;
    const orderIndex = orders.findIndex((order) => order.id === id);

    if (orderIndex < 0) {
      console.warn('Failed to find order', orders, id);
    }

    return orderIndex;
  }

  get(ids) {
    return (ids || []).map((id) => this.orders[this.findOrder(id)]).filter((id) => id);
  }
}
