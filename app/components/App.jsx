import React, { Component } from 'react';
import ProductsListContainer from './ProductsListContainer';
import CartContainer from './CartContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <ProductsListContainer />
        <CartContainer />
      </div>
    );
  }
}
