'use strict';

class Carousel {
	/**
	 * @param {HTMLElement} element, the element that contains the items
	 * @param {Object} [options.slidesToScroll=1] Number of items to be slided
	 * @param {Object} [options.slidesVisible=1] Number of visible items	 
	 */
	constructor(element, options = {}) {
		this._element = element;
		this._options = Object.assign({}, {
			slidesToScroll: 1,
			slidesVisible: 1
		}, options);

		this._container = this._createDivWithClass('carousel__container');
		
		const children = Array.from(this._element.children);

		this._is_mobile = false;

		this._root = this._createDivWithClass('carousel');
		this._root.setAttribute('tabindex', '0');
		this._root.appendChild(this._container);
		
		this._element.appendChild(this._root);

		this._items = children.map(child => {
			const item = this._createDivWithClass('carousel__item');
			item.appendChild(child);
			this._container.appendChild(item);

			return item;
		});
	}

	/**
     * Create an element with a className.
	 * @param {string} className
	 * @returns {HTMLElement}
	 */
	_createDivWithClass(className) {
		const div = document.createElement('div');
		div.classList.add(className);

		return div;
	}

	/**
	 * @returns {number} step
	 */
	get slidesToScroll() {
		return this._is_mobile ? 1 : this._options.slidesToScroll;
	}

	/**
	 * @returns {number} step
	 */
	get slidesVisible() {
		return this._is_mobile ? 1 : this._options.slidesVisible;
	}
}