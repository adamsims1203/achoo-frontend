import React, { Component } from 'react';
import PharmacyItemContainer from './PharmacyItemContainer';

export default class ProductsList extends Component {
  static propTypes = {
    pharmacies: React.PropTypes.array,
    errorMessage: React.PropTypes.string,
  };

  renderPharmacy(pharmacy) {
    return (
      <li key={`pharmacy${pharmacy.id}`}>
        <PharmacyItemContainer pharmacy={pharmacy} />
      </li>
    );
  }

  render() {
    if (this.props.errorMessage) {
      return <div>Something is wrong</div>;
    }

    const pharmacies = this.props.pharmacies;

    if (!pharmacies.length) {
      return <div className="EmptyList">Hey, yo! No results for that search...</div>;
    }

    return <ul className="List">{pharmacies.map(this.renderPharmacy)}</ul>;
  }
}
