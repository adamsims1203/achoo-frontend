import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';
import SearchBox from './SearchBox';

const ENTER_KEY_CODE = 13;

@connectToStores
export default class SearchBoxContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [SearchStore];
  }

  static getPropsFromStores() {
    return SearchStore.getState();
  }
  /* eslint-enable react/sort-comp */

  static propTypes = {
    query: React.PropTypes.string.isRequired,
  };

  onUpdateQuery(query) {
    SearchActions.updateQuery(query);
  }

  onSearchClicked() {
    SearchActions.search();
  }

  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      SearchActions.search();
    }
  }

  render() {
    return (
      <SearchBox
        query={this.props.query}
        onUpdateQuery={this.onUpdateQuery}
        onKeyDown={this.onKeyDown}
        onSearchClicked={this.onSearchClicked}
      />
    );
  }
}
