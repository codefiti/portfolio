// NavigationBar.jsx
import React from 'react';
import {Link} from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <Link to="/" className="sitename">Home</Link>
      <Link to="/services" className="menu">Services</Link>
      <Link to="/pricing" className="menu">Pricing</Link>
      <Link to="/about" className="menu">About us</Link>
      <svg className="material-icons" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M19 9H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1zM5 15h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1z"/>
      </svg>
    </nav>
  );
}

export default NavigationBar;
