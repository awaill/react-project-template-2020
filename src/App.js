import React from 'react';
import PrimaryText from './PrimaryText.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './css/style.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="primary-container">
        <PrimaryText
          heading="Heading"
          subHeading="Subheading"
          content="Lorem ipsum dolor sit amt, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proient, sunt in culpa qui officia  deserunt mollit anim id est laborum."
        />
      </div>
      <Footer/>
    </div>
  ) 
}

export default App;
