import React, { Component } from 'react';
import CartActions from '../actions/CartActions';
import ProductItem from './ProductItem';

export default class ProductItemContainer extends Component {
  static propTypes = {
    product: React.PropTypes.shape({
      name: React.PropTypes.string,
      price: React.PropTypes.number,
      loggedIn: React.PropTypes.bool
    },
    ).isRequired,
  };

  onAddToCartClicked = () => {
    CartActions.addToCart(this.props.product);
  }

  render() {
    return (
      <ProductItem
        product={this.props.product}
        onAddToCartClicked={this.onAddToCartClicked}
        loggedIn={this.props.loggedIn}
      />
    );
  }
}
