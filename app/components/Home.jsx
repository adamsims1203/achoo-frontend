import React, { Component } from 'react';
import Hero from './Hero';
import PharmaciesListContainer from './PharmaciesListContainer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <PharmaciesListContainer />
      </div>
    );
  }
}
