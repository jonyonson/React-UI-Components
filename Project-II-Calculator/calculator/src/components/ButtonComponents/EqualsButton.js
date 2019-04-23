import React from 'react';
import './Button.css';

const EqualsButton = props => {
  return (
    <div onClick={() => props.handleEquals()} className="ActionButton">
      {props.children}
    </div>
  );
};

export default EqualsButton;
