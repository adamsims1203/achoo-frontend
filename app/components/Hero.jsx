import leftHand from '../assets/left-hand.svg';
import rightHand from '../assets/right-hand.svg';

import React, { Component } from 'react';

export default class Hero extends Component {
  render() {
    return (
      <section className="Hero">
        <figure className="HeroLeftHand">
          <img src={leftHand} />
        </figure>
        <figure className="HeroRightHand">
          <img src={rightHand} />
        </figure>
        <h1>Get your drugs, junkie!</h1>
        <p>Delivering health to your door</p>
        <div className="SearchBox">
          <input type="search" placeholder="Search your drug, addict" />
          <button type="submit">Search</button>
        </div>
      </section>
    );
  }
}
