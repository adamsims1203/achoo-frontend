import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';
import ProductsList from './ProductsList';

@connectToStores
export default class ProductsListContainer extends Component {
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
    return <ProductsList products={this.props.products} />;
  }
}
