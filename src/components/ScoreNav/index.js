import React from 'react';
import './style.css';

function ScoreNav(props) {
  return <h1 className="score">{props.children}</h1>;
}

export default ScoreNav;
