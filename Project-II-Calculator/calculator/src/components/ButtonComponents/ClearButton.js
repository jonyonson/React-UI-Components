import React from 'react';
import './Button.css';

const ClearButton = props => {
  return (
    <div onClick={() => props.handleClear()} className="ClearButton">
      clear
    </div>
  );
};

export default ClearButton;
