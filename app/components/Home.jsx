import React, { Component } from 'react';
import Hero from './Hero';
import PharmaciesListContainer from './PharmaciesListContainer';
import ProductsListContainer from './ProductsListContainer';
import CartContainer from './CartContainer'

export default class Home extends Component {
  render() {
    return (
      <div className="PageContent">
        <Hero />
        <div className="Content">
        	<PharmaciesListContainer />
          
        </div>
      </div>
    );
  }
}