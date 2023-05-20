import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const history = useHistory();

  const handleLoginClick = () => {
    history.push('/login');
  };

  const handlePipelineClick = () => {
    history.push('/testcrud.js');
  }

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

        
        <li className="nav-item">
          <Link to="/testcrud" className="nav-link">
            newpajplajn
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/projectslist" className="nav-link">
            projects list
          </Link>
        </li>

        
      </ul>
    </nav>
  );
}

export default Navbar;