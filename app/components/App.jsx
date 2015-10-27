import React, { Component } from 'react';
import LoginContainer from './LoginContainer';
import ProductsListContainer from './ProductsListContainer';
import CartContainer from './CartContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <LoginContainer />
        <ProductsListContainer />
        <CartContainer />
      </div>
    );
  }
}
