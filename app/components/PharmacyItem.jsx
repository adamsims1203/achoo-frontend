import React, { Component } from 'react';

export default class PharmacyItem extends Component {
  static propTypes = {
    pharmacy: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    const pharmacy = this.props.pharmacy;

    return (
      <div className="Item">
        <img className="ItemImage" src={pharmacy.imageUrl}></img>
        <div className="ItemName">{pharmacy.name}</div>
      </div>
    );
  }
}