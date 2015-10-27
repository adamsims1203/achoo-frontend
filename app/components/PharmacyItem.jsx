import React, { Component } from 'react';

export default class PharmacyItem extends Component {
  static propTypes = {
    pharmacy: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
    onAddToCartClicked: React.PropTypes.func.isRequired,
  };

  render() {
    const pharmacy = this.props.pharmacy;

    return (
      <div>
        <div>{pharmacy.name}</div>
      </div>
    );
  }
}
