import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';
import SearchBox from './SearchBox';

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

  onUpdateQuery(newValue) {
    SearchActions.updateQuery(newValue);
  }

  onSearchClicked = () => {
    SearchActions.search(this.props.query);
  };

  render() {
    return (
      <SearchBox
        query={this.props.query}
        onUpdateQuery={this.onUpdateQuery}
        onSearchClicked={this.onSearchClicked}
      />
    );
  }
}
