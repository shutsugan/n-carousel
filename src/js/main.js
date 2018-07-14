'use strict';

class Carousel {
	/**
	 * @param {HTMLElement} element, the element that contains the items
	 * @param {Object} [options.slidesToScroll=1] Number of items to be slided
	 * @param {Object} [options.slidesVisible=1] Number of visible items
	 * @param {boolean} [options.loop=false] should loop in the end of the carousel.
	 */
	constructor(element, options = {}) {
		this._element = element;
		this._options = Object.assign({}, {
			slidesToScroll: 1,
			slidesVisible: 1,
			loop: false
		}, options);

		this._container = this._createDivWithClass('carousel__container');
		
		const children = Array.from(this._element.children);

		this._current_item = 0;
		this._move_callbacks = [];
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

		this._setStyle();
		this._createNavigation();

		this._move_callbacks.forEach(callback => callback(0));
		this._onRisize();

		window.addEventListener('resize', event => this._onRisize());
		this._root.addEventListener('keyup', event => {
			if (event.key === 'ArrowRight' || event.key === 'Right') this._next();
			else if (event.key === 'ArrowLeft' || event.key === 'Left') this._prev();
		});
	}

	/**
     * Apply the right dimentions 
     * to the items of the carousel.
	 */
	_setStyle() {
		const ratio = this._items.length / this.slidesVisible;
		this._container.style.width = (ratio * 100) + '%';

		this._items.forEach(item => item.style.width = ((100 / this.slidesVisible) / ratio) + "%");
	}


	_createNavigation() {
		const next_button = this._createDivWithClass('carousel__next');
		const prev_button = this._createDivWithClass('carousel__prev');

		this._root.appendChild(next_button);
		this._root.appendChild(prev_button);

		next_button.addEventListener('click', event => this._next());
		prev_button.addEventListener('click', event => this._prev());

		if (this._options.loop === true) return;

		this._onMove(index => {
			if (index === 0) prev_button.classList.add('carousel__prev--hidden');
			else prev_button.classList.remove('carousel__prev--hidden');

			if (this._items[this._current_item + this.slidesVisible] === undefined) {
				next_button.classList.add('carousel__next--hidden');
			} else {
				next_button.classList.remove('carousel__next--hidden');
			}
		});
	}

	_next() {
		this._gotoItem(this._current_item + this.slidesToScroll);
	}

	_prev() {
		this._gotoItem(this._current_item - this.slidesToScroll);
	}

	/**
     * slide the carousel to the targeted item.
     * @param {number} index
	 */
	_gotoItem(index) {
		if (index < 0) {
			if (!this._options.loop) return;
			index = this._items.length - this.slidesVisible;
		} else if (index >= this._items.length || this._items[this._current_item + this.slidesVisible] === undefined && index > this._current_item)  {
			if (!this._options.loop) return;

			index = 0;
		}

		const translateX = index * -100 / this._items.length;
		this._container.style.transform = `translate3d(${translateX}%, 0, 0)`;
		this._current_item = index;

		this._move_callbacks.forEach(callback => callback(index));
	}

	/**
     * store callbacks to use later.
     * @param {callback} callbck
	 */
	_onMove(callback)  {
		this._move_callbacks.push(callback);
	}

	/**
     * called when risize the window.
	 */
	_onRisize() {
		const mobile = window.innerWidth < 800;
		if (mobile !== this._is_mobile) {
			this._is_mobile = mobile;
			this._setStyle();
			this._move_callbacks.forEach(callback => callback(this._current_item));
		}
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

const container = document.querySelector('.slider');
const options = {
	slidesToScroll: 1,
	slidesVisible: 3,
	loop: false
};

new Carousel(container, options);