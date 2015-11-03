import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <section className="PharmacyDetail">
        <div className="PharmacyDetailContainer">
          <img src="https://pbs.twimg.com/profile_images/467002768075395072/ya2By6bN.jpeg" />
          <div>
            <h1>Wallgreens</h1>
            <p>8th Road, NY</p>
            <p>(+001) 123-456-789</p>
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