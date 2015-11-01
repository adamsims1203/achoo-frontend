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
      <div className="ListItem">
        <img className="ListItemImage" src={pharmacy.imageUrl}></img>
        <div className="ListItemName">{pharmacy.name}</div>
      </div>
    );
  }
}