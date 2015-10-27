import { createStore } from 'alt/utils/decorators';
import alt from '../libs/alt';
import PharmacyActions from '../actions/PharmacyActions';

@createStore(alt)
export default class PharmacyStore {
  constructor() {
    this.bindActions(PharmacyActions);

    this.pharmacies = [];
    this.errorMessage = null;
  }

  onUpdatePharmacies(pharmacies) {
    this.pharmacies = pharmacies;
    this.errorMessage = null;
  }

  onFetchPharmacies() {
    this.pharmacies = [];
  }

  onPharmaciesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}
