import React, { Component } from 'react';
import ProductsListContainer from './ProductsListContainer';
import CartContainer from './CartContainer'

export default class Pharmacy extends Component {
   render() {
    let { name } = this.props.params

    return (
      <div className="PageContent">
        <h1 className="PharmacyTitle">{name}</h1>
        <div className="Content">
        	<ProductsListContainer />
          <CartContainer />
        </div>
      </div>
    );
  }
}