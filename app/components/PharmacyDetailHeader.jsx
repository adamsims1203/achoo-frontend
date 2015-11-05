import React, { Component } from 'react';

export default class PharmacyDetailHeader extends Component {
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
              <label className="static-rating-star SELECTED" />
              <label className="static-rating-star SELECTED" />
              <label className="static-rating-star SELECTED" />
              <label className="static-rating-star" />
              <label className="static-rating-star" />
            </span>
          </div>
        </div>
      </section>
    );
  }
}
