import React, { Component } from 'react';
import ProductItemContainer from './ProductItemContainer';

export default class ProductsList extends Component {
  static propTypes = {
    products: React.PropTypes.array,
    errorMessage: React.PropTypes.string,
    loggedIn: React.PropTypes.bool
  };

  renderProduct = (product) => {
    return (
      <li key={`product${product.id}`}>
        <ProductItemContainer product={product} 
        loggedIn={this.props.loggedIn}/>
      </li>
    );
  }

  render() {
    if (this.props.errorMessage) {
      return <div>Something is wrong</div>;
    }

    const products = this.props.products;

    if (!products.length) {
      return <div>Loading products...</div>;
    }

    return <ul className="List ProductList">{products.map(this.renderProduct)}</ul>;
  }
}
