import React, { Component } from 'react';

export default class ProductItem extends Component {
  static propTypes = {
    product: React.PropTypes.shape({
      name: React.PropTypes.string,
      price: React.PropTypes.number,
    }).isRequired,
    isLoggedIn: React.PropTypes.bool,
    onAddToCartClicked: React.PropTypes.func.isRequired,
  };

  render() {
    const product = this.props.product;

    const addToCartButton = this.props.isLoggedIn ?
      <button className="PrimaryButton ListButton" onClick={this.props.onAddToCartClicked}>Add to cart</button> :
      '';

    return (
      <div className="ListItem">
        <img className="ListItemImage" src={product.imageUrl}></img>
        <div className="ListItemLeft">
          <div className="ListItemName">{product.name}</div>
          <div className="ListItemDescription">{product.description}</div>
        </div>
        <div className="ListItemRight">
          <div className="ListItemPrice PriceTag">${product.unitaryPrice}</div>
          {addToCartButton}
        </div>
      </div>
    );
  }
}
