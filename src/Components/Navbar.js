import React from 'react';
import './../App.css'
import { Link, Route } from 'react-router-dom';

function NavBar() {
  return (
    <div>
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/product">Products</Link>
      <div id="indicator"></div>
      </nav>
    </div>
  );
}

export default NavBar;
