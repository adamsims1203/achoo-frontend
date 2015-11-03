import React, { Component } from 'react';
import PharmacyDetail from './PharmacyDetail'
import ProductsListContainer from './ProductsListContainer';
import CartContainer from './CartContainer';

export default class Pharmacy extends Component {
  render() {
    const { id } = this.props.params;

    return (
      <div className="PageContent">
        <PharmacyDetail />
        <div className="Content">
        	<ProductsListContainer />
          <CartContainer />
        </div>
      </div>
    );
  }
}
