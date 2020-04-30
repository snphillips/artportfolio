import React from 'react';
import './App.css';
import './index.css';



function Header() {
  return (
    <div>

      <h1 className="header">
        <a href="#gallery">
          Sarah<br/>
          Nicole<br/>
          Phillips<br/>
        </a>
      </h1>

      <p className="tagline">Toronto-born, Brooklyn-based visual artist. Works on paper & other stuff.</p>
    </div>
  );
}

export default Header;
