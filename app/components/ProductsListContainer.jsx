import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';
import ProductsList from './ProductsList';

@connectToStores
export default class ProductsListContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [ProductStore];
  }

  static getPropsFromStores() {
    return ProductStore.getState();
  }
  /* eslint-enable react/sort-comp */

  static propTypes = {
    products: React.PropTypes.array,
    errorMessage: React.PropTypes.string,
  };

  componentDidMount() {
    ProductActions.fetchProducts();
  }

  render() {
    return (
      <ProductsList
        products={this.props.products}
        errorMessage={this.props.errorMessage}
      />
    );
  }
}
