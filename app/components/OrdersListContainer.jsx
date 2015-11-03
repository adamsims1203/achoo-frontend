import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrderStore from '../stores/PharmacyStore';
import OrderActions from '../actions/OrderActions';
import OrdersList from './OrdersList';

@connectToStores
export default class OrdersListContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [OrderStore];
  }

  static getPropsFromStores() {
    return OrderStore.getState();
  }
  /* eslint-enable react/sort-comp */

  static propTypes = {
    orders: React.PropTypes.array,
    errorMessage: React.PropTypes.string,
  };

  componentDidMount() {
    OrdersActions.fetchOrders();
  }

  render() {
    return (
      <OrdersList
        orders={this.props.orders}
        errorMessage={this.props.errorMessage}
      />
    );
  }
}
