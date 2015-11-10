import React, { Component } from 'react';
import PharmacyDetailHeader from './PharmacyDetailHeader';
import ProductsList from './ProductsList';
import CartContainer from './CartContainer';

export default class PharmacyDetail extends Component {
  static propTypes = {
    pharmacy: React.PropTypes.object,
    products: React.PropTypes.array,
    isLoggedIn: React.PropTypes.bool,
  };

  render() {
    const cart = this.props.isLoggedIn ?
      <CartContainer
        pharmacy={this.props.pharmacy}
      /> :
      '';

    return (
      <div className="PageContent">
        <PharmacyDetailHeader pharmacy={this.props.pharmacy} />
        <div className="Content">
        	<ProductsList
            products={this.props.products}
            isLoggedIn={this.props.isLoggedIn}
          />
          {cart}
        </div>
      </div>
    );
  }
}
