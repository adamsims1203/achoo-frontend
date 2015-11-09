import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer';
import Footer from './Footer';

export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    return (
      <div className="AppContainer">
        <HeaderContainer />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
