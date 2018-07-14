# n-carousel
easy to intergrate and lightweight carousel.

## Running Locally

### Installing Node.js modules

Once you have Node and npm installed and this repository downloaded, you'll need
to install the application's dependencies. Do this with:

    npm install

to build for production run:

    npm run build

##### how to use:
Create a simple HTML layouts inside ```<body>``` tag, Example:

```html
<div class="slider">
	<div class="item">
		<div class="item__image">
			<img src="images/1.jpg" />
		</div>
		<div class="item__body">
			<div class="item__title">The item title</div>
			<div class="item__description">
				Here write a small description for the item!
			</div>
		</div>
	</div>
	.
	.
	.
</div>
```

After copying The build foulder to your project,
In a new js file add ```import Carousel from ./build/js/min.js``` to import the class then:

```js
const container = document.querySelector('.slider');
const options = {
	slidesToScroll: 1,
	slidesVisible: 3,
	loop: false
};

new Carousel(container, options);
```

### Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
slidesToScroll | number | 1 | Number of items to slide when clicking the next or prev buttons.
slidesVisible | number | 3 | Number of items to show at a time.
loop | boolean | false | Enables the ability to start over the carousel from either sides.

### App screenshot

![n-carousel screenshot](https://github.com/shutsugan/n-carousel/blob/master/example.png)

### Front-end

created using reactjs and ES6

## License

MIT