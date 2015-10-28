import React, { Component } from 'react';
import Hero from './Hero';
import ProductsListContainer from './ProductsListContainer';
import CartContainer from './CartContainer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div className="Content">
        	<ProductsListContainer />
          <CartContainer />
        </div>
      </div>
    );
  }
}
