import React from 'react';
import './Display.css';

function CalculatorDisplay(props) {
  return (
    <div className="Display">
      <div className="Display__result">{props.display}</div>
    </div>
  );
}
export default CalculatorDisplay;
