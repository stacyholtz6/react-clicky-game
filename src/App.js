import React from "react";
import Wrapper from "./components/Wrapper";
import ScoreNav from "./components/ScoreNav";
import Card from "./components/Card";
import friends from "./friends.json";


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
        name={friends[0].name}
        image={friends[0].image}
        occupation={friends[0].occupation}
        location={friends[0].location}
      />
      <Card
        name={friends[1].name}
        image={friends[1].image}
        occupation={friends[1].occupation}
        location={friends[1].location}
      />
      <Card
        name={friends[2].name}
        image={friends[2].image}
        occupation={friends[2].occupation}
        location={friends[2].location}
      />
    </Wrapper>
  );
}

export default App;
