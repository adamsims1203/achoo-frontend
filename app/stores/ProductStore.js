import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import ProductActions from '../actions/ProductActions';
import ProductSource from '../sources/ProductSource';

@createStore(alt)
@datasource(ProductSource)
export default class ProductStore {
  constructor() {
    this.pharmacyId = null;
    this.products = [];
    this.errorMessage = null;
  }

  @bind(ProductActions.fetchProducts)
  onFetchProducts() {
    if (!this.getInstance().isLoading()) {
      setImmediate(() => this.getInstance().fetch());
    }
  }

  @bind(ProductActions.receivedProducts)
  onReceivedProducts(products) {
    this.products = products;
    this.errorMessage = null;
  }

  @bind(ProductActions.fetchingProductsFailed)
  onFetchingProductsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}
