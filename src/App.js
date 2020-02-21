import React from "react";
import Wrapper from "./components/Wrapper";
import ScoreNav from "./components/ScoreNav";
import Card from "./components/Card";
import images from "./images.json";


// To Do:
// Render different images
// Each images should listen for click events
// Keep track of users score
// Score +1 if the user clicks an image that hasn't been clicked before
// Score reset to 0 if user clicks an image more than once
// Game restarts if score is reset to 0
// When an image is clicked - images shuffle themselves in random order
// *********
// Add more images to list
// map() through images
// Deploy to gihub pages

function App() {
  return (
    <Wrapper>
      <ScoreNav>Score</ScoreNav>
      <Card
        name={images[0].name}
        image={images[0].image}
        occupation={images[0].occupation}
        location={images[0].location}
      />
      <Card
        name={images[1].name}
        image={images[1].image}
        occupation={images[1].occupation}
        location={images[1].location}
      />
      <Card
        name={images[2].name}
        image={images[2].image}
        occupation={images[2].occupation}
        location={images[2].location}
      />
    </Wrapper>
  );
}

export default App;
