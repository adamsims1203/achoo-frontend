import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import PharmacyDetailSource from '../sources/PharmacyDetailSource';
import PharmacyDetailActions from '../actions/PharmacyDetailActions';
import ProductActions from '../actions/ProductActions';

@createStore(alt)
@datasource(PharmacyDetailSource)
export default class PharmacyStore {
  state = {
    pharmacy: null,
    products: [],
    errorMessage: null,
  };

  @bind(PharmacyDetailActions.fetchPharmacy)
  onFetchPharmacy(pharmacyId) {
    if (!this.getInstance().isLoading()) {
      setImmediate(() => this.getInstance().fetch(pharmacyId));
    }
  }

  @bind(PharmacyDetailActions.receivedPharmacy)
  onReceivedPharmacy(response) {
    this.state.pharmacy = response.data;
    this.state.errorMessage = null;
  }

  @bind(PharmacyDetailActions.fetchingPharmacyFailed)
  onFetchingPharmacyFailed() {
    this.state.errorMessage = 'Error: fetching pharmacy failed';
  }

  @bind(ProductActions.fetchProducts)
  onFetchProducts(pharmacyId) {
    if (!this.getInstance().isLoading()) {
      setImmediate(() => this.getInstance().fetchProducts(pharmacyId));
    }
  }

  @bind(ProductActions.receivedProducts)
  onReceivedProducts(response) {
    this.state.products = response.data;
    this.state.errorMessage = null;
  }

  @bind(ProductActions.fetchingProductsFailed)
  onFetchingProductsFailed() {
    this.state.errorMessage = 'Error: fetching products failed';
  }
}
