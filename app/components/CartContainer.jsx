import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import CartStore from '../stores/CartStore';
import CartActions from '../actions/CartActions';
import Cart from './Cart';

@connectToStores
export default class CartContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [CartStore];
  }

  static getPropsFromStores() {
    return {
      products: CartStore.getAddedProducts(),
      total: CartStore.getTotal(),
    };
  }
  /* eslint-enable react/sort-comp */

  static propTypes = {
    products: React.PropTypes.array.isRequired,
    total: React.PropTypes.string.isRequired,
  };

  onCheckoutClicked = () => {
    const products = this.props.products;

    if (!products.length) {
      return;
    }

    CartActions.checkout(products);
  }

  render() {
    return (
      <Cart
        products={this.props.products}
        total={this.props.total}
        onCheckoutClicked={this.onCheckoutClicked}
      />
    );
  }
}
