import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div onClick={() => props.handleAction()} className="ActionButton">
      {props.children}
    </div>
  );
};

export default ActionButton;
