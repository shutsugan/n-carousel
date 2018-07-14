import React, {Component} from 'react';

import '../css/Item.css';

class Item extends Component {
	render() {
		const {image, title, description} = this.props.item;

		return(
			<div className="Item">
				<div className="Item__image">
					<img src={image} alt={title} />
				</div>
				<div className="Item__body">
					<div className="Item__title">{title}</div>
					<div className="Item__description">{description}</div>
				</div>
			</div>
		);
	}
}

export default Item;