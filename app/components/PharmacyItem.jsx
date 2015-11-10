import React, { Component } from 'react';
import { Link } from 'react-router';

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
        <div className="ListItemName">
          <div className="ListItemName">{pharmacy.name}</div>
          <p>{pharmacy.address}</p>
        </div>
        <div className="ListItemSubcontainer">
          <span className="rating">
            <label className="static-rating-star SELECTED" />
            <label className="static-rating-star SELECTED" />
            <label className="static-rating-star SELECTED" />
            <label className="static-rating-star" />
            <label className="static-rating-star" />
          </span>
          <Link className="PrimaryButton ListButton" to={`/pharmacies/${pharmacy.id}`}>View detail</Link>
        </div>
      </div>

    );
  }
}
