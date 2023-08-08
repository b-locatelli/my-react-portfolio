
import React from 'react';
import { Outlet, Link} from 'react-router-dom'
import './header.css'; 

const Header = () => {
  return (
    <header className="header">
      <div className="name">Locatelli</div>
      <div className="nav">
        <nav>
          <Link to="/">About me</Link>
          <Link to="/portoflio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/Resume">Resume</Link>
        </nav>
      </div>
      <Outlet />
    </header>
  );
};

export default Header;