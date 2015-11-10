import React, { Component } from 'react';

export default class OrderItem extends Component {
  static propTypes = {
    order: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
    onRateChanged: React.PropTypes.func,
  };

  getPharmacyStarClass(score, starNumber) {
    const starsClass = 'static-rating-star';
    return score >= starNumber ? starsClass + ' SELECTED' : starsClass;
  }

  calculateTotal(order) {
    return order.orderLines
      .map((orderLine) => orderLine.productPrice * orderLine.quantity)
      .reduce((priceA, priceB) => priceA + priceB);
  }

  renderInputStars(order) {
    return (
      <span className="rating">
        <input type="radio" className="rating-input"
          id={`rating-input-1-5-${order.id}`}
          name={`rating-input-1-${order.id}`}
          value="5" onChange={this.props.onRateChanged} />
        <label htmlFor={`rating-input-1-5-${order.id}`} className="rating-star"></label>
        <input type="radio" className="rating-input"
          id={`rating-input-1-4-${order.id}`}
          name={`rating-input-1-${order.id}`}
          value="4" onChange={this.props.onRateChanged} />
        <label htmlFor={`rating-input-1-4-${order.id}`} className="rating-star"></label>
        <input type="radio" className="rating-input"
          id={`rating-input-1-3-${order.id}`}
          name={`rating-input-1-${order.id}`}
          value="3" onChange={this.props.onRateChanged} />
        <label htmlFor={`rating-input-1-3-${order.id}`} className="rating-star"></label>
        <input type="radio" className="rating-input"
          id={`rating-input-1-2-${order.id}`}
          name={`rating-input-1-${order.id}`}
          value="2" onChange={this.props.onRateChanged} />
        <label htmlFor={`rating-input-1-2-${order.id}`} className="rating-star"></label>
        <input type="radio" className="rating-input"
          id={`rating-input-1-1-${order.id}`}
          name={`rating-input-1-${order.id}`}
          value="1" onChange={this.props.onRateChanged} />
        <label htmlFor={`rating-input-1-1-${order.id}`} className="rating-star"></label>
      </span>
    );
  }

  renderStaticStars(score) {
    return (
      <span className="rating">
        <label className={this.getPharmacyStarClass(score, 1)} />
        <label className={this.getPharmacyStarClass(score, 2)} />
        <label className={this.getPharmacyStarClass(score, 3)} />
        <label className={this.getPharmacyStarClass(score, 4)} />
        <label className={this.getPharmacyStarClass(score, 5)} />
      </span>
    );
  }

  renderStars(order) {
    return order.score !== null ? this.renderStaticStars(order.score) : this.renderInputStars(order);
  }

  renderOrderLine(orderLine) {
    return (
      <li key={`order${orderLine.orderId}product${orderLine.productId}`}>
        {orderLine.productName} (x{orderLine.quantity})
      </li>
    );
  }

  render() {
    const order = this.props.order;
    const orderTotal = this.calculateTotal(order);

    return (
      <div className="ListItem">
        <img className="ListItemImage" src={order.pharmacyImageUrl}></img>
        <div className="ListItemLeft">
          <div className="ListItemName">{order.pharmacyName}</div>
          <div className="ListItemDescription">
            <ul>{order.orderLines.map(this.renderOrderLine)}</ul>
          </div>
        </div>
        <div className="ListItemRight">
          {this.renderStars(order)}
          <div className="OrderTotal">Total: ${orderTotal}</div>
        </div>
      </div>
    );
  }
}
