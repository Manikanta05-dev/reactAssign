import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <div className="navbar-logo">
      <NavLink to="/" className="logo">SportsStore</NavLink>
    </div>
    <div className="navbar-links">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart{cartCount > 0 && <span>({cartCount})</span>}</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  </nav>
);

export default Navbar; 