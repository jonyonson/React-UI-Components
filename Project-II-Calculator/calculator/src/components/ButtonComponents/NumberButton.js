import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <div onClick={() => props.handleNumClick()} className={`NumberButton ${props.className}`}>
      {props.number}
    </div>
  );
};

export default NumberButton;
