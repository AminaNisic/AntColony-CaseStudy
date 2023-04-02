import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/" className="navbar-link">Homepage</a>
        </div>
        <div className="navbar-menu">
        </div>
      </div>
    </nav>
  );
}

export default Navbar;