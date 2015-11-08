import React, { Component } from 'react';
import OrdersListContainer from './OrdersListContainer';

export default class PharmacyDetail extends Component {
  render() {
    return (
      <div className="PageContent">
        <div className="Content">
        	<OrdersListContainer />
        </div>
      </div>
    );
  }
}
