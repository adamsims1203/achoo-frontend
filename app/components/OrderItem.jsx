import React, { Component } from 'react';

export default class OrderItem extends Component {
  static propTypes = {
    order: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    return;
  }
}
