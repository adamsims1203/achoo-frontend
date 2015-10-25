import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import Products from './Products';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';

@connectToStores
export default class App extends Component {
  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }

  componentDidMount() {
    ProductActions.fetchProducts();
  }

  render() {
    if (this.props.errorMessage) {
      return (
        <div>Something is wrong</div>
      );
    }

    if (!this.props.products.length) {
      return (
        <div>Loading products...</div>
      );
    }

    return (
      <div>
        <Products items={this.props.products} />
      </div>
    );
  }
}
