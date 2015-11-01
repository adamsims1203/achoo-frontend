import React, { Component } from 'react';
import CartItem from './CartItem';
import CartActions from '../actions/CartActions';

export default class CartItemContainer extends Component {
  static propTypes = {
    product: React.PropTypes.shape({
      name: React.PropTypes.string,
      quantity: React.PropTypes.number,
      price: React.PropTypes.number,
    }).isRequired,
  };

  onRemoveFromCartClicked = () => {
    CartActions.removeFromCart(this.props.product);
  }

  render() {
    return (
      <CartItem
        product={this.props.product}
        onRemoveFromCartClicked={this.onRemoveFromCartClicked}
      />
    );
  }
}
