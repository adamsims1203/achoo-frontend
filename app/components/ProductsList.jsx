import React, { Component } from 'react';
import ProductItemContainer from './ProductItemContainer';

export default class ProductsList extends Component {
  render() {
    if (this.props.errorMessage) {
      return <div>Something is wrong</div>;
    }

    const products = this.props.products;

    if (!products.length) {
      return <div>Loading products...</div>;
    }

    return <ul>{products.map(this.renderProduct)}</ul>;
  }

  renderProduct(product) {
    return (
      <li key={`product${product.id}`}>
        <ProductItemContainer product={product} />
      </li>
    );
  }
}
