import React, {Component} from 'react';
import Item from './Item';

import '../css/Item.css';

class Slider extends Component {
	render() {
		const items = this.props.items.map((item, index) => {
			return <Item key={index} item={item} />
		});

		return(
			<div className="Slider">{items}</div>
		);
	}
}

export default Slider;