import React, { Component } from 'react';
import CartActions from '../actions/CartActions';
import ProductItem from './ProductItem';

export default class ProductItemContainer extends Component {
  onAddToCartClicked = () => {
    CartActions.addToCart(this.props.product);
  }

  render() {
    return (
      <ProductItem
        product={this.props.product}
        onAddToCartClicked={this.onAddToCartClicked}
      />
    );
  }
}
