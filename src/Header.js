import React from 'react';
import Nav from './Nav.js';
import './css/style.css';

function Header(props) {
  return (
    <header>
      <div className="primary-container">
        <Nav/>
      </div>
    </header>
  )
}

export default Header;
