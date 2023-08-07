
import React from 'react';
import './header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="name">Locatelli</div>
      <div className="nav">
        <nav>
          <a href="#">About me</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
          <a href="#">Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;