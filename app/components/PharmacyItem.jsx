import React, { Component } from 'react';
import { Link } from 'react-router';

export default class PharmacyItem extends Component {
  static propTypes = {
    pharmacy: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
  };

  getPharmacyStarClass(pharmacy, starNumber) {
    const starsClass = 'static-rating-star';
    return pharmacy.score >= starNumber ? starsClass + ' SELECTED' : starsClass;
  }

  render() {
    const pharmacy = this.props.pharmacy;
    console.log(pharmacy);

    return (
      <div className="ListItem">
        <img className="ListItemImage" src={pharmacy.imageUrl}></img>
        <div className="ListItemName">
          <div className="ListItemName">{pharmacy.name}</div>
          <p>{pharmacy.address}</p>
        </div>
        <div className="ListItemSubcontainer">
          <span className="rating">
            <label className={this.getPharmacyStarClass(pharmacy, 1)} />
            <label className={this.getPharmacyStarClass(pharmacy, 2)} />
            <label className={this.getPharmacyStarClass(pharmacy, 3)} />
            <label className={this.getPharmacyStarClass(pharmacy, 4)} />
            <label className={this.getPharmacyStarClass(pharmacy, 5)} />
          </span>
          <Link className="PrimaryButton ListButton" to={`/pharmacies/${pharmacy.id}`}>View detail</Link>
        </div>
      </div>
    );
  }
}
