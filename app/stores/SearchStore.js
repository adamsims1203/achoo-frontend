import { createStore } from 'alt/utils/decorators';
import alt from '../libs/alt';
import SearchActions from '../actions/SearchActions';

@createStore(alt)
export default class SearchStore {
  constructor() {
    this.bindActions(SearchActions);

    this.query = '';
  }

  onUpdateQuery(query) {
    this.query = query;
  }
}
