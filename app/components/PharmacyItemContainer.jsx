import React, { Component } from 'react';
import PharmacyItem from './PharmacyItem';

export default class PharmacyItemContainer extends Component {
  static propTypes = {
    pharmacy: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    return <PharmacyItem pharmacy={this.props.pharmacy} />;
  }
}
