import React from 'react';
import './Button.css';

// function NumberButton(props) {
// return <div className={props.number === 0 ? 'ZeroButton' : 'NumberButton'}>{props.number}</div>;
// }

const NumberButton = props => {
  return (
    <div onClick={() => props.changeDisplay()} className={`NumberButton ${props.className}`}>
      {props.number}
    </div>
  );
};

export default NumberButton;
