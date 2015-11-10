import React, { Component } from 'react';

export default class OrderItem extends Component {
  static propTypes = {
    order: React.PropTypes.shape({
      name: React.PropTypes.string,
    }).isRequired,
  };

  render() {
    return(
		<div className="ListItem">
			<img className="ListItemImage" src={order.pharmacy.imageUrl}></img>
			<div className="ListItemName">
				<div className="ListItemName">{order.pharmacy.name}</div>
				<ul>
					<li>Xanax x2</li>
					<li>Other x3</li>
					<li>Other x2</li>
				</ul>
			</div>
			<div className="ListItemSubcontainer">
				<span className="rating">
					<input type="radio" className="rating-input" id="rating-input-1-5" name="rating-input-1" />
					<label htmlFor="rating-input-1-5" className="rating-star"></label>
					<input type="radio" className="rating-input" id="rating-input-1-4" name="rating-input-1" />
					<label htmlFor="rating-input-1-4" className="rating-star"></label>
					<input type="radio" className="rating-input" id="rating-input-1-3" name="rating-input-1" />
					<label htmlFor="rating-input-1-3" className="rating-star"></label>
					<input type="radio" className="rating-input" id="rating-input-1-2" name="rating-input-1" />
					<label htmlFor="rating-input-1-2" className="rating-star"></label>
					<input type="radio" className="rating-input"  id="rating-input-1-1" name="rating-input-1" />
					<label htmlFor="rating-input-1-1" className="rating-star"></label>
				</span>
				<div className="TotalOrder">Total: $100</div>
			</div>
		</div>
    );
  }
}
