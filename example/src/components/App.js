import React, { Component } from 'react';
import Slider from './Slider';
import Carousel from '../build/js/min';

import '../css/App.css';
import '../build/css/main.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this._loadItems();
  }

  componentDidUpdate() {
    this._initCarousel();
  }

  _initCarousel() {
    const container = document.querySelector('.Slider');
    const options = {
      slidesToScroll: 1,
      slidesVisible: 3,
      loop: false
    };

    new Carousel(container, options);
  }

  _loadItems() {
    const items = [
      {
        image: "../images/1.jpg",
        title: "First item's title",
        description: "Here write a small description for the item."
      },
      {
        image: "../images/2.jpg",
        title: "Second item's title",
        description: "Here write a small description for the item."
      },
      {
        image: "../images/3.jpg",
        title: "Third item's title",
        description: "Here write a small description for the item."
      },
      {
        image: "../images/4.jpg",
        title: "Fourth item's title",
        description: "Here write a small description for the item."
      },
      {
        image: "../images/5.jpg",
        title: "fifth item's title",
        description: "Here write a small description for the item."
      },
      {
        image: "../images/6.jpg",
        title: "sixth item's title",
        description: "Here write a small description for the item."
      }
    ];

    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App__title">N-Carousel</div>
        <Slider items={this.state.items} />
      </div>
    );
  }
}

export default App;
