import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import PharmacyActions from '../actions/PharmacyActions';
import PharmacySource from '../sources/PharmacySource';

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
}
