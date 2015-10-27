import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';
import PharmacySource from '../sources/PharmacySource';

@createActions(alt)
export default class PharmacyActions {
  constructor() {
    this.generateActions(
      'updatePharmacies',
      'pharmaciesFailed'
    );
  }

  fetchPharmacies() {
    this.dispatch();

    PharmacySource.fetch()
      .then((pharmacies) => {
        this.actions.updatePharmacies(pharmacies);
      })
      .catch((errorMessage) => {
        this.actions.pharmaciesFailed(errorMessage);
      });
  }
}
