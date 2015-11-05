import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';

@createActions(alt)
export default class ProductActions {
  constructor() {
    this.generateActions(
      'fetchProducts',
      'loadingProducts',
      'receivedProducts',
      'fetchingProductsFailed',
    );
  }
}
