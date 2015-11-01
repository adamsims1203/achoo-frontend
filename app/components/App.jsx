import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div className="AppContainer">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
