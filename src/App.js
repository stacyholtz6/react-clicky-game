import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Card from './components/Card';
import images from './images.json';

// To Do:

// Keep track of users score You Win
// Score +1 if the user clicks an image that hasn't been clicked before
// Score reset to 0 if user clicks an image more than once
// Game restarts if score is reset to 0
// Deploy to gihub pages
// change style on image cards so they are in two lines
// fix favicon error - delete or make my own

// shuffleFunction - Fisher Yates Algorithm
function shuffleFunction(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  // set this.state.images to the images json array
  state = {
    images,
    score: 0,
    highscore: 0,
    clickedImages: [],
    message: 'Click an image to begin'
    // restartMessage: ''
  };

  // shuffleImages
  shuffleCards = () => {
    let shuffledImages = shuffleFunction(images);
    this.setState({ images: shuffledImages });
  };

  // handleClick - handles when an image is clicked
  // handleClick = id => {
  //   if (this.state.clickedImages.indexOf(id) === -1) {
  //     this.handleIncrement();

  //     this.setState({ clickedImages: this.state.clickedImages.concat(id) });
  //   } else {
  //     this.handleReset();
  //   }
  // };


  handleClick = id => {
    console.log(id);
    console.log(this.state.clickedImages)
    if (this.state.clickedImages.indexOf(id) === -1) {
      this.handleIncrement();
      var newClickedImages = this.state.clickedImages;
      newClickedImages.push(id);
      this.setState({ clickeImages: [...this.state.clickedImages, id] });
    } else {
      this.handleReset();
    }
  };

  
  // handleIncrement
  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({ score: newScore, message: '' });

    // if the score is 12 do this - Need it to stop at 12
    newScore === 12
      ? this.setState({
          message: 'Congratulations, You Win!!',
          highscore: newScore
        })
      : newScore >= this.state.highscore
      ? this.setState({ highscore: newScore })
      : this.shuffleCards();

    this.shuffleCards();
    // this.setState({ restarMessage: '' });
  };

  // handleReset - reset the game if user clicks and image twice
  handleReset = () => {
    console.log('clickedImages', this.state.clickedImages);
    this.setState({
      score: 0,
      highscore: this.state.highscore,
      message: 'You clicked an Image Twice! Game Over!!!!!',
      // restartMessage: 'Click an image to begin',
      clickedImages: []
    });
    this.shuffleCards();
    // this.setState({ restarMessage: '' });
  };

  // map over this.state.images and render an image card for each image in the array

  render() {
    return (
      <div>
        <Header
          score={this.state.score}
          highscore={this.state.highscore}
          message={this.state.message}
          // restartMessage={this.state.restartMessage}
        ></Header>
        <Wrapper>
          {this.state.images.map(card => (
            <Card
              id={card.id}
              key={card.id}
              image={card.image}
              // handleIncrement={this.handleIncrement}
              handleClick={this.handleClick}
              // handleReset={this.handleReset}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
