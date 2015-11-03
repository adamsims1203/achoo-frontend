import React, { Component } from 'react';
import { Link } from 'react-router';

export default class OrderItem extends Component {
  static propTypes = {
    order: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    const order = this.props.order;

    return (
      <div className="ListItem">
        <img className="ListItemImage" src={order.pharmacy.imageUrl}></img>
        <Link to={`/pharmacies/${order.pharmacy.id}`}>
          <div className="ListItemName">{order.pharmacy.name}</div>
        </Link>
      </div>
    );
  }
}
