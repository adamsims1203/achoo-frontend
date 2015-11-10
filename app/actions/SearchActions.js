import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';

@createActions(alt)
export default class SearchActions {
  constructor() {
    this.generateActions(
      'updateQuery',
      'search',
      'searchingPharmacies',
      'searchingPharmaciesFailed'
    );
  }
}
