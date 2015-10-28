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
      <div>
        <img className="PharmacyItemImage" src={pharmacy.imageUrl}></img>
        <div className="PharmacyItemName">{pharmacy.name}</div>
      </div>
    );
  }
}
