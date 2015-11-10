import React, { Component } from 'react';
import OrderItem from './OrderItem';
import OrderActions from '../actions/OrderActions';

export default class OrderItemContainer extends Component {
  static propTypes = {
    order: React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
    }).isRequired,
  };

  onRateChanged = (evt) => {
    const orderId = this.props.order.id;
    const rate = evt.currentTarget.value;
    OrderActions.rateOrder({ orderId, rate });
  };

  render() {
    return (
      <OrderItem
        order={this.props.order}
        onRateChanged={this.onRateChanged}
      />
    );
  }
}
