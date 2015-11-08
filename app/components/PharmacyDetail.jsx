import React, { Component } from 'react';
import PharmacyDetailHeader from './PharmacyDetailHeader';
import ProductsList from './ProductsList';
import CartContainer from './CartContainer';

export default class PharmacyDetail extends Component {

  render() {
    var cart = this.props.loggedIn ? <CartContainer /> : "";
    return (
      <div className="PageContent">
        <PharmacyDetailHeader pharmacy={this.props.pharmacy} />
        <div className="Content">
        	<ProductsList products={this.props.products} 
            loggedIn = {this.props.loggedIn}/>
          {cart}
        </div>
      </div>
    );
  }
}
