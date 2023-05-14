import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item search-form">
          <input type="text" placeholder="Search" />
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={handleLoginClick}>
            LOGIN
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;