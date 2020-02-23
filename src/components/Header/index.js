import React from 'react';
import './style.css';

const Header = props => (
  <div className="header navbar navbar-dark bg-primary">
    <div className="scores">
      <h3>Score: {props.score}</h3>
      <h3>Highscore: {props.highscore}</h3>
      <h3>{props.message}</h3>
      <h3>{props.restartMessage}</h3>
    </div>
  </div>
);

export default Header;
