import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Card from './components/Card';
import images from './images.json';

// To Do:
// Render different images✅
// Each images should listen for click events
// Keep track of users score
// Score +1 if the user clicks an image that hasn't been clicked before
// Score reset to 0 if user clicks an image more than once
// Game restarts if score is reset to 0
// When an image is clicked - images shuffle themselves in random order
// *********
// Add more images to list✅
// map() through images✅
// set state for cards - clicked✅
// Deploy to gihub pages
// change style on image cards
// fix favicon error - delete or make my own

class App extends Component {
  // set this.state.images to the images json array
  state = {
    images,
    score: 0,
    highscore: 0,
    clickedImages: [],
    message: 'Click an image to begin'
  };

  // shuffleImages 

  // handleClick - handles when an image is clicked
  handleClick = id => {};

  // handleIncrement
  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
  };

  // handleReset - reset the game if user clicks and image twice
  handleReset = () => {
    this.setState({});
  };

  // map over this.state.images and render an image card for each image in the array

  render() {
    return (
      <div className="container">
        <Header
          score={this.state.score}
          highscore={this.state.highscore}
          message={this.state.message}
        ></Header>
        <Wrapper>
          {this.state.images.map(card => (
            <Card 
            id={card.id} 
            key={card.id} 
            image={card.image}
            handleIncrement={this.handleIncrement}
            handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
