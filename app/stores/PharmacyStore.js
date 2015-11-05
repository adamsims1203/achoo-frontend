import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import PharmacyActions from '../actions/PharmacyActions';
import PharmacySource from '../sources/PharmacySource';
// import SearchActions from '../actions/SearchActions';

@createStore(alt)
@datasource(PharmacySource)
export default class PharmacyStore {
  state = {
    pharmacies: [],
    errorMessage: null,
  };

  @bind(PharmacyActions.fetchPharmacies)
  onFetchPharmacies() {
    if (!this.getInstance().isLoading()) {
      setImmediate(() => this.getInstance().fetch());
    }
  }

  @bind(PharmacyActions.receivedPharmacies)
  onReceivedPharmacies(response) {
    this.state.pharmacies = response.data;
    this.state.errorMessage = null;
  }

  @bind(PharmacyActions.fetchingPharmaciesFailed)
  onFetchingPharmaciesFailed() {
    this.state.errorMessage = 'Error: fetching pharmacies failed';
  }

  // constructor() {
  //   this.pharmacies = [];
  //   this.filteredPharmacies = [];
  //   this.errorMessage = null;
  // }

  // onUpdatePharmacies(pharmacies) {
  //   this.pharmacies = pharmacies;
  //   this.filteredPharmacies = pharmacies;
  //   this.errorMessage = null;
  // }
  //
  // onFetchPharmacies() {
  //   this.pharmacies = [];
  //   this.filteredPharmacies = [];
  // }
  //
  // onPharmaciesFailed(errorMessage) {
  //   this.errorMessage = errorMessage;
  // }
  //
  // onReceivedResults(ids) {
  //   this.filteredPharmacies = this.get(ids);
  // }
  //
  // findPharmacy(id) {
  //   const pharmacies = this.pharmacies;
  //   const pharmacyIndex = pharmacies.findIndex((pharmacy) => pharmacy.id === id);
  //
  //   if (pharmacyIndex < 0) {
  //     console.warn('Failed to find pharmacy', pharmacies, id);
  //   }
  //
  //   return pharmacyIndex;
  // }
  //
  // get(ids) {
  //   return (ids || []).map((id) => this.pharmacies[this.findPharmacy(id)]).filter((id) => id);
  // }
}
