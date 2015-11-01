import React, { Component } from 'react';
import CartItemContainer from './CartItemContainer';

export default class Cart extends Component {
  static propTypes = {
    products: React.PropTypes.array.isRequired,
    total: React.PropTypes.string.isRequired,
    onCheckoutClicked: React.PropTypes.func.isRequired,
  };

  renderProduct(product) {
    return (
      <CartItemContainer product={product} />
    );
  }

  render() {
    const products = this.props.products;
    const hasProducts = products.length > 0;

    const nodes = !hasProducts ?
      <div>Your cart is empty!</div> :
      products.map(this.renderProduct);

    return (
      <div className="Cart">
        <h3>Your cart</h3>
        <div>{nodes}</div>
        <div className="CartBottomLine">
          <div>Total: ${this.props.total}</div>
          <button
            onClick={this.props.onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </button>
        </div>
      </div>
    );
  }
}
