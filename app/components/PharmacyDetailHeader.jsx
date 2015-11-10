import React, { Component } from 'react';

export default class PharmacyDetailHeader extends Component {
  static propTypes = {
    pharmacy: React.PropTypes.object,
    products: React.PropTypes.array,
  };

  getPharmacyStarClass(pharmacy, starNumber) {
    const starsClass = 'static-rating-star';
    return pharmacy.score >= starNumber ? starsClass + ' SELECTED' : starsClass;
  }

  render() {
    const pharmacy = this.props.pharmacy;

    if (!pharmacy) {
      return <div>Loading pharmacy...</div>;
    }

    return (
      <section className="PharmacyDetail">
        <div className="PharmacyDetailContainer">
          <img src={pharmacy.imageUrl} />
          <div>
            <h1>{pharmacy.name}</h1>
            <p>{pharmacy.address}</p>
            <p>{pharmacy.phoneNumber}</p>
            <span className="rating">
              <label className={this.getPharmacyStarClass(pharmacy, 1)}/>
              <label className={this.getPharmacyStarClass(pharmacy, 2)} />
              <label className={this.getPharmacyStarClass(pharmacy, 3)} />
              <label className={this.getPharmacyStarClass(pharmacy, 4)} />
              <label className={this.getPharmacyStarClass(pharmacy, 5)} />
            </span>
          </div>
        </div>
      </section>
    );
  }
}
