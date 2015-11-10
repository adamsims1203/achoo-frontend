import React, { Component } from 'react';
import OrderItemContainer from './OrderItemContainer';

export default class OrdersList extends Component {
  static propTypes = {
    orders: React.PropTypes.array,
    errorMessage: React.PropTypes.string,
  };

  renderOrder(order) {

    return (
      <li key={`order${order.id}`}>
        <OrderItemContainer order={order} />
      </li>
    );
  }

  render() {
    if (this.props.errorMessage) {
      return <div>Something is wrong</div>;
    }

    const orders = this.props.orders;
    console.log(orders);

    if (!orders.length) {
      return <div>Loading orders...</div>;
    }

    return <ul className="List">{orders.map(this.renderOrders)}</ul>;
  }
}
