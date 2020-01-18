import React from 'react';
import './css/style.css';

function PrimaryText(props) {
  return (
    <div className="primary-text">
      <h1><b>{props.heading}</b></h1>
      <h2><b>{props.subHeading}</b></h2>
      <p>{props.content}</p>
    </div>
  )
}

export default PrimaryText;
