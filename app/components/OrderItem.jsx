import React, { Component } from 'react';

export default class OrderItem extends Component {
  static propTypes = {
    order: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
    onRateChanged: React.PropTypes.func,
  };

  renderOrderLine(orderLine) {
    return (
      <li key={`order${orderLine.orderId}product${orderLine.productId}`}>
        {orderLine.productName} (x{orderLine.quantity})
      </li>
    );
  }

  render() {
    const order = this.props.order;

    return (
      <div className="ListItem">
        <div className="ListItemLeft">
          <div className="ListItemName">{order.order.pharmacyName}</div>
          <div className="ListItemDescription">
            <ul>{order.orderLines.map(this.renderOrderLine)}</ul>
          </div>
        </div>
        <div className="ListItemRight">
          <span className="rating">
            <input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1" value="5" onChange={this.props.onRateChanged} />
            <label htmlFor="rating-input-1-5" className="rating-star"></label>
            <input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" value="4" onChange={this.props.onRateChanged} />
            <label htmlFor="rating-input-1-4" className="rating-star"></label>
            <input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" value="3" onChange={this.props.onRateChanged} />
            <label htmlFor="rating-input-1-3" className="rating-star"></label>
            <input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" value="2" onChange={this.props.onRateChanged} />
            <label htmlFor="rating-input-1-2" className="rating-star"></label>
            <input type="radio" className="rating-input" id="rating-input-1-1" name="rating-input-1" value="1" onChange={this.props.onRateChanged} />
            <label htmlFor="rating-input-1-1" className="rating-star"></label>
          </span>
          <div className="OrderTotal">Total: $100</div>
        </div>
      </div>
    );
  }
}
