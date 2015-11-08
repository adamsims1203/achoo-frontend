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
        <img className="ListItemImage" src={pharmacy.imageUrl}></img>
        <div>
          <Link to={`/pharmacies/${pharmacy.id}`}>
            <div className="ListItemName">{pharmacy.name}</div>
          </Link>
          <p>{pharmacy.address}</p>
        </div>
        <span className="rating">
              <label className="static-rating-star SELECTED" />
              <label className="static-rating-star SELECTED" />
              <label className="static-rating-star SELECTED" />
              <label className="static-rating-star" />
              <label className="static-rating-star" />
        </span>
      </div>
    );
  }
}
