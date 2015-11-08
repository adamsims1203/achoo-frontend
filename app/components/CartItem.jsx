import React, { Component } from 'react';

export default class CartItem extends Component {
  static propTypes = {
    product: React.PropTypes.shape({
      name: React.PropTypes.string,
      quantity: React.PropTypes.number,
      price: React.PropTypes.number,
    }).isRequired,
    onRemoveFromCartClicked: React.PropTypes.func.isRequired,
  };

  render() {
    const product = this.props.product;

    return (
      <div className="CartProductLine" key={`product${product.id}`}>
        <div>{product.name}</div>
        <div>{product.quantity} x ${product.unitaryPrice} <button onClick={this.props.onRemoveFromCartClicked}>x</button></div>
      </div>
    );
  }
}
