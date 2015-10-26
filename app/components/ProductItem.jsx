import React, { Component } from 'react';

export default class ProductItem extends Component {
  render() {
    const product = this.props.product;

    return (
      <div>
        <div>{product.name} - ${product.price}</div>
        <button onClick={this.props.onAddToCartClicked}>Add to cart</button>
      </div>
    );
  }
}
