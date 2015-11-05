import React, { Component } from 'react';
import PharmacyItem from './PharmacyItem';

export default class PharmacyItemContainer extends Component {
  static propTypes = {
    pharmacy: React.PropTypes.shape({
      id: React.PropTypes.number,
      name: React.PropTypes.string,
      phoneNumber: React.PropTypes.string,
      address: React.PropTypes.string,
      imageUrl: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    return <PharmacyItem pharmacy={this.props.pharmacy} />;
  }
}
