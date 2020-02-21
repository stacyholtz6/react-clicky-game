import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import ScoreNav from './components/ScoreNav';
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

class App extends Component {
  // set this.state.images to the images json array
  state = {
    images
  };

  // map over this.state.images and render an image card for each image in the array

  render() {
    return (
      <Wrapper>
        <ScoreNav>Score</ScoreNav>
        {this.state.images.map(image => (
          <Card 
          id={image.id} 
          key={image.id} 
          image={image.image} />
        ))}
      </Wrapper>
    );
  }
}


export default App;
