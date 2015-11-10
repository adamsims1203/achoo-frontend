import React, { Component } from 'react';

export default class SearchBox extends Component {
  static propTypes = {
    query: React.PropTypes.string.isRequired,
    onUpdateQuery: React.PropTypes.func.isRequired,
    onKeyDown: React.PropTypes.func.isRequired,
    onSearchClicked: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="SearchBox">
        <input type="search" value={this.props.query} placeholder="Search a drug, addict" onKeyDown={(evt) => this.props.onKeyDown(evt)} onChange={(evt) => this.props.onUpdateQuery(evt.target.value)} />
        <button type="submit" onClick={this.props.onSearchClicked}>Search</button>
      </div>
    );
  }
}
