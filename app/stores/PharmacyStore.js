import { createStore } from 'alt/utils/decorators';
import alt from '../libs/alt';
import PharmacyActions from '../actions/PharmacyActions';
import SearchActions from '../actions/SearchActions';

@createStore(alt)
export default class PharmacyStore {
  constructor() {
    this.bindActions(PharmacyActions);
    this.bindActions(SearchActions);

    this.pharmacies = [];
    this.filteredPharmacies = [];
    this.errorMessage = null;
  }

  onUpdatePharmacies(pharmacies) {
    this.pharmacies = pharmacies;
    this.filteredPharmacies = pharmacies;
    this.errorMessage = null;
  }

  onFetchPharmacies() {
    this.pharmacies = [];
    this.filteredPharmacies = [];
  }

  onPharmaciesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  onReceivedResults(ids) {
    this.filteredPharmacies = this.get(ids);
  }

  findPharmacy(id) {
    const pharmacies = this.pharmacies;
    const pharmacyIndex = pharmacies.findIndex((pharmacy) => pharmacy.id === id);

    if (pharmacyIndex < 0) {
      console.warn('Failed to find pharmacy', pharmacies, id);
    }

    return pharmacyIndex;
  }

  get(ids) {
    return (ids || []).map((id) => this.pharmacies[this.findPharmacy(id)]).filter((id) => id);
  }
}
