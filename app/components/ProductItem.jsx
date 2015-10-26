import React, { Component } from 'react';

export default class ProductItem extends Component {
  static propTypes = {
    product: React.PropTypes.shape({
      name: React.PropTypes.string,
      price: React.PropTypes.number,
    }).isRequired,
    onAddToCartClicked: React.PropTypes.func.isRequired,
  };

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
