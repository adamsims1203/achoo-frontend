import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import SessionStore from '../stores/SessionStore';
import PharmacyDetailStore from '../stores/PharmacyDetailStore';
import PharmacyDetailActions from '../actions/PharmacyDetailActions';
import ProductActions from '../actions/ProductActions';
import PharmacyDetail from './PharmacyDetail';

@connectToStores
export default class PharmacyDetailContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [PharmacyDetailStore, SessionStore];
  }

  static getPropsFromStores() {
    return Object.assign({}, PharmacyDetailStore.getState(), {
      isLoggedIn: SessionStore.isLoggedIn(),
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
    isLoggedIn: React.PropTypes.bool,
  };

  componentDidMount() {
    const pharmacyId = this.props.params.id;
    PharmacyDetailActions.fetchPharmacy(pharmacyId);
    ProductActions.fetchProducts(pharmacyId);
  }

  render() {
    return (
      <PharmacyDetail
        pharmacyId={this.props.params.id}
        pharmacy={this.props.pharmacy}
        products={this.props.products}
        isLoggedIn={this.props.isLoggedIn}
      />
    );
  }
}
