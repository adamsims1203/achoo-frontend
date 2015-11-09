import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from '../stores/LoginStore';
import PharmacyDetailStore from '../stores/PharmacyDetailStore';
import PharmacyDetailActions from '../actions/PharmacyDetailActions';
import ProductActions from '../actions/ProductActions';
import PharmacyDetail from './PharmacyDetail';

@connectToStores
export default class PharmacyDetailContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [PharmacyDetailStore, LoginStore];
  }

  static getPropsFromStores() {
    return Object.assign({}, PharmacyDetailStore.getState(), {
      loggedIn: LoginStore.isUserLoggedIn(),
    });
  }
  /* eslint-enable react/sort-comp */

  static propTypes = {
    params: React.PropTypes.object,
    pharmacy: React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      phoneNumber: React.PropTypes.string,
      address: React.PropTypes.string,
      imageUrl: React.PropTypes.string,
      score: React.PropTypes.number,
    }),
    products: React.PropTypes.array.isRequired,
    loggedIn: React.PropTypes.bool,
  };

  componentDidMount() {
    const pharmacyId = this.props.params.id;
    PharmacyDetailActions.fetchPharmacy(pharmacyId);
    ProductActions.fetchProducts(pharmacyId);
  }

  render() {
    return (
      <PharmacyDetail
        pharmacy={this.props.pharmacy}
        products={this.props.products}
        loggedIn={this.props.loggedIn}
      />
    );
  }
}
