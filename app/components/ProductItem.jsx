import React, { Component } from 'react';

export default class ProductItem extends Component {
  static propTypes = {
    product: React.PropTypes.shape({
      name: React.PropTypes.string,
      price: React.PropTypes.number,
    }).isRequired,
    loggedIn: React.PropTypes.bool,
    onAddToCartClicked: React.PropTypes.func.isRequired,
  };

  render() {
    const product = this.props.product;

    const addToCartButton = this.props.loggedIn ?
      <button className="PrimaryButton CartButton" onClick={this.props.onAddToCartClicked}>Add to cart</button>
      : '';

    return (
      <div className="ListItem">
        <img className="ListItemImage" src={product.imageUrl}></img>
        <div className="ListItemName">{product.name}</div>
        <div className="ListItemSubcontainer">
          <div className="ListItemPrice PriceTag">${product.unitaryPrice}</div>
          {addToCartButton}
        </div>
      </div>
    );
  }
}
