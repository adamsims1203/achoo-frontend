import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import PharmacySource from '../sources/PharmacySource';
import SearchActions from '../actions/SearchActions';

@createStore(alt)
@datasource(PharmacySource)
export default class SearchStore {
  state = {
    query: '',
  };

  @bind(SearchActions.updateQuery)
  onUpdateQuery(query) {
    this.state.query = query;
  }

  @bind(SearchActions.search)
  onSearch() {
    if (!this.getInstance().isLoading()) {
      setImmediate(() => this.getInstance().search(this.state.query));
    }
  }
}
