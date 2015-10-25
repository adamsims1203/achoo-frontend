import { createStore } from 'alt/utils/decorators';
import alt from '../libs/alt';
import ProductActions from '../actions/ProductActions';

@createStore(alt)
export default class ProductStore {
  constructor() {
    this.bindActions(ProductActions);

    this.products = [];
    this.errorMessage = null;
  }

  onUpdateProducts(products) {
    this.products = products;
    this.errorMessage = null;
  }

  onFetchProducts() {
    this.products = [];
  }

  onProductsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}
