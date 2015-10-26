import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const products = this.props.products;
    const hasProducts = products.length > 0;

    const nodes = !hasProducts ?
      <div>Your cart is empty!</div> :
      products.map(this.renderProduct);

    return (
      <div>
        <div>Your cart</div>
        <div>{nodes}</div>
        <div>Total: ${this.props.total}</div>
        <button
          onClick={this.props.onCheckoutClicked}
          disabled={hasProducts ? '' : 'disabled'}>
          Checkout
        </button>
      </div>
    );
  }

  renderProduct(product) {
    return (
      <div key={`product${product.id}`}>
        {product.name} - ${product.price} x {product.quantity}
      </div>
    );
  }
}
