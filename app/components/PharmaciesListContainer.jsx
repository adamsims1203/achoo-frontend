import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import PharmacyStore from '../stores/PharmacyStore';
import PharmacyActions from '../actions/PharmacyActions';
import PharmaciesList from './PharmaciesList';

@connectToStores
export default class PharmaciesListContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [PharmacyStore];
  }

  static getPropsFromStores() {
    return PharmacyStore.getState();
  }
  /* eslint-enable react/sort-comp */

  static propTypes = {
    filteredPharmacies: React.PropTypes.array,
    errorMessage: React.PropTypes.string,
  };

  componentDidMount() {
    PharmacyActions.fetchPharmacies();
  }

  render() {
    return (
      <PharmaciesList
        pharmacies={this.props.filteredPharmacies}
        errorMessage={this.props.errorMessage}
      />
    );
  }
}
