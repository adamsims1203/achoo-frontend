import React, { Component } from 'react';
import OrderItem from './OrderItem';

export default class OrderItemContainer extends Component {
  static propTypes = {
    order: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    return <OrderItem order={this.props.order} />;
  }
}
