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
      <div className="ListItem">
        <img className="ListItemImage" src={product.imageUrl}></img>
        <div className="ListItemName">{product.name}</div>
        <div className="ListItemSubcontainer">
          <div className="ListItemPrice PriceTag">${product.price}</div>
          <button className="PrimaryButton CartButton" onClick={this.props.onAddToCartClicked}>Add to cart</button>
        </div>
      </div>
    );
  }
}
