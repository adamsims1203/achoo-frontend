import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import PharmacyDetailStore from '../stores/PharmacyDetailStore';
import PharmacyDetailActions from '../actions/PharmacyDetailActions';
import ProductActions from '../actions/ProductActions';
import PharmacyDetail from './PharmacyDetail';

@connectToStores
export default class PharmacyDetailContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [PharmacyDetailStore];
  }

  static getPropsFromStores() {
    return PharmacyDetailStore.getState();
  }
  /* eslint-enable react/sort-comp */

  static propTypes = {
    pharmacy: React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      phoneNumber: React.PropTypes.string,
      address: React.PropTypes.string,
      imageUrl: React.PropTypes.string,
    }),
    products: React.PropTypes.array.isRequired,
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
      />
    );
  }
}
