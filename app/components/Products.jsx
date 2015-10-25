import React, { Component } from 'react';
import Product from './Product';

export default class Products extends Component {
  render() {
    const products = this.props.items;

    return <ul className="products">{products.map(this.renderProduct)}</ul>;
  }

  renderProduct(product) {
    return (
      <li className="product" key={`product${product.id}`}>
        <Product name={product.name} />
      </li>
    );
  }
}
